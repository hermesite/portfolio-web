import {html} from "npm:htl";

function tokenValue(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "Not defined";
}

export function colorSwatches(tokens) {
  return html`<div class="row g-4">${tokens.map(
    ([label, name]) => html`<div class="col-6 md:col-4 lg:col-3">
      <div class="border p-3 h-100">
        <div class="border mb-3" style=${`height: 3rem; background-color: var(${name});`} aria-hidden="true"></div>
        <strong class="d-block">${label}</strong>
        <code class="d-block small text-break">${name}</code>
        <span class="d-block small fg-3 text-break">${tokenValue(name)}</span>
      </div>
    </div>`
  )}</div>`;
}

export function typefaceSamples(tokens) {
  return html`<div>${tokens.map(
    ([label, name]) => html`<div class="border-bottom py-5">
      <div><strong>${label}</strong> <code class="text-break">${name}</code></div>
      <p class="my-3" style=${`font-family: var(${name}); font-size: 1.5rem;`}>The quick brown fox jumps over 123.</p>
      <div class="small fg-3 text-break">${tokenValue(name)}</div>
    </div>`
  )}</div>`;
}

export function tokenTable(tokens) {
  return html`<table>
    <thead><tr><th scope="col">Token</th><th scope="col">Value</th><th scope="col">Use</th></tr></thead>
    <tbody>${tokens.map(
      ([name, use]) => html`<tr>
        <th scope="row"><code>${name}</code></th>
        <td><code>${tokenValue(name)}</code></td>
        <td>${use}</td>
      </tr>`
    )}</tbody>
  </table>`;
}
