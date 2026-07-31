# Landing Page Template

Public-facing landing page with hero section, value proposition cards, feature showcase, stats, and CTA sections. Ideal for product launches, service introductions, and campaign pages.

## When to use

- Product or service landing pages
- Campaign and promotional pages
- Service introduction or onboarding pages
- Public-facing informational pages with CTAs
- Pages with hero imagery, feature cards, and social proof

## Block anatomy

```
Landing Page
├── Masthead + MainNav (Application Shell)
├── Hero section (overline, h1, description, buttons)
├── Feature/life moments cards grid (3-column, tinted cards)
├── Section: "Built for Every Stage of Life"
├── Stats section (4 key metrics with descriptions)
├── Mission/values section (heading + bulleted list)
├── Final CTA section (centered, accent background)
└── Footer (Application Shell)
```

---

## Raw Content Link

To get the full HTML template, fetch and extract from the raw GitHub link below. See **[How to Extract HTML from Raw GitHub Links](../SKILL.md#how-to-extract-html-from-raw-github-links)** in SKILL.md for step-by-step instructions.


| File | GitHub Raw URL |
|------|---|

---

## Complete template

```html
<style>
  .hero-row {
    display: flex;
    flex-direction: column;
    gap: var(--sit-gap-layout-md);
  }
  .hero-row > * {
    width: 100%;
  }
  @media (width >= 768px) {
    .hero-row {
      flex-direction: row;
      align-items: center;
    }
    .hero-row > :first-child {
      width: 50%;
      padding-top: var(--sit-spacing-layout-xs);
      padding-right: var(--sit-spacing-layout-md);
    }
    .hero-row > :last-child {
      width: 50%;
    }
  }

  .stats-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--sit-gap-layout-md);
  }
  .stats-row > * {
    width: 100%;
  }
  @media (width >= 1024px) {
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

<section class="sit:bg-default sit:py-layout-md sit:min-h-[600px]">
  <div class="sit-container">
    <div class="hero-row">
      <div class="sit:flex sit:flex-col sit:items-start sit:text-left">
        <div class="sit:mb-xl">
          <div class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs">
            Singapore Government Digital Services
          </div>
          <h1 class="sit:text-display-lg sit:font-bold sit:leading-3-xl sit:tracking-tighter sit:text-display-default">
            One Platform.<br />Simpler Living.
          </h1>
          <h4 class="sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight sit:text-heading-default">
            Access government services anytime, anywhere. Built for residents, designed for ease.
          </h4>
        </div>
        <div class="sit:flex sit:gap-component-md">
          <sit-button variant="primary" size="md">Get Started</sit-button>
          <sit-button variant="outline" size="md">Learn More</sit-button>
        </div>
      </div>

      <div>
        <img
          src="https://placehold.co/512x512/e8f0fe/1f69ff?text=Government+Services"
          alt="Government digital services"
          style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; border-radius: var(--sit-border-radius-xl);"
        />
      </div>
    </div>
  </div>
</section>

<section class="sit:bg-default sit:py-layout-md">
  <div class="sit-container">
    <div style="display: flex; flex-direction: column; gap: var(--sit-gap-layout-md);">
      <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="padding-bottom: var(--sit-spacing-layout-md);">
        <div class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs">
          Life Moments
        </div>
        <h2 class="sit:text-display-md sit:font-bold sit:leading-2-xl sit:tracking-tighter sit:text-display-default">
          Built for Every Stage of Life
        </h2>
        <h5 class="sit:text-subtitle-md sit:font-light sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0">
          Services grouped around your life moments - not government structures.
        </h5>
      </div>

      <div class="sit-grid" style="gap: var(--sit-gap-layout-md);">
        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
          <sit-card tinted hideBorder stretchedLink>
            <span slot="subtitle">FAMILY</span>
            <span slot="title">Family and Relationships</span>
            <span slot="description">
              Register births, apply for child development grants, and access parenting resources all in one place.
            </span>
            <sit-link slot="footer">
              <a href="#">Learn more <sit-icon name="arrow-right"></sit-icon></a>
            </sit-link>
          </sit-card>
        </div>

        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
          <sit-card tinted hideBorder stretchedLink>
            <span slot="subtitle">HOUSING</span>
            <span slot="title">Home and Housing</span>
            <span slot="description">
              Check eligibility, apply for flats, and manage your property-related transactions with HDB and other agencies.
            </span>
            <sit-link slot="footer">
              <a href="#">Learn more <sit-icon name="arrow-right"></sit-icon></a>
            </sit-link>
          </sit-card>
        </div>

        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
          <sit-card tinted hideBorder stretchedLink>
            <span slot="subtitle">EMPLOYMENT</span>
            <span slot="title">Work and Employment</span>
            <span slot="description">
              Search for jobs, upskill through SkillsFuture, and access employment support schemes tailored to your needs.
            </span>
            <sit-link slot="footer">
              <a href="#">Learn more <sit-icon name="arrow-right"></sit-icon></a>
            </sit-link>
          </sit-card>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sit:bg-default sit:py-layout-md">
  <div class="sit-container">
    <div style="display: flex; flex-direction: column; gap: var(--sit-gap-layout-md);">
      <div style="max-width: var(--sit-text-max-width);">
        <div class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs">
          By the Numbers
        </div>
        <h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight sit:text-heading-default">
          Impact at a Glance
        </h2>
        <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle sit:mb-0">
          Key metrics measured over the past 12 months across all participating agencies.
        </p>
      </div>

      <div class="stats-row">
        <div class="sit:flex sit:flex-col sit:items-start" style="padding-right: var(--sit-spacing-layout-xs);">
          <div class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default">
            2.4M
          </div>
          <h5 class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default">
            Active Users
          </h5>
          <p class="sit:text-label-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-label-subtle sit:mb-0">
            Residents actively using the platform to access government services each month.
          </p>
        </div>

        <div class="sit:flex sit:flex-col sit:items-start" style="padding-right: var(--sit-spacing-layout-xs);">
          <div class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default">
            400+
          </div>
          <h5 class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default">
            Government Services
          </h5>
          <p class="sit:text-label-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-label-subtle sit:mb-0">
            Integrated services from agencies across the public sector in one place.
          </p>
        </div>

        <div class="sit:flex sit:flex-col sit:items-start" style="padding-right: var(--sit-spacing-layout-xs);">
          <div class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default">
            99.9%
          </div>
          <h5 class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default">
            Platform Uptime
          </h5>
          <p class="sit:text-label-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-label-subtle sit:mb-0">
            Consistently high availability so residents can access services anytime.
          </p>
        </div>

        <div class="sit:flex sit:flex-col sit:items-start" style="padding-right: var(--sit-spacing-layout-xs);">
          <div class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter sit:text-display-default">
            16
          </div>
          <h5 class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default">
            Partner Agencies
          </h5>
          <p class="sit:text-label-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:text-label-subtle sit:mb-0">
            Public agencies contributing services and data to the shared platform.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sit:bg-default sit:py-layout-md">
  <div class="sit-container">
    <div style="max-width: var(--sit-text-max-width);">
      <div class="sit:mb-layout-md">
        <div class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs">
          Our Mission
        </div>
        <h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight sit:text-heading-default">
          Designed Around Citizens, Not Silos
        </h2>
        <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle">
          We believe government services should feel as natural as any modern digital experience. That means no dead ends, no duplicated form-filling, and no having to know which agency is responsible before you can get help.
        </p>
        <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle sit:mb-0">
          Our team works across public agencies to build shared infrastructure that reduces friction for residents and lowers the cost of service delivery for government.
        </p>
      </div>

      <h3 class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default">
        What we stand for
      </h3>

      <ul style="padding-left: var(--sit-spacing-lg); margin: 0;">
        <li class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          Accessibility and inclusivity for all residents, regardless of digital literacy.
        </li>
        <li class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          Open standards and reusable components that any agency can adopt.
        </li>
        <li class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          Continuous improvement driven by user research and real feedback.
        </li>
        <li class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
          Security and privacy as foundational requirements, not afterthoughts.
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="sit:bg-alternate sit:py-layout-md">
  <div class="sit-container">
    <div
      class="sit:flex sit:flex-col sit:items-center sit:text-center sit:mx-auto"
      style="max-width: var(--sit-text-max-width);"
    >
      <h2 class="sit:text-display-md sit:font-bold sit:leading-2-xl sit:tracking-tighter sit:text-display-default">
        Ready to simplify your government experience?
      </h2>
      <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
        Join millions of residents already using LifeSG to access the services that matter most to them.
      </p>
      <sit-button variant="primary" size="md">Get Started with Singpass</sit-button>
    </div>
  </div>
</section>

<sit-footer></sit-footer>
```

## Customisation notes

- **Hero headline**: Update the main headline and subheading to match your service or product name
- **Hero CTA buttons**: Change button text and link to your primary actions (Get Started, Learn More, etc.)
- **Life moments cards**: Update the 3 cards with your own categories; modify subtitle, title, description, and link URLs
- **Stats section**: Update the 4 metrics (2.4M, 400+, 99.9%, 16) and their accompanying descriptions
- **Mission section**: Replace the mission statement and values list with your organization's purpose
- **Final CTA**: Update the centered call-to-action headline, description, and button text
- **Images**: Replace placeholder images with your own branded assets
- **Colors**: Use semantic background colors like `sit:bg-alternate` for accent sections
