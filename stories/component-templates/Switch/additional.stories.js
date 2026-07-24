import { html } from "lit";

const SizeTemplate = args => {
  return html`
    <div class="d-flex-column">
      <sit-switch size="sm">small</sit-switch>
      <sit-switch size="md">medium (default)</sit-switch>
      <sit-switch size="lg">large </sit-switch>
    </div>
  `;
};

const LabelTemplate = args => {
  return html`
    <div class="d-flex-column">
      <sit-switch>Label on the right</sit-switch>
      <sit-switch><span slot="leftLabel"> Label on the left</span></sit-switch>
    </div>
  `;
};

const IconTemplate = args => {
  return html`
    <div class="d-flex-column">
      <sit-switch icon>Off with icon</sit-switch>
      <sit-switch icon checked>On with icon</sit-switch>
    </div>
  `;
};

export const Sizes = {
  render: SizeTemplate.bind({}),
  name: "Sizes",
  args: {},
  parameters: {}
};
export const Label = {
  render: LabelTemplate.bind({}),
  name: "Labels",
  args: {},
  parameters: {}
};
export const Icon = {
  render: IconTemplate.bind({}),
  name: "Icon",
  args: {},
  parameters: {}
};
