import { html } from "lit";

const VariantTemplate = args => {
  const variants = [
    { variant: "Info", icon: "info-circle-fill" },
    { variant: "Success", icon: "check-circle-fill" },
    { variant: "Danger", icon: "exclamation-circle-fill" },
    { variant: "Warning", icon: "exclamation-triangle-fill" },
    { variant: "Neutral", icon: "info-circle-fill" }
  ];
  return html`
    <div class="d-flex-column">
      ${variants.map(
        v => html`
        <sit-alert variant=${v.variant.toLowerCase()} show title="${v.variant} alert">
          <sit-icon slot="icon" name=${v.icon} size="md"></sit-icon>
          Description with <a href="#">link</a> and more details here
        </sit-alert>
    </div>    
        `
      )}
    </div>
  `;
};
const OutlinedVariantTemplate = args => {
  const variants = [
    { variant: "Info", icon: "info-circle-fill" },
    { variant: "Success", icon: "check-circle-fill" },
    { variant: "Danger", icon: "exclamation-circle-fill" },
    { variant: "Warning", icon: "exclamation-triangle-fill" },
    { variant: "Neutral", icon: "info-circle-fill" }
  ];
  return html`
    <div class="d-flex-column">
      ${variants.map(
        v => html`
        <sit-alert variant=${v.variant.toLowerCase()} show title="${v.variant} alert" outlined>
          <sit-icon slot="icon" name=${v.icon} size="md"></sit-icon>
          Description with <a href="#">link</a> and more details here
        </sit-alert>
    </div>    
        `
      )}
    </div>
  `;
};
const DismissibleTemplate = args => {
  const variants = [
    { variant: "info", icon: "info-circle-fill" },
    { variant: "success", icon: "check-circle-fill" },
    { variant: "danger", icon: "exclamation-circle-fill" },
    { variant: "warning", icon: "exclamation-triangle-fill" },
    { variant: "neutral", icon: "info-circle-fill" }
  ];
  return html`
    <div class="d-flex-column">
      ${variants.map(
        v => html`
          <sit-alert
            show
            variant=${v.variant}
            title="${v.variant.charAt(0).toUpperCase() + v.variant.slice(1)} alert"
            dismissible
          >
            <sit-icon slot="icon" name=${v.icon} size="md"></sit-icon>
            A dismissible <a href="#">alert</a> with more info
          </sit-alert>
        `
      )}
      ${variants.map(
        v => html`
          <sit-alert
            show
            variant=${v.variant}
            title="${v.variant.charAt(0).toUpperCase() + v.variant.slice(1)} outlined alert"
            outlined
            dismissible
          >
            <sit-icon slot="icon" name=${v.icon} size="md"></sit-icon>
            A dismissible outlined <a href="#">alert</a> with more info
          </sit-alert>
        `
      )}
    </div>
  `;
};
const IconTemplate = args => {
  return html`
    <div class="d-flex-column">
      <sit-alert show title="Title"> Alert with no leading <a href="#">icon</a> and extra text </sit-alert>
      <sit-alert show title="Title">
        <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
        Alert with leading <a href="#">icon</a> and extra text
      </sit-alert>
    </div>
  `;
};

const TitleTemplate = args => {
  return html`
    <div class="d-flex-column">
      <sit-alert show> Alert with no title </sit-alert>
      <sit-alert show title="Title"> Alert with title </sit-alert>
    </div>
  `;
};

const LinkTemplate = args => {
  return html`
    <sit-alert variant="info" show title="Alert with link">
      Description with <a href="#">link</a> and more details here
    </sit-alert>
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

export const WithTitle = {
  render: TitleTemplate.bind({}),
  name: "Title",
  args: {},
  parameters: {}
};

export const WithLink = {
  render: LinkTemplate.bind({}),
  name: "Link",
  args: {},
  parameters: {}
};

const FilledActionTemplate = args => {
  const variants = [
    { variant: "info", icon: "info-circle-fill", tone: "fixed-light" },
    { variant: "success", icon: "check-circle-fill", tone: "fixed-light" },
    { variant: "danger", icon: "exclamation-circle-fill", tone: "fixed-light" },
    { variant: "warning", icon: "exclamation-triangle-fill", tone: "neutral" },
    { variant: "neutral", icon: "info-circle-fill", tone: "fixed-light" }
  ];
  return html`
    <div class="d-flex-column">
      ${variants.map(
        v => html`
          <sit-alert
            variant=${v.variant}
            show
            title="${v.variant.charAt(0).toUpperCase() + v.variant.slice(1)} alert"
            class="sit:mb-md"
          >
            <sit-icon slot="icon" name=${v.icon} size="md"></sit-icon>
            Description with <a href="#">link</a> and more details here
            <sit-button slot="action" variant="outline" size="sm" tone=${v.tone}>Take Action</sit-button>
          </sit-alert>
        `
      )}
    </div>
  `;
};

const OutlinedActionTemplate = args => {
  const variants = [
    { variant: "info", icon: "info-circle-fill" },
    { variant: "success", icon: "check-circle-fill" },
    { variant: "danger", icon: "exclamation-circle-fill" },
    { variant: "warning", icon: "exclamation-triangle-fill" },
    { variant: "neutral", icon: "info-circle-fill" }
  ];
  return html`
    <div class="d-flex-column">
      ${variants.map(
        v => html`
          <sit-alert
            variant=${v.variant}
            show
            title="${v.variant.charAt(0).toUpperCase() + v.variant.slice(1)} alert"
            outlined
            class="sit:mb-md"
          >
            <sit-icon slot="icon" name=${v.icon} size="md"></sit-icon>
            Description with <a href="#">link</a> and more details here
            <sit-button slot="action" variant="outline" size="sm" tone="neutral">Take Action</sit-button>
          </sit-alert>
        `
      )}
    </div>
  `;
};

export const FilledWithAction = {
  render: FilledActionTemplate.bind({}),
  name: "Filled with action",
  args: {},
  parameters: {}
};

export const OutlinedWithAction = {
  render: OutlinedActionTemplate.bind({}),
  name: "Outlined with action",
  args: {},
  parameters: {}
};
