import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => html` <sit-switch
  size=${ifDefined(args.size)}
  ?icon=${args.icon}
  ?checked=${args.checked}
  ?disabled=${args.disabled}
>
</sit-switch>`;

export const args = {};

export const parameters = {};

export const play = undefined;
