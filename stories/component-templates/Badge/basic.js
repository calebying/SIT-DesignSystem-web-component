import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <sit-badge
      variant=${ifDefined(args.variant)}
      ?dismissible=${args.dismissible}
      ?outlined=${args.outlined}
      ?show=${args.show}
    >
      Badge label
    </sit-badge>
  `;
export const args = {};

export const parameters = {};

export const play = undefined;
