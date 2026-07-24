import { html } from "lit";

const H6LightTemplate = () => html`
  <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--Sit-text-max-width);">
    <h6 class="sit:text-body-md sit:font-light sit:leading-xs sit:tracking-normal sit:text-body-default">
      Content Small Heading Goes Here
    </h6>
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

export const H6Light = {
  render: H6LightTemplate.bind({}),
  name: "H6 Light"
};
