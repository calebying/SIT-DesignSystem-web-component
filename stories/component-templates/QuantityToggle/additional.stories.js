import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

const ValidationTemplate = args =>
  html`
    <form>
      <sit-quantity-toggle
        name="QT1"
        id="QT1"
        min="3"
        hasFeedback="both"
        hintText="Hint text"
        label="Label"
        invalidFeedback=${ifDefined(args.invalidFeedback)}
      >
      </sit-quantity-toggle>
      <sit-button type="submit">Submit</sit-button>
      <sit-button type="reset" variant="ghost">Reset</sit-button>
    </form>
  `;

export const DisabledQT = {
  render: Template.bind({}),
  name: "Disabled",
  args: { ...args, disabled: true },
  parameters: {}
};

export const InvalidQT = {
  render: Template.bind({}),
  name: "Invalid",
  args: { ...args, hasFeedback: "both", invalid: true, invalidFeedback: "Invalid QT detected" },
  parameters: {}
};

export const QTValidation = {
  render: ValidationTemplate.bind({}),
  name: "Validation",
  args: {},
  parameters: {}
};

export const OverrideInvalidFeedback = {
  render: ValidationTemplate.bind({}),
  name: "Override default invalid feedback",
  args: { invalidFeedback: "Custom error message" },
  parameters: {}
};
