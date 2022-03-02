---
layout: default
permalink: /
---

## How to implement

This is a simple banner you can place on your website. This banner will guide your visitors to information about how to reliably and effectively help Ukraine and its people.

Simply link a single minified JavaScript file like this example:

```html
<script src="{% for asset in site.github.latest_release.assets limit:1 %}{{ site.github.url }}/dist/{{ asset.name }}{% endfor %}"></script>
```

You can choose the latest version in different languages below. 

Without any further configuration it will display the banner pointing your visitors to the predefined location depending on the language version:

* CZ: [https://www.stojimezaukrajinou.cz/](https://www.stojimezaukrajinou.cz/)
* SK: [https://ktopomozeukrajine.sk/](https://ktopomozeukrajine.sk/)
* PT: [https://www.cruzvermelha.pt/not%C3%ADcias/item/7837-crise-na-ucr%C3%A2nia-apelo-humanit%C3%A1rio.html](https://www.cruzvermelha.pt/not%C3%ADcias/item/7837-crise-na-ucr%C3%A2nia-apelo-humanit%C3%A1rio.html)

## Releases

We recommend you use the latest released version for your language: 

{% for release in site.github.releases limit:1 %}

### {{ release.tag_name }}

Released language versions:

{% for asset in release.assets %}
* [{{ asset.name | slice: 0,2 | upcase }}]({{ site.github.url }}/dist/{{ asset.name }})
{% endfor %}

{% endfor %}

### Previous releases

{% for release in site.github.releases offset:1 %}

#### {{ release.tag_name }}

Released language versions:

{% for asset in release.assets %}
* [{{ asset.name | slice: 0,2 | upcase }}]({{ site.github.url }}/dist/{{ asset.name }})
  {% endfor %}

{% endfor %}

# Слава Україні!
