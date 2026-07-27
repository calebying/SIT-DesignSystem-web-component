# Imports

## React users

Are you a react user? If so, skip to the <a href="/docs/frameworks-react--docs" target="_self">react setup </a>

## Using the custom elements

Once imported, the custom elements can be used throughout the project.

```js
import "@sit-canvas/canvas-web-component/themes/day.css";
import "@sit-canvas/canvas-web-component";

//usage
// <sit-button>Hello World</sit-button>
```

## TypeScript: using the component's class object

When writing with Typescript, you might be required to type the components in certain cases. Import the component class like so. 
Each component's Class is exported via named exports, prefixed with `Sit`.

```js
import { SitButton, SitMainnav } from "@sit-canvas/canvas-web-component/components";
```