import { html } from "npm:htl";
import { FileAttachment } from "observablehq:stdlib";
import { catalog } from "./catalog.js";

export { catalog };

// SVG markup per react-icons name, rendered at build time by data/icons.json.js.
const icons = await FileAttachment("../data/icons.json").json();

// Styles live in the design system (design-system/src/components/stack.css).

const titles = { tools: "Tools", process: "Process", disciplines: "Disciplines", social: "Social Networks" };

// Readable text color (black or white) over a #rrggbb background.
export function ink(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b > 160 ? "#000" : "#fff";
}

// Inline SVG for a react-icons name; null when the name is unknown.
function icon(name) {
  const svg = icons[name];
  if (!svg) return null;
  const span = document.createElement("span");
  span.className = "stack-icon d-inline-flex flex-shrink-0";
  span.setAttribute("aria-hidden", "true");
  span.innerHTML = svg;
  return span;
}

/**
 * Visual list of the elements used in a project, grouped by category.
 * Pass the ids of the used elements per category; they are filtered from the
 * shared catalog. Unknown ids are shown as plain labels and empty categories
 * are omitted.
 * @param {{tools?: string[], process?: string[], disciplines?: string[], social?: string[]}} used
 */
export function stack(used) {
  const groups = Object.keys(catalog)
    .map((category) => {
      const items = (used[category] ?? []).map((id) => {
        const key = id.toLowerCase();
        return catalog[category][key] ?? { label: id };
      });
      return { category, items };
    })
    .filter(({ items }) => items.length);

  return html`<div class="stack d-inline-flex flex-wrap">${groups.map(
    ({ category, items }) => html`<div class="stack-group d-flex flex-wrap align-items-baseline row-gap-3 column-gap-5">
      <ul class="stack-list d-flex flex-wrap gap-3 m-0 p-0 list-unstyled">${items.map(
      ({ label, color, icon: iconName, link }) => {
        const hasIcons = ["tools", "social"].includes(category);
        const mark = hasIcons && icon(iconName);
        if (hasIcons && iconName && !mark) {
          console.warn(`stack: no icon rendered for "${label}" (${iconName}). Re-run the icons loader with "npm run icons".`);
        }
        const filled = category === "disciplines" && color;
        const style = color ? `--stack-color: ${color}${filled ? `; --stack-ink: ${ink(color)}` : ""}` : null;
        const base = "stack-item d-inline-flex align-items-center gap-3 m-0";
        const itemClass = mark ? `${base} stack-item-icon` : filled ? `${base} stack-item-outline badge badge-outline fs-md` : `${base} px-5 py-1`;
        // Icon-only items keep the label for tooltips and screen readers.
        const content = [
          mark || (color && !filled ? html`<span class="stack-dot rounded-circle flex-shrink-0" aria-hidden="true"></span>` : null),
          mark ? html`<span class="visually-hidden">${label}</span>` : label
        ];
        return html`<li class=${itemClass} title=${mark ? label : null} style=${style}>
          ${link ? html`<a class="d-inline-flex align-items-center gap-3 fg-reset text-decoration-none" href=${link} target="_blank" rel="noopener noreferrer">${content}</a>` : html`<span class="fw-normal text-uppercase text-muted">#${content}</span>`}
        </li>`;
      }
    )}</ul>
    </div>`
  )}</div>`;
}
