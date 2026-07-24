import { html } from "lit";

const Template = () => html`
  <!-- Hero Block (background image — light overlay)
       Sizing      : min-height calc(100vh - 108px)
       Background  : full-cover image with light translucent overlay
       Text        : fixed-dark (always dark regardless of theme)
       Layout      : left-aligned content, no container, no outer padding
  -->
  <section
    class="sit:flex sit:items-center sit:min-h-[640px]"
    style="
      position: relative;
      background-image: url('placeholder-Sit.png');
      background-size: cover;
      background-position: center;
    "
  >
    <!-- Light overlay -->
    <div class="sit:bg-translucent-fixed-light" style="position: absolute; inset: 0;"></div>

    <!-- Container — keeps content within grid at all zoom levels -->
    <div class="sit-container" style="position: relative; z-index: 1;">
      <div class="sit-grid">
        <div
          class="sit-col-4 sit-col-sm-8 sit-col-lg-6 sit:flex sit:flex-col sit:items-start sit:text-left sit:py-layout-lg"
        >
          <!-- Typography group — mb-xl separates group from button -->
          <div class="sit:mb-xl">
            <!-- Overline — overline-md semibold, fixed-dark -->
            <div
              class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-fixed-dark sit:mb-xs"
            >
              Singapore Government Digital Services
            </div>

            <!-- Headline — display-lg bold, fixed-dark -->
            <h1 class="sit:text-display-lg sit:font-bold sit:leading-3-xl sit:tracking-tighter sit:text-fixed-dark">
              One Platform. Simpler Living.
            </h1>

            <!-- Description — heading-sm light, h4, fixed-dark -->
            <h4 class="sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight sit:text-fixed-dark">
              Access government services anytime, anywhere. Built for residents, designed for ease.
            </h4>
          </div>
          <!-- end typography group -->

          <!-- Button slot — size md -->
          <sit-button variant="primary" tone="neutral" size="md">Get Started</sit-button>
        </div>
        <!-- end content col -->
      </div>
      <!-- end grid -->
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

export const HeroBgImageLight = {
  render: Template.bind({}),
  name: "Hero background image light"
};
