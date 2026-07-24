import { html } from "lit";

const H4LightTemplate = () => html`
  <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--Sit-text-max-width);">
    <h4 class="sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight sit:text-heading-default">
      Content Heading Goes Here
    </h4>
    <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle">
      Supporting body text that provides context and detail for the content above.
    </p>
  </div>
`;

export default {
  title: "Patterns/Typography/Content",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const H4Light = {
  render: H4LightTemplate.bind({}),
  name: "H4 Light"
};
