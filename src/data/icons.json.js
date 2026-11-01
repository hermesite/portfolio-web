import {createElement} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import * as si from "react-icons/si";
import * as di from "react-icons/di";
import * as bi from "react-icons/bi";
import * as fa from "react-icons/fa";
import {catalog} from "../components/catalog.js";

const icons = {...si, ...di, ...bi, ...fa};

// Renders to SVG every react-icons name referenced by the icon categories of the
// catalog, so the page only ships the icons it uses.
const svgs = {};
for (const {icon} of [
  ...Object.values(catalog.tools),
  ...Object.values(catalog.social)
]) {
  if (!icon) continue;
  const Icon = icons[icon];
  if (!Icon) console.warn(`Unknown react-icons name in catalog: ${icon}`);
  else svgs[icon] = renderToStaticMarkup(createElement(Icon));
}

process.stdout.write(JSON.stringify(svgs));
