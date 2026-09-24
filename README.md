# Space Adventure

Responsive layout of a single-page SPA for a fictional app, built from a Figma design.

- Repository: https://github.com/lipa88-mk/space-adventure

## Task

Build the page from the Figma design (the design contains all the required elements: images, backgrounds, logos, button shapes, colors and fonts) and implement:

- a responsive layout for the three viewports in the design;
- interactive hover states for elements;
- burger menu logic for mobile devices in JavaScript;
- "Read more" buttons (expand / collapse) **without JavaScript** — using CSS only.

## Requirements

1. The layout must closely match the design and be fully responsive. The design includes three viewports, which should be used as the reference.
2. Pixel perfect is not required.
3. Using any frameworks or libraries for responsive design, as well as CSS modules, is not allowed.
4. Flex / grid are used for layouts.
5. Multiple Backgrounds are recommended for the background.
6. Images are optimized; SVG is used where possible.

### Recommendations

- The project is based on the Create React App template with SASS.
- The markup is implemented in the `App.js` component, styles in `App.scss` (using the preprocessor).
- Class names follow the BEM methodology.
- Adding data and using React Hooks is allowed.
- The project is deployed to GitHub Pages.

## Stack

- React 19 (Create React App, `react-scripts` 5)
- SCSS (Dart Sass)
- BEM

## Environment versions

| Tool       | Version  |
|------------|----------|
| Node.js    | 24.19.0  |
| npm        | 11.17.0  |

The versions are also specified in `package.json` (the `engines` field) and in `.nvmrc`. If you use nvm:

```bash
nvm use
```

## Commands

Install dependencies:

```bash
npm install
```

Run in development mode at [http://localhost:3000](http://localhost:3000) (the page reloads on changes):

```bash
npm start
```

Production build into the `build` folder:

```bash
npm run build
```

## Styles structure

```
src/
  App.js              — page markup
  App.scss            — page block styles
  styles/
    _variables.scss   — colors, fonts, breakpoints
    _mixins.scss      — media query mixins and helpers
    _reset.scss       — style reset
  assets/
    images/           — raster images
    icons/            — SVG icons
```
