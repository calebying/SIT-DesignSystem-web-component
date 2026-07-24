import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => html`<sit-table-of-contents>
  <h5>${ifDefined(args.title)}</h5>
  ${args.contents?.map(
    item =>
      html`<li slot="contents">
        <sit-link><a href=${ifDefined(item.href)}>${item.label}</a></sit-link>
      </li>`
  )}
</sit-table-of-contents>`;

export const args = {
  title: "Table of Contents",
  contents: [
    { label: "Introduction", href: "#" },
    { label: "Usage", href: "#" },
    { label: "Examples", href: "#" }
  ]
};

export const parameters = {};

export const play = undefined;
