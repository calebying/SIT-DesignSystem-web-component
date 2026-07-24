import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <sit-accordion
      ?allowMultiple=${args.allowMultiple}
      variant=${ifDefined(args.variant)}
      density=${ifDefined(args.density)}
    >
      <sit-accordion-item ?open=${args.open} ?disabled=${args.disabled} ariaLabel="Accordion title #1">
        <div slot="header">Accordion title #1</div>
        <div slot="content">
          Lorem ipsum dolorsdsf sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
        </div>
      </sit-accordion-item>
      <sit-accordion-item ariaLabel="Accordion title #2">
        <div slot="header">Accordion title #2</div>
        <div slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
        </div>
      </sit-accordion-item>
      <sit-accordion-item open ariaLabel="Accordion title #3">
        <div slot="header">Accordion title #3</div>
        <div slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
        </div>
      </sit-accordion-item>
    </sit-accordion>
  `;

export const args = {};

export const parameters = {
  controls: { exclude: ["slots"] }
};

export const play = undefined;
