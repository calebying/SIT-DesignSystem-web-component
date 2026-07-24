import { html } from "lit";
import "../../../mocks/color-item.ts";

export default {
  title: "Utilities/Border/Color",
  tags: ["!autodocs"]
};

const ColorItem = (token, variable, borderColorValue = true) => {
  return html`
    <color-item
      token="${token}"
      variable="${variable}"
      borderColorValue="${borderColorValue ? "true" : ""}"
    ></color-item>
  `;
};

const ColorGrid = (...items) => html`
  <div class="sit:grid sit:gap-2-xl sit:p-2-xl" style="grid-template-columns: repeat(3, 1fr);">${items}</div>
`;

export const Grayscales = () =>
  ColorGrid(
    ColorItem("sit:border-default", "--Sit-border-color-default"),
    ColorItem("sit:border-emphasis", "--Sit-border-color-emphasis"),
    ColorItem("sit:border-muted", "--Sit-border-color-muted"),
    ColorItem("sit:border-fixed-light", "--Sit-border-color-fixed-light"),
    ColorItem("sit:border-fixed-dark", "--Sit-border-color-fixed-dark"),
    ColorItem("sit:border-translucent", "--Sit-border-color-translucent"),
    ColorItem("sit:border-transparent", "--Sit-border-color-transparent")
  );

export const Primary = () =>
  ColorGrid(
    ColorItem("sit:border-primary-default", "--Sit-primary-border-color-default"),
    ColorItem("sit:border-primary-emphasis", "--Sit-primary-border-color-emphasis"),
    ColorItem("sit:border-primary-muted", "--Sit-primary-border-color-muted")
  );

export const Accent = () =>
  ColorGrid(
    ColorItem("sit:border-accent-default", "--Sit-accent-border-color-default"),
    ColorItem("sit:border-accent-emphasis", "--Sit-accent-border-color-emphasis"),
    ColorItem("sit:border-accent-muted", "--Sit-accent-border-color-muted")
  );

export const Success = () =>
  ColorGrid(
    ColorItem("sit:border-success-default", "--Sit-success-border-color-default"),
    ColorItem("sit:border-success-emphasis", "--Sit-success-border-color-emphasis"),
    ColorItem("sit:border-success-muted", "--Sit-success-border-color-muted")
  );

export const Danger = () =>
  ColorGrid(
    ColorItem("sit:border-danger-default", "--Sit-danger-border-color-default"),
    ColorItem("sit:border-danger-emphasis", "--Sit-danger-border-color-emphasis"),
    ColorItem("sit:border-danger-muted", "--Sit-danger-border-color-muted")
  );

export const Warning = () =>
  ColorGrid(
    ColorItem("sit:border-warning-default", "--Sit-warning-border-color-default"),
    ColorItem("sit:border-warning-emphasis", "--Sit-warning-border-color-emphasis"),
    ColorItem("sit:border-warning-muted", "--Sit-warning-border-color-muted")
  );
