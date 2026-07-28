# Extending sit-web-component

For users who are leveraging on sit-web-component as a building block to build and export your own web component library with Lit, you will have to adopt the scoped elements approach to prevent any foreseeable clash of registries between sit-web-component and your web component library in the case where your users are importing both libraries.

## Scoped Elements

The CustomElementRegistry is a global registry that provides methods for registering custom elements. One of the limitations of working with this global registry is that multiple versions of the same element cannot co-exist. This causes bottlenecks in software delivery that should be managed by the teams and complex build systems. Scoped Custom Element Registries is a proposal that will solve the problem. Since this functionality will not be available (especially not cross browser) anytime soon, we have adopted [OpenWC's Scoped Elements](https://open-wc.org/docs/development/scoped-elements/).

From version 3.0.0 onwards, our library has stopped the use of Scoped Elements mixin to dedupe our component registration when reusing components.

For users who are building component libraries on top of sit-web-component and facing clashing registration issues, you can adopt [OpenWC's scoped elements](https://open-wc.org/docs/development/scoped-elements/) to prevent exporting our registered custom elements. Read up about OpenWC's scoped elements for more updated information.

Things to note:

1. Import component class from `@sit-canvas/canvas-web-component/components`. Here the components are not registered in the custom element registry
2. Define the tagName you want to assign to the component's class

Example below

```jsx
import { SitMasthead, SitMainnav, SitMainnavDropdown, SitMainnavItem } from "@sit-canvas/canvas-web-component/components";
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

// Lit element
@customElement('my-navbar')
export class MyNavbar extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'sit-mainnav': SitMainnav,
      'sit-mainnav-dropdown': SitMainnavDropdown,
      'sit-mainnav-item': SitMainnavItem,
      'sit-masthead': SitMasthead
    };
  }
    ...

 render() {
    return html`
        <sit-masthead fluid="false"></sit-masthead>
            <sit-mainnav>
              <img width="240" src="https://example.com/logo.svg" slot="brand">
                <sit-mainnav-dropdown slot="end">
                  <span slot="toggler">Home</span>
                  <sit-dropdown-item>Logout</sit-dropdown-item>
                </sit-mainnav-dropdown>
                <sit-mainnav-item href="#">Content</sit-mainnav-item>
                <sit-mainnav-item href="#">Biography</sit-mainnav-item>
            </sit-mainnav>
          `
      }
}
```
