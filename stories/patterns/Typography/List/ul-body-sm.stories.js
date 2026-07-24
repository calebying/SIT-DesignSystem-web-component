import { html } from "lit";

const ULBodySmTemplate = () => html`
  <div style="max-width: var(--Sit-text-max-width);">
    <ul class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
      <li
        class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm sit:text-body-default"
      >
        Unordered list item one with enough text to demonstrate list small typography and line height.
      </li>
      <li
        class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm sit:text-body-default"
      >
        Unordered list item two with a nested list below.
        <ul class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
          <li
            class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm sit:text-body-default"
          >
            Nested item one inside the second top-level item.
          </li>
          <li
            class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm sit:text-body-default"
          >
            Nested item two continuing the same size and style.
          </li>
        </ul>
      </li>
      <li
        class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm sit:text-body-default"
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

export const ULBodySmall = {
  render: ULBodySmTemplate.bind({}),
  name: "UL List Small Regular"
};
