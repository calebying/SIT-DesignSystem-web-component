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
              Basic Info
            </h5>
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Name" name="name" type="text" required hasFeedback="both"></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Email" name="email" type="email" required hasFeedback="both"></sit-input>
              </div>
            </div>
            <div class="sit-grid sit:gap-layout-md">
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
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-datepicker label="Date of birth" name="dob" required hasFeedback="both"></sit-datepicker>
              </div>
            </div>
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-quantity-toggle
                  label="Tickets"
                  name="tickets"
                  value="1"
                  min="1"
                  max="10"
                  required
                  hasFeedback="both"
                ></sit-quantity-toggle>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-combo-box placeholder="Search or select..." label="Event" name="event" required hasFeedback="both">
                  <sit-combo-box-option value="event-1">Event 1</sit-combo-box-option>
                  <sit-combo-box-option value="event-2">Event 2</sit-combo-box-option>
                </sit-combo-box>
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
              <sit-textarea
                label="Special requests"
                name="requests"
                placeholder="Any special requests?..."
                hasFeedback="both"
              ></sit-textarea>
            </div>
            <div>
              <sit-radio-group label="Delivery method" name="delivery" required hasFeedback="both">
                <sit-radio value="pickup">Pickup</sit-radio>
                <sit-radio value="delivery">Delivery</sit-radio>
                <sit-radio value="courier">Courier</sit-radio>
              </sit-radio-group>
            </div>
            <div>
              <sit-checkbox-group label="Services" name="services" required hasFeedback="both">
                <sit-checkbox value="service-1">Service 1</sit-checkbox>
                <sit-checkbox value="service-2">Service 2</sit-checkbox>
                <sit-checkbox value="service-3">Service 3</sit-checkbox>
              </sit-checkbox-group>
            </div>
            <div>
              <sit-combo-box
                placeholder="Search or select..."
                label="Interests"
                name="interests"
                multiSelect="true"
                placeholder="Select interests..."
                hasFeedback="both"
              >
                <sit-combo-box-option value="tech">Technology</sit-combo-box-option>
                <sit-combo-box-option value="design">Design</sit-combo-box-option>
                <sit-combo-box-option value="business">Business</sit-combo-box-option>
              </sit-combo-box>
            </div>
            <div>
              <sit-file-upload label="Attachment" name="attachment" hasFeedback="both">Choose files</sit-file-upload>
            </div>
          </div>
          <div class="sit:flex sit:gap-layout-sm sit:items-center sit:justify-end">
            <sit-button type="reset" variant="ghost">Reset</sit-button>
            <sit-button type="submit">Submit</sit-button>
          </div>
        </div>
      </form>
    </div>
  </div>
`;

export const AllTypes = {
  render: Template.bind({}),
  name: "All Types",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
