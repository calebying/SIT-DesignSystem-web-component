// Basic usage story for sit-close-button
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => {
  return html`
    <sit-close-button
      size=${ifDefined(args.size)}
      tone=${ifDefined(args.tone)}
      ?disabled=${args.disabled}
    ></sit-close-button>
  `;
};

export const args = {};

export const parameters = {};

export const play = undefined;
