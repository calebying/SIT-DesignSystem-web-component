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
              All Full-Width
            </h5>
            <div>
              <sit-textarea
                label="Description"
                name="description"
                placeholder="Enter description..."
                required
                hasFeedback="both"
              ></sit-textarea>
            </div>
            <div>
              <sit-radio-group label="Category" name="category" required hasFeedback="both">
                <sit-radio value="category-a">Category A</sit-radio>
                <sit-radio value="category-b">Category B</sit-radio>
                <sit-radio value="category-c">Category C</sit-radio>
              </sit-radio-group>
            </div>
            <div>
              <sit-checkbox-group label="Options" name="options" required hasFeedback="both">
                <sit-checkbox value="option-1">Option 1</sit-checkbox>
                <sit-checkbox value="option-2">Option 2</sit-checkbox>
                <sit-checkbox value="option-3">Option 3</sit-checkbox>
              </sit-checkbox-group>
            </div>
            <div>
              <sit-textarea
                label="Additional comments"
                name="comments"
                placeholder="Any additional comments..."
              ></sit-textarea>
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

export const FullwidthOnly = {
  render: Template.bind({}),
  name: "Full-width only",
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
