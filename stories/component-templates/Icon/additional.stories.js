import { html } from "lit";

const SizeTemplate = args => {
  const sizes = ["sm", "md", "lg", "xl", "2-xl", "3-xl"];
  return html`${sizes.map(s => html` <sit-icon name="house-door" size=${s}></sit-icon> `)} `;
};

const ColorTemplate = args => {
  const colors = ["red", "blue", "green", "purple", "pink"];
  return html`
    ${colors.map(
      c => html`
        <span style="color:${c}">
          <sit-icon name="house-door"></sit-icon>
        </span>
      `
    )}
  `;
};

export const Size = {
  render: SizeTemplate.bind({}),
  name: "Size",
  args: {},
  parameters: {}
};

export const Color = {
  render: ColorTemplate.bind({}),
  name: "Color",
  args: {},
  parameters: {}
};
