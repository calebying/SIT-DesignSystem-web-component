import { html } from "lit";

const Template = () => html`
  <style>
    @keyframes Sit-marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
    .Sit-about-logo-track {
      animation: Sit-marquee 30s linear infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      .Sit-about-logo-track {
        animation: none;
      }
    }
  </style>

  <sit-masthead></sit-masthead>

  <sit-mainnav>
    <strong slot="brand">Logo</strong>
  </sit-mainnav>

  <div class="sit:bg-surface-default sit:min-h-screen">
    <div class="sit-container sit:py-layout-xl">
      <!-- ① Header: two-column headline + description -->
      <div class="sit-grid sit:mb-layout-lg">
        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-6">
          <h1 class="sit:text-display-md sit:font-bold sit:leading-2-xl sit:tracking-tighter sit:text-default">
            Building digital services that matter for Singapore
          </h1>
        </div>
        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-6 sit:flex sit:items-end">
          <p class="sit:text-body-lg sit:font-regular sit:leading-md sit:text-body-subtle">
            We are a team of designers, engineers, and product thinkers committed to delivering citizen-centric digital
            experiences across government.
          </p>
        </div>
      </div>

      <!-- ② Image grid: main image (8 cols) + right column (4 cols) -->
      <div class="sit-grid sit:mb-layout-lg" style="--sit-grid-row-gap: var(--Sit-layout-gap-md)">
        <!-- Main image -->
        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:flex">
          <img
            src="https://images.unsplash.com/photo-1565350897149-38dfafa81d83?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team collaborating on a project"
            class="sit:w-full sit:object-cover sit:rounded-lg"
          />
        </div>

        <!-- Right column: breakout card + secondary image -->
        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4 sit:flex sit:flex-col sit:gap-layout-md">
          <!-- Breakout card -->
          <sit-thumbnail-card class="sit:flex-1">
            <div
              slot="thumbnail"
              class="sit:w-32 sit:h-32 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:rounded-lg"
            >
              Logo
            </div>
            <span slot="description">
              Trusted by agencies across the whole-of-government ecosystem to deliver accessible, compliant, and
              consistent digital interfaces.
            </span>
            <sit-link slot="footer">
              <a href="/about">Learn more <sit-icon name="arrow-right"></sit-icon></a>
            </sit-link>
          </sit-thumbnail-card>

          <!-- Secondary image -->
          <img
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Office environment"
            class="sit:w-full sit:object-cover sit:rounded-lg"
          />
        </div>
      </div>

      <!-- ③ Logo strip -->
      <div class="sit:mb-layout-lg sit:overflow-hidden">
        <div class="sit:text-center sit:mb-layout-sm">
          <p
            class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-body-subtle"
          >
            Trusted by agencies
          </p>
        </div>

        <!-- Marquee wrapper — CSS scroll animation, no JS required -->
        <div
          class="sit:overflow-hidden sit:relative"
          style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
        >
          <div class="Sit-about-logo-track sit:flex sit:gap-layout-xl sit:w-max">
            <!-- Duplicate the logo set for seamless loop -->
            <div class="sit:flex sit:gap-layout-xl sit:items-center sit:shrink-0">
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency A
              </div>
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency B
              </div>
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency C
              </div>
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency D
              </div>
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency E
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="sit:flex sit:gap-layout-xl sit:items-center sit:shrink-0" aria-hidden="true">
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency A
              </div>
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency B
              </div>
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency C
              </div>
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency D
              </div>
              <div
                class="sit:w-30 sit:h-10 sit:bg-surface-raised sit:text-default sit:flex sit:items-center sit:justify-center sit:opacity-60"
              >
                Agency E
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ④ Achievements panel -->
      <div class="sit:bg-surface-raised sit:rounded-lg sit:p-layout-lg">
        <!-- Panel header -->
        <div class="sit-grid sit:mb-layout-md">
          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-6">
            <h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight sit:text-default">
              Delivering impact at scale
            </h2>
          </div>
          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-6">
            <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:text-body-subtle">
              Our platform powers services used by millions of residents and thousands of officers across the Singapore
              government.
            </p>
          </div>
        </div>

        <!-- Stats grid: 4 columns on LG, 2 on SM/MD, 1 on XS -->
        <div class="sit-grid">
          <div class="sit-col-4 sit-col-sm-4 sit-col-lg-3">
            <p class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-default">
              12,000+
            </p>
            <p class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:text-body-subtle sit:mt-1">Active users</p>
          </div>
          <div class="sit-col-4 sit-col-sm-4 sit-col-lg-3">
            <p class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-default">98%</p>
            <p class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:text-body-subtle sit:mt-1">
              Platform uptime
            </p>
          </div>
          <div class="sit-col-4 sit-col-sm-4 sit-col-lg-3">
            <p class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-default">50+</p>
            <p class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:text-body-subtle sit:mt-1">
              Government agencies
            </p>
          </div>
          <div class="sit-col-4 sit-col-sm-4 sit-col-lg-3">
            <p class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-default">
              5 years
            </p>
            <p class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:text-body-subtle sit:mt-1">
              In production
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <sit-footer></sit-footer>
`;

export default {
  title: "Templates/About Us/Basic",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "fullscreen"
  }
};

export const Basic = {
  render: Template.bind({}),
  name: "Basic"
};
