import "../../mocks/stepper.ts";
import { html } from "lit";

const ClickableTemplate = args => {
  return html`
    <div class="d-flex-column">
      <div>
        <h5>Steps indicator are not clickable</h5>
        <sit-stepper activeStep="2">
          <sit-step stepHeader="Personal Details">
            <div>Description</div>
          </sit-step>
          <sit-step stepHeader="Address">
            <div>Description</div>
          </sit-step>
          <sit-step stepHeader="Review">
            <div>Description</div>
          </sit-step>
        </sit-stepper>
      </div>
      <br />
      <div>
        <h5>Steps indicator are clickable</h5>
        <sit-stepper activeStep="2" clickable>
          <sit-step stepHeader="Personal Details">
            <div>Description</div>
          </sit-step>
          <sit-step stepHeader="Address">
            <div>Description</div>
          </sit-step>
          <sit-step stepHeader="Review">
            <div>Description</div>
          </sit-step>
        </sit-stepper>
      </div>
    </div>
  `;
};

const StepComponentTemplate = () => html`
  <sit-stepper activeStep="0">
    <sit-step stepHeader="Personal Details">
      <div>Description</div>
    </sit-step>
    <sit-step stepHeader="Address">
      <div>Description</div>
    </sit-step>
    <sit-step stepHeader="Review">
      <div>Description</div>
    </sit-step>
  </sit-stepper>
`;

const StepComponentClickableTemplate = () => html`
  <sit-stepper activeStep="1" clickable>
    <sit-step stepHeader="Personal Details">
      <div>Description</div>
    </sit-step>
    <sit-step stepHeader="Address">
      <div>Description</div>
    </sit-step>
    <sit-step stepHeader="Review">
      <div>Description</div>
    </sit-step>
  </sit-stepper>
`;

export const Orientation = {
  render: Template.bind({}),
  name: "Orientation",
  args: { ...args, orientation: "vertical" },
  parameters: {}
};

export const Clickable = {
  render: ClickableTemplate.bind({}),
  name: "Clickable",
  args,
  parameters: {}
};

export const StepComponent = {
  render: StepComponentTemplate.bind({}),
  name: "With Sit-step Children",
  args: {},
  parameters: {}
};

export const StepComponentClickable = {
  render: StepComponentClickableTemplate.bind({}),
  name: "With Sit-step Children (Clickable)",
  args: {},
  parameters: {}
};

const StepStatesTemplate = () => html`
  <sit-stepper activeStep="1" clickable>
    <sit-step stepHeader="Personal Details" completed>
      <div>Completed step</div>
    </sit-step>
    <sit-step stepHeader="Address" active>
      <div>Active step</div>
    </sit-step>
    <sit-step stepHeader="Review" disabled>
      <div>Disabled step</div>
    </sit-step>
  </sit-stepper>
`;

export const StepStates = {
  render: StepStatesTemplate.bind({}),
  name: "Step States",
  args: {},
  parameters: {}
};

const SlottedClickableTemplate = () => html`
  <sit-stepper activeStep="1" clickable>
    <sit-step stepHeader="Personal Details">
      <div>
        Description
        <sit-link size="sm">
          <a href="#" data-clickable>Learn more</a>
        </sit-link>
      </div>
    </sit-step>
    <sit-step stepHeader="Address">
      <div>Please fill the form with your current address.</div>
      <sit-button size="sm" data-clickable @click=${() => alert("Button clicked")}>Action</sit-button>
    </sit-step>
    <sit-step stepHeader="Review">
      <div>Description</div>
    </sit-step>
  </sit-stepper>
`;

export const SlottedClickable = {
  render: SlottedClickableTemplate.bind({}),
  name: "Slotted Clickable Items",
  args: {},
  parameters: {}
};

const CustomIconTemplate = () => html`
  <sit-stepper activeStep="1">
    <sit-step stepHeader="Personal Details" iconName="user-circle">
      <div>Provide your personal information.</div>
    </sit-step>
    <sit-step stepHeader="Address" iconName="geo-alt">
      <div>Enter your address and contact details.</div>
    </sit-step>
    <sit-step stepHeader="Review" iconName="check-circle-fill">
      <div>Review all details before submitting.</div>
    </sit-step>
  </sit-stepper>
`;

export const CustomIcon = {
  render: CustomIconTemplate.bind({}),
  name: "Custom Icon",
  args: {},
  parameters: {}
};

const MockStepperTemplate = () => html`<mock-stepper></mock-stepper>`;

export const StepperExample = {
  render: MockStepperTemplate.bind({}),
  name: "Stepper example",
  args: {},
  parameters: {}
};
