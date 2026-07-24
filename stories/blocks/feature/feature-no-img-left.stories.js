import { html } from "lit";

const Template = () => html`
  <!-- Feature Block — no image, left-aligned
       Background : bg-surface-default
       Spacing    : py-layout-lg
  -->
  <section class="sit:bg-default sit:py-layout-lg">
    <div class="sit-container">
      <div class="sit:flex sit:flex-col sit:items-start sit:text-left">
        <!-- Typography group -->
        <div class="sit:mb-xl">
          <div
            class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
          >
            Overline Label
          </div>
          <h2 class="sit:text-display-md sit:font-bold sit:leading-2-xl sit:tracking-tighter sit:text-display-default">
            Feature Heading Goes Here
          </h2>
          <h5 class="sit:text-subtitle-md sit:font-light sit:leading-xs sit:tracking-normal sit:text-heading-subtle">
            Supporting subtitle text that provides context and detail for the feature being described.
          </h5>
        </div>
        <sit-button variant="primary" tone="neutral" size="md">Get Started</sit-button>
      </div>
    </div>
  </section>
`;

export default {
  title: "Blocks/Feature",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const FeatureNoImageLeft = {
  render: Template.bind({}),
  name: "No image left"
};
