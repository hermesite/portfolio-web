# Hermes Carretero - Personal portfolio

This is an [Observable Framework](https://observablehq.com/framework/) app. To install the required dependencies, run:

```
npm install
```

Then, to start the local preview server, run:

```
npm run dev
```

Then visit <http://localhost:3000> to preview your app.

For more, see <https://observablehq.com/framework/getting-started>.

## Project structure

This project follows the typical Framework layout, with a few project-specific folders:

```ini
.
├─ src
│  ├─ components
│  │  ├─ pages.js              # pages and sections shared by the home page and workspace menu
│  │  └─ timeline.js           # an importable module
│  ├─ data
│  │  ├─ launches.csv.js       # a data loader
│  │  └─ events.json           # a static data file
│  ├─ design-system            # living examples of the design system (overview, tokens, components)
│  ├─ works, ...               # portfolio content pages
│  ├─ shell.js                 # page shell script loaded from the config `head`
│  ├─ style.css                # app stylesheet (replaces Observable's default theme)
│  └─ index.md                 # the home page
├─ .gitignore
├─ observablehq.config.js      # the app config file
├─ package.json
└─ README.md
```

The styles come from the [design system](../design-system/README.md), a Bootstrap 6 based stylesheet. Its living examples are served at `/design-system/` (see the design system README for how to run them).

**`src`** - This is the “source root” — where your source files live. Pages go here. Each page is a Markdown file. Observable Framework uses [file-based routing](https://observablehq.com/framework/project-structure#routing), which means that the name of the file controls where the page is served. You can create as many pages as you like. Use folders to organize your pages.

**`src/index.md`** - This is the home page for your app. You can have as many additional pages as you’d like, but you should always have a home page, too.

**`src/data`** - You can put [data loaders](https://observablehq.com/framework/data-loaders) or static data files anywhere in your source root, but we recommend putting them here.

**`src/components`** - You can put shared [JavaScript modules](https://observablehq.com/framework/imports) anywhere in your source root, but we recommend putting them here. This helps you pull code out of Markdown files and into JavaScript modules, making it easier to reuse code across pages, write tests and run linters, and even share code with vanilla web applications.

**`observablehq.config.js`** - This is the [app configuration](https://observablehq.com/framework/config) file, such as the pages and sections in the sidebar navigation, and the app’s title.

## App version

The navbar (`#main-navbar`) shows the last git tag and the build date on its right side (e.g. `v0.0.1 · 2026-10-31`). It is computed when the config loads (`dev` and `build`) in `observablehq.config.js`; without tags only the date is shown. The version links to the [changelog](../CHANGELOG.md) and is repeated in the common footer (`footer` option), together with the year and a disclaimer stating that the projects belong to their clients and that their copyright rules apply. The footer markup lives in `footer.js` and is shared by the config and by the home first panel (through the `src/data/footer.json.js` loader, refreshed on `dev` and `build`), because the page footer is hidden on the home workspace.

## Command reference

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `npm install`            | Install or reinstall dependencies                        |
| `npm run dev`        | Start local preview server                               |
| `npm run build`      | Build your static site, generating `./dist`              |
| `npm run deploy`     | Deploy your app to Observable                            |
| `npm run clean`      | Clear the local data loader cache                        |
| `npm run observable` | Run commands like `observable help`                      |
