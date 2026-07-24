import { html } from "lit";

const Template = () => html`
  <style>
    .stats-row {
      display: flex;
      flex-wrap: wrap;
      gap: var(--Sit-gap-layout-md);
    }
    .stats-row > * {
      width: 100%;
    }
    @media (width >= 768px) {
      .stats-row {
        flex-wrap: nowrap;
      }
      .stats-row > * {
        flex: 1;
        width: auto;
      }
    }
  </style>

  <sit-masthead></sit-masthead>
  <sit-mainnav>
    <strong slot="brand">Logo</strong>
  </sit-mainnav>

  <!--   PAGE HEADER - breadcrumb + overline + h1 + body-lg               -->
  <section class="sit:bg-alternate sit:py-layout-md">
    <div class="sit-container">
      <div
        class="sit:flex sit:flex-col sit:items-start sit:text-left sit:gap-layout-md"
        style="max-width: var(--Sit-text-max-width);"
      >
        <sit-breadcrumb>
          <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
          <sit-breadcrumb-item><a href="#">Stories</a></sit-breadcrumb-item>
          <sit-breadcrumb-item active><a href="#">LifeSG Parenting Journey</a></sit-breadcrumb-item>
        </sit-breadcrumb>

        <div>
          <div
            class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
          >
            Success Story
          </div>
          <h1 class="sit:text-heading-xl sit:font-bold sit:leading-xl sit:tracking-tight sit:text-heading-default">
            How LifeSG Helped 180,000 New Parents Navigate Government Services
          </h1>
          <p class="sit:text-body-lg sit:leading-md sit:tracking-normal sit:text-body-subtle sit:mb-0">
            A look at how the Parenting Journey feature reduced time-to-access for critical family services by 60% in
            its first year.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!--   INTRODUCTION - body-lg paragraphs                                 -->
  <section class="sit:bg-default sit:py-layout-md">
    <div class="sit-container">
      <div style="max-width: var(--Sit-text-max-width);">
        <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          When a child is born in Singapore, parents suddenly find themselves navigating a maze of government agencies -
          the Immigration and Checkpoints Authority for the birth certificate, HDB for housing grants, Baby Bonus from
          MSF, and CPF contributions. Each carries its own eligibility rules, deadlines, and application portals.
        </p>
        <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default sit:mb-0">
          The LifeSG Parenting Journey was built to change this. By aggregating services across agencies into a single,
          guided flow, it removed the burden of discovery from parents during one of the most demanding periods of their
          lives.
        </p>
      </div>
    </div>
  </section>

  <!--   CHALLENGE - h2 + body-md + ol list                                -->
  <section class="sit:bg-default sit:py-layout-md">
    <div class="sit-container">
      <div style="max-width: var(--Sit-text-max-width);">
        <h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight sit:text-heading-default">
          The Challenge
        </h2>
        <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          User research conducted in 2022 revealed three persistent pain points that parents faced when trying to access
          post-birth government services.
        </p>

        <ol style="padding-left: var(--Sit-spacing-lg); margin: 0;">
          <li class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
            <strong>Fragmented entry points.</strong> Parents had to know which agency offered each benefit before they
            could begin. Many missed out on grants simply because they were unaware of them.
          </li>
          <li class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
            <strong>Repeated data entry.</strong> The same personal and household details were required across six
            separate agency forms, leading to fatigue and errors.
          </li>
          <li class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
            <strong>No status visibility.</strong> Once applications were submitted, parents had no unified view of
            their status across agencies - each required a separate login to check progress.
          </li>
        </ol>
      </div>
    </div>
  </section>

  <!--   SOLUTION - h2 + h3 subsections + body-md                          -->
  <section class="sit:bg-default sit:py-layout-md">
    <div class="sit-container">
      <div style="max-width: var(--Sit-text-max-width);">
        <h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight sit:text-heading-default">
          The Solution
        </h2>

        <h3 class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default">
          A unified parenting checklist
        </h3>
        <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          LifeSG introduced a dynamic checklist that surfaces relevant services based on the child's date of birth and
          the family's profile. Parents see only what applies to them, with clear deadlines and direct links to each
          application - no knowledge of agency structure required.
        </p>

        <h3 class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default">
          Pre-filled forms with Myinfo
        </h3>
        <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          By integrating Myinfo, the platform pre-populates personal and household data across all participating agency
          forms. Parents confirm rather than retype - reducing average form completion time from 18 minutes to under 4
          minutes.
        </p>

        <h3 class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default">
          Cross-agency status tracking
        </h3>
        <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default sit:mb-0">
          A single dashboard aggregates application statuses from ICA, HDB, CPF, and MSF. Push notifications alert
          parents when action is required, replacing the need to check multiple portals independently.
        </p>
      </div>
    </div>
  </section>

  <!--   RESULTS - h2 + display-sm stats + h5 labels + body-sm             -->
  <section class="sit:bg-alternate sit:py-layout-md">
    <div class="sit-container">
      <div style="max-width: var(--Sit-text-max-width);">
        <div class="sit:mb-layout-md">
          <h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight sit:text-heading-default">
            Results After 12 Months
          </h2>
          <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle sit:mb-0">
            Measured against a baseline cohort from the year prior to launch.
          </p>
        </div>

        <div class="stats-row">
          <div class="sit:flex sit:flex-col sit:items-start" style="padding-right: var(--Sit-spacing-layout-xs);">
            <div class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default">
              60%
            </div>
            <h5
              class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default"
            >
              Reduction in time-to-access
            </h5>
            <p
              class="sit:text-label-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-label-subtle sit:mb-0"
            >
              Average time from birth registration to first benefit received fell from 14 days to 5.5 days.
            </p>
          </div>

          <div class="sit:flex sit:flex-col sit:items-start" style="padding-right: var(--Sit-spacing-layout-xs);">
            <div class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default">
              180K
            </div>
            <h5
              class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default"
            >
              Parents onboarded
            </h5>
            <p
              class="sit:text-label-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-label-subtle sit:mb-0"
            >
              Representing 94% of all new births registered in Singapore during the period.
            </p>
          </div>

          <div class="sit:flex sit:flex-col sit:items-start" style="padding-right: var(--Sit-spacing-layout-xs);">
            <div class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default">
              4.7
            </div>
            <h5
              class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default"
            >
              Satisfaction score (out of 5)
            </h5>
            <p
              class="sit:text-label-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-label-subtle sit:mb-0"
            >
              Based on 12,400 post-task survey responses collected in-app.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--   CLOSING - body-md + h6 caption + CTA right-aligned               -->
  <section class="sit:bg-default sit:py-layout-md">
    <div class="sit-container">
      <div style="max-width: var(--Sit-text-max-width);">
        <h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight sit:text-heading-default">
          What is next
        </h2>

        <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          Building on the success of the Parenting Journey, the team is now expanding the life-moments model to cover
          eldercare transitions, housing upgrades, and retirement planning - applying the same cross-agency integration
          approach to new resident cohorts.
        </p>

        <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          The underlying platform improvements - Myinfo pre-fill, cross-agency status APIs, and the guided checklist
          component - are being made available as shared infrastructure for other agencies to adopt independently.
        </p>

        <h6
          class="sit:text-subtitle-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal sit:text-heading-default"
        >
          Published April 2026
        </h6>
        <p class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-body-default">
          Government Digital Services, Smart Nation and Digital Government Office
        </p>

        <sit-button variant="primary" size="md">Read More Stories</sit-button>
      </div>
    </div>
  </section>

  <sit-footer></sit-footer>
`;

export default {
  title: "Templates/Blog/Success Story",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "fullscreen"
  }
};

export const SuccessStory = {
  render: Template.bind({}),
  name: "Success Story"
};
