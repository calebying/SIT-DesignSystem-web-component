import { html } from "lit";

export default {
  title: "Utilities/Border/Width",
  tags: ["!autodocs"]
};

const WIDTH_SCALE = [
  { name: "0", class: "sit:border-0", variable: "--Sit-border-width-0", value: "0px" },
  { name: "1", class: "sit:border-1", variable: "--Sit-border-width-1", value: "1px" },
  { name: "2", class: "sit:border-2", variable: "--Sit-border-width-2", value: "2px" },
  { name: "3", class: "sit:border-3", variable: "--Sit-border-width-3", value: "3px" },
  { name: "4", class: "sit:border-4", variable: "--Sit-border-width-4", value: "4px" }
];

const FORM_WIDTH_SCALE = [
  { name: "default", class: "sit:border-form-default", variable: "--Sit-form-border-width-default", value: "1px" },
  { name: "thick", class: "sit:border-form-thick", variable: "--Sit-form-border-width-thick", value: "2px" }
];

const copyToClipboard = (token, buttonEl) => {
  navigator.clipboard.writeText(token);
  const icon = buttonEl.querySelector("Sit-icon");
  icon.setAttribute("name", "check");
  setTimeout(() => {
    icon.setAttribute("name", "files");
  }, 3000);
};

const WidthTableRow = item => {
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
        <div
          style="${item.class === "sit:border-0"
            ? "border: var(--Sit-border-width-0) solid var(--Sit-border-color-default)"
            : "border: var(" + item.variable + ") solid var(--Sit-border-color-default)"}"
          class="sit:w-16 sit:h-16"
        ></div>
      </sit-table-cell>
    </sit-table-row>
  `;
};

export const Width = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${WIDTH_SCALE.map(item => WidthTableRow(item))}
  </sit-table>
`;

export const FormWidth = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${FORM_WIDTH_SCALE.map(item => WidthTableRow(item))}
  </sit-table>
`;
