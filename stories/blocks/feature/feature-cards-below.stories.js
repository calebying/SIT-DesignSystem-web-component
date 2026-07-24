import { html } from "lit";

const Template = () => html`
  <!-- Feature Block — content top / 3 tinted cards below
       Background : bg-surface-raised
       Spacing    : py-layout-lg, gap-layout-md
       Cards      : tinted, hideBorder, stretchedLink
  -->
  <section class="sit:bg-default sit:py-layout-lg">
    <div class="sit-container">
      <div class="sit:flex sit:flex-col" class="sit:gap-layout-md">
        <!-- Content -->
        <div
          class="sit:flex sit:flex-col sit:items-start sit:text-left"
          style="padding-bottom: var(--Sit-spacing-layout-md);"
        >
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

        <!-- 3 tinted cards in a row (replace with any component) -->
        <div class="sit-grid" class="sit:gap-layout-md">
          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
            <sit-card tinted hideBorder stretchedLink>
              <span slot="subtitle">FEATURE</span>
              <span slot="title">Card Title One</span>
              <span slot="description"
                >Supporting description text that explains what this feature offers to the user.</span
              >
              <sit-link slot="footer">
                <a href="#" aria-label="Learn more">Learn more <sit-icon name="arrow-right"></sit-icon></a>
              </sit-link>
            </sit-card>
          </div>

          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
            <sit-card tinted hideBorder stretchedLink>
              <span slot="subtitle">FEATURE</span>
              <span slot="title">Card Title Two</span>
              <span slot="description"
                >Supporting description text that explains what this feature offers to the user.</span
              >
              <sit-link slot="footer">
                <a href="#" aria-label="Learn more">Learn more <sit-icon name="arrow-right"></sit-icon></a>
              </sit-link>
            </sit-card>
          </div>

          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
            <sit-card tinted hideBorder stretchedLink>
              <span slot="subtitle">FEATURE</span>
              <span slot="title">Card Title Three</span>
              <span slot="description"
                >Supporting description text that explains what this feature offers to the user.</span
              >
              <sit-link slot="footer">
                <a href="#" aria-label="Learn more">Learn more <sit-icon name="arrow-right"></sit-icon></a>
              </sit-link>
            </sit-card>
          </div>
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

export const FeatureCardsBelow = {
  render: Template.bind({}),
  name: "Cards below"
};
