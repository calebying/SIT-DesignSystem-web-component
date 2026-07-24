import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
const SizeTemplate = args => html`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <sit-close-button size="sm"></sit-close-button>
    <sit-close-button size="md"></sit-close-button>
  </div>
`;

const ToneDefaultTemplate = args => html` <sit-close-button tone="default"></sit-close-button> `;

const ToneFixedDarkTemplate = args => html`
  <div style="width: 100%; background: #fff; padding: 1rem; display: inline-block;">
    <sit-close-button tone="fixed-dark"></sit-close-button>
  </div>
`;

const ToneFixedLightTemplate = args => html`
  <div style="width: 100%; background: #222; padding: 1rem; display: inline-block;">
    <sit-close-button tone="fixed-light"></sit-close-button>
  </div>
`;

export const Sizes = {
  render: SizeTemplate,
  name: "Sizes",
  args: {},
  parameters: {}
};

export const ToneDefault = {
  render: ToneDefaultTemplate,
  name: "Tone: default",
  args: {},
  parameters: {}
};

export const ToneFixedDark = {
  render: ToneFixedDarkTemplate,
  name: "Tone: fixed-dark",
  args: {},
  parameters: {}
};

export const ToneFixedLight = {
  render: ToneFixedLightTemplate,
  name: "Tone: fixed-light",
  args: {},
  parameters: {}
};
