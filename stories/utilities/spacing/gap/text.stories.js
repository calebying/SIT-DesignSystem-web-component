import { html } from "lit";

export default {
  title: "Utilities/Spacing/Gap/Text",
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

const TOKENS = [
  { suffix: "2-xs", value: "4px / 4px / 4px" },
  { suffix: "xs", value: "8px / 8px / 8px" },
  { suffix: "sm", value: "8px / 12px / 12px" },
  { suffix: "md", value: "12px / 16px / 16px" },
  { suffix: "lg", value: "16px / 20px / 20px" },
  { suffix: "xl", value: "20px / 24px / 24px" },
  { suffix: "2-xl", value: "24px / 32px / 32px" }
];

export const Text = () => html`
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
          ${renderTokenCell(`sit:gap-text-${suffix}`)}
          <sit-table-cell><code class="${CODE_CLASSES}">--Sit-text-gap-${suffix}</code></sit-table-cell>
          <sit-table-cell><code class="${CODE_CLASSES}">${value}</code></sit-table-cell>
          <sit-table-cell>
            <div class="sit:flex sit:flex-col sit:gap-text-${suffix}">
              <span class="sit:bg-primary-surface-muted sit:px-sm sit:py-3-xs sit:rounded-sm sit:text-label-sm"
                >Heading</span
              >
              <span class="sit:bg-primary-surface-muted sit:px-sm sit:py-3-xs sit:rounded-sm sit:text-label-sm"
                >Body text</span
              >
            </div>
          </sit-table-cell>
        </sit-table-row>
      `
    )}
  </sit-table>
`;
