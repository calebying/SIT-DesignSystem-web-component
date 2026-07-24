import { html } from "lit";

const DisplayMdLightTemplate = () => html`
  <div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--Sit-text-max-width);">
    <div
      class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
    >
      Overline Label
    </div>
    <h1 class="sit:text-display-md sit:font-light sit:leading-3-xl sit:tracking-tighter sit:text-display-default">
      Display Medium Light Heading
    </h1>
    <h4 class="sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight sit:text-heading-default">
      Supporting heading that provides context and detail for the section above.
    </h4>
  </div>
`;

export default {
  title: "Patterns/Typography/Display",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const DisplayMediumLight = {
  render: DisplayMdLightTemplate.bind({}),
  name: "Display Medium Light"
};
