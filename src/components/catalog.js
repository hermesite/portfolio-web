// Catalog of every element that can appear in a project, grouped by category.
// Each entry: id -> {label, color, icon?, link?}. Projects only reference ids.
// In the "tools" and "social" categories the `icon` (a react-icons name from the Si, Di, Bi or Fa packs) replaces the color dot.
// `link` (social) makes the icon open that URL in a new tab.
// Icons are rendered by the data loader src/data/icons.json.js, whose output is cached and
// only refreshed when the loader file changes: after adding a technology, run `npm run icons`
// (it also runs automatically before `npm run dev` and `npm run build`).
export const catalog = {
  tools: {
    html: { label: "HTML", color: "#e34f26", icon: "SiHtml5" },
    css: { label: "CSS", color: "#1572b6", icon: "SiCss" },
    javascript: { label: "JavaScript", color: "#f7df1e", icon: "SiJavascript" },
    typescript: { label: "TypeScript", color: "#3178c6", icon: "SiTypescript" },
    svg: { label: "SVG", color: "#ffb13b", icon: "SiSvg" },
    d3: { label: "D3.js", color: "#f9a03c", icon: "SiD3" },
    react: { label: "React", color: "#61dafb", icon: "SiReact" },
    git: { label: "Git", color: "#f34f29", icon: "SiGit" },
    tailwind: { label: "Tailwind CSS", color: "#38b2ac", icon: "SiTailwindcss" },
    bootstrap: { label: "Bootstrap", color: "#7952b3", icon: "SiBootstrap" },
    python: { label: "Python", color: "#3776ab", icon: "SiPython" },
    leaflet: { label: "Leaflet", color: "#199900", icon: "SiLeaflet" },
    jquery: { label: "jQuery", color: "#0769ad", icon: "SiJquery" },
    vizobjects: { label: "VizObjectsJS", color: "#ff6600" },
    photoshop: { label: "Photoshop", color: "#31a8ff", icon: "DiPhotoshop" },
    illustrator: { label: "Illustrator", color: "#ff9a00", icon: "DiIllustrator" },
    sketch: { label: "Sketch", color: "#f7b500", icon: "SiSketch" },
    figma: { label: "Figma", color: "#a259ff", icon: "SiFigma" },
    notion: { label: "Notion", color: "#000000", icon: "SiNotion" },
    trello: { label: "Trello", color: "#0079bf", icon: "SiTrello" },
    adobe: { label: "Adobe", color: "#ff0000", icon: "BiLogoAdobe" },
    invision: { label: "InVision", color: "#ff3366", icon: "BiLogoInvision" },
    visualstudiocode: { label: "Visual Studio Code", color: "#007acc", icon: "BiLogoVisualStudio" },
    bruno: { label: "Bruno", color: "rgb(232, 155, 47)", icon: "SiBruno" },
    copilot: { label: "GitHub Copilot", color: "#333", icon: "SiGithubcopilot" },
    github: { label: "GitHub", color: "#181717", icon: "SiGithub" },
    vercel: { label: "Vercel", color: "#000000", icon: "SiVercel" }
  },
  process: {
    define: { label: "Define", color: "#31a8ff" },
    explore: { label: "Explore", color: "#ff9a00" },
    integrate: { label: "Integrate", color: "#f7b500" },
    deliver: { label: "Deliver", color: "#a259ff" }
  },
  disciplines: {
    ux: { label: "UX", color: "#64482b" },
    ui: { label: "UI", color: "#d8c8b8" },
    frontend: { label: "Frontend development", color: "#b88857" },
    dataviz: { label: "Data Visualization", color: "#887438" },
    design: { label: "Design", color: "#6a1414" },
    aidev: { label: "AI-driven engineering", color: "#829978" },
    gis: { label: "GIS", color: "#616e1d" }
  },
  social: {
    linkedin: { label: "LinkedIn", color: "#FFF", icon: "FaLinkedin", link: "https://www.linkedin.com/in/hermes-carretero-bb200621" },
    github: { label: "GitHub", color: "#FFF", icon: "SiGithub", link: "https://github.com/hermesite" }
  }
};
