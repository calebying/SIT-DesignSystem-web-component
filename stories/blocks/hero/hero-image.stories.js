import { html } from "lit";

const Template = () => html`
  <!-- Hero Block (image right)
       Sizing   : min-height calc(100vh - 108px)
       Color    : bg-surface-default
       Spacing  : py-layout-lg (top + bottom)
       Layout   : 50/50 split, gap-layout-md
  -->
  <section class="sit:bg-default sit:py-layout-lg sit:min-h-[640px]">
    <!-- Container — constrains width and centers block on page -->
    <div class="sit-container">
      <!-- Two-column row: left content + right image, gap-layout-md -->
      <div class="sit:flex sit:items-center sit:gap-layout-md">
        <!-- Left: content slot (50%), padding-right layout-md -->
        <div
          class="sit:flex sit:flex-col sit:items-start sit:text-left sit:max-w-text"
          style="width: 50%; padding-top: var(--Sit-spacing-layout-xs); padding-right: var(--Sit-spacing-layout-md);"
        >
          <!-- Typography group — mb-xl separates group from button -->
          <div class="sit:mb-xl">
            <!-- Overline — overline-md semibold, label color default, mb-xs -->
            <div
              class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
            >
              Singapore Government Digital Services
            </div>

            <!-- Headline — display-lg bold, display color default -->
            <h1
              class="sit:text-display-lg sit:font-bold sit:leading-3-xl sit:tracking-tighter sit:text-display-default"
            >
              One Platform. Simpler Living.
            </h1>

            <!-- Description — heading-sm light, h4 -->
            <h4 class="sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight sit:text-heading-subtle">
              Access government services anytime, anywhere. Built for residents, designed for ease.
            </h4>
          </div>
          <!-- end typography group -->

          <!-- Button slot — size md -->
          <sit-button variant="primary" tone="neutral" size="md">Get Started</sit-button>
        </div>
        <!-- end left content -->

        <!-- Right: image (50%), 1:1 ratio -->
        <div style="width: 50%;">
          <img
            src="/placeholder-Sit.png"
            alt="Government digital services"
            style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; border-radius: var(--Sit-border-radius-xl);"
          />
        </div>
        <!-- end right image -->
      </div>
      <!-- end two-column row -->
    </div>
    <!-- end container -->
  </section>
`;

export default {
  title: "Blocks/Hero",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const HeroImage = {
  render: Template.bind({}),
  name: "Hero image"
};
