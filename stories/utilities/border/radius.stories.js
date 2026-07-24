import { html } from "lit";

export default {
  title: "Utilities/Border/Radius",
  tags: ["!autodocs"]
};

const RADIUS_SCALE = [
  { name: "none", class: "sit:rounded-none", variable: "--Sit-border-radius-none", value: "0px" },
  { name: "xs", class: "sit:rounded-xs", variable: "--Sit-border-radius-xs", value: "2px" },
  { name: "sm", class: "sit:rounded-sm", variable: "--Sit-border-radius-sm", value: "4px" },
  { name: "md", class: "sit:rounded-md", variable: "--Sit-border-radius-md", value: "8px" },
  { name: "lg", class: "sit:rounded-lg", variable: "--Sit-border-radius-lg", value: "12px" },
  { name: "xl", class: "sit:rounded-xl", variable: "--Sit-border-radius-xl", value: "16px" },
  { name: "2-xl", class: "sit:rounded-2-xl", variable: "--Sit-border-radius-2-xl", value: "24px" },
  { name: "3-xl", class: "sit:rounded-3-xl", variable: "--Sit-border-radius-3-xl", value: "32px" },
  { name: "full", class: "sit:rounded-full", variable: "--Sit-border-radius-full", value: "999px" }
];

const FORM_RADIUS_SCALE = [
  { name: "none", class: "sit:rounded-form-none", variable: "--Sit-form-border-radius-none", value: "0px" },
  { name: "xs", class: "sit:rounded-form-xs", variable: "--Sit-form-border-radius-xs", value: "2px" },
  { name: "sm", class: "sit:rounded-form-sm", variable: "--Sit-form-border-radius-sm", value: "4px" },
  { name: "md", class: "sit:rounded-form-md", variable: "--Sit-form-border-radius-md", value: "8px" },
  { name: "full", class: "sit:rounded-form-full", variable: "--Sit-form-border-radius-full", value: "999px" }
];

const copyToClipboard = (token, buttonEl) => {
  navigator.clipboard.writeText(token);
  const icon = buttonEl.querySelector("Sit-icon");
  icon.setAttribute("name", "check");
  setTimeout(() => {
    icon.setAttribute("name", "files");
  }, 3000);
};

const RadiusTableRow = item => {
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
          class="sit:flex sit:items-center sit:justify-center sit:w-20 sit:h-20 sit:bg-primary-default ${item.class}"
        ></div>
      </sit-table-cell>
    </sit-table-row>
  `;
};

export const Radius = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RADIUS_SCALE.map(item => RadiusTableRow(item))}
  </sit-table>
`;

export const FormRadius = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${FORM_RADIUS_SCALE.map(item => RadiusTableRow(item))}
  </sit-table>
`;
