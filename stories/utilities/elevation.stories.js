import { html } from "lit";

export default {
  title: "Utilities/Elevation",
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

const createShadowRow = (tokenName, cssVariable, value, shadowClass) => html`
  <sit-table-row>
    <sit-table-cell>
      <div class="sit:flex sit:items-center sit:gap-xs">
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:${shadowClass}</code>
        <button
          class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
          @click="${e => copyToClipboard(`sit:${shadowClass}`, e.target.closest("button"))}"
          aria-label="Copy token"
        >
          <sit-icon name="files"></sit-icon>
        </button>
      </div>
    </sit-table-cell>
    <sit-table-cell>
      <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${cssVariable}</code>
    </sit-table-cell>
    <sit-table-cell>
      <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${value}</code>
    </sit-table-cell>
    <sit-table-cell>
      <div class="sit:bg-surface-raised sit:${shadowClass} sit:p-xl sit:rounded-sm sit:text-center sit:min-w-100">
        Sample Div
      </div>
    </sit-table-cell>
  </sit-table-row>
`;

export const Elevation = () => html`
  <div>
    <h2 class="sit:mb-lg">Surface elevation</h2>
    <sit-table class="sit:mb-2-xl">
      <sit-table-row>
        <sit-table-head>Sit Tailwind Token</sit-table-head>
        <sit-table-head>CSS Variable</sit-table-head>
        <sit-table-head>Value</sit-table-head>
        <sit-table-head>Preview</sit-table-head>
      </sit-table-row>
      ${createShadowRow("1", "--Sit-elevation-surface-1", "0 0 2px 0 rgba(14, 14, 14, 0.16);", "shadow-1")}
      ${createShadowRow(
        "2",
        "--Sit-elevation-surface-2",
        "0 0 2px 0 rgba(14, 14, 14, 0.16), 0 2px 4px 0 rgba(14, 14, 14, 0.08);",
        "shadow-2"
      )}
      ${createShadowRow(
        "3",
        "--Sit-elevation-surface-3",
        "0 0 2px 0 rgba(14, 14, 14, 0.16), 0 4px 8px 0 rgba(14, 14, 14, 0.08);",
        "shadow-3"
      )}
      ${createShadowRow(
        "4",
        "--Sit-elevation-surface-4",
        "0 0 2px 0 rgba(14, 14, 14, 0.16), 0 8px 16px 0 rgba(14, 14, 14, 0.08);",
        "shadow-4"
      )}
      ${createShadowRow(
        "5",
        "--Sit-elevation-surface-5",
        "0 0 2px 0 rgba(14, 14, 14, 0.16), 0 16px 32px 0 rgba(14, 14, 14, 0.08);",
        "shadow-5"
      )}
    </sit-table>
    <h2 class="sit:my-lg">Edge elevation</h2>
    <sit-table>
      <sit-table-row>
        <sit-table-head>Sit Tailwind Token</sit-table-head>
        <sit-table-head>CSS Variable</sit-table-head>
        <sit-table-head>Value</sit-table-head>
        <sit-table-head>Preview</sit-table-head>
      </sit-table-row>
      ${createShadowRow(
        "edge-top",
        "--Sit-elevation-edge-top",
        "0 -2px 4px 0 rgba(14, 14, 14, 0.08)",
        "shadow-edge-top"
      )}
      ${createShadowRow(
        "edge-bottom",
        "--Sit-elevation-edge-bottom",
        "0 2px 4px 0 rgba(14, 14, 14, 0.08)",
        "shadow-edge-bottom"
      )}
    </sit-table>
  </div>
`;
