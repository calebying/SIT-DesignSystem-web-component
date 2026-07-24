import { html } from "lit";

const ToneTemplate = () => html`
  <sit-spinner variant="primary"></sit-spinner>
  <sit-spinner variant="neutral"></sit-spinner>
  <sit-spinner tone="brand"></sit-spinner>
  <sit-spinner tone="neutral"></sit-spinner>
  <sit-spinner tone="fixed-dark"></sit-spinner>
`;

const ToneInverseAndFixedLightTemplate = () => html`
  <div style="padding: 12px; background-color: #222;">
    <sit-spinner tone="inverse"></sit-spinner>
    <sit-spinner tone="fixed-light"></sit-spinner>
  </div>
`;
const SizeTemplate = () => html`
  <sit-spinner size="xs"></sit-spinner>
  <sit-spinner size="sm"></sit-spinner>
  <sit-spinner size="md"></sit-spinner>
  <sit-spinner size="lg"></sit-spinner>
  <sit-spinner size="xl"></sit-spinner>
`;

export const Tone = {
  render: ToneTemplate.bind({}),
  name: "Tone",
  args: {},
  parameters: {
    backgrounds: { default: "custom-blue" }
  }
};
export const ToneInverseFixedLight = {
  render: ToneInverseAndFixedLightTemplate.bind({}),
  name: "Tone - inverse and fixed light",
  args: {},
  parameters: {}
};

export const Size = {
  render: SizeTemplate.bind({}),
  name: "Size",
  args: {},
  parameters: {}
};

export const Label = {
  render: Template.bind({}),
  name: "Label",
  args: { label: "Label" },
  parameters: {}
};

export const LabelHorizontal = {
  render: Template.bind({}),
  name: "Label - Horizontal",
  args: { label: "Label", orientation: "horizontal" },
  parameters: {}
};
