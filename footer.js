import {execSync} from "node:child_process";

const CHANGELOG_URL = "https://github.com/hermesite/portfolio-web/blob/main/CHANGELOG.md";

// Last git tag and the build date; the tag is omitted when git or tags are unavailable.
export function buildInfo() {
  let tag = "";
  try {
    tag = execSync("git describe --tags --abbrev=0", {stdio: ["ignore", "pipe", "ignore"]}).toString().trim();
  } catch {}
  const date = new Date().toISOString().slice(0, 10);
  return {tag, date};
}

// Link to the changelog labelled with the version and build date.
export function versionLink({tag, date}, className = "app-version") {
  const label = tag ? `${tag} · ${date}` : date;
  return `<a class="${className}" href="${CHANGELOG_URL}" target="_blank" rel="noopener" title="Changelog">${label}</a>`;
}

// Common footer: version linked to the changelog, year and client copyright disclaimer.
export function footer() {
  const info = buildInfo();
  const year = info.date.slice(0, 4);
  return `<p>Version ${versionLink(info)} · © ${year} Hermes Carretero · The projects shown belong to their respective clients, and their copyright rules apply. · Built with Observable.</p>`;
}
