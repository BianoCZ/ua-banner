const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
	require('dotenv').config();
	require('dotenv').config({override: true, path: `./.env.${env.locale}`});

	return {
		mode: 'production',
		entry: './index.js',
		output: {
			filename: `${process.env.LOCALE}.${process.env.VERISON}.min.js`,
			path: path.resolve(__dirname, 'docs/dist'),
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.css$/i,
					type: 'asset/source',
				},
			],
		},
		plugins: [
			new Dotenv({
				systemvars: true,
				expand: true,
			}),
		],
	};
};

