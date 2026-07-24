import { html } from "lit";

export default {
  title: "Utilities/Opacity",
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

export const Opacity = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Value</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-0</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-0", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-0</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-0 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-3</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-3", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-3</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.03</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-3 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-5</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-5", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-5</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.05</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-5 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-10</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-10", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-10</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.1</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-10 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-20</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-20", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-20</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.2</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-20 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-30</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-30", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-30</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.3</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-30 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-40</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-40", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-40</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.4</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-40 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-50</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-50", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-50</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.5</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-50 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-60</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-60", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-60</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.6</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-60 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-70</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-70", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-70</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.7</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-70 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-80</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-80", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-80</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.8</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-80 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-90</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-90", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-90</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">0.9</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-90 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:opacity-100</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard("sit:opacity-100", e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">--Sit-opacity-100</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">1</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="sit:opacity-100 sit:bg-primary-default sit:w-12 sit:h-12 sit:rounded-sm"></div>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;
