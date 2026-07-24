import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const VariantTemplate = args =>
  html`
    <sit-toast show variant=${ifDefined(args.variant)} dismissible title=${capitalizeFirstLetter(args.variant)}>
      ${args.variant === "success"
        ? html`<sit-icon slot="icon" name="check-circle-fill" size="md"></sit-icon>`
        : args.variant === "danger"
        ? html`<sit-icon slot="icon" name="exclamation-circle-fill" size="md"></sit-icon>`
        : args.variant === "warning"
        ? html`<sit-icon slot="icon" name="exclamation-triangle-fill" size="md"></sit-icon>`
        : html`<sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>`}
      Message
      <sit-link slot="action" size="sm"><a href="#" target="_blank">Action</a></sit-link>
    </sit-toast>
  `;

export const InfoVariant = {
  render: VariantTemplate.bind({}),
  name: "Variant info",
  args: { variant: "info" },
  parameters: {}
};
export const SuccessVariant = {
  render: VariantTemplate.bind({}),
  name: "Variant success",
  args: { variant: "success" },
  parameters: {}
};
export const DangerVariant = {
  render: VariantTemplate.bind({}),
  name: "Variant danger",
  args: { variant: "danger" },
  parameters: {}
};
export const WarningVariant = {
  render: VariantTemplate.bind({}),
  name: "Variant warning",
  args: { variant: "warning" },
  parameters: {}
};
export const NeutralVariant = {
  render: VariantTemplate.bind({}),
  name: "Variant neutral",
  args: { variant: "neutral" },
  parameters: {}
};

const DismissibleTemplate = args =>
  html`
    <div class="d-flex-column">
      <sit-toast show dismissible title="Dismissible">
        <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
        Message
        <sit-link slot="action" size="sm"><a href="#" target="_blank">Action</a></sit-link>
      </sit-toast>
      <sit-toast show title="Not dismissible">
        <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
        Message
        <sit-link slot="action" size="sm"><a href="#" target="_blank">Action</a></sit-link>
      </sit-toast>
    </div>
  `;

export const Dismissible = {
  render: DismissibleTemplate.bind({}),
  name: "Dismissible",
  args: {},
  parameters: {}
};

const PositionTemplate = args =>
  html`
    <div style="height:600px;">
      <sit-masthead></sit-masthead>
      <sit-mainnav>
        <img alt="Sit logo" width="130" src="/logo.png" slot="brand" />
      </sit-mainnav>
      <sit-toast-container position=${ifDefined(args.position)}>
        <sit-toast
          ?show=${args.show}
          variant=${ifDefined(args.variant)}
          ?autohide=${args.autohide}
          delay=${ifDefined(args.delay)}
          ?noAnimation=${args.noAnimation}
          ?dismissable=${args.dismissable}
          title=${ifDefined(args.title)}
        >
          <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
          This is a toast notifications
          <sit-link slot="action" size="sm"><a href="#" target="_blank">Action</a></sit-link>
        </sit-toast>
      </sit-toast-container>
    </div>
  `;
export const TopCenter = {
  render: PositionTemplate.bind({}),
  name: "Top center",
  args: { ...args, position: "top-center" },
  parameters: {}
};
export const TopEnd = {
  render: PositionTemplate.bind({}),
  name: "Top end",
  args: { ...args, position: "top-end" },
  parameters: {}
};
export const BottomStart = {
  render: PositionTemplate.bind({}),
  name: "Bottom start",
  args: { ...args, position: "bottom-start" },
  parameters: {}
};
export const BottomCenter = {
  render: PositionTemplate.bind({}),
  name: "Bottom center",
  args: { ...args, position: "bottom-center" },
  parameters: {}
};
export const BottomEnd = {
  render: PositionTemplate.bind({}),
  name: "Bottom end",
  args: { ...args, position: "bottom-end" },
  parameters: {}
};

const StackingTemplate = () =>
  html`
    <div style="height:400px;">
      <sit-toast-container position=${ifDefined(args.position)}>
        <sit-toast show>
          <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
          This is a toast notifications
          <sit-link slot="action" size="sm"><a href="#" target="_blank">Action</a></sit-link>
        </sit-toast>
        <sit-toast show>
          <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
          This is a toast notifications
          <sit-link slot="action" size="sm"><a href="#" target="_blank">Action</a></sit-link>
        </sit-toast>
      </sit-toast-container>
    </div>
  `;

export const Stacking = {
  render: StackingTemplate.bind({}),
  name: "Stacking the toasts",
  args: { position: "bottom-end" },
  parameters: {}
};
