import { html } from "lit";

const Template = () => html`
  <!-- Page Header Block (no breadcrumb)
       Layout : overline + h1 + body description
       Typography : h1 pattern (overline, heading-xl bold, body-lg)
  -->
  <section class="sit:bg-default sit:py-layout-lg">
    <div class="sit-container">
      <div class="sit:flex sit:flex-col sit:items-start sit:text-left" class="sit:max-w-text">
        <div
          class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
        >
          Overline Label
        </div>

        <h1 class="sit:text-heading-xl sit:font-bold sit:leading-xl sit:tracking-tight sit:text-heading-default">
          Page Heading Goes Here
        </h1>

        <p class="sit:text-body-lg sit:leading-md sit:tracking-normal sit:text-body-subtle">
          Supporting body text that provides context and detail for the page or section above.
        </p>
      </div>
    </div>
  </section>
`;

export default {
  title: "Blocks/Header",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const PageHeader = {
  render: Template.bind({}),
  name: "Page header"
};
