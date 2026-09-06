import { html } from "lit";

const sizes = ["xs", "sm", "md", "lg", "xl"];

const SizesTemplate = _ => {
  return html`
    <div class="d-flex-row flex-wrap" style="align-items: flex-end;">
      ${sizes.map(s => html`<sit-avatar size=${s} initials="JT"></sit-avatar>`)}
    </div>
  `;
};

const ImageTemplate = _ => {
  return html`
    <div class="d-flex-row flex-wrap">
      <sit-avatar src="https://i.pravatar.cc/150?img=12" alt="Jane Tan" size="lg"></sit-avatar>
      <sit-avatar
        src="https://broken-image-url-for-fallback-demo.example/none.jpg"
        alt="Bob Lee"
        initials="BL"
        size="lg"
      ></sit-avatar>
    </div>
  `;
};

const FallbackPaletteTemplate = _ => {
  const names = ["Alice Tan", "Bob Lee", "Charlie Ng", "Dana Wong", "Evan Koh", "Farah Idris", "Gopal Ram", "Hui Ling"];
  return html`
    <div class="d-flex-row flex-wrap">
      ${names.map(n => {
        const initials = n
          .split(" ")
          .map(part => part[0])
          .join("");
        return html`<sit-avatar initials=${initials} alt=${n} size="lg"></sit-avatar>`;
      })}
    </div>
  `;
};

const IconFallbackTemplate = _ => {
  return html` <sit-avatar size="lg"></sit-avatar> `;
};

const StatusTemplate = _ => {
  return html`
    <div class="d-flex-row flex-wrap">
      <sit-avatar initials="ON" status="online" size="lg"></sit-avatar>
      <sit-avatar initials="AW" status="away" size="lg"></sit-avatar>
      <sit-avatar initials="OF" status="offline" size="lg"></sit-avatar>
    </div>
  `;
};

export const Sizes = {
  render: SizesTemplate.bind({}),
  name: "Sizes",
  args: {},
  parameters: {}
};

export const WithImage = {
  render: ImageTemplate.bind({}),
  name: "Image (with fallback on error)",
  args: {},
  parameters: {}
};

export const FallbackPalette = {
  render: FallbackPaletteTemplate.bind({}),
  name: "Deterministic fallback colours",
  args: {},
  parameters: {}
};

export const IconFallback = {
  render: IconFallbackTemplate.bind({}),
  name: "Icon fallback (no image, no initials)",
  args: {},
  parameters: {}
};

export const Status = {
  render: StatusTemplate.bind({}),
  name: "Status dot",
  args: {},
  parameters: {}
};
