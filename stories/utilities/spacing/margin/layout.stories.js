import { html } from "lit";

export default {
  title: "Utilities/Spacing/Margin/Layout",
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

const TOKENS = [
  { suffix: "xs", value: "16px / 20px / 24px" },
  { suffix: "sm", value: "20px / 24px / 32px" },
  { suffix: "md", value: "24px / 32px / 48px" },
  { suffix: "lg", value: "32px / 48px / 64px" },
  { suffix: "xl", value: "48px / 64px / 96px" }
];

export const Layout = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${TOKENS.map(
      ({ suffix, value }) => html`
        <sit-table-row>
          ${renderTokenCell(`sit:m-layout-${suffix}`)}
          <sit-table-cell><code class="${CODE_CLASSES}">--Sit-layout-padding-${suffix}</code></sit-table-cell>
          <sit-table-cell><code class="${CODE_CLASSES}">${value}</code></sit-table-cell>
          <sit-table-cell>
            <div class="sit:bg-primary-default sit:w-40 sit:h-40" style="position: relative;">
              <div
                class="sit:bg-surface-raised sit:w-12 sit:h-12 sit:m-layout-${suffix}"
                style="position: absolute; top: 0; left: 0;"
              ></div>
            </div>
          </sit-table-cell>
        </sit-table-row>
      `
    )}
  </sit-table>
`;
