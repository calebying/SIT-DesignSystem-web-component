import { html } from "lit";

export default {
  title: "Utilities/Typography/Line Height",
  tags: ["!autodocs"]
};

const copyToClipboard = (token, buttonEl) => {
  navigator.clipboard.writeText(token);
  const icon = buttonEl.querySelector("Sit-icon");
  icon.setAttribute("name", "check");
  setTimeout(() => {
    icon.setAttribute("name", "files");
  }, 3000);
};

const CODE_CLASSES = "sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm";
const COPY_BTN_CLASSES =
  "sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0";

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

const STATIC_TOKENS = [
  { suffix: "16", value: "16px" },
  { suffix: "20", value: "20px" },
  { suffix: "24", value: "24px" },
  { suffix: "28", value: "28px" },
  { suffix: "32", value: "32px" },
  { suffix: "36", value: "36px" },
  { suffix: "40", value: "40px" },
  { suffix: "44", value: "44px" },
  { suffix: "48", value: "48px" },
  { suffix: "52", value: "52px" },
  { suffix: "56", value: "56px" },
  { suffix: "60", value: "60px" },
  { suffix: "64", value: "64px" }
];

const RESPONSIVE_TOKENS = [
  { suffix: "3-xs", value: "16px / 16px / 16px" },
  { suffix: "2-xs", value: "20px / 20px / 20px" },
  { suffix: "xs", value: "24px / 24px / 24px" },
  { suffix: "sm", value: "24px / 28px / 28px" },
  { suffix: "md", value: "28px / 32px / 32px" },
  { suffix: "lg", value: "32px / 36px / 40px" },
  { suffix: "xl", value: "40px / 44px / 48px" },
  { suffix: "2-xl", value: "44px / 52px / 56px" },
  { suffix: "3-xl", value: "48px / 60px / 64px" }
];

export const LineHeight = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RESPONSIVE_TOKENS.map(
      ({ suffix, value }) => html`
        <sit-table-row>
          ${renderTokenCell(`sit:leading-${suffix}`)}
          <sit-table-cell><code class="${CODE_CLASSES}">--Sit-line-height-${suffix}</code></sit-table-cell>
          <sit-table-cell><code class="${CODE_CLASSES}">${value}</code></sit-table-cell>
          <sit-table-cell
            ><div class="sit:leading-${suffix}">The quick brown fox jumps over the lazy dog.</div></sit-table-cell
          >
        </sit-table-row>
      `
    )}
  </sit-table>
`;

export const StaticLineHeight = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${STATIC_TOKENS.map(
      ({ suffix, value }) => html`
        <sit-table-row>
          ${renderTokenCell(`sit:leading-${suffix}`)}
          <sit-table-cell><code class="${CODE_CLASSES}">--Sit-line-height-${suffix}</code></sit-table-cell>
          <sit-table-cell><code class="${CODE_CLASSES}">${value}</code></sit-table-cell>
          <sit-table-cell>
            <div class="sit:leading-${suffix}">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick
              daft zebras jump.
            </div>
          </sit-table-cell>
        </sit-table-row>
      `
    )}
  </sit-table>
`;
