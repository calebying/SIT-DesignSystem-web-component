import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

const ToneTemplate = () => {
  const tones = ["Primary", "Danger", "Neutral", "Fixed-Light", "Fixed-Dark"];
  return html`
    <div class="d-flex-column">
      ${tones.map(
        tone => html`
          <sit-link tone="${tone.toLowerCase()}">
            <a href="#">${tone} link</a>
          </sit-link>
        `
      )}
    </div>
  `;
};
export const Tones = {
  render: ToneTemplate.bind({}),
  name: "Tone",
  args: { ...args },
  parameters: {}
};

const VariantTemplate = () => {
  const variants = ["Primary", "Danger", "Neutral", "Light", "Dark"];
  return html`
    <div class="d-flex-column">
      ${variants.map(
        variant => html`
          <sit-link variant="${variant.toLowerCase()}">
            <a href="#">${variant} link</a>
          </sit-link>
        `
      )}
    </div>
  `;
};
export const Variants = {
  render: VariantTemplate.bind({}),
  name: "Variant",
  args: { ...args },
  parameters: {}
};

const SizeTemplate = () => {
  return html`
    <div class="d-flex-column">
      <sit-link size="xs">
        <a href="#">Extra small</a>
      </sit-link>
      <sit-link size="sm">
        <a href="#">Small</a>
      </sit-link>
      <sit-link size="md">
        <a href="#">Medium (default)</a>
      </sit-link>
      <sit-link size="lg">
        <a href="#">Large</a>
      </sit-link>
    </div>
  `;
};

export const Size = {
  render: SizeTemplate.bind({}),
  name: "Sizes",
  args: {},
  parameters: {}
};

const ExternalLinkTemplate = () => {
  return html`
    <div class="d-flex-column">
      <sit-link size="xs">
        <a href="#" target="_blank">Going to an external link</a>
      </sit-link>
      <sit-link size="sm">
        <a href="#" target="_blank">Going to an external link</a>
      </sit-link>
      <sit-link size="md">
        <a href="#" target="_blank">Going to an external link</a>
      </sit-link>
      <sit-link size="lg">
        <a href="#" target="_blank">Going to an external link</a>
      </sit-link>
    </div>
  `;
};

export const ExternalLink = {
  render: ExternalLinkTemplate.bind({}),
  name: "Target _blank",
  args: {},
  parameters: {}
};

const WithIconTemplate = () => {
  return html`
    <div class="d-flex-column">
      <sit-link
        ><a href="#"><sit-icon name="placeholder"></sit-icon>Icon on the left</a></sit-link
      >
      <sit-link
        ><a href="#">Icon on the right <sit-icon name="placeholder"></sit-icon></a
      ></sit-link>
    </div>
  `;
};

export const Icon = {
  render: WithIconTemplate.bind({}),
  name: "Icons",
  args: {},
  parameters: {}
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled",
  args: { disabled: true },
  parameters: {}
};
export const Active = {
  render: Template.bind({}),
  name: "Active",
  args: { active: true },
  parameters: {}
};
