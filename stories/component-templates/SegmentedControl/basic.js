import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => html`
  <sit-segmented-control
    value=${ifDefined(args.value)}
    size=${ifDefined(args.size)}
    ?disabled=${args.disabled}
    ariaLabel="View"
  >
    <sit-segment value="list">List</sit-segment>
    <sit-segment value="grid">Grid</sit-segment>
    <sit-segment value="table">Table</sit-segment>
  </sit-segmented-control>
`;

export const args = { value: "list", size: "md", disabled: false };

export const parameters = {};

export const play = undefined;
