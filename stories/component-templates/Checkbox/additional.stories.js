import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

const ValidationTemplateGroup = args =>
  html`
    <form class="sit:flex sit:flex-col sit:gap-layout-xs">
      <sit-checkbox-group required hasFeedback id="sameid">
        <sit-checkbox value="he">he</sit-checkbox>
        <sit-checkbox value="him">him</sit-checkbox>
      </sit-checkbox-group>

      <div class="sit:flex sit:justify-end sit:gap-component-xs">
        <sit-button type="submit">Submit</sit-button>
        <sit-button type="reset" variant="ghost">Reset</sit-button>
      </div>
    </form>
  `;

const ValidationTemplateSingle = args =>
  html`
    <form class="sit:flex sit:flex-col sit:gap-layout-xs">
      <sit-checkbox value="marketing" required hasFeedback="both">I acknowledge to receive marketing...</sit-checkbox>
      <sit-checkbox value="subcribe" hasFeedback="both">I agree to subscribe to...</sit-checkbox>
      <div class="sit:flex sit:justify-end sit:gap-component-xs">
        <sit-button type="submit">Submit</sit-button>
        <sit-button type="reset" variant="ghost">Reset</sit-button>
      </div>
    </form>
  `;

const InvalidTemplate = () =>
  html`
    <div class="sit-grid">
      <sit-checkbox class="sit-col-4 sit-col-sm-4" invalid hasFeedback="both" invalidFeedback="custom feedback message"
        >Invalid</sit-checkbox
      >
      <sit-checkbox
        class="sit-col-4 sit-col-sm-4"
        invalid
        checked
        hasFeedback="both"
        invalidFeedback="custom feedback message"
        >Invalid and checked</sit-checkbox
      >
      <sit-checkbox
        class="sit-col-4 sit-col-sm-4"
        invalid
        indeterminate
        hasFeedback="both"
        invalidFeedback="custom feedback message"
        >Invalid and indeterminate</sit-checkbox
      >
    </div>
  `;

const InvalidGroupTemplate = () =>
  html`
    <sit-checkbox-group invalid hasFeedback label="CheckboxGroup label" invalidFeedback="custom feedback message">
      <sit-checkbox>Option A </sit-checkbox>
      <sit-checkbox>Option B </sit-checkbox>
      <sit-checkbox>Option C</sit-checkbox>
    </sit-checkbox-group>
  `;

export const Indeterminate = {
  render: Template.bind({}),
  name: "Indeterminate",
  args: { ...args, indeterminate: true },
  parameters: {}
};
export const Disabled = {
  render: Template.bind({}),
  name: "Disabled",
  args: { ...args, disabled: true },
  parameters: {}
};

export const Invalid = {
  render: InvalidTemplate.bind({}),
  name: "Invalid states",
  args: {},
  parameters: {}
};
export const InvalidGroup = {
  render: InvalidGroupTemplate.bind({}),
  name: "Invalid CheckboxGroup",
  args: {},
  parameters: {}
};
export const Validation = {
  render: ValidationTemplateGroup.bind({}),
  name: "Validation for CheckboxGroup",
  args: {},
  parameters: {}
};

export const ValidationSingle = {
  render: ValidationTemplateSingle.bind({}),
  name: "Validation for standalone Checkbox",
  args: {},
  parameters: {}
};

export const OverrideInvalidFeedback = {
  render: ValidationTemplateGroup.bind({}),
  name: "Override default invalid feedback",
  args: { invalidFeedback: "Custom error message" },
  parameters: {}
};
