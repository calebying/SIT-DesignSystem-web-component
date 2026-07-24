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
              Survey
            </h5>
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Name" name="name" type="text" required hasFeedback="both"></sit-input>
              </div>
              <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
                <sit-input label="Email" name="email" type="email" required hasFeedback="both"></sit-input>
              </div>
            </div>
            <div>
              <sit-radio-group label="How satisfied are you?" name="satisfaction" required hasFeedback="both">
                <sit-radio value="very-satisfied">Very satisfied</sit-radio>
                <sit-radio value="satisfied">Satisfied</sit-radio>
                <sit-radio value="neutral">Neutral</sit-radio>
                <sit-radio value="dissatisfied">Dissatisfied</sit-radio>
              </sit-radio-group>
            </div>
            <div>
              <sit-radio-group label="How likely to recommend?" name="likelihood" required hasFeedback="both">
                <sit-radio value="very-likely">Very likely</sit-radio>
                <sit-radio value="likely">Likely</sit-radio>
                <sit-radio value="unlikely">Unlikely</sit-radio>
              </sit-radio-group>
            </div>
          </div>
          <div class="sit:flex sit:gap-layout-sm sit:items-center sit:justify-end">
            <sit-button type="reset" variant="ghost">Reset</sit-button>
            <sit-button type="submit">Submit Survey</sit-button>
          </div>
        </div>
      </form>
    </div>
  </div>
`;

export const FormFieldsRadio = {
  render: Template.bind({}),
  name: "Form Fields Radio",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
