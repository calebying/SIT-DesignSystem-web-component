import { html } from "lit";

export default {
  parameters: { controls: { disable: true }, actions: { disable: true }, interactions: { disable: true } },
  title: "Blocks/Form"
};

const Template = () => html`
  <div class="sit-container sit:py-layout-md">
    <div class="sit-grid sit:gap-layout-md">
      <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-center-8 sit-col-xl-center-8 sit-col-2-xl-center-8">
        <div class="sit:flex sit:flex-col sit:gap-layout-lg">
          <div class="sit:flex sit:flex-col sit:gap-layout-md">
            <h5
              class="sit:text-subtitle-lg sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0"
            >
              Personal Information
            </h5>
            <div>
              <sit-input label="First name" name="firstName" type="text" required hasFeedback="both"></sit-input>
            </div>
            <div>
              <sit-input label="Last name" name="lastName" type="text" required hasFeedback="both"></sit-input>
            </div>
            <div>
              <sit-input label="Email address" name="email" type="email" required hasFeedback="both"></sit-input>
            </div>
            <div>
              <sit-input label="Phone number" name="phone" type="tel" required hasFeedback="both"></sit-input>
            </div>
            <div>
              <sit-textarea
                label="Additional comments"
                name="comments"
                placeholder="Enter any additional information..."
                hasFeedback="both"
              ></sit-textarea>
            </div>
          </div>
          <div class="sit:flex sit:flex-col sit:gap-layout-md">
            <h5
              class="sit:text-subtitle-lg sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0"
            >
              Preferences
            </h5>
            <div>
              <sit-radio-group
                label="Communication preference"
                name="communicationPreference"
                required
                hasFeedback="both"
              >
                <sit-radio value="email">Email</sit-radio>
                <sit-radio value="sms">SMS</sit-radio>
                <sit-radio value="phone">Phone</sit-radio>
              </sit-radio-group>
            </div>
            <div>
              <sit-checkbox-group label="Interests" name="interests" required hasFeedback="both">
                <sit-checkbox value="technology">Technology</sit-checkbox>
                <sit-checkbox value="business">Business</sit-checkbox>
                <sit-checkbox value="design">Design</sit-checkbox>
                <sit-checkbox value="marketing">Marketing</sit-checkbox>
              </sit-checkbox-group>
            </div>
          </div>
          <div class="sit:flex sit:gap-layout-sm sit:items-center sit:justify-end">
            <sit-button type="reset" variant="ghost">Cancel</sit-button>
            <sit-button type="submit">Submit</sit-button>
          </div>
        </div>
      </form>
    </div>
  </div>
`;

export const BasicCenter = {
  render: Template.bind({}),
  name: "Basic Center",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
