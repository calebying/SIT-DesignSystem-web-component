import { html } from "lit";

export default {
  title: "Utilities/Dimension/Container Max Width",
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

const tokens = [
  { token: "sit:max-w-container-md", variable: "--sit-container-max-width-md", value: "768px" },
  { token: "sit:max-w-container-lg", variable: "--sit-container-max-width-lg", value: "888px" },
  { token: "sit:max-w-container-xl", variable: "--sit-container-max-width-xl", value: "1168px" },
  { token: "sit:max-w-container-2-xl", variable: "--sit-container-max-width-2-xl", value: "1312px" },
  { token: "sit:max-w-container-3-xl", variable: "--sit-container-max-width-3-xl", value: "1440px" }
];

export const ContainerMaxWidth = () => html`
  <div class="sit:flex sit:flex-col sit:gap-2-xl">
    ${tokens.map(
      ({ token, variable, value }) => html`
        <div class="sit:flex sit:flex-col sit:gap-sm">
          <div class="sit:flex sit:items-center sit:gap-xs sit:flex-wrap">
            <code class="${CODE_CLASSES}">${token}</code>
            <button
              class="${COPY_BTN_CLASSES}"
              @click="${e => copyToClipboard(token, e.target.closest("button"))}"
              aria-label="Copy token"
            >
              <sit-icon name="files"></sit-icon>
            </button>
            <span class="sit:text-body-sm sit:text-subtle">·</span>
            <code class="${CODE_CLASSES}">${variable}</code>
            <span class="sit:text-body-sm sit:text-subtle">·</span>
            <span class="sit:text-body-sm sit:text-subtle">${value}</span>
          </div>
          <div class="sit:w-full sit:bg-neutral-surface-default sit:rounded-md sit:p-xs">
            <div class="${token} sit:mx-auto sit:bg-primary-surface-muted sit:px-md sit:py-sm sit:rounded-md">
              <span class="sit:text-label-sm sit:text-subtle">${token} · ${value}</span>
            </div>
          </div>
        </div>
      `
    )}
  </div>
`;
