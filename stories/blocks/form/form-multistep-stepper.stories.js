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
          <!-- Stepper -->
          <sit-stepper id="stepper"></sit-stepper>

          <!-- Step 1: Personal Information -->
          <div id="step-1" class="sit:flex sit:flex-col sit:gap-layout-md">
            <h5 class="sit:text-subtitle-lg sit:font-semibold sit:text-heading-default sit:mb-0">
              Personal Information
            </h5>

            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input
                  label="First name"
                  name="firstName"
                  type="text"
                  required
                  hasFeedback="both"
                  invalidFeedback="First name is required"
                ></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input
                  label="Last name"
                  name="lastName"
                  type="text"
                  required
                  hasFeedback="both"
                  invalidFeedback="Last name is required"
                ></sit-input>
              </div>
            </div>

            <div>
              <sit-input
                label="Email"
                name="email"
                type="email"
                required
                hasFeedback="both"
                invalidFeedback="Valid email required"
              ></sit-input>
            </div>

            <div>
              <sit-datepicker
                label="Date of birth"
                name="birthDate"
                required
                hasFeedback="both"
                invalidFeedback="Birth date required"
              ></sit-datepicker>
            </div>
          </div>

          <!-- Step 2: Contact Details -->
          <div id="step-2" class="sit:flex sit:flex-col sit:gap-layout-md" style="display: none;">
            <h5 class="sit:text-subtitle-lg sit:font-semibold sit:text-heading-default sit:mb-0">Contact Details</h5>

            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Phone" name="phone" type="tel" hasFeedback="text" hintText="Optional"></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input
                  label="Mobile"
                  name="mobile"
                  type="tel"
                  required
                  hasFeedback="both"
                  invalidFeedback="Mobile required"
                ></sit-input>
              </div>
            </div>

            <div>
              <sit-textarea
                label="Street address"
                name="address"
                required
                hasFeedback="both"
                invalidFeedback="Address required"
              ></sit-textarea>
            </div>

            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input
                  label="City"
                  name="city"
                  type="text"
                  required
                  hasFeedback="both"
                  invalidFeedback="City required"
                ></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input
                  label="Postal code"
                  name="postal"
                  type="text"
                  required
                  hasFeedback="both"
                  invalidFeedback="Postal code required"
                ></sit-input>
              </div>
            </div>

            <div>
              <sit-select
                label="Country"
                name="country"
                placeholder="Select a country"
                required
                hasFeedback="both"
                invalidFeedback="Country required"
              >
                <sit-select-option value="sg">Singapore</sit-select-option>
                <sit-select-option value="my">Malaysia</sit-select-option>
                <sit-select-option value="th">Thailand</sit-select-option>
              </sit-select>
            </div>
          </div>

          <!-- Step 3: Preferences -->
          <div id="step-3" class="sit:flex sit:flex-col sit:gap-layout-md" style="display: none;">
            <h5 class="sit:text-subtitle-lg sit:font-semibold sit:text-heading-default sit:mb-0">
              Preferences & Consent
            </h5>

            <div>
              <sit-radio-group
                label="Delivery method"
                name="delivery"
                required
                hasFeedback="both"
                invalidFeedback="Select a method"
              >
                <sit-radio value="pickup">Pickup</sit-radio>
                <sit-radio value="standard">Standard delivery</sit-radio>
                <sit-radio value="express">Express delivery</sit-radio>
              </sit-radio-group>
            </div>

            <div>
              <sit-checkbox-group label="Communication preferences" name="communication">
                <sit-checkbox value="email">Email updates</sit-checkbox>
                <sit-checkbox value="sms">SMS notifications</sit-checkbox>
                <sit-checkbox value="phone">Phone calls</sit-checkbox>
              </sit-checkbox-group>
            </div>

            <div>
              <sit-checkbox
                name="terms"
                value="agree"
                required
                hasFeedback="both"
                invalidFeedback="You must agree to proceed"
              >
                I agree to the terms and conditions
              </sit-checkbox>
            </div>

            <div>
              <sit-checkbox name="newsletter" value="subscribe">Subscribe to our newsletter</sit-checkbox>
            </div>
          </div>

          <!-- Form actions -->
          <div class="sit:flex sit:gap-layout-sm sit:items-center">
            <sit-button type="button" id="prevBtn" variant="ghost" style="display: none;">Previous</sit-button>
            <div class="sit:flex sit:gap-layout-sm" style="margin-left: auto;">
              <sit-button type="reset" variant="ghost">Cancel</sit-button>
              <sit-button type="button" id="nextBtn">Next</sit-button>
              <sit-button type="submit" id="submitBtn" style="display: none;">Submit</sit-button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
`;

export const FormMultistepStepper = {
  render: Template.bind({}),
  name: "Form Multi-step",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const stepper = canvasElement.querySelector("#stepper");
    const nextBtn = canvasElement.querySelector("#nextBtn");
    const prevBtn = canvasElement.querySelector("#prevBtn");
    const submitBtn = canvasElement.querySelector("#submitBtn");
    const form = canvasElement.querySelector("form");
    const totalSteps = 3;

    stepper.steps = [
      { stepHeader: "Personal Info", component: "personal-info" },
      { stepHeader: "Contact Details", component: "contact-details" },
      { stepHeader: "Preferences", component: "preferences" }
    ];
    stepper.activeStep = 0;

    function showStep(stepIndex) {
      for (let i = 1; i <= totalSteps; i++) {
        const stepEl = canvasElement.querySelector(`#step-${i}`);
        if (stepEl) stepEl.style.display = "none";
      }

      const currentStepEl = canvasElement.querySelector(`#step-${stepIndex + 1}`);
      if (currentStepEl) currentStepEl.style.display = "flex";

      prevBtn.style.display = stepIndex === 0 ? "none" : "block";
      nextBtn.style.display = stepIndex === totalSteps - 1 ? "none" : "block";
      submitBtn.style.display = stepIndex === totalSteps - 1 ? "block" : "none";
    }

    stepper.addEventListener("Sit-arrived", () => {
      showStep(stepper.activeStep);
    });

    nextBtn.addEventListener("click", () => {
      stepper.nextStep();
    });

    prevBtn.addEventListener("click", () => {
      stepper.previousStep();
    });

    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Form submitted!");
    });

    showStep(0);
  }
};
