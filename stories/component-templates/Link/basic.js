import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => html`
  <sit-link
    size=${ifDefined(args.size)}
    variant=${ifDefined(args.variant)}
    tone=${ifDefined(args.tone)}
    ?active=${args.active}
    ?disabled=${args.disabled}
  >
    <a href="#">Link</a>
  </sit-link>
`;

export const args = {};

export const parameters = {};

export const play = undefined;
