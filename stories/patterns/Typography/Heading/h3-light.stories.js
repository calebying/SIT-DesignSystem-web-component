import { html } from "lit";

const H3LightTemplate = () => html`
  <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--Sit-text-max-width);">
    <h3 class="sit:text-heading-md sit:font-light sit:leading-md sit:tracking-tight sit:text-heading-default">
      Subsection Heading Goes Here
    </h3>
    <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle">
      Supporting body text that provides context and detail for the subsection above.
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

export const H3Light = {
  render: H3LightTemplate.bind({}),
  name: "H3 Light"
};
