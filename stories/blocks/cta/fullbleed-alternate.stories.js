import { html } from "lit";

export default {
  parameters: { controls: { disable: true }, actions: { disable: true }, interactions: { disable: true } },
  title: "Blocks/Call To Action/Full Bleed Alternate"
};

const Template = () => {
  return html`
    <section class="sit:bg-alternate sit:py-layout-lg">
      <div class="sit-container">
        <div class="sit:flex sit:flex-col sit:items-start sit:text-left sit:max-w-text">
          <div class="sit:mb-xl">
            <div
              class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
            >
              Overline
            </div>
            <h2
              class="sit:text-display-sm sit:font-bold sit:leading-2-xl sit:tracking-tighter sit:text-display-default"
            >
              Headline
            </h2>
            <h5 class="sit:text-subtitle-sm sit:font-light sit:leading-xs sit:tracking-normal sit:text-heading-subtle">
              Description
            </h5>
          </div>
          <sit-button variant="primary" tone="brand" size="md">Button Label</sit-button>
        </div>
      </div>
    </section>
  `;
};

export const Default = {
  render: Template.bind({}),
  name: "Full Bleed Alternate",
  args: {},
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
