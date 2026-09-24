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

## Notes

### Alternative "Read more" implementation: `details` + `summary`

The "Read more" block could be built on the native `<details>` / `<summary>` elements and animated with pure CSS via the `::details-content` pseudo-element and `interpolate-size`. **This option is not used in the project** — the code uses a different, more stable approach with wider browser support.

#### Why it was rejected

Some browsers from the production `browserslist` config do not support the required features:

| Feature              | Not supported in (from the production list)                         |
|----------------------|---------------------------------------------------------------------|
| `::details-content`  | Chrome 109, 118–120; Edge 119–120; Firefox 120–121; iOS Safari 15–16; UC Browser 15.5 |
| `interpolate-size`   | Supported only in Chromium-based browsers at the time of writing    |

In these browsers the accordion still works, but opens instantly without animation. Autoprefixer does not help here: these features have neither prefixes nor polyfills.

#### Markup

`summary` must be the first child of `details`, so the hidden text appears below the button. To keep the button under the text, `details` needs `display: flex` with `order` on `summary`.

```jsx
<section className="journey container">
  <h2 className="journey__title">Embark on a space journey</h2>
  <p className="journey__text">
    Travelling into space is one of the most exciting and unforgettable
    adventures that can change your life forever…
  </p>

  <details className="journey__details">
    <summary className="journey__toggle">
      <span className="journey__toggle-more">Read more</span>
      <span className="journey__toggle-less">Hide</span>
    </summary>
    <p className="journey__text">
      We guarantee that every moment in space will be filled with incredible
      impressions, excitement and new discoveries…
    </p>
  </details>
</section>
```

#### Styles

```scss
.journey__details {
  display: flex;
  flex-direction: column;
  interpolate-size: allow-keywords; // allows transition to height: auto

  &::details-content {
    block-size: 0;
    overflow: hidden;
    opacity: 0;
    transition:
      block-size 0.4s ease,
      opacity 0.4s ease,
      content-visibility 0.4s allow-discrete; // keeps content visible until the closing animation ends
  }

  &[open]::details-content {
    block-size: auto;
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    &::details-content {
      transition: none;
    }
  }
}

.journey__toggle {
  order: 1; // move the button below the content
  list-style: none;
  cursor: pointer;

  &::-webkit-details-marker {
    display: none; // hide the default marker in Safari
  }
}

.journey__toggle-less {
  display: none;
}

.journey__details[open] {
  .journey__toggle-more {
    display: none;
  }

  .journey__toggle-less {
    display: inline;
  }
}
```
