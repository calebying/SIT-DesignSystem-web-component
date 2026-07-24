import { html } from "lit";

const VariantTemplate = args => {
  return html`
    <div class="d-flex-column">
      <sit-progress-bar variant="primary" value="50"></sit-progress-bar>
      <sit-progress-bar variant="neutral" value="50"></sit-progress-bar>
    </div>
  `;
};

const LabelTemplate = args => {
  return html`
    <div class="d-flex-column">
      <sit-progress-bar variant="primary" value="50" label="50%"></sit-progress-bar>
      <sit-progress-bar variant="neutral" value="50" label="50%"></sit-progress-bar>
    </div>
  `;
};

export const Variants = {
  render: VariantTemplate.bind({}),
  name: "Variants",
  args: {},
  parameters: {}
};
export const Label = {
  render: LabelTemplate.bind({}),
  name: "Label",
  args: {},
  parameters: {}
};
