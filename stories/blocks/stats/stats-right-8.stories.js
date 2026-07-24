import { html } from "lit";

const Template = () => html`
  <style>
    .stats-inner {
      display: flex;
      flex-direction: column;
      gap: var(--Sit-gap-layout-md);
    }
    @media (width >= 1024px) {
      .stats-heading {
        padding-right: var(--Sit-spacing-layout-md);
      }
    }
  </style>

  <!-- Stats Block — heading left 4 cols + 4 stats right 8 cols (flex row)
       Background : bg-surface-default
       Spacing    : py-layout-md
       Split      : lg:4/8
  -->
  <section class="sit:bg-default sit:py-layout-md">
    <div class="sit-container">
      <div class="sit-grid" style="gap: var(--Sit-gap-layout-md); align-items: start;">
        <!-- Heading — left 4 cols -->
        <div class="sit-col-4 sit-col-sm-8 sit-col-md-4 sit-col-lg-4 stats-heading">
          <div
            class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
          >
            By the Numbers
          </div>
          <h2 class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default">
            Impact at a Glance
          </h2>
          <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle sit:mb-0">
            Key metrics measured over the past 12 months across all participating agencies.
          </p>
        </div>

        <!-- 4 stats — right 8 cols in flex row -->
        <div class="sit-col-4 sit-col-sm-8 sit-col-md-4 sit-col-lg-8">
          <div class="stats-inner sit:flex sit:flex-wrap sit:gap-layout-md">
            <div class="sit:flex sit:flex-col sit:items-start sit:flex-1 md:sit:pr-layout-xs">
              <div
                class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default"
              >
                2.4M
              </div>
              <h5
                class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default"
              >
                Active Users
              </h5>
              <p
                class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-body-subtle sit:mb-0"
              >
                Residents actively using the platform to access government services each month.
              </p>
            </div>

            <div class="sit:flex sit:flex-col sit:items-start sit:flex-1 md:sit:pr-layout-xs">
              <div
                class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default"
              >
                400+
              </div>
              <h5
                class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default"
              >
                Government Services
              </h5>
              <p
                class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-body-subtle sit:mb-0"
              >
                Integrated services from agencies across the public sector.
              </p>
            </div>

            <div class="sit:flex sit:flex-col sit:items-start sit:flex-1 md:sit:pr-layout-xs">
              <div
                class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default"
              >
                99.9%
              </div>
              <h5
                class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default"
              >
                Platform Uptime
              </h5>
              <p
                class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-body-subtle sit:mb-0"
              >
                Consistently high availability so residents can access services anytime.
              </p>
            </div>

            <div class="sit:flex sit:flex-col sit:items-start sit:flex-1 md:sit:pr-layout-xs">
              <div
                class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default"
              >
                16
              </div>
              <h5
                class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default"
              >
                Partner Agencies
              </h5>
              <p
                class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-body-subtle sit:mb-0"
              >
                Public agencies contributing services and data to the shared platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export default {
  title: "Blocks/Stats",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const StatsRight8 = {
  render: Template.bind({}),
  name: "Statistic right 8 columns"
};
