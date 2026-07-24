import { html } from "lit";

const VariantTemplate = args => {
  return html`
    <sit-button variant="primary" ariaLabel="Primary button">Primary button</sit-button>
    <sit-button variant="outline" ariaLabel="Outline button">Outline button</sit-button>
    <sit-button variant="danger" ariaLabel="Danger button">Danger button</sit-button>
    <sit-button variant="ghost" ariaLabel="Ghost button">Ghost button</sit-button>
  `;
};

export const Variants = {
  render: VariantTemplate.bind({}),
  name: "Variants",
  args: {},
  parameters: {}
};
const ToneTemplate = args => {
  return html`
    <div class="d-flex-column">
      <div class="d-flex-row">
        <sit-button tone="brand" variant="primary" ariaLabel="Brand Primary">Brand Primary</sit-button>
        <sit-button tone="brand" variant="outline" ariaLabel="Brand Outline">Brand Outline</sit-button>
        <sit-button tone="brand" variant="ghost" ariaLabel="Brand Ghost">Brand Ghost</sit-button>
      </div>
      <div class="d-flex-row">
        <sit-button tone="danger" variant="primary" ariaLabel="Danger Primary">Danger Primary</sit-button>
        <sit-button tone="danger" variant="outline" ariaLabel="Danger Outline">Danger Outline</sit-button>
        <sit-button tone="danger" variant="ghost" ariaLabel="Danger Ghost">Danger Ghost</sit-button>
      </div>
      <div class="d-flex-row">
        <sit-button tone="neutral" variant="primary" ariaLabel="Neutral Primary">Neutral Primary</sit-button>
        <sit-button tone="neutral" variant="outline" ariaLabel="Neutral Outline">Neutral Outline</sit-button>
        <sit-button tone="neutral" variant="ghost" ariaLabel="Neutral Ghost">Neutral Ghost</sit-button>
      </div>
      <div class="d-flex-row" style="padding: 12px; background-color: #333;">
        <sit-button tone="fixed-light" variant="primary" ariaLabel="Fixed Light Primary"
          >Fixed Light Primary</sit-button
        >
        <sit-button tone="fixed-light" variant="outline" ariaLabel="Fixed Light Outline"
          >Fixed Light Outline</sit-button
        >
        <sit-button tone="fixed-light" variant="ghost" ariaLabel="Fixed Light Ghost">Fixed Light Ghost</sit-button>
      </div>
    </div>
  `;
};

export const Tone = {
  render: ToneTemplate.bind({}),
  name: "Tone",
  args: {},
  parameters: {}
};

const FullWidthTemplate = () => {
  return html`<sit-button fullWidth ariaLabel="Full width button">Full width button</sit-button>`;
};

export const FullWidth = {
  render: FullWidthTemplate.bind({}),
  name: "Full width",
  args: {},
  parameters: {}
};

const SizeTemplate = () => {
  return html` <sit-button size="xs" ariaLabel="Extra small button"> Extra small button </sit-button>
    <sit-button size="sm" ariaLabel="Small button"> Small button </sit-button>
    <sit-button ariaLabel="Medium button"> Medium button </sit-button>
    <sit-button size="lg" ariaLabel="Large button"> Large button </sit-button>`;
};

export const Sizes = {
  render: SizeTemplate.bind({}),
  name: "Sizes",
  args: {},
  parameters: {}
};

const ActiveTemplate = () => {
  return html`
    <sit-button variant="primary" active ariaLabel="Hover / Active"> Hover / Active </sit-button>
    <sit-button variant="outline" active ariaLabel="Hover / Active"> Hover / Active </sit-button>
    <sit-button variant="danger" active ariaLabel="Hover / Active"> Hover / Active </sit-button>
    <sit-button variant="ghost" active ariaLabel="Hover / Active"> Hover / Active </sit-button>
  `;
};

export const Active = {
  render: ActiveTemplate.bind({}),
  name: "Hover / Active state",
  args: {},
  parameters: {}
};

export const Disabled = {
  render: () => html`
    <sit-button variant="primary" disabled ariaLabel="Disabled"> Disabled </sit-button>
    <sit-button variant="outline" disabled ariaLabel="Disabled"> Disabled </sit-button>
    <sit-button variant="ghost" disabled ariaLabel="Disabled"> Disabled </sit-button>
    <sit-button variant="danger" disabled ariaLabel="Disabled"> Disabled </sit-button>
  `,
  name: "Disabled state",
  args: {},
  parameters: {}
};

export const ButtonWithIcon = {
  render: () => html`
    <sit-button ariaLabel="Leading icon"
      ><sit-icon name="placeholder" slot="leftIcon"></sit-icon>Leading icon</sit-button
    >
    <sit-button ariaLabel="Trailing icon">
      <sit-icon name="placeholder" slot="rightIcon"></sit-icon>
      Trailing icon
    </sit-button>
  `,
  name: "Button with icon",
  args: {},
  parameters: {}
};

const FormSubmitTemplate = () => {
  return html`
    <form
      action=""
      method="get"
      @submit=${e => {
        e.preventDefault();
        const formData = new FormData(e.target, e.submitter);
        document.getElementById("form-output").textContent = "Selected: " + formData.get("subject");
      }}
    >
      <p>Choose your favourite subject:</p>
      <sit-button name="subject" type="submit" value="fav_HTML" ariaLabel="HTML">HTML</sit-button>
      <sit-button name="subject" type="submit" value="fav_CSS" ariaLabel="CSS">CSS</sit-button>
      <sit-button name="subject" type="submit" value="fav_JS" ariaLabel="JavaScript">JavaScript</sit-button>
    </form>
    <p id="form-output"></p>
  `;
};

export const FormSubmitValue = {
  render: FormSubmitTemplate.bind({}),
  name: "Form submit with name and value",
  args: {},
  parameters: {}
};

export const Loading = {
  render: () => html`
    <div class="d-flex-column">
      <div class="d-flex-row">
        <sit-button variant="primary" loading ariaLabel="Loading"> Loading... </sit-button>
        <sit-button variant="outline" loading ariaLabel="Loading"> Loading... </sit-button>
        <sit-button variant="ghost" loading ariaLabel="Loading"> Loading... </sit-button>
      </div>
      <div class="d-flex-row">
        <sit-button variant="primary" tone="danger" loading ariaLabel="Loading"> Loading... </sit-button>
        <sit-button variant="outline" tone="danger" loading ariaLabel="Loading"> Loading... </sit-button>
        <sit-button variant="ghost" tone="danger" loading ariaLabel="Loading"> Loading... </sit-button>
      </div>
      <div class="d-flex-row">
        <sit-button variant="primary" tone="neutral" loading ariaLabel="Loading"> Loading... </sit-button>
        <sit-button variant="outline" tone="neutral" loading ariaLabel="Loading"> Loading... </sit-button>
        <sit-button variant="ghost" tone="neutral" loading ariaLabel="Loading"> Loading... </sit-button>
      </div>
      <div class="d-flex-row" style="padding: 12px; background-color: #333;">
        <sit-button variant="primary" tone="fixed-light" loading ariaLabel="Loading"> Loading... </sit-button>
        <sit-button variant="outline" tone="fixed-light" loading ariaLabel="Loading"> Loading... </sit-button>
        <sit-button variant="ghost" tone="fixed-light" loading ariaLabel="Loading"> Loading... </sit-button>
      </div>
    </div>
  `,
  name: "Loading state",
  args: {},
  parameters: {}
};
