import { html } from "lit";

export default {
  title: "Utilities/Spacing/Margin/Paragraph",
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

const PARAGRAPH_SPACING_TOKENS = [
  { suffix: "none", value: "0px" },
  { suffix: "sm", value: "0.5rem (8px)" },
  { suffix: "md", value: "1rem (16px)" },
  { suffix: "lg", value: "1.5rem (24px)" },
  { suffix: "xl", value: "2rem (32px)" }
];

export const Paragraph = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${PARAGRAPH_SPACING_TOKENS.map(
      ({ suffix, value }) => html`
        <sit-table-row>
          ${renderTokenCell(`sit:mb-paragraph-${suffix}`)}
          <sit-table-cell><code class="${CODE_CLASSES}">--Sit-paragraph-spacing-${suffix}</code></sit-table-cell>
          <sit-table-cell><code class="${CODE_CLASSES}">${value}</code></sit-table-cell>
          <sit-table-cell>
            <div>
              <p class="sit:mb-paragraph-${suffix}">First paragraph.</p>
              <p>Second paragraph.</p>
            </div>
          </sit-table-cell>
        </sit-table-row>
      `
    )}
  </sit-table>
`;
