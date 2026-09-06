import { html } from "lit";

export default {
  title: "Utilities/Motion",
  tags: ["!autodocs"]
};

const durationRow = (token, cssVariable, value) => html`
  <sit-table-row>
    <sit-table-cell
      ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">sit:${token}</code></sit-table-cell
    >
    <sit-table-cell
      ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${cssVariable}</code></sit-table-cell
    >
    <sit-table-cell
      ><code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${value}</code></sit-table-cell
    >
  </sit-table-row>
`;

export const Duration = () => html`
  <div>
    <h2 class="sit:mb-lg">Duration</h2>
    <sit-table>
      <sit-table-row>
        <sit-table-head>Sit Tailwind Token</sit-table-head>
        <sit-table-head>CSS Variable</sit-table-head>
        <sit-table-head>Value</sit-table-head>
      </sit-table-row>
      ${durationRow("duration-faster", "--sit-motion-duration-faster", "100ms")}
      ${durationRow("duration-fast", "--sit-motion-duration-fast", "200ms")}
      ${durationRow("duration-standard", "--sit-motion-duration-standard", "300ms")}
      ${durationRow("duration-slow", "--sit-motion-duration-slow", "400ms")}
      ${durationRow("duration-slower", "--sit-motion-duration-slower", "500ms")}
    </sit-table>
    <h2 class="sit:my-lg">Easing</h2>
    <sit-table>
      <sit-table-row>
        <sit-table-head>Sit Tailwind Token</sit-table-head>
        <sit-table-head>CSS Variable</sit-table-head>
        <sit-table-head>Value</sit-table-head>
      </sit-table-row>
      ${durationRow("ease-enter", "--sit-motion-easing-enter", "cubic-bezier(0.1, 0, 0.5, 0)")}
      ${durationRow("ease-exit", "--sit-motion-easing-exit", "cubic-bezier(0.15, 0.6, 0.6, 1)")}
      ${durationRow("ease-standard", "--sit-motion-easing-standard", "cubic-bezier(0.25, 0, 0.25, 1)")}
    </sit-table>
  </div>
`;

const AnimationDemo = () => {
  const replay = e => {
    const box = e.target.previousElementSibling;
    box.style.animation = "none";
    void box.offsetWidth; // force reflow to restart the animation
    box.style.animation = "";
  };

  return html`
    <div class="sit:flex sit:gap-xl sit:items-start">
      <div class="sit:text-center">
        <div class="sit:animate-fade-in sit:bg-primary sit:text-fixed-light sit:p-lg sit:rounded-sm sit:mb-xs">
          fade-in
        </div>
        <code class="sit:d-block sit:mb-xs">sit:animate-fade-in</code>
        <button class="sit:cursor-pointer" @click=${replay}>Replay</button>
      </div>
      <div class="sit:text-center">
        <div class="sit:animate-slide-in-start sit:bg-primary sit:text-fixed-light sit:p-lg sit:rounded-sm sit:mb-xs">
          slide-in-start
        </div>
        <code class="sit:d-block sit:mb-xs">sit:animate-slide-in-start</code>
        <button class="sit:cursor-pointer" @click=${replay}>Replay</button>
      </div>
      <div class="sit:text-center">
        <div class="sit:animate-scale-in sit:bg-primary sit:text-fixed-light sit:p-lg sit:rounded-sm sit:mb-xs">
          scale-in
        </div>
        <code class="sit:d-block sit:mb-xs">sit:animate-scale-in</code>
        <button class="sit:cursor-pointer" @click=${replay}>Replay</button>
      </div>
    </div>
  `;
};

export const Animations = AnimationDemo;
