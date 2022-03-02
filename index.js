import css from './dist/style.min.css';

const style = document.createElement('style');
style.innerHTML = css;
document.body.insertAdjacentElement('beforeend', style);

const symbolUrl = 'https://bianocz.github.io/ua-banner/assets/lcoa.svg';

const config = window.UA_BANNER || {};

const zIndex = config.zIndex || 9000;
const title = config.title || process.env.UK_TITLE;
const link = config.link || process.env.UK_LINK;
const linkUrl = config.linkUrl || process.env.UK_LINK_URL;

const get = process.env.UK_GET;
const getUrl = process.env.UK_GET_URL;

document.body.insertAdjacentHTML(
	'beforeend',
	`<div class="ukr" style="z-index: ${zIndex}"><img class="ukr_symbol" src="${symbolUrl}" width="34px" alt="uk"><div class="ukr_flag"><div class="ukr_title">${title}</div><a class="ukr_link" href="${linkUrl}" target="_blank" rel="noopener">${link}</a></div><a class="ukr_get" href="${getUrl}" target="_blank" rel="noopener">${get}</a></div>`
);

document.body.style.paddingBottom = document.body.lastElementChild.clientHeight + 'px';
