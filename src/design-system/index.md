---
title: Design system
toc: true
---

<nav class="d-flex flex-wrap gap-5 mb-7" aria-label="Design system">
  <a href="./" aria-current="page">Overview</a>
  <a href="./tokens">Tokens</a>
  <a href="./components">Components</a>
</nav>

# Design system

A small, reusable layer on top of Bootstrap 6. These pages show the design system as it is used in this project, rather than trying to catalogue all of Bootstrap.

<div class="row g-5 my-7">
  <div class="md:col-6">
    <div class="card h-100">
      <div class="card-body">
        <h2 class="card-title h3">Tokens and layout</h2>
        <p>Explore the colors, type, spacing, and responsive building blocks behind the interface.</p>
        <a class="btn-outline theme-primary" href="./tokens">Explore tokens</a>
      </div>
    </div>
  </div>
  <div class="md:col-6">
    <div class="card h-100">
      <div class="card-body">
        <h2 class="card-title h3">Components</h2>
        <p>See common Bootstrap elements alongside the custom components used by the portfolio.</p>
        <a class="btn-outline theme-primary" href="./components">Explore components</a>
      </div>
    </div>
  </div>
</div>

## How the parts fit together

The stylesheet is loaded in this order:

1. **Bootstrap** provides the base styles, layout, and components.
2. **Tokens** define the project's colors, fonts, and sizing values.
3. **Variables** declare how those tokens map to Bootstrap's theme and layer variables.
4. **Overrides** adjust existing Bootstrap elements.
5. **Components, utilities, and breakpoints** add the project's own patterns and responsive rules.

The design system itself is CSS. These examples use the existing Observable app to load it; interactive Bootstrap components and the gallery, stack, and workspace also use the app's JavaScript.

`variables.css` is imported unlayered so its mappings beat Bootstrap's unlayered root defaults; changing a token therefore restyles every component that reads it. The [token examples](./tokens#bootstrap-mapping) show the raw tokens beside the resulting Bootstrap values.
