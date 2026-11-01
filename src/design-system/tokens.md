---
title: Design system - Tokens
toc: true
---

<nav class="d-flex flex-wrap gap-5 mb-7" aria-label="Design system">
  <a href="./">Overview</a>
  <a href="./tokens" aria-current="page">Tokens</a>
  <a href="./components">Components</a>
</nav>

# Tokens and layout

The swatches and values below come from the loaded design-system stylesheet. Change a token and refresh the page to see the result.

```js
import {colorSwatches, typefaceSamples, tokenTable} from "./examples.js";
```

## Colors

### Interface

```js
display(colorSwatches([
  ["Primary", "--color-primary"],
  ["Secondary", "--color-secondary"],
  ["Success", "--color-success"],
  ["Danger", "--color-danger"],
  ["Warning", "--color-warning"],
  ["Info", "--color-info"],
  ["Text", "--color-text"],
  ["Muted text", "--color-text-muted"],
  ["Background", "--color-background"],
  ["Surface", "--color-surface"],
  ["Border", "--color-border"],
]));
```

The background swatch has a border so it remains visible when the token is transparent.

```css
.example {
  color: var(--color-text);
  background: var(--color-surface);
}
```

### Bootstrap mapping

The primary, secondary, success, danger, warning and info tokens feed Bootstrap's theme colors, so themed components (buttons, badges, alerts, form controls, links, focus rings) follow them. These swatches show the raw tokens beside the resulting Bootstrap values.

```js
display(colorSwatches([
  ["Primary token", "--color-primary"],
  ["Bootstrap primary", "--bs-primary-bg"],
  ["Secondary token", "--color-secondary"],
  ["Bootstrap secondary", "--bs-secondary-bg"],
  ["Success token", "--color-success"],
  ["Bootstrap success", "--bs-success-bg"],
  ["Danger token", "--color-danger"],
  ["Bootstrap danger", "--bs-danger-bg"],
  ["Warning token", "--color-warning"],
  ["Bootstrap warning", "--bs-warning-bg"],
  ["Info token", "--color-info"],
  ["Bootstrap info", "--bs-info-bg"],
]));
```

### Process phases

```js
display(colorSwatches([
  ["Explore", "--color-phase-explore"],
  ["Define", "--color-phase-define"],
  ["Design", "--color-phase-design"],
  ["Integrate", "--color-phase-integrate"],
  ["Deliver", "--color-phase-deliver"],
]));
```

## Typography

These specimens use the named variables directly. The body token feeds Bootstrap's body face, shown as well.

```js
display(typefaceSamples([
  ["Heading", "--font-family-heading"],
  ["Condensed headings", "--font-family-condensed"],
  ["Body token", "--font-family-sans"],
  ["Bootstrap body", "--bs-body-font-family"],
  ["Code", "--font-family-mono"],
  ["Data visualization", "--font-family-viz"],
]));
```

```js
display(tokenTable([
  ["--font-size-base", "Body text size"],
  ["--font-weight-normal", "Body text weight"],
  ["--font-weight-bold", "Default Bootstrap heading weight"],
  ["--line-height-base", "Body line height"],
  ["--line-height-heading", "Heading line height"],
]));
```

## Spacing and shape

```js
display(tokenTable([
  ["--space-unit", "Mapped to Bootstrap's --bs-spacer"],
  ["--radius-base", "Mapped to Bootstrap's --bs-radius-5"],
  ["--container-padding-x", "Available horizontal container padding"],
]));
```

Bootstrap's numbered spacing utilities have their own predefined scale, so changing `--space-unit` alone does not rescale `p-*` or `gap-*`. The examples below use `p-3`, `p-5`, and `p-7`; the rounded example uses `--radius-base` directly.

<div class="d-flex flex-wrap align-items-end gap-5 my-5">
  <div class="bg-1 border p-3"><code>p-3</code></div>
  <div class="bg-1 border p-5"><code>p-5</code></div>
  <div class="bg-1 border p-7"><code>p-7</code></div>
  <div class="bg-1 border p-5" style="border-radius: var(--radius-base)"><code>--radius-base</code></div>
</div>

## Responsive layout

The grid below is one column on small screens, two from `md`, and three from `lg`. Bootstrap 6 puts the breakpoint before the utility, for example `md:col-6`.

<div class="row g-4 my-5">
  <div class="col-12 md:col-6 lg:col-4"><div class="bg-1 border p-5">01</div></div>
  <div class="col-12 md:col-6 lg:col-4"><div class="bg-1 border p-5">02</div></div>
  <div class="col-12 md:col-6 lg:col-4"><div class="bg-1 border p-5">03</div></div>
</div>

```html run=false
<div class="row">
  <div class="col-12 md:col-6 lg:col-4">...</div>
</div>
```

| Breakpoint | Minimum width |
| --- | --- |
| Base | 0 |
| `sm` | 576px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

## Utility

The custom `text-balance` utility balances the lines of a short heading.

<div class="border p-5" style="max-width: 22rem">
  <h3 class="text-balance mb-0">Make a clear idea easier to read on every screen</h3>
</div>
