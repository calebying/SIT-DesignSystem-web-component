import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <sit-spinner
      label=${ifDefined(args.label)}
      tone=${ifDefined(args.tone)}
      size=${ifDefined(args.size)}
      orientation=${ifDefined(args.orientation)}
    >
    </sit-spinner>
  `;

export const args = {};

export const parameters = {};

export const play = undefined;
