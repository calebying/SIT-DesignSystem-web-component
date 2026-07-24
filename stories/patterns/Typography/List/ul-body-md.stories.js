import { html } from "lit";

const ULBodyMdTemplate = () => html`
  <div style="max-width: var(--Sit-text-max-width);">
    <ul class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
      <li
        class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md sit:text-body-default"
      >
        Unordered list item one with enough text to demonstrate list medium typography and line height.
      </li>
      <li
        class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md sit:text-body-default"
      >
        Unordered list item two with a nested list below.
        <ul class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
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
        </ul>
      </li>
      <li
        class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md sit:text-body-default"
      >
        Unordered list item three to complete the example set.
      </li>
    </ul>
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

export const ULBodyMedium = {
  render: ULBodyMdTemplate.bind({}),
  name: "UL List Medium Regular"
};
