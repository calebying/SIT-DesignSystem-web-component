import { html } from "lit";

export default {
  title: "Utilities/Spacing/Margin/Static",
  tags: ["!autodocs"]
};

const MARGIN_SCALE = [
  { name: "none", class: "sit:m-none", variable: "--Sit-margin-none", value: "0px" },
  { name: "3-xs", class: "sit:m-3-xs", variable: "--Sit-margin-3-xs", value: "2px" },
  { name: "2-xs", class: "sit:m-2-xs", variable: "--Sit-margin-2-xs", value: "4px" },
  { name: "xs", class: "sit:m-xs", variable: "--Sit-margin-xs", value: "8px" },
  { name: "sm", class: "sit:m-sm", variable: "--Sit-margin-sm", value: "12px" },
  { name: "md", class: "sit:m-md", variable: "--Sit-margin-md", value: "16px" },
  { name: "lg", class: "sit:m-lg", variable: "--Sit-margin-lg", value: "20px" },
  { name: "xl", class: "sit:m-xl", variable: "--Sit-margin-xl", value: "24px" },
  { name: "2-xl", class: "sit:m-2-xl", variable: "--Sit-margin-2-xl", value: "32px" },
  { name: "3-xl", class: "sit:m-3-xl", variable: "--Sit-margin-3-xl", value: "48px" },
  { name: "4-xl", class: "sit:m-4-xl", variable: "--Sit-margin-4-xl", value: "64px" },
  { name: "5-xl", class: "sit:m-5-xl", variable: "--Sit-margin-5-xl", value: "96px" }
];

const copyToClipboard = (token, buttonEl) => {
  navigator.clipboard.writeText(token);
  const icon = buttonEl.querySelector("Sit-icon");
  icon.setAttribute("name", "check");
  setTimeout(() => {
    icon.setAttribute("name", "files");
  }, 3000);
};

const MarginTableRow = item => {
  return html`
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.class}</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard(item.class, e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.variable}</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.value}</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-primary-default sit:w-40 sit:h-40" style="position: relative;">
          <div
            class="sit:bg-surface-raised sit:w-12 sit:h-12 ${item.class}"
            style="position: absolute; top: 0; left: 0;"
          ></div>
        </div>
      </sit-table-cell>
    </sit-table-row>
  `;
};

export const Static = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${MARGIN_SCALE.map(item => MarginTableRow(item))}
  </sit-table>
`;
