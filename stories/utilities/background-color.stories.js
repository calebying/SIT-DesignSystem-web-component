import { html } from "lit";
import "../../mocks/color-item.ts";

export default {
  title: "Utilities/Background Color",
  tags: ["!autodocs"]
};

const ColorItem = (token, variable, bgClass, textClass = "") => {
  return html`
    <color-item token="${token}" variable="${variable}" bgClass="${bgClass}" textClass="${textClass}"></color-item>
  `;
};

const ColorGrid = (...items) => html`
  <div class="sit:grid sit:gap-2-xl sit:p-2-xl" style="grid-template-columns: repeat(3, 1fr);">${items}</div>
`;

export const Surface = () =>
  ColorGrid(
    ColorItem("sit:bg-surface-default", "--Sit-surface-default", "sit:bg-surface-default"),
    ColorItem("sit:bg-surface-raised", "--Sit-surface-raised", "sit:bg-surface-raised"),
    ColorItem("sit:bg-surface-inverse", "--Sit-surface-inverse", "sit:bg-surface-inverse", "sit:text-inverse"),
    ColorItem(
      "sit:bg-surface-fixed-light",
      "--Sit-surface-fixed-light",
      "sit:bg-surface-fixed-light",
      "sit:text-fixed-dark"
    ),
    ColorItem(
      "sit:bg-surface-fixed-dark",
      "--Sit-surface-fixed-dark",
      "sit:bg-surface-fixed-dark",
      "sit:text-fixed-light"
    )
  );

export const Grayscales = () =>
  ColorGrid(
    ColorItem("sit:bg-default", "--Sit-bg-default", "sit:bg-default"),
    ColorItem("sit:bg-alternate", "--Sit-bg-alternate", "sit:bg-alternate"),
    ColorItem("sit:bg-fixed-light", "--Sit-bg-fixed-light", "sit:bg-fixed-light", "sit:text-fixed-dark"),
    ColorItem("sit:bg-fixed-dark", "--Sit-bg-fixed-dark", "sit:bg-fixed-dark", "sit:text-fixed-light"),
    ColorItem("sit:bg-overlay", "--Sit-bg-overlay", "sit:bg-overlay", "sit:text-inverse"),
    ColorItem("sit:bg-translucent", "--Sit-bg-translucent", "sit:bg-translucent"),
    ColorItem("sit:bg-translucent-subtle", "--Sit-bg-translucent-subtle", "sit:bg-translucent-subtle"),
    ColorItem("sit:bg-transparent", "transparent", "sit:bg-transparent sit:border sit:border-default"),
    ColorItem("sit:bg-translucent-inverse", "--Sit-bg-translucent-inverse", "sit:bg-translucent-inverse"),
    ColorItem(
      "sit:bg-translucent-fixed-dark",
      "--Sit-bg-translucent-fixed-dark",
      "sit:bg-translucent-fixed-dark",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-translucent-fixed-light",
      "--Sit-bg-translucent-fixed-light",
      "sit:bg-translucent-fixed-light",
      "sit:text-fixed-dark"
    )
  );

export const Primary = () =>
  ColorGrid(
    ColorItem("sit:bg-primary-default", "--Sit-primary-bg-default", "sit:bg-primary-default", "sit:text-fixed-light"),
    ColorItem("sit:bg-primary-muted", "--Sit-primary-bg-muted", "sit:bg-primary-muted"),
    ColorItem("sit:bg-primary-translucent", "--Sit-primary-bg-translucent", "sit:bg-primary-translucent"),
    ColorItem(
      "sit:bg-primary-surface-default",
      "--Sit-primary-surface-default",
      "sit:bg-primary-surface-default",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-primary-surface-emphasis",
      "--Sit-primary-surface-emphasis",
      "sit:bg-primary-surface-emphasis",
      "sit:text-fixed-light"
    ),
    ColorItem("sit:bg-primary-surface-muted", "--Sit-primary-surface-muted", "sit:bg-primary-surface-muted"),
    ColorItem(
      "sit:bg-primary-surface-translucent",
      "--Sit-primary-surface-translucent",
      "sit:bg-primary-surface-translucent"
    )
  );

export const Accent = () =>
  ColorGrid(
    ColorItem("sit:bg-accent-default", "--Sit-accent-bg-default", "sit:bg-accent-default", "sit:text-fixed-light"),
    ColorItem("sit:bg-accent-muted", "--Sit-accent-bg-muted", "sit:bg-accent-muted"),
    ColorItem(
      "sit:bg-accent-surface-default",
      "--Sit-accent-surface-default",
      "sit:bg-accent-surface-default",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-accent-surface-emphasis",
      "--Sit-accent-surface-emphasis",
      "sit:bg-accent-surface-emphasis",
      "sit:text-fixed-light"
    ),
    ColorItem("sit:bg-accent-surface-muted", "--Sit-accent-surface-muted", "sit:bg-accent-surface-muted")
  );

export const Success = () =>
  ColorGrid(
    ColorItem("sit:bg-success-default", "--Sit-success-bg-default", "sit:bg-success-default", "sit:text-fixed-light"),
    ColorItem("sit:bg-success-muted", "--Sit-success-bg-muted", "sit:bg-success-muted"),
    ColorItem(
      "sit:bg-success-surface-default",
      "--Sit-success-surface-default",
      "sit:bg-success-surface-default",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-success-surface-emphasis",
      "--Sit-success-surface-emphasis",
      "sit:bg-success-surface-emphasis",
      "sit:text-fixed-light"
    ),
    ColorItem("sit:bg-success-surface-muted", "--Sit-success-surface-muted", "sit:bg-success-surface-muted")
  );

export const Danger = () =>
  ColorGrid(
    ColorItem("sit:bg-danger-default", "--Sit-danger-bg-default", "sit:bg-danger-default", "sit:text-fixed-light"),
    ColorItem("sit:bg-danger-muted", "--Sit-danger-bg-muted", "sit:bg-danger-muted"),
    ColorItem(
      "sit:bg-danger-surface-default",
      "--Sit-danger-surface-default",
      "sit:bg-danger-surface-default",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-danger-surface-emphasis",
      "--Sit-danger-surface-emphasis",
      "sit:bg-danger-surface-emphasis",
      "sit:text-fixed-light"
    ),
    ColorItem("sit:bg-danger-surface-muted", "--Sit-danger-surface-muted", "sit:bg-danger-surface-muted"),
    ColorItem(
      "sit:bg-danger-surface-translucent",
      "--Sit-danger-surface-translucent",
      "sit:bg-danger-surface-translucent"
    )
  );

export const Warning = () =>
  ColorGrid(
    ColorItem("sit:bg-warning-default", "--Sit-warning-bg-default", "sit:bg-warning-default", "sit:text-fixed-dark"),
    ColorItem("sit:bg-warning-muted", "--Sit-warning-bg-muted", "sit:bg-warning-muted", "sit:text-fixed-dark"),
    ColorItem(
      "sit:bg-warning-surface-default",
      "--Sit-warning-surface-default",
      "sit:bg-warning-surface-default",
      "sit:text-fixed-dark"
    ),
    ColorItem(
      "sit:bg-warning-surface-emphasis",
      "--Sit-warning-surface-emphasis",
      "sit:bg-warning-surface-emphasis",
      "sit:text-fixed-dark"
    ),
    ColorItem(
      "sit:bg-warning-surface-muted",
      "--Sit-warning-surface-muted",
      "sit:bg-warning-surface-muted",
      "sit:text-fixed-dark"
    )
  );

export const Purple = () =>
  ColorGrid(
    ColorItem("sit:bg-purple-default", "--Sit-purple-bg-default", "sit:bg-purple-default", "sit:text-fixed-light"),
    ColorItem("sit:bg-purple-muted", "--Sit-purple-bg-muted", "sit:bg-purple-muted", "sit:text-fixed-light"),
    ColorItem("sit:bg-purple-surface-default", "--Sit-purple-surface-default", "sit:bg-purple-surface-default"),
    ColorItem("sit:bg-purple-surface-emphasis", "--Sit-purple-surface-emphasis", "sit:bg-purple-surface-emphasis"),
    ColorItem("sit:bg-purple-surface-muted", "--Sit-purple-surface-muted", "sit:bg-purple-surface-muted")
  );

export const Cyan = () =>
  ColorGrid(
    ColorItem("sit:bg-cyan-default", "--Sit-cyan-bg-default", "sit:bg-cyan-default", "sit:text-fixed-dark"),
    ColorItem("sit:bg-cyan-muted", "--Sit-cyan-bg-muted", "sit:bg-cyan-muted", "sit:text-fixed-dark"),
    ColorItem("sit:bg-cyan-surface-default", "--Sit-cyan-surface-default", "sit:bg-cyan-surface-default"),
    ColorItem("sit:bg-cyan-surface-emphasis", "--Sit-cyan-surface-emphasis", "sit:bg-cyan-surface-emphasis"),
    ColorItem("sit:bg-cyan-surface-muted", "--Sit-cyan-surface-muted", "sit:bg-cyan-surface-muted")
  );

export const Neutral = () =>
  ColorGrid(
    ColorItem("sit:bg-neutral-default", "--Sit-neutral-bg-default", "sit:bg-neutral-default", "sit:text-fixed-light"),
    ColorItem("sit:bg-neutral-muted", "--Sit-neutral-bg-muted", "sit:bg-neutral-muted"),
    ColorItem("sit:bg-neutral-surface-default", "--Sit-neutral-surface-default", "sit:bg-neutral-surface-default"),
    ColorItem("sit:bg-neutral-surface-emphasis", "--Sit-neutral-surface-emphasis", "sit:bg-neutral-surface-emphasis"),
    ColorItem("sit:bg-neutral-surface-muted", "--Sit-neutral-surface-muted", "sit:bg-neutral-surface-muted")
  );

export const Form = () =>
  ColorGrid(
    ColorItem("sit:bg-form-surface-default", "--Sit-form-surface-default", "sit:bg-form-surface-default"),
    ColorItem("sit:bg-form-surface-raised", "--Sit-form-surface-raised", "sit:bg-form-surface-raised"),
    ColorItem(
      "sit:bg-form-surface-emphasis",
      "--Sit-form-surface-emphasis",
      "sit:bg-form-surface-emphasis",
      "sit:text-fixed-dark"
    ),
    ColorItem("sit:bg-form-surface-subtle", "--Sit-form-surface-subtle", "sit:bg-form-surface-subtle"),
    ColorItem("sit:bg-form-surface-muted", "--Sit-form-surface-muted", "sit:bg-form-surface-muted"),
    ColorItem(
      "sit:bg-form-surface-inverse",
      "--Sit-form-surface-inverse",
      "sit:bg-form-surface-inverse",
      "sit:text-fixed-dark"
    ),
    ColorItem(
      "sit:bg-form-surface-fixed-light",
      "--Sit-form-surface-fixed-light",
      "sit:bg-form-surface-fixed-light",
      "sit:text-fixed-dark"
    ),
    ColorItem(
      "sit:bg-form-surface-fixed-dark",
      "--Sit-form-surface-fixed-dark",
      "sit:bg-form-surface-fixed-dark",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-form-primary-surface-default",
      "--Sit-form-primary-surface-default",
      "sit:bg-form-primary-surface-default",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-form-primary-surface-emphasis",
      "--Sit-form-primary-surface-emphasis",
      "sit:bg-form-primary-surface-emphasis",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-form-success-surface-default",
      "--Sit-form-success-surface-default",
      "sit:bg-form-success-surface-default",
      "sit:text-fixed-light"
    ),
    ColorItem(
      "sit:bg-form-danger-surface-default",
      "--Sit-form-danger-surface-default",
      "sit:bg-form-danger-surface-default",
      "sit:text-fixed-light"
    )
  );
