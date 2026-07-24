import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

const ValidationTemplate = args =>
  html`
    <form>
      <sit-textarea
        name="textareaValidationExample"
        required
        minLength="5"
        hintText="Minimum 5 characters"
        hasFeedback
        label="Textarea label"
        invalidFeedback=${ifDefined(args.invalidFeedback)}
      ></sit-textarea>
      <sit-button type="submit">Submit</sit-button>
      <sit-button type="reset" variant="ghost">Reset</sit-button>
    </form>
  `;

const changeValue = e => {
  e.preventDefault();
  const textarea = document.querySelector("Sit-textarea#default-value-eg");
  textarea.defaultValue = "Default value has changed!";
};

const DefaultValueTemplate = () => html`
  <form>
    <sit-textarea id="default-value-eg" value="The initial value" label="Textarea label"></sit-textarea>
    <sit-button type="reset" class="mt-5">Reset</sit-button>
    <sit-button variant="warning" @click=${e => changeValue(e)}>Click to change the default value</sit-button>
  </form>
`;

export const Validation = {
  render: ValidationTemplate.bind({}),
  name: "Validation",
  args: {},
  parameters: {}
};
export const OverrideInvalidFeedback = {
  render: ValidationTemplate.bind({}),
  name: "Validation",
  args: { invalidFeedback: "Custom error message" },
  parameters: {}
};

export const DefaultValue = {
  render: DefaultValueTemplate.bind({}),
  name: "Default Value",
  args: {},
  parameters: {}
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled",
  args: { ...args, disabled: true },
  parameters: {}
};
