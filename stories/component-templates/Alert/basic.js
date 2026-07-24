import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <sit-alert
      title=${ifDefined(args.title)}
      ?dismissible=${args.dismissible}
      variant=${ifDefined(args.variant)}
      ?show=${args.show}
      ><sit-icon slot="icon" name="exclamation-circle-fill" size="md"></sit-icon> Description with
      <a href="#">link</a> and more details here
    </sit-alert>
  `;
export const args = {
  href: "#",
  show: true,
  variant: "info",
  title: "Title",
  dismissible: true
};

export const parameters = {};

export const play = undefined;
