import {footer} from "../../footer.js";

// The same footer HTML as the page footer in observablehq.config.js, for pages that render it inline.
process.stdout.write(JSON.stringify({html: footer()}));
