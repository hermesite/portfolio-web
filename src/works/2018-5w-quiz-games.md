---
title: "5W Quiz games collection"
source: "https://hermesite.net/5w-quiz-games/"
published: "2018-05-15T17:26:25"
year: 2018
---


<header class="p-6">

2018 | Client: [Revista 5W](https://www.revista5w.com/)
# 5W Quiz games collection
### A collection of 5 quiz-type games based on 5W magazine content


</header>

<div class="p-6 bg-1">

### My roles

```js
import {stack} from "../components/stack.js";
display(stack({
  disciplines: ["frontend", "dataviz"],
}));
```
---
*We participated in the definition, design and integration of a collection of five quiz-type games for mobile consumption, based on the content of 5W magazine.*

**The results are oriented in three directions:** 
- Reward readers who know the content best.
- Attract traffic from campaign clicks.
- Promote and highlight the best magazine content.
  
```js
display(stack({
  tools: ["html", "css", "javascript", "svg"], // TODO: review
}));
```

</div>

<div class="p-6">

```js

import {gallery} from "../components/gallery.js";

display(gallery([
  {src: "https://hermesite.net/wp-content/uploads/2017/11/5w-map.png", caption: "EXAMPLE: Game to choose the chronicle's country on a map"},
  {src: "https://hermesite.net/wp-content/uploads/2017/11/5w-multiple-selection.png", caption: "EXAMPLE: Game for associate images to geographical areas"},
  {src: "https://hermesite.net/wp-content/uploads/2017/11/5w-radialgraph.png", caption: "Chart showing the preferences result based on choices"}
]));
```
</div>

<div class="p-6">

### Credits

- In collaboration with [Outliers](http://outliers.es/)
- [Óscar Marín Miró](https://www.linkedin.com/in/oscarmarinmiro/) - Definition, data harvest and d3 visualizations

</div>