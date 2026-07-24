import { html } from "lit";

export default {
  parameters: { controls: { disable: true }, actions: { disable: true }, interactions: { disable: true } },
  title: "Blocks/Call To Action/Contained Primary"
};

const Template = () => {
  return html`
    <section class="sit:py-layout-lg">
      <div class="sit-container">
        <div class="sit:bg-primary-default sit:rounded-2-xl sit:p-layout-lg">
          <div class="sit:flex sit:flex-col sit:items-start sit:text-left sit:max-w-text">
            <div class="sit:mb-xl">
              <div
                class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-fixed-light sit:mb-xs"
              >
                Overline
              </div>
              <h2 class="sit:text-display-sm sit:font-bold sit:leading-2-xl sit:tracking-tighter sit:text-fixed-light">
                Headline
              </h2>
              <h5 class="sit:text-subtitle-sm sit:font-light sit:leading-xs sit:tracking-normal sit:text-fixed-light">
                Description
              </h5>
            </div>
            <sit-button variant="primary" tone="fixed-light" size="md">Button Label</sit-button>
          </div>
        </div>
      </div>
    </section>
  `;
};

export const Default = {
  render: Template.bind({}),
  name: "Contained Primary",
  args: {},
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
