import { html } from "lit";

export default {
  title: "Utilities/Breakpoint",
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

export const Breakpoints = () => html`
  <p class="sit:mb-md sit:text-body-md">
    Responsive breakpoints use the syntax
    <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm"
      >sit:&lt;breakpoint&gt;:&lt;utility&gt;</code
    >
    (e.g. <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:sm:hidden</code>).
  </p>
  <sit-table>
    <sit-table-row>
      <sit-table-head>Responsive Prefix</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Min-width</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:xs:</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:xs:", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-breakpoint-xs</code>
      </sit-table-cell>
      <sit-table-cell>320px</sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:sm:</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:sm:", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-breakpoint-sm</code>
      </sit-table-cell>
      <sit-table-cell>512px</sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:md:</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:md:", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-breakpoint-md</code>
      </sit-table-cell>
      <sit-table-cell>768px</sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:lg:</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:lg:", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-breakpoint-lg</code>
      </sit-table-cell>
      <sit-table-cell>1024px</sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:xl:</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:xl:", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-breakpoint-xl</code>
      </sit-table-cell>
      <sit-table-cell>1280px</sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:2-xl:</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:2-xl:", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-breakpoint-2-xl</code>
      </sit-table-cell>
      <sit-table-cell>1440px</sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:3-xl:</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:3-xl:", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-breakpoint-3-xl</code>
      </sit-table-cell>
      <sit-table-cell>1680px (sidebar layouts)</sit-table-cell>
    </sit-table-row>
  </sit-table>

  <div class="sit:mb-2-xl"></div>
  <h3 class="sit:mb-md">Example: Responsive Visibility</h3>
  <p class="sit:mb-md sit:text-body-md">
    Each badge below appears only when the viewport reaches its breakpoint. Resize the browser to see them appear or
    disappear.
  </p>
  <div class="sit:flex sit:flex-wrap sit:gap-sm">
    <sit-badge variant="primary" class="sit:hidden sit:xs:inline-flex">xs+ (320px)</sit-badge>
    <sit-badge variant="accent" class="sit:hidden sit:sm:inline-flex">sm+ (512px)</sit-badge>
    <sit-badge variant="success" class="sit:hidden sit:md:inline-flex">md+ (768px)</sit-badge>
    <sit-badge variant="warning" class="sit:hidden sit:lg:inline-flex">lg+ (1024px)</sit-badge>
    <sit-badge variant="danger" class="sit:hidden sit:xl:inline-flex">xl+ (1280px)</sit-badge>
    <sit-badge variant="cyan" class="sit:hidden sit:2-xl:inline-flex">2-xl+ (1440px)</sit-badge>
    <sit-badge variant="neutral" class="sit:hidden sit:3-xl:inline-flex">3-xl+ (1680px)</sit-badge>
  </div>
`;
