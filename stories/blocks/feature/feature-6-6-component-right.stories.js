import { html } from "lit";

const Template = () => html`
  <!-- Feature Block — content left 6 cols / component right 6 cols
       Background : bg-surface-default
       Spacing    : py-layout-lg, gap-layout-md
       Alignment  : items-start (top-aligned)
       Component  : replace <sit-accordion> with any component
  -->
  <section class="sit:bg-default sit:py-layout-lg">
    <div class="sit-container">
      <div class="sit-grid sit:items-start" class="sit:gap-layout-md">
        <!-- Content — 6 cols, padding-right layout-md (component on right) -->
        <div
          class="feature-content sit-col-4 sit-col-sm-8 sit-col-lg-6 sit:flex sit:flex-col sit:items-start sit:text-left"
        >
          <!-- Typography group -->
          <div class="sit:mb-xl">
            <div
              class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
            >
              Overline Label
            </div>
            <h2
              class="sit:text-display-md sit:font-bold sit:leading-2-xl sit:tracking-tighter sit:text-display-default"
            >
              Feature Heading Goes Here
            </h2>
            <h5 class="sit:text-subtitle-md sit:font-light sit:leading-xs sit:tracking-normal sit:text-heading-subtle">
              Supporting subtitle text that provides context and detail for the feature being described.
            </h5>
          </div>
          <sit-button variant="primary" tone="neutral" size="md">Get Started</sit-button>
        </div>

        <!-- Component — 6 cols (replace with any component) -->
        <div class="feature-component sit-col-4 sit-col-sm-8 sit-col-lg-6">
          <sit-accordion>
            <sit-accordion-item open>
              <div slot="header">Why choose us</div>
              <div slot="content">
                We deliver fast, reliable, and accessible digital services built to government standards.
              </div>
            </sit-accordion-item>
            <sit-accordion-item>
              <div slot="header">How it works</div>
              <div slot="content">
                Sign up, verify your identity, and access all your services from a single dashboard.
              </div>
            </sit-accordion-item>
            <sit-accordion-item>
              <div slot="header">Who can use this</div>
              <div slot="content">
                Any Singapore resident or business with a valid Singpass account can get started.
              </div>
            </sit-accordion-item>
          </sit-accordion>
        </div>
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

export const FeatureComponentRight66 = {
  render: Template.bind({}),
  name: "Component right 6:6"
};
