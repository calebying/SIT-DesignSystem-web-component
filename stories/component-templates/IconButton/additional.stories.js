import { html } from "lit";

const VariantTemplate = args => {
  return html`
    <sit-icon-button variant="primary" name="placeholder" ariaLabel="Placeholder"></sit-icon-button>
    <sit-icon-button variant="outline" name="dash" ariaLabel="Dash"></sit-icon-button>
    <sit-icon-button variant="ghost" name="star" ariaLabel="Star"></sit-icon-button>
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
        <sit-icon-button tone="brand" variant="primary" name="plus" ariaLabel="Add"></sit-icon-button>
        <sit-icon-button tone="brand" variant="outline" name="plus" ariaLabel="Add"></sit-icon-button>
        <sit-icon-button tone="brand" variant="ghost" name="plus" ariaLabel="Add"></sit-icon-button>
      </div>
      <div class="d-flex-row">
        <sit-icon-button tone="danger" variant="primary" name="plus" ariaLabel="Add"></sit-icon-button>
        <sit-icon-button tone="danger" variant="outline" name="plus" ariaLabel="Add"></sit-icon-button>
        <sit-icon-button tone="danger" variant="ghost" name="plus" ariaLabel="Add"></sit-icon-button>
      </div>
      <div class="d-flex-row">
        <sit-icon-button tone="neutral" variant="primary" name="plus" ariaLabel="Add"></sit-icon-button>
        <sit-icon-button tone="neutral" variant="outline" name="plus" ariaLabel="Add"></sit-icon-button>
        <sit-icon-button tone="neutral" variant="ghost" name="plus" ariaLabel="Add"></sit-icon-button>
      </div>
      <div class="d-flex-row" style="padding: 12px; background-color: #333;">
        <sit-icon-button tone="fixed-light" variant="primary" name="plus" ariaLabel="Add"></sit-icon-button>
        <sit-icon-button tone="fixed-light" variant="outline" name="plus" ariaLabel="Add"></sit-icon-button>
        <sit-icon-button tone="fixed-light" variant="ghost" name="plus" ariaLabel="Add"></sit-icon-button>
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

const SizeTemplate = () => {
  return html` <sit-icon-button size="xs" name="plus" ariaLabel="Add"></sit-icon-button>
    <sit-icon-button size="sm" name="plus" ariaLabel="Add"></sit-icon-button>
    <sit-icon-button name="plus" ariaLabel="Add"></sit-icon-button>
    <sit-icon-button size="lg" name="plus" ariaLabel="Add"></sit-icon-button>`;
};

export const Sizes = {
  render: SizeTemplate.bind({}),
  name: "Sizes",
  args: {},
  parameters: {}
};

const ActiveTemplate = () => {
  return html`
    <sit-icon-button tone="brand" active name="plus" ariaLabel="Add"></sit-icon-button>
    <sit-icon-button tone="danger" active name="dash" ariaLabel="Remove"></sit-icon-button>
    <sit-icon-button tone="neutral" active name="three-dots" ariaLabel="More options"></sit-icon-button>
    <sit-icon-button tone="fixed-light" active name="star" ariaLabel="Favourite"></sit-icon-button>
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
    <sit-icon-button variant="primary" disabled name="plus" ariaLabel="Add"></sit-icon-button>
    <sit-icon-button variant="outline" disabled name="dash" ariaLabel="Remove"></sit-icon-button>
    <sit-icon-button variant="ghost" disabled name="three-dots" ariaLabel="More options"></sit-icon-button>
  `,
  name: "Disabled state",
  args: {},
  parameters: {}
};

export const Loading = {
  render: () => html`
    <div class="d-flex-column">
      <div class="d-flex-row">
        <sit-icon-button variant="primary" loading ariaLabel="Loading"></sit-icon-button>
        <sit-icon-button variant="outline" loading ariaLabel="Loading"></sit-icon-button>
        <sit-icon-button variant="ghost" loading ariaLabel="Loading"></sit-icon-button>
      </div>
      <div class="d-flex-row">
        <sit-icon-button variant="primary" tone="danger" loading ariaLabel="Loading"></sit-icon-button>
        <sit-icon-button variant="outline" tone="danger" loading ariaLabel="Loading"></sit-icon-button>
        <sit-icon-button variant="ghost" tone="danger" loading ariaLabel="Loading"></sit-icon-button>
      </div>
      <div class="d-flex-row">
        <sit-icon-button variant="primary" tone="neutral" loading ariaLabel="Loading"></sit-icon-button>
        <sit-icon-button variant="outline" tone="neutral" loading ariaLabel="Loading"></sit-icon-button>
        <sit-icon-button variant="ghost" tone="neutral" loading ariaLabel="Loading"></sit-icon-button>
      </div>
      <div class="d-flex-row">
        <sit-icon-button variant="primary" tone="fixed-light" loading ariaLabel="Loading"></sit-icon-button>
        <sit-icon-button variant="outline" tone="fixed-light" loading ariaLabel="Loading"></sit-icon-button>
        <sit-icon-button variant="ghost" tone="fixed-light" loading ariaLabel="Loading"></sit-icon-button>
      </div>
    </div>
  `,
  name: "Loading state",
  args: {},
  parameters: {}
};
