import { html } from "lit";

const H3Template = () => html`
  <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--Sit-text-max-width);">
    <h3 class="sit:text-heading-md sit:font-bold sit:leading-md sit:tracking-tight sit:text-heading-default">
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

export const H3 = {
  render: H3Template.bind({}),
  name: "H3"
};
