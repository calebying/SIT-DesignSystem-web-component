import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { allModes } from "../../../.storybook/modes";
import { userEvent } from "@storybook/test";

export const Template = ({ expand, brandHref, active, href, disabled, menuIsOpen, close, target, fluid }) => {
  return html`
    <sit-mainnav expand=${ifDefined(expand)} brandHref=${ifDefined(brandHref)} ?fluid=${fluid}>
      <img alt="Canvas logo" width="130" src="/logo.png" slot="brand" />
      <sit-mainnav-item ?active=${active} ?disabled=${disabled}>
        <a href="#">ArgsTable Controlled</a>
      </sit-mainnav-item>
      <sit-mainnav-item>
        <a href="#">About</a>
      </sit-mainnav-item>
      <sit-mainnav-dropdown
        ?active=${active}
        ?menuIsOpen=${menuIsOpen}
        close=${ifDefined(close)}
        ariaLabel="Dropdown menu"
      >
        <span slot="toggler">Dropdown</span>
        <sit-dropdown-item ariaLabel="Item 1"><a href="https://google.com">Item 1</a></sit-dropdown-item>
        <sit-dropdown-item ariaLabel="Item 2"><a href="#">Item 2</a></sit-dropdown-item>
        <sit-dropdown-item ariaLabel="Item 3"><a href="#">Item 3</a></sit-dropdown-item>
      </sit-mainnav-dropdown>
      <sit-mainnav-item slot="end">
        <a href="#">Contact Us</a>
      </sit-mainnav-item>
      <sit-button slot="end">Login</sit-button>
      <dev-console-widget
        slot="non-collapsible"
        iconColor="black"
        iconWidth="28px"
        iconHeight="28px"
      ></dev-console-widget>
    </sit-mainnav>
  `;
};

export const args = {};

export const parameters = {
  layout: "fullscreen",
  chromatic: {
    modes: {
      mobile: allModes["sm"],
      desktop: allModes["lg"]
    }
  }
};

export const play = async ({ canvasElement }) => {
  const dropdown = canvasElement.querySelector("sit-mainnav-dropdown");
  const trigger = dropdown.shadowRoot.querySelector(".nav-link");
  await userEvent.click(trigger);
};
