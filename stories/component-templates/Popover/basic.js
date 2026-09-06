import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => html`
  <sit-popover trigger=${ifDefined(args.trigger)} placement=${ifDefined(args.placement)}>
    <sit-button variant="outline">Toggle popover</sit-button>
    <div slot="content">
      <p style="margin:0;">Arbitrary popover content goes here.</p>
    </div>
  </sit-popover>
`;

export const args = { trigger: "click", placement: "bottom-start" };

export const parameters = {};

export const play = undefined;
