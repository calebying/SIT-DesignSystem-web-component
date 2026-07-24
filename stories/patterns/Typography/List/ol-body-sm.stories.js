import { html } from "lit";

const OLBodySmTemplate = () => html`
  <div style="max-width: var(--Sit-text-max-width);">
    <ol class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
      <li
        class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm sit:text-body-default"
      >
        Ordered list item one with enough text to demonstrate list small typography and line height.
      </li>
      <li
        class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm sit:text-body-default"
      >
        Ordered list item two with a nested list below.
        <ol class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
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
        </ol>
      </li>
      <li
        class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm sit:text-body-default"
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

export const OLBodySmall = {
  render: OLBodySmTemplate.bind({}),
  name: "OL List Small Regular"
};
