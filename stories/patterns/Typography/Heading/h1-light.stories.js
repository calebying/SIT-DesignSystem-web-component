import { html } from "lit";

const H1LightTemplate = () => html`
  <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--Sit-text-max-width);">
    <div
      class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
    >
      Overline Label
    </div>
    <h1 class="sit:text-heading-xl sit:font-light sit:leading-xl sit:tracking-tight sit:text-heading-default">
      Page Heading Goes Here
    </h1>
    <p class="sit:text-body-lg sit:leading-md sit:tracking-normal sit:text-body-subtle">
      Supporting body text that provides context and detail for the page or section above.
    </p>
  </div>
`;

export default {
  title: "Patterns/Typography/Heading",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const H1Light = {
  render: H1LightTemplate.bind({}),
  name: "H1 Light"
};
