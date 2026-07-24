import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args => {
  return html`
    <div class="sit:flex sit:flex-col sit:gap-layout-xs">
      <sit-checkbox-group
        label=${ifDefined(args.label)}
        invalidFeedback=${ifDefined(args.invalidFeedback)}
        ?hasFeedback=${args.hasFeedback}
        hintText=${ifDefined(args.hintText)}
        ?required=${args.required}
        ?disabled=${args.disabled}
        name=${ifDefined(args.name)}
        ?invalid=${args.invalid}
      >
        <sit-checkbox value="watermelon">Watermelon</sit-checkbox>
        <sit-checkbox value="apple">Apple</sit-checkbox>
        <sit-checkbox value="lychee">Lychee</sit-checkbox>
      </sit-checkbox-group>
      <sit-checkbox
        name=${ifDefined(args.name)}
        ?disabled=${args.disabled}
        value=${ifDefined(args.value)}
        ?required=${args.required}
        ?checked=${args.checked}
        ?invalid=${args.invalid}
        ?indeterminate=${args.indeterminate}
        >Individual Checkbox. I agree to ...Lorem ipsum dolor sit amet. Et itaque natus sit laborum voluptatem aut rerum
        ducimus eum tenetur molestias quo reiciendis ratione aut eaque voluptates est
      </sit-checkbox>
    </div>
  `;
};
export const args = {
  name: "checkboxExample1",
  value: "check-me",
  hintText: "Check at least one option",
  label: "CheckboxGroup Label"
};

export const parameters = {};

export const play = undefined;
