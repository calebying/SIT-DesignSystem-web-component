import { html } from "lit";

export default {
  title: "Utilities/Spacing/Padding/Static",
  tags: ["!autodocs"]
};

const PADDING_SCALE = [
  { name: "none", class: "sit:p-none", variable: "--Sit-padding-none", value: "0px" },
  { name: "3-xs", class: "sit:p-3-xs", variable: "--Sit-padding-3-xs", value: "2px" },
  { name: "2-xs", class: "sit:p-2-xs", variable: "--Sit-padding-2-xs", value: "4px" },
  { name: "xs", class: "sit:p-xs", variable: "--Sit-padding-xs", value: "8px" },
  { name: "sm", class: "sit:p-sm", variable: "--Sit-padding-sm", value: "12px" },
  { name: "md", class: "sit:p-md", variable: "--Sit-padding-md", value: "16px" },
  { name: "lg", class: "sit:p-lg", variable: "--Sit-padding-lg", value: "20px" },
  { name: "xl", class: "sit:p-xl", variable: "--Sit-padding-xl", value: "24px" },
  { name: "2-xl", class: "sit:p-2-xl", variable: "--Sit-padding-2-xl", value: "32px" },
  { name: "3-xl", class: "sit:p-3-xl", variable: "--Sit-padding-3-xl", value: "48px" },
  { name: "4-xl", class: "sit:p-4-xl", variable: "--Sit-padding-4-xl", value: "64px" },
  { name: "5-xl", class: "sit:p-5-xl", variable: "--Sit-padding-5-xl", value: "96px" }
];

const copyToClipboard = (token, buttonEl) => {
  navigator.clipboard.writeText(token);
  const icon = buttonEl.querySelector("Sit-icon");
  icon.setAttribute("name", "check");
  setTimeout(() => {
    icon.setAttribute("name", "files");
  }, 3000);
};

const PaddingTableRow = item => {
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
        <div class="${item.class} sit:bg-primary-default">
          <div class="sit:bg-surface-raised sit:p-xs sit:text-center">Content</div>
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
    ${PADDING_SCALE.map(item => PaddingTableRow(item))}
  </sit-table>
`;
