import { html } from "npm:htl";
import { stack, ink } from "./stack.js";


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
 * }[]} phases
 * `background` overrides the phase color (--color-phase-<id>, set by the design system) and is any CSS color; `image` is an image path or URL; `layout: "reverse"` swaps the two columns.
 * A local `image` is only copied to the build when it is listed in `dynamicPaths` in the config.
 */
export function processCards(phases) {
  return html`${phases.map(({ id, title, summary, cardTitle, cardDescription, activities, details, stack: used, image }) => {
    const uniqueId = `process-collapse-${id}`;
    return html`<section class=${`section section-${id} process-card`}>
      ${image ? html`<img class="d-block img-fluid mb-6" src=${image} alt="" loading="lazy">` : null}
      <header class="process-card-header" type="button" data-bs-toggle="collapse" data-bs-target="#${uniqueId}" aria-expanded="false" aria-controls="${uniqueId}" title="Toggle details">
        <div class="process-card-header-content">
          <h3>${title}</h3>
          <p class="mb-0"><em>${summary}</em></p>
        </div>
          <svg class="process-card-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
      </header>
      <div class="process-card-body bg-muted-secondary bg-20 collapse" id="${uniqueId}">
        <h4>${cardTitle ?? "Key Activities"}</h4>
        <p class=""><em>${cardDescription ?? ""}</em></p>
        <ul class="section-activities">${activities.map((activity) => html`<li class="section-activity">${activity}</li>`)}</ul>
        ${used ? html`<div class="section-stack pb-0">${stack(used)}</div>` : null}
        ${details ? html`<table class="table mb-0">
          <tbody>${Object.entries(details).map(([label, value]) => html`<tr><th class="bg-transparent fg-white">${label}</th><td class="bg-transparent fg-white">${value}</td></tr>`)}</tbody>
        </table>` : null}
      </div>
    </section>`;
  })}`;
}
