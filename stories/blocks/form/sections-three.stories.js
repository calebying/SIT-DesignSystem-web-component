import { html } from "lit";

export default {
  parameters: { controls: { disable: true }, actions: { disable: true }, interactions: { disable: true } },
  title: "Blocks/Form"
};

const Template = () => html`
  <div class="sit-container sit:py-layout-md">
    <div class="sit-grid sit:gap-layout-md">
      <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">
        <div class="sit:flex sit:flex-col sit:gap-layout-lg">
          <div class="sit:flex sit:flex-col sit:gap-layout-md">
            <h5
              class="sit:text-subtitle-lg sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0"
            >
              Personal Information
            </h5>
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="First name" name="firstName" type="text" required hasFeedback="both"></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Last name" name="lastName" type="text" required hasFeedback="both"></sit-input>
              </div>
            </div>
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Email" name="email" type="email" required hasFeedback="both"></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-datepicker label="Date of birth" name="dob" required hasFeedback="both"></sit-datepicker>
              </div>
            </div>
          </div>
          <div class="sit:flex sit:flex-col sit:gap-layout-md">
            <h5
              class="sit:text-subtitle-lg sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0"
            >
              Address
            </h5>
            <div>
              <sit-textarea
                label="Full address"
                name="address"
                placeholder="Street, City, Country..."
                required
                hasFeedback="both"
              ></sit-textarea>
            </div>
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Postal code" name="postalCode" type="text" required hasFeedback="both"></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-select
                  placeholder="Select an option"
                  label="Country"
                  name="country"
                  placeholder="Select country"
                  required
                  hasFeedback="both"
                >
                  <sit-select-option value="sg">Singapore</sit-select-option>
                  <sit-select-option value="my">Malaysia</sit-select-option>
                </sit-select>
              </div>
            </div>
          </div>
          <div class="sit:flex sit:flex-col sit:gap-layout-md">
            <h5
              class="sit:text-subtitle-lg sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0"
            >
              Preferences
            </h5>
            <div>
              <sit-checkbox-group label="Interests" name="interests" hasFeedback="both">
                <sit-checkbox value="tech">Technology</sit-checkbox>
                <sit-checkbox value="design">Design</sit-checkbox>
                <sit-checkbox value="business">Business</sit-checkbox>
              </sit-checkbox-group>
            </div>
            <div>
              <sit-radio-group label="Notification preference" name="notificationPref" required hasFeedback="both">
                <sit-radio value="email">Email</sit-radio>
                <sit-radio value="push">Push</sit-radio>
              </sit-radio-group>
            </div>
            <div>
              <sit-select
                placeholder="Select an option"
                label="Communication frequency"
                name="frequency"
                placeholder="Select frequency"
                hasFeedback="both"
              >
                <sit-select-option value="daily">Daily</sit-select-option>
                <sit-select-option value="weekly">Weekly</sit-select-option>
                <sit-select-option value="monthly">Monthly</sit-select-option>
              </sit-select>
            </div>
          </div>
          <div class="sit:flex sit:gap-layout-sm sit:items-center sit:justify-end">
            <sit-button type="reset" variant="ghost">Reset</sit-button>
            <sit-button type="submit">Complete Registration</sit-button>
          </div>
        </div>
      </form>
    </div>
  </div>
`;

export const SectionsThree = {
  render: Template.bind({}),
  name: "Sections Three",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
