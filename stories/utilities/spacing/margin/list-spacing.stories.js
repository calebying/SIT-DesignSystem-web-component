import { html } from "lit";

export default {
  title: "Utilities/Spacing/Margin/List",
  tags: ["!autodocs"]
};

const CODE_CLASSES = "sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm";
const COPY_BTN_CLASSES =
  "sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0";

const copyToClipboard = (token, buttonEl) => {
  navigator.clipboard.writeText(token);
  const icon = buttonEl.querySelector("Sit-icon");
  icon.setAttribute("name", "check");
  setTimeout(() => {
    icon.setAttribute("name", "files");
  }, 3000);
};

const renderTokenCell = token => html`
  <sit-table-cell>
    <div class="sit:flex sit:items-center sit:gap-xs">
      <code class="${CODE_CLASSES}">${token}</code>
      <button
        class="${COPY_BTN_CLASSES}"
        @click="${e => copyToClipboard(token, e.target.closest("button"))}"
        aria-label="Copy token"
      >
        <sit-icon name="files"></sit-icon>
      </button>
    </div>
  </sit-table-cell>
`;

const LIST_SPACING_TOKENS = [
  { suffix: "sm", value: "0.5rem (8px)" },
  { suffix: "md", value: "0.75rem (12px)" },
  { suffix: "lg", value: "1rem (16px)" }
];

export const List = () => html`
  <sit-table class="sit:mb-2-xl">
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${LIST_SPACING_TOKENS.map(
      ({ suffix, value }) => html`
        <sit-table-row>
          ${renderTokenCell(`sit:my-list-${suffix}`)}
          <sit-table-cell><code class="${CODE_CLASSES}">--Sit-list-spacing-${suffix}</code></sit-table-cell>
          <sit-table-cell><code class="${CODE_CLASSES}">${value}</code></sit-table-cell>
          <sit-table-cell>
            <div class="sit:flex sit:gap-2-xl">
              <ul>
                <li class="sit:my-list-${suffix}">First item</li>
                <li class="sit:my-list-${suffix}">Second item</li>
                <li class="sit:mt-list-${suffix}">Third item</li>
              </ul>
              <ol>
                <li class="sit:my-list-${suffix}">First item</li>
                <li class="sit:my-list-${suffix}">Second item</li>
                <li class="sit:mt-list-${suffix}">Third item</li>
              </ol>
            </div>
          </sit-table-cell>
        </sit-table-row>
      `
    )}
  </sit-table>
`;
