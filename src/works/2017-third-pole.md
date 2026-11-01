---
title: "Third Pole Geolab"
source: "https://hermesite.net/third-pole/"
published: "2017-10-01T12:05:45"
year: 2017
---

<header class="p-6">

2017 | client: [One Big Robot](http://www.onebigrobot.com/)
# Third Pole Geolab
### Style and code web-template for custom interactive maps loading dynamic data

</header>


<div class="p-6 bg-1">

```js
import {stack} from "../components/stack.js";
display(stack({
  disciplines: ["frontend", "gis"],
}));
```
---

*I collaborated in this project creating and integrating a consistent, multipurpose template that could represent the particularities of the different areas of interest.*

**The main challenges were:**
- Integrate the GIS layers into the web environment and synchronise them with the scroll interaction.
- Structure and prepare the web components to accommodate data from different countries.


```js
display(stack({
  tools: ["html", "css", "javascript", "d3", "leaflet", "git"], // TODO: review
}));
```

</div>

<div class="px-6 pt-6">

[Visit the project](http://www.thirdpolegeolab.org)

</div>

<div class="p-6 bg-2">

```js
import {gallery} from "../components/gallery.js";

display(gallery([
  {src: "https://hermesite.net/wp-content/uploads/2017/10/Screen-Shot-2017-10-31-at-16.07.55.png", caption: "Integrate markup, styles and animated maps based on scroll interaction"},
  {src: "https://hermesite.net/wp-content/uploads/2017/10/Screen-Shot-2017-10-31-at-16.08.38.png", caption: "D3 interactive choropleth with slider interaction"},
  {src: "https://hermesite.net/wp-content/uploads/2017/10/Screen-Shot-2017-10-31-at-16.08.17.png", caption: "Project images and shapes on leaflet.js projection"}
]));
```

</div>

<div class="p-6">



</div>