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
              Personal Details
            </h5>
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="First name" name="firstName" type="text" required hasFeedback="both"></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Last name" name="lastName" type="text" required hasFeedback="both"></sit-input>
              </div>
            </div>
            <div>
              <sit-textarea label="Bio" name="bio" placeholder="Tell us about yourself..."></sit-textarea>
            </div>
          </div>
          <div class="sit:flex sit:flex-col sit:gap-layout-md">
            <h5
              class="sit:text-subtitle-lg sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0"
            >
              Contact Preferences
            </h5>
            <div>
              <sit-radio-group label="Preferred method" name="preference" required hasFeedback="both">
                <sit-radio value="email">Email</sit-radio>
                <sit-radio value="phone">Phone</sit-radio>
                <sit-radio value="sms">SMS</sit-radio>
              </sit-radio-group>
            </div>
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Phone" name="phone" type="tel" required hasFeedback="both"></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-datepicker label="Preferred date" name="prefDate" hasFeedback="both"></sit-datepicker>
              </div>
            </div>
          </div>
          <div class="sit:flex sit:gap-layout-sm sit:items-center sit:justify-end">
            <sit-button type="reset" variant="ghost">Reset</sit-button>
            <sit-button type="submit">Save</sit-button>
          </div>
        </div>
      </form>
    </div>
  </div>
`;

export const SectionsTwo = {
  render: Template.bind({}),
  name: "Sections Two",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
