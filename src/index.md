---
title: "Hermes Carretero - Personal site"
---

<div class="workspace">

<section class="workspace-pane workspace-about bg-primary fg-white">

<header>

# Hermes Carretero
### Professional Portfolio
```js
import {stack} from "/components/stack.js";
display(stack({
  disciplines: ["dataviz", "ux", "ui", "frontend", "design", "aidev", "gis"],
}));
```
I am an internet and digital professional based in Barcelona. I started building websites over 20 years ago. Since 2010, I have specialized in data visualization and heavily data-based interfaces and applications.

</header>

```js
display(stack({
  social: ["linkedin", "github"],
}));
```


```js
const {html: footerHtml} = await FileAttachment("data/footer.json").json();
display(Object.assign(document.createElement("footer"), {className: "workspace-about-footer mt-4 small", innerHTML: footerHtml}));
```

</section>

<nav class="workspace-pane workspace-menu theme-primary" aria-label="Works">

```js
import {pages} from "./components/pages.js";
import {workspaceMenu} from "./components/workspace.js";

display(workspaceMenu(pages));
```

</nav>

<section class="workspace-pane workspace-stage" aria-label="Content">

```js
import {workspaceStage} from "./components/workspace.js";

display(workspaceStage());
```

</section>

</div>

<style>
  header p {
    margin-top: 2rem;  
    font-size: 1.5rem;
  }

  header .stack-group {
    margin-top: 1rem;
  }
</style>