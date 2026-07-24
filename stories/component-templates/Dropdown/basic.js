import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { userEvent } from "@storybook/test";

export const Template = ({
  noFlip,
  menuAlignRight,
  drop,
  floatingOpts,
  active,
  href,
  close,
  menuIsOpen,
  disabled,
  target
}) => {
  return html`
    <sit-dropdown
      ?noFlip=${noFlip}
      drop=${ifDefined(drop)}
      ?menuAlignRight=${menuAlignRight}
      floatingOpts=${ifDefined(floatingOpts)}
      close=${ifDefined(close)}
      ?menuIsOpen=${menuIsOpen}
      ?disabled=${disabled}
    >
      <sit-button slot="toggler" variant="primary" tone="brand" ariaLabel="Dropdown">
        Dropdown
        <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
      </sit-button>
      <sit-dropdown-item ariaLabel="item #1" ?disabled=${disabled} ?active=${active} target=${ifDefined(target)}>
        <a href=${ifDefined(href)}>item #1 (argsTable controlled) </a>
      </sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #2"><a href="https://google.com">item #2</a></sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #3" disabled>item #3</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #4">item #4</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #5">item #5</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #6">item #6</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #7">item #7</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #8">item #8</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #9">item #9</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #10">item #10</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #11">item #11</sit-dropdown-item>
    </sit-dropdown>
  `;
};

export const args = {
  href: "#"
};

export const parameters = {};

export const play = async ({ canvasElement }) => {
  const toggler = canvasElement.querySelector("sit-button");
  const trigger = toggler.shadowRoot.querySelector("button");
  await userEvent.click(trigger);
};
