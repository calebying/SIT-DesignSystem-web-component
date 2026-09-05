import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => html`
  <sit-avatar
    src=${ifDefined(args.src)}
    alt=${ifDefined(args.alt)}
    initials=${ifDefined(args.initials)}
    size=${ifDefined(args.size)}
    status=${ifDefined(args.status)}
  ></sit-avatar>
`;

export const args = { initials: "JT", size: "md" };

export const parameters = {};

export const play = undefined;
