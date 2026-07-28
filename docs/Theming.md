# Stylings 

## Global Styles and Theming

Customize the styles at the `:root` level by overriding the values of css tokens defined in file 
`@sit-canvas/canvas-web-component/themes/day.css` file. This file contains the primitive and semantic css tokens. For system level UI changes, we encourage you to make primitive and semantic level style changes at the `:root` rather than component specific changes. 

```css
// yourCustomCss.css
:root {
  --sit-product-primary-100: #F5B6DA;
  --sit-product-primary-200: #F186C0;
  --sit-product-primary-300: #EE4FA6;
  --sit-product-primary-400: #EE0290;
  --sit-product-primary-500: #EF0078;
  --sit-product-primary-600: #DD0074;
  --sit-product-primary-700: #C6006E;
  --sit-product-primary-800: #B0006A;
  --sit-product-primary-900: #880061;
}
``` 
``` jsx
import "@sit-canvas/canvas-web-component/themes/day.css";
//import your custom css after the themes/day.css .
import "./yourCustomCss.css"
```

### root.css, day.css, night.css

Primitives and semantic values are defined in these files, shipped in `@sit-canvas/canvas-web-component/themes/`. Read the full source directly in this repository:

- [`src/themes/root.css`](../src/themes/root.css) - primitive and semantic token definitions
- [`src/themes/day.css`](../src/themes/day.css) - day mode token values
- [`src/themes/night.css`](../src/themes/night.css) - night mode token values

## Component specific styles <sit-badge show>work in progress</sit-badge>

<!-- The styles of components are built in and can be modified via cssparts or css custom properties whenever we specify for such styling modificiations. This information will be specified under API section for each component

You will require some knowledge of web components and css to do so and the information can be readily available online like mdn web docs for [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and [css](https://developer.mozilla.org/en-US/docs/Web/CSS)

### css custom variable <sit-badge show>work in progress</sit-badge>

Some components have defined css custom variable for styling of selected aspects of the element in the shadow DOM. See the API table for the available css custom variables

```css
sit-sidenav {
  --sidenav-theme-color: pink;
}
```

### cssparts <sit-badge show>work in progress</sit-badge>

Some components expose cssparts on selected elements of the shadow DOM. See the API table for each component on the css parts exposed.

```css
sit-footer::part(footer-bottom) {
  background-color: grey;
  font-family: "Times New Roman", Times, serif;
  border: 10px dotted red;
}
``` -->


