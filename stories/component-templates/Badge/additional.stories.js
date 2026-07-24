import { html } from "lit";

const variants = ["primary", "accent", "success", "danger", "warning", "cyan", "purple", "neutral", "white"];

const VariantTemplate = _ => {
  return html`
    <div class="d-flex-row flex-wrap">
      ${variants.map(v => html` <sit-badge variant=${v}>Filled Badge</sit-badge> `)}
    </div>
  `;
};
const OutlinedVariantTemplate = _ => {
  return html`
    <div class="d-flex-row flex-wrap">
      ${variants.map(v => html` <sit-badge variant=${v} outlined>Outlined Badge</sit-badge> `)}
    </div>
  `;
};
const DismissibleTemplate = _ => {
  return html` <sit-badge show dismissible>Dismissible badge</sit-badge> `;
};
const IconTemplate = _ => {
  return html`
    <div class="d-flex-row flex-wrap">
      <sit-badge variant="danger">
        <sit-icon slot="icon" name="placeholder" size="sm"></sit-icon>
        Leading icon badge
      </sit-badge>
    </div>
  `;
};

const TruncationTemplate = _ => {
  return html`
    <div class="d-flex-row flex-wrap" style="width:300px;padding: 60px 24px 60px;">
      <sit-badge outlined>
        <sit-icon slot="icon" name="placeholder" size="sm"></sit-icon>
        A long badge text that needs to be truncated
      </sit-badge>

      <sit-badge variant="neutral" outlined fullWidth>
        <sit-icon slot="icon" name="placeholder" size="sm"></sit-icon>
        A long badge text that needs to be truncated
      </sit-badge>
    </div>
  `;
};

export const Variants = {
  render: VariantTemplate.bind({}),
  name: "Variants",
  args: {},
  parameters: {}
};

export const OutlinedVariants = {
  render: OutlinedVariantTemplate.bind({}),
  name: "Outlined variants",
  args: {},
  parameters: {}
};

export const Dismissible = {
  render: DismissibleTemplate.bind({}),
  name: "Dismissible",
  args: {},
  parameters: {}
};

export const WithIcon = {
  render: IconTemplate.bind({}),
  name: "Icon",
  args: {},
  parameters: {}
};

export const WithTruncation = {
  render: TruncationTemplate.bind({}),
  name: "Truncation",
  args: {},
  parameters: {}
};
