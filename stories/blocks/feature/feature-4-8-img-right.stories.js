import { html } from "lit";

const Template = () => html`
  <style>
    @media (max-width: 1023px) {
      .feature-img {
        order: -1;
        padding-bottom: var(--Sit-spacing-layout-md);
      }
    }
    @media (min-width: 1024px) {
      .feature-content {
        padding-right: var(--Sit-spacing-layout-md);
      }
    }
  </style>

  <!-- Feature Block — content left 8 cols / image right 4 cols
       Background : bg-surface-default
       Spacing    : py-layout-lg, gap-layout-md
       Content    : padding-left layout-md (outer edge, image on right)
  -->
  <section class="sit:bg-default sit:py-layout-lg">
    <div class="sit-container">
      <div class="sit-grid sit:items-center sit:gap-layout-md">
        <!-- Content — 8 cols, padding-left layout-md (image on right) -->
        <div
          class="feature-content sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:flex sit:flex-col sit:items-start sit:text-left"
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

        <!-- Image — 4 cols -->
        <div class="feature-img sit-col-4 sit-col-sm-8 sit-col-lg-4">
          <img
            src="/placeholder-Sit.png"
            alt=""
            style="width: 100%; aspect-ratio: 3 / 2; object-fit: cover; display: block; border-radius: var(--Sit-border-radius-xl);"
          />
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

export const FeatureImageRight48 = {
  render: Template.bind({}),
  name: "Image right 4:8"
};
