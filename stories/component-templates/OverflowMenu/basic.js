import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { userEvent } from "@storybook/test";

export const Template = args => html`
  <sit-overflow-menu size=${ifDefined(args.size)}>
    <sit-dropdown-item ariaLabel="View">View</sit-dropdown-item>
    <sit-dropdown-item ariaLabel="Edit">Edit</sit-dropdown-item>
    <sit-dropdown-item ariaLabel="Delete">Delete</sit-dropdown-item>
  </sit-overflow-menu>
`;

export const args = {
  size: "md"
};

export const parameters = {};

export const play = async ({ canvasElement }) => {
  const host = canvasElement.querySelector("sit-overflow-menu");
  const trigger = host.shadowRoot.querySelector(".overflow-btn");
  await userEvent.click(trigger);
};
