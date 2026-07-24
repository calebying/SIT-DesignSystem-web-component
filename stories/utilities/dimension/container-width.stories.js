import { html } from "lit";

export default {
  title: "Utilities/Dimension/Container Width",
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

const CODE_CLASSES = "sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm";
const COPY_BTN_CLASSES =
  "sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0";

export const ContainerWidth = () => html`
  <div class="sit:flex sit:flex-col sit:gap-2-xl">
    <div class="sit:flex sit:flex-col sit:gap-sm">
      <div class="sit:flex sit:items-center sit:gap-xs">
        <code class="${CODE_CLASSES}">sit:w-container</code>
        <button
          class="${COPY_BTN_CLASSES}"
          @click="${e => copyToClipboard("sit:w-container", e.target.closest("button"))}"
          aria-label="Copy token"
        >
          <sit-icon name="files"></sit-icon>
        </button>
        <span class="sit:text-body-sm sit:text-subtle">·</span>
        <code class="${CODE_CLASSES}">--sit-container-width</code>
        <span class="sit:text-body-sm sit:text-subtle">·</span>
        <span class="sit:text-body-sm sit:text-subtle">360px / 888px / 1312px (responsive)</span>
      </div>
      <div class="sit:w-full sit:bg-neutral-surface-default sit:rounded-md sit:p-xs">
        <div class="sit:w-container sit:mx-auto sit:bg-primary-surface-muted sit:px-md sit:py-sm sit:rounded-md">
          <span class="sit:text-label-sm sit:text-subtle">w-container · responds to viewport</span>
        </div>
      </div>
    </div>
  </div>
`;
