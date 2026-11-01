import {html} from "npm:htl";

// Styles come from Bootstrap's breadcrumb component.
/**
 * Breadcrumb trail. The last item is the current page; items without `href` render as plain text.
 * @param {{name: string, href?: string, target?: string}[]} items
 */
export function breadcrumb(items) {
  const last = items.length - 1;
  return html`<nav aria-label="breadcrumb">
    <ol class="breadcrumb">${items.flatMap((item, i) => [
      i > 0 ? html`<li class="breadcrumb-divider"></li>` : null,
      html`<li class="breadcrumb-item">${
        i === last
          ? html`<span class="breadcrumb-link active" aria-current="page">${item.name}</span>`
          : item.href
            ? html`<a class="breadcrumb-link" href=${item.href} target=${item.target}>${item.name}</a>`
            : html`<span class="breadcrumb-link">${item.name}</span>`
      }</li>`
    ])}</ol>
  </nav>`;
}
