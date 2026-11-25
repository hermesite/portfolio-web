---
title: "Hermes Carretero - Personal site"
---

<div class="workspace">

<section class="workspace-pane workspace-about bg-inverse fg-white">

<header>

# Hermes Carretero


I am a software designer and developer specialized in data-based interfaces and interaction and data visualization techniques.

I'm currently involved in the creation of a data products studio creation named [Dataglow Studio](https://dataglow.studio)

</header>

```js
import {stack} from "/components/stack.js";
display(stack({
  social: ["linkedin", "github"],
}));
```


```js
const {html: footerHtml} = await FileAttachment("data/footer.json").json();
display(Object.assign(document.createElement("footer"), {className: "workspace-about-footer mt-4 small", innerHTML: footerHtml}));
```

</section>

<nav class="workspace-pane workspace-menu theme-primary bg-inverse bg-opacity-70" aria-label="Works">

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