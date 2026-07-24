import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => html` <sit-icon-button
  name=${ifDefined(args.name)}
  variant=${ifDefined(args.variant)}
  ?loading=${args.loading}
  size=${ifDefined(args.size)}
  ariaLabel=${ifDefined(args.ariaLabel)}
></sit-icon-button>`;

export const args = {
  name: "plus",
  ariaLabel: "Add"
};

export const parameters = {};

export const play = undefined;
