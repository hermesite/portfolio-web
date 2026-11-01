import { html } from "npm:htl";
import { breadcrumb } from "./breadcrumb.js";
import { pages } from "./pages.js";

// Styles live in the design system (design-system/src/components/workspace.css).
const FRAME = "workspace-stage";
const HOME = { name: "Process", path: "/sections/process" };
const SMALL_SCREEN = "(max-width: 1023.98px)";
// Fired on the document when a page is picked, so the menu and the stage breadcrumb stay in sync.
const SELECT_EVENT = "workspace:select";

const url = (path) => new URL(`.${path}`, document.baseURI).href;
const select = (path) => document.dispatchEvent(new CustomEvent(SELECT_EVENT, { detail: { path } }));

// Each page has a shareable deep link to the workspace: /#<slug>, where the slug is the last segment of its path.
const slug = (path) => path.split("/").pop();
const allPages = () => [HOME, ...pages.flatMap((group) => group.pages)];
const pathFromHash = () => allPages().find((page) => slug(page.path) === decodeURIComponent(location.hash.slice(1)))?.path ?? HOME.path;
const updateHash = (path) => history.replaceState(null, "", path === HOME.path ? location.pathname + location.search : `#${slug(path)}`);

/** Breadcrumb trail (Home > Category > Page) for a path. */
function trail(path) {
  const home = { name: "Home", href: url(HOME.path), target: FRAME };
  for (const group of pages) {
    const page = group.pages.find((page) => page.path === path);
    if (page) return [home, { name: group.name }, { name: page.name }];
  }
  return [home];
}

/**
 * Menu of pages grouped by category, always expanded. Links load into the
 * stage iframe; the first entry brings back the default content.
 * @param {{name: string, pages: {name: string, path: string}[]}[]} pages
 */
export function workspaceMenu(pages) {
  const groups = [{ pages: [HOME] }, ...pages];
  const menu = html`<div class="workspace-menu-list">${groups.map(
    ({ name, pages }) => html`<section>
      ${name ? html`<h2 class="h6 fg-3 text-uppercase px-5 pt-5 mb-3">${name}</h2>` : null}
      <div class="list-group list-group-flush">${pages.map(
        (page) => html`<a class="list-group-item list-group-item-action" href=${url(page.path)} target=${FRAME} data-path=${page.path}>${page.name}</a>`
      )}</div>
    </section>`
  )}</div>`;

  const links = [...menu.querySelectorAll("a")];
  const activate = (path) => {
    for (const link of links) {
      const active = link.dataset.path === path;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
  };
  activate(pathFromHash());

  // Also covers navigation started from the breadcrumb.
  document.addEventListener(SELECT_EVENT, (event) => activate(event.detail.path));

  menu.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    select(link.dataset.path);
    // Panels are stacked on small screens, so bring the stage into view.
    if (matchMedia(SMALL_SCREEN).matches) document.getElementById(FRAME)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  return menu;
}

/** Breadcrumb on top of an iframe that shows the process page by default and the page picked in the menu. */
export function workspaceStage() {
  const initial = pathFromHash();
  const bar = html`<div class="workspace-stage-bar px-4"></div>`;
  const render = (path) => {
    bar.replaceChildren(breadcrumb(trail(path)));
    // The Home link navigates the iframe itself; tell the menu about it.
    bar.querySelector("a")?.addEventListener("click", () => select(HOME.path));
  };
  render(initial);
  document.addEventListener(SELECT_EVENT, (event) => {
    render(event.detail.path);
    updateHash(event.detail.path);
  });

  const stage = html`<div class="workspace-stage-content">${bar}<iframe id=${FRAME} name=${FRAME} class="workspace-stage-frame" src=${url(initial)} title="Selected content"></iframe></div>`;

  // A deep link pasted or navigated to while the workspace is already open.
  addEventListener("hashchange", () => {
    const path = pathFromHash();
    stage.querySelector("iframe").src = url(path);
    select(path);
  });
  return stage;
}
