---
title: "Pangea Low Cost"
source: "https://hermesite.net/pangea/"
published: "2013-05-01T17:37:58"
year: 2013
---

<header class="p-6">

2013 | [Personal project](https://hermesite.net)
# Pangea Low Cost
### Visualizing continent shape changes on a map when applying a ratio between distance and price in low cost flights

*When I started studying and practising with d3.js, I used the idea of building a geographical map based on the price of air flights as a reference project. This idea had been on my mind for years. This was also a time when low-cost companies had revolutionised the market and super-cheap flights had started to surprise us all.*

</header>


<div class="p-6 bg-1">

<!-- Reference to [Isochrone map](https://en.wikipedia.org/wiki/Isochrone_map) in wikipedia -->

### My roles

```js
import {stack} from "../components/stack.js";
display(stack({
  disciplines: ["dataviz", "frontend", "design"],
}));
```
---
**Main aspect:**
- Define the concept of a map distorted by flight price instead of distance.
- Explore and integrate flight data from kayak.com into the map projection.


```js
display(stack({
  tools: ["html", "css", "javascript", "d3"], // TODO: review (PHP backend?)
}));
```

</div>

<div class="p-6 pb-0">

[Visit the project](http://wip.hermesite.net/pangea/pangea-jitter.php?BCN?010713)

</div>

<div class="p-6 bg-2">

```js
import {gallery} from "../components/gallery.js";

display(gallery([
  {src: "https://hermesite.net/wp-content/uploads/2007/05/Screen-Shot-2017-11-15-at-13.20.11.png", caption: "Map centered on a predefined airport showing all the available destinations based on data from kayak.com"},
  {src: "https://hermesite.net/wp-content/uploads/2007/05/Screen-Shot-2017-11-15-at-13.28.30.png", caption: "A new origin can be selected from a dropbox"},
  {src: "https://hermesite.net/wp-content/uploads/2007/05/Screen-Shot-2017-11-15-at-13.30.00.png", caption: "The map reacts changing its center to the new origin airport"},
  {src: "https://hermesite.net/wp-content/uploads/2007/05/Screen-Shot-2017-11-15-at-13.38.53.png", caption: "Date can also be selected, retrieving data for the flights available that day"},
  {src: "https://hermesite.net/wp-content/uploads/2007/05/Screen-Shot-2017-11-15-at-14.01.50.png", caption: "Selecting any destination from the map changes the shape, overlapping and masking projections. Here the destination goes closer to the origin"},
  {src: "https://hermesite.net/wp-content/uploads/2007/05/Screen-Shot-2017-11-15-at-14.10.31.png", caption: "In this case the destination moves away from the origin"}
]));
```

</div>

<div class="p-6">

### Last but not least

#### Explore other pangea maps

##### Pangea Atlantis

[![Pangea Atlantis](https://hermesite.net/wp-content/uploads/2013/05/atlantis.png)](http://wip.hermesite.net/pangea/atlantis.html)

##### Pangea Mercator

[![Pangea Mercator](https://hermesite.net/wp-content/uploads/2013/05/mercator.png)](http://wip.hermesite.net/pangea/mercator.html)

##### Pangea Delaunay

[![Pangea Delaunay](https://hermesite.net/wp-content/uploads/2013/05/delaunay-map.png)](http://wip.hermesite.net/pangea/delaunay-map.html)

</div>