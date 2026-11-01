import { html } from "npm:htl";
import { stack, ink } from "./stack.js";

// Inline colors for a custom #rrggbb background, with readable text over it.
function colors(background) {
  if (!background) return null;
  return /^#[0-9a-f]{6}$/i.test(background)
    ? `background-color: ${background}; color: ${ink(background)}`
    : `background-color: ${background}`;
}

/**
 * One card section per phase of the process, laid out in two columns: the
 * phase description and a card with its activities as mini cards, followed by
 * a table of details and the icons of the tools used.
 * @param {{
 *   id: string,
 *   title: string,
 *   summary: string,
 *   cardTitle?: string,
 *   cardDescription?: string,
 *   activities: string[],
 *   details?: Record<string, string>,
 *   stack?: Parameters<typeof stack>[0],
 *   background?: string | null,
 *   image?: string | null,
 *   layout?: "default" | "reverse"
 * }[]} phases
 * `background` overrides the phase color (--color-phase-<id>, set by the design system) and is any CSS color; `image` is an image path or URL; `layout: "reverse"` swaps the two columns.
 * A local `image` is only copied to the build when it is listed in `dynamicPaths` in the config.
 */
export function processCards(phases) {
  return html`${phases.map(({ id, title, summary, cardTitle, cardDescription, activities, details, stack: used, background, image, layout }) => html`<section class=${`section section-${id}`} style=${colors(background)}>
    ${image ? html`<img class="d-block img-fluid mb-6" src=${image} alt="" loading="lazy">` : null}
      <header>
        <h2>${title}</h2>
        <p class="mb-0"><em>${summary}</em></p>
      </header>
      <div class="process-card-body bg-muted-secondary bg-20">
        <h3>${cardTitle ?? "Key Activities"}</h3>
        <p><em>${cardDescription ?? ""}</em></p>
        <ul class="section-activities">${activities.map((activity) => html`<li class="section-activity">${activity}</li>`)}</ul>
      </div>
      <div class="process-card-body pt-0">
        ${details ? html`<table class="table mb-0">
          <tbody>${Object.entries(details).map(([label, value]) => html`<tr><th class="bg-transparent fg-white">${label}</th><td class="bg-transparent fg-white">${value}</td></tr>`)}</tbody>
        </table>` : null}
        ${used ? html`<div class="section-stack text-end">${stack(used)}</div>` : null}
      </div>
  </section>`)}`;
}
