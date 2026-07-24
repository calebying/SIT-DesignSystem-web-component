import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = ({
  name,
  defaultValue,
  disabled,
  radioValue,
  required,
  invalidFeedback,
  checked,
  invalid,
  hasFeedback,
  hintText,
  label,
  autofocus
}) => {
  return html`
    <sit-radio-group
      name=${ifDefined(name)}
      value=${ifDefined(defaultValue)}
      ?required=${required}
      invalidFeedback=${ifDefined(invalidFeedback)}
      ?invalid=${invalid}
      ?hasFeedback=${hasFeedback}
      hintText=${ifDefined(hintText)}
      label=${ifDefined(label)}
      ?autofocus=${autofocus}
    >
      <sit-radio value=${ifDefined(radioValue)} ?disabled=${disabled} ?checked=${checked} ?invalid=${invalid}
        >Option 1</sit-radio
      >
      <sit-radio value="2">Option 2</sit-radio>
      <sit-radio value="3">Option 3</sit-radio>
    </sit-radio-group>
  `;
};

export const args = {
  hintText: "hint",
  label: "Label"
};

export const parameters = {};

export const play = undefined;
