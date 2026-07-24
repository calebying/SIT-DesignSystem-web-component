import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => html` <sit-divider
  thickness=${ifDefined(args.thickness)}
  orientation=${ifDefined(args.orientation)}
></sit-divider>`;

export const args = {};

export const parameters = {};

export const play = undefined;
