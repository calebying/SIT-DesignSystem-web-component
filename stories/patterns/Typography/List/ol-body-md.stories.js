import { html } from "lit";

const OLBodyMdTemplate = () => html`
  <div style="max-width: var(--Sit-text-max-width);">
    <ol class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
      <li
        class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md sit:text-body-default"
      >
        Ordered list item one with enough text to demonstrate list medium typography and line height.
      </li>
      <li
        class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md sit:text-body-default"
      >
        Ordered list item two with a nested list below.
        <ol class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
          <li
            class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md sit:text-body-default"
          >
            Nested item one inside the second top-level item.
          </li>
          <li
            class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md sit:text-body-default"
          >
            Nested item two continuing the same size and style.
          </li>
        </ol>
      </li>
      <li
        class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md sit:text-body-default"
      >
        Ordered list item three to complete the example set.
      </li>
    </ol>
  </div>
`;

export default {
  title: "Patterns/Typography/List",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const OLBodyMedium = {
  render: OLBodyMdTemplate.bind({}),
  name: "OL List Medium Regular"
};
