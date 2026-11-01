---
title: "Hermes Carretero - Personal site"
---

<div class="workspace">

<section class="workspace-pane workspace-about bg-inverse fg-white">

<header class="">

# Hermes Carretero
### Professional Web Portfolio

I am a **senior UX designer** and passionate about **data visualization** based in Barcelona with over 20 years' experience in designing and implementing digital products.

Since 2010, I have specialised in data visualisation and complex interaction design. 

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