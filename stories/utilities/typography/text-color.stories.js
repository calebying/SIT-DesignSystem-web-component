import { html } from "lit";

export default {
  title: "Utilities/Typography/Text Color",
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

export const Grayscales = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-color-default</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#1a1a1a / #ffffff</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-default">Standard text color that adapts to theme</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-subtle</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-subtle", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-color-subtle</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#525252 / #c6c6c6</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-subtle">De-emphasized text for secondary information</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-muted</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-muted", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-color-muted</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#c6c6c6 / #3b3b3b</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-muted">Further de-emphasized text for tertiary content</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-inverse</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-inverse", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-color-inverse</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#f3f3f3 / #1a1a1a</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-surface-inverse sit:p-md sit:rounded-sm">
          <span class="sit:text-inverse">Text that contrasts with inverted backgrounds</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-transparent</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-transparent", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-color-transparent</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">transparent</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-transparent">Fully transparent text (invisible)</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-color-fixed-light</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#f3f3f3</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-fixed-light">Always light text (shown on dark background)</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-color-fixed-dark</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#1a1a1a</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-fixed-dark">Always dark text (shown on light background)</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;

export const Primary = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-primary-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-primary-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-primary-color-default</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#ee3124 / #f3685e</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-primary-default">Standard primary text color</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-primary-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-primary-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-primary-color-emphasis</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#523abc / #c8bdf7</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-primary-emphasis">Emphasized primary text</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-primary-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-primary-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-primary-color-fixed-light</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#f3685e</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-primary-fixed-light">Always light primary text (on dark bg)</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-primary-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-primary-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-primary-color-fixed-dark</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#ee3124</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-primary-fixed-dark">Always dark primary text (on light bg)</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;

export const Accent = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-accent-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-accent-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-accent-color-default</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#0269d0 / #60aaf4</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-accent-default">Standard accent text color</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-accent-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-accent-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-accent-color-emphasis</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#0151a0 / #96c7f7</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-accent-emphasis">Emphasized accent text</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-accent-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-accent-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-accent-color-fixed-light</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#60aaf4</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-accent-fixed-light">Always light accent text (on dark bg)</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-accent-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-accent-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-accent-color-fixed-dark</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#0269d0</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-accent-fixed-dark">Always dark accent text (on light bg)</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;

export const Success = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-success-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-success-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-success-color-default</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#0e7c3d / #16bd5e</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-success-default">Standard success text color</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-success-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-success-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-success-color-emphasis</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#0b5e2f / #62db96</code>
      </sit-table-cell>
      <sit-table-cell>
        <span class="sit:text-success-emphasis">Emphasized success text</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-success-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-success-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-success-color-fixed-light</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#16bd5e</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-success-fixed-light">Always light success text (on dark bg)</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-success-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-success-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-success-color-fixed-dark</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#0e7c3d</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-success-fixed-dark">Always dark success text (on light bg)</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;

export const Danger = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-danger-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-danger-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-danger-color-default</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#cf2323 / #e98b8b</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-danger-default">Standard danger text color</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-danger-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-danger-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-danger-color-emphasis</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#a11b1b / #f1b2b2</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-danger-emphasis">Emphasized danger text</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-danger-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-danger-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-danger-color-fixed-light</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#e98b8b</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-danger-fixed-light">Always light danger text (on dark bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-danger-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-danger-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-danger-color-fixed-dark</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#cf2323</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-danger-fixed-dark">Always dark danger text (on light bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
  </sit-table>
`;

export const Warning = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-warning-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-warning-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-warning-color-default</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#7e6917 / #e5bf29</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-warning-default">Standard warning text color</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-warning-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-warning-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-warning-color-emphasis</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#c2a223 / #fcde63</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-warning-emphasis">Emphasized warning text</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-warning-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-warning-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-warning-color-fixed-light</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#fcde63</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-warning-fixed-light">Always light warning text (on dark bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-warning-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-warning-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-warning-color-fixed-dark</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#7e6917</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-warning-fixed-dark">Always dark warning text (on light bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
  </sit-table>
`;

export const Purple = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-purple-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-purple-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-purple-color-default</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#ac1cdb / #d983f6</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-purple-default">Standard purple text color</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-purple-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-purple-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-purple-color-emphasis</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#8516a9 / #e6adf9</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-purple-emphasis">Emphasized purple text</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-purple-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-purple-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-purple-color-fixed-light</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#d983f6</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-purple-fixed-light">Always light purple text (on dark bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-purple-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-purple-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-purple-color-fixed-dark</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#ac1cdb</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-purple-fixed-dark">Always dark purple text (on light bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
  </sit-table>
`;

export const Cyan = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-cyan-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-cyan-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-cyan-color-default</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#00758d / #00b4da</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-cyan-default">Standard cyan text color</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-cyan-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-cyan-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-cyan-color-emphasis</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#005a6d / #49d2ef</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-cyan-emphasis">Emphasized cyan text</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-cyan-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-cyan-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-cyan-color-fixed-light</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#00b4da</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-cyan-fixed-light">Always light cyan text (on dark bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-cyan-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-cyan-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-cyan-color-fixed-dark</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#00758d</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-cyan-fixed-dark">Always dark cyan text (on light bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
  </sit-table>
`;

export const Neutral = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-neutral-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-neutral-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-neutral-color-default</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#6b6b6b / #a5a5a5</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-neutral-default">Standard neutral text color</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-neutral-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-neutral-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-neutral-color-emphasis</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#525252 / #c6c6c6</code
        ></sit-table-cell
      >
      <sit-table-cell><span class="sit:text-neutral-emphasis">Emphasized neutral text</span></sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-neutral-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-neutral-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-neutral-color-fixed-light</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#a5a5a5</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-neutral-fixed-light">Always light neutral text (on dark bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-neutral-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-neutral-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >--Sit-neutral-color-fixed-dark</code
        ></sit-table-cell
      >
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#6b6b6b</code></sit-table-cell
      >
      <sit-table-cell
        ><div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-neutral-fixed-dark">Always dark neutral text (on light bg)</span>
        </div></sit-table-cell
      >
    </sit-table-row>
  </sit-table>
`;

export const TypographyTextColor = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-display-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-display-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-display-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#1a1a1a / #ffffff</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-display-default">Display text default</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-display-subtle</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-display-subtle", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-display-color-subtle</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#3b3b3b / #dfdfdf</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-display-subtle">Display text subtle</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-heading-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-heading-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-heading-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#2a2a2a / #f3f3f3</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-heading-default">Heading text default</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-heading-subtle</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-heading-subtle", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-heading-color-subtle</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#3b3b3b / #dfdfdf</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-heading-subtle">Heading text subtle</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-body-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-body-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-body-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#1a1a1a / #ffffff</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-body-default">Body text default</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-body-subtle</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-body-subtle", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-body-color-subtle</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#525252 / #c6c6c6</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-body-subtle">Body text subtle</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-label-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-label-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-label-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#2a2a2a / #f3f3f3</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-label-default">Label text default</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-label-subtle</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-label-subtle", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-label-color-subtle</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#525252 / #c6c6c6</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-label-subtle">Label text subtle</span>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;

export const LinkTextColor = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-link-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-link-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-link-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#0269d0 / #60aaf4</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-link-default">Link text default</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-link-emphasis</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-link-emphasis", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-link-color-emphasis</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#0151a0 / #96c7f7</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-link-emphasis">Link text emphasis</span>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;

export const FormTextColor = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value (day / night)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#2a2a2a / #f3f3f3</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-form-default">Form text default</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-subtle</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-subtle", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-color-subtle</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#525252 / #c6c6c6</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-form-subtle">Form text subtle</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-muted</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-muted", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-color-muted</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#c6c6c6 / #3b3b3b</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-form-muted">Form text muted</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-inverse</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-inverse", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-color-inverse</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#f3f3f3 / #2a2a2a</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-form-inverse">Form text inverse</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-fixed-light</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-fixed-light", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-color-fixed-light</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#f3f3f3</code></sit-table-cell
      >
      <sit-table-cell>
        <div class="sit:bg-fixed-dark sit:p-md sit:rounded-sm">
          <span class="sit:text-form-fixed-light">Form text fixed-light</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-fixed-dark</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-fixed-dark", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-color-fixed-dark</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">#1a1a1a</code></sit-table-cell
      >
      <sit-table-cell>
        <div class="sit:bg-fixed-light sit:p-md sit:rounded-sm">
          <span class="sit:text-form-fixed-dark">Form text fixed-dark</span>
        </div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-primary-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-primary-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-primary-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#ee3124 / #f3685e</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-form-primary-default">Form primary text</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-success-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-success-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-success-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#0e7c3d / #16bd5e</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-form-success-default">Form success text</span>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:text-form-danger-default</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:text-form-danger-default", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-form-danger-color-default</code>
      </sit-table-cell>
      <sit-table-cell
        ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
          >#cf2323 / #e98b8b</code
        ></sit-table-cell
      >
      <sit-table-cell>
        <span class="sit:text-form-danger-default">Form danger text</span>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;
