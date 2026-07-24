import { html } from "lit";

export default {
  title: "Utilities/Spacing/Gap/Form",
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

export const Form = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:gap-form-sm</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:gap-form-sm", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-gap-sm</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:flex sit:gap-form-sm">
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:gap-form-md</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:gap-form-md", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-gap-md</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:flex sit:gap-form-md">
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:gap-form-lg</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:gap-form-lg", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-gap-lg</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:flex sit:gap-form-lg">
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:gap-form-xl</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:gap-form-xl", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-gap-xl</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:flex sit:gap-form-xl">
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:gap-form-2-xl</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:gap-form-2-xl", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-gap-2-xl</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:flex sit:gap-form-2-xl">
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
          <div class="sit:bg-accent-default sit:w-6 sit:h-6"></div>
        </div>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;
