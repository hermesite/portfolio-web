---
title: Design system - Components
toc: true
---

<nav class="d-flex flex-wrap gap-5 mb-7" aria-label="Design system">
  <a href="./">Overview</a>
  <a href="./tokens">Tokens</a>
  <a href="./components" aria-current="page">Components</a>
</nav>

# Components

Some everyday Bootstrap elements and the custom patterns used by this project, shown with the actual design-system styles.

## Bootstrap components

### Buttons and badges

<div class="border p-5 d-flex flex-wrap align-items-center gap-3">
  <button class="btn-solid theme-primary" type="button">Primary</button>
  <button class="btn-outline theme-secondary" type="button">Secondary</button>
  <button class="btn-solid theme-primary" type="button" disabled>Disabled</button>
  <span class="badge theme-primary">Active</span>
  <span class="badge badge-outline theme-secondary">Draft</span>
</div>

Bootstrap 6 combines a button or badge style with a `theme-*` class:

```html run=false
<button class="btn-solid theme-primary" type="button">Primary</button>
<button class="btn-outline theme-secondary" type="button">Secondary</button>
<span class="badge theme-primary">Active</span>
```

### Form controls

These controls are interactive examples only; they do not submit any data.

<div class="border p-5">
  <div class="form-field mb-5">
    <label class="form-label" for="example-email">Email address</label>
    <input class="form-control" id="example-email" type="email" placeholder="you@example.com">
  </div>
  <div class="form-field mb-5">
    <label class="form-label" for="example-role">Role</label>
    <select class="form-control" id="example-role">
      <option>Designer</option>
      <option>Developer</option>
      <option>Researcher</option>
    </select>
  </div>
  <div class="form-field">
    <input class="check" id="example-updates" type="checkbox" checked>
    <label for="example-updates">Receive project updates</label>
  </div>
</div>

```html run=false
<div class="form-field">
  <label class="form-label" for="email">Email address</label>
  <input class="form-control" id="email" type="email">
</div>
<div class="form-field">
  <input class="check" id="updates" type="checkbox">
  <label for="updates">Receive project updates</label>
</div>
```

### Feedback and cards

<div class="alert theme-secondary mb-5">A short message can provide context without interrupting the page.</div>
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Project update</h4>
    <p>A card groups related content and an optional action.</p>
    <span class="badge badge-outline theme-secondary">In progress</span>
  </div>
</div>

### Tables

Unclassed tables, including Markdown tables, receive the design system's table override.

| Item | Status |
| --- | --- |
| Research | Complete |
| Prototype | In progress |

### Dialog

The app loads Bootstrap's JavaScript for interactive elements. This example uses the instant dialog variant; open it, then close it with the button or Escape.

<button class="btn-outline theme-primary" type="button" data-bs-toggle="dialog" data-bs-target="#example-dialog">Open dialog</button>
<dialog class="dialog dialog-instant bg-1" id="example-dialog" aria-labelledby="example-dialog-title" aria-describedby="example-dialog-description">
  <div class="dialog-header">
    <h4 class="dialog-title" id="example-dialog-title">Example dialog</h4>
    <button class="btn-close" type="button" data-bs-dismiss="dialog" aria-label="Close" autofocus></button>
  </div>
  <div class="dialog-body">
    <p id="example-dialog-description">Use a dialog for a focused task or decision.</p>
  </div>
  <div class="dialog-footer">
    <button class="btn-solid theme-primary" type="button" data-bs-dismiss="dialog">Close</button>
  </div>
</dialog>

```html run=false
<button class="btn-outline theme-primary" type="button"
  data-bs-toggle="dialog" data-bs-target="#my-dialog">Open dialog</button>
<dialog class="dialog dialog-instant bg-1" id="my-dialog" aria-labelledby="my-dialog-title">
  <div class="dialog-header">
    <h3 class="dialog-title" id="my-dialog-title">Dialog title</h3>
    <button class="btn-close" type="button" data-bs-dismiss="dialog" aria-label="Close" autofocus></button>
  </div>
  <div class="dialog-body">Dialog content</div>
</dialog>
```

## Custom components

These are specific to the design system; the gallery and stack examples use the app's JavaScript helpers.

### Section

The `.section` class adds padding. Combine it with utilities such as `border` when needed.

<div class="section border">
  <h4>Grouped content</h4>
  <p class="mb-0">A padded section can bring related content together.</p>
</div>

```html run=false
<div class="section border">Grouped content</div>
```

### Process phase

Each modifier uses its corresponding phase color. The decorative banner appears from `md` upwards, and the outcomes panel keeps its content on a light surface.

<div class="d-grid gap-3">
  <div class="process-phase process-phase-explore">
    <img class="process-phase-banner" src="../images/process-explore-banner.png" alt="">
    <div class="process-phase-outcomes"><strong>Explore</strong> — Research and discovery</div>
  </div>
  <div class="process-phase process-phase-define">
    <img class="process-phase-banner" src="../images/process-define-banner.png" alt="">
    <div class="process-phase-outcomes"><strong>Define</strong> — Framing and early ideas</div>
  </div>
  <div class="process-phase process-phase-design">
    <img class="process-phase-banner" src="../images/process-design-banner.png" alt="">
    <div class="process-phase-outcomes"><strong>Design</strong> — Prototypes and testing</div>
  </div>
  <div class="process-phase process-phase-integrate">
    <img class="process-phase-banner" src="../images/process-integrate-banner.png" alt="">
    <div class="process-phase-outcomes"><strong>Integrate</strong> — Development and validation</div>
  </div>
  <div class="process-phase process-phase-deliver">
    <img class="process-phase-banner" src="../images/process-deliver-banner.png" alt="">
    <div class="process-phase-outcomes"><strong>Deliver</strong> — Launch and handover</div>
  </div>
</div>

```html run=false
<div class="process-phase process-phase-explore">
  <img class="process-phase-banner" src="banner.png" alt="">
  <div class="process-phase-outcomes">Research and discovery</div>
</div>
```

### Stack

The stack groups technologies and disciplines from the app's catalog. Icon-only items have accessible names.

```js echo
import {stack} from "../components/stack.js";
display(stack({
  tools: ["html", "css", "javascript", "bootstrap"],
  disciplines: ["ux", "ui", "dataviz"],
}));
```

### Gallery

On wider screens, use the thumbnails, arrow keys, or the adjacent slide to navigate. On small screens the images are shown as a list.

```js echo
import {gallery} from "../components/gallery.js";
display(gallery([
  {src: FileAttachment("../images/ris3mcat/portfolio-exploration.png"), alt: "RIS3-MCAT exploration screen", caption: "Explore a regional data platform."},
  {src: FileAttachment("../images/ris3mcat/portfolio-discovery.png"), alt: "RIS3-MCAT discovery screen", caption: "Discover the data."},
  {src: FileAttachment("../images/ris3mcat/portfolio-integration.png"), alt: "RIS3-MCAT integration screen", caption: "Bring the pieces together."},
]));
```

### Workspace

The workspace is the app's three-panel layout. This is the live home page in an isolated frame; on smaller screens the panels stack and can be scrolled.

<iframe src="../" title="Live workspace example" loading="lazy" style="display: block; width: 100%; height: 30rem; border: 1px solid var(--color-border)"></iframe>

[Open the workspace](../) to use it at full size.
