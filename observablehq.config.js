// See https://observablehq.com/framework/config for documentation.


import {buildInfo, footer, versionLink} from "./footer.js";

// Bootstrap navbar built from `pages`; sections become menus, the toggler opens a drawer on small screens.
function navbar() {
  return `<nav id="main-navbar" class="navbar md:navbar-expand border" aria-label="Main">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Hermes Carretero</a>
    ${versionLink(buildInfo(), "ms-auto small text-body-secondary")}
  </div>
</nav>`;
}

const config = {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Hermes Carretero",


  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32"><script>if (self !== top) document.documentElement.classList.add("embedded");</script><script type="module" src="/shell.js"></script>',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  style: "style.css", // replaces `theme`; Observable's default styles are not loaded, see style.css
  header: "", // set below from `pages`
  footer: footer(), // common footer: version, year and client copyright disclaimer (HTML)
  sidebar: false, // replaced by the Bootstrap navbar in the header
  toc: false, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  search: false, // activate search
  // linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotesº and other typographic improvements
  // theme: "air", // try "light", "dark", "slate", etc.
  disciplines: true, // whether to show the disciplines section in the stack component
  // preserveIndex: false, // drop /index from URLs
};

config.header = navbar();

export default config;
