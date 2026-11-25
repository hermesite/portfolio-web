---
title: "Hermes Carretero - Personal site"
---

<div class="workspace">

<section class="workspace-pane workspace-about bg-inverse fg-white">

<header class="md:text-end">

# Hermes Carretero


Hello, I am a **designer & developer** specialising in data visualisation, with extensive experience in producing complex interfaces and data-based products.

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

<nav class="workspace-pane workspace-menu theme-primary bg-black bg-opacity-80" aria-label="Works">


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