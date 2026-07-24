import { html } from "lit";

const H2LightTemplate = () => html`
  <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--Sit-text-max-width);">
    <div
      class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
    >
      Overline Label
    </div>
    <h2 class="sit:text-heading-lg sit:font-light sit:leading-lg sit:tracking-tight sit:text-heading-default">
      Section Heading Goes Here
    </h2>
    <p class="sit:text-body-lg sit:leading-md sit:tracking-normal sit:text-body-subtle">
      Supporting body text that provides context and detail for the section above.
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

export const H2Light = {
  render: H2LightTemplate.bind({}),
  name: "H2 Light"
};
