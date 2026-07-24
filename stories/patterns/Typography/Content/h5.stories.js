import { html } from "lit";

const H5Template = () => html`
  <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--Sit-text-max-width);">
    <h5 class="sit:text-body-lg sit:font-semibold sit:leading-md sit:tracking-normal sit:text-body-default">
      Content Subheading Goes Here
    </h5>
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

export const H5 = {
  render: H5Template.bind({}),
  name: "H5"
};
