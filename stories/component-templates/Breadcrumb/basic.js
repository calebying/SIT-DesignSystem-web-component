import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <sit-breadcrumb>
      <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">About</a></sit-breadcrumb-item>
      <sit-breadcrumb-item active><a href="https://www.google.com/">Contacts</a></sit-breadcrumb-item>
    </sit-breadcrumb>
  `;
export const args = {};

export const parameters = {};

export const play = undefined;
