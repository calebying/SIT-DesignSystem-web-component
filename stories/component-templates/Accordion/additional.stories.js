import { html } from "lit";

export const BorderVariant = {
  render: Template.bind({}),
  name: "Border variant",
  args: { variant: "border" },
  parameters: {}
};

export const DensityVariant = {
  render: Template.bind({}),
  name: "Compact density",
  args: { density: "compact" },
  parameters: {}
};

export const SpaciousDensity = {
  render: Template.bind({}),
  name: "Spacious density",
  args: { density: "spacious" },
  parameters: {}
};

export const AllowMultiple = {
  render: Template.bind({}),
  name: "Allow multiple active accordion",
  args: { allowMultiple: true },
  parameters: {}
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled state",
  args: { disabled: true },
  parameters: {}
};

const LeadingIconTemplate = iconSize => html`
  <sit-accordion>
    <sit-accordion-item open density="compact" ariaLabel="Accordion density compact">
      <sit-icon slot="icon" name="info-circle" size="md"></sit-icon>
      <div slot="header">Accordion density compact</div>
      <div slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
      </div>
    </sit-accordion-item>
    <sit-accordion-item density="default" ariaLabel="Accordion density default">
      <sit-icon slot="icon" name="info-circle" size="lg"></sit-icon>
      <div slot="header">Accordion density default</div>
      <div slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
      </div>
    </sit-accordion-item>
    <sit-accordion-item density="spacious" ariaLabel="Accordion density spacious">
      <sit-icon slot="icon" name="info-circle" size="xl"></sit-icon>
      <div slot="header">Accordion density spacious</div>
      <div slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
      </div>
    </sit-accordion-item>
  </sit-accordion>
`;

export const LeadingIconSlot = {
  render: LeadingIconTemplate.bind({}),
  name: "Icon slot",
  args: {},
  parameters: {}
};

const BadgeTemplate = args => html`
  <sit-accordion ?allowMultiple=${args.allowMultiple} variant=${args.variant} density=${args.density}>
    <sit-accordion-item ?open=${args.open} ?disabled=${args.disabled} ariaLabel="Accordion title #1">
      <div slot="header">Accordion title #1</div>
      <sit-badge slot="badge" variant="primary">New</sit-badge>
      <div slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
      </div>
    </sit-accordion-item>
    <sit-accordion-item ariaLabel="Accordion title #2">
      <div slot="header">Accordion title #2</div>
      <sit-badge slot="badge" variant="warning">Updated</sit-badge>
      <div slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
      </div>
    </sit-accordion-item>
    <sit-accordion-item open ariaLabel="Accordion title #3">
      <div slot="header">Accordion title #3</div>
      <div slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
      </div>
    </sit-accordion-item>
  </sit-accordion>
`;

export const BadgeSlot = {
  render: BadgeTemplate.bind({}),
  name: "Badge slot",
  args: {},
  parameters: {}
};
