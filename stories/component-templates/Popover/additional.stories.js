import { html } from "lit";

const HoverTemplate = _ => {
  return html`
    <sit-popover trigger="hover" placement="top">
      <sit-button variant="outline">Hover me</sit-button>
      <div slot="content">
        <p style="margin:0;">Shown on hover/focus, hidden on mouseleave/blur.</p>
      </div>
    </sit-popover>
  `;
};

const RichContentTemplate = _ => {
  return html`
    <sit-popover trigger="click" placement="right-start">
      <sit-button variant="primary">Account menu</sit-button>
      <div slot="content" style="min-width: 200px;">
        <p style="margin:0 0 8px;font-weight:600;">Jane Tan</p>
        <p style="margin:0 0 12px;color:var(--sit-color-muted);">jane.tan@example.com</p>
        <sit-button variant="outline" size="sm" fullWidth>Sign out</sit-button>
      </div>
    </sit-popover>
  `;
};

const PlacementsTemplate = _ => {
  const placements = ["top", "bottom", "left", "right"];
  return html`
    <div class="d-flex-row flex-wrap" style="gap: 48px; padding: 48px;">
      ${placements.map(
        p => html`
          <sit-popover trigger="click" placement=${p}>
            <sit-button variant="outline">${p}</sit-button>
            <div slot="content"><p style="margin:0;">Placement: ${p}</p></div>
          </sit-popover>
        `
      )}
    </div>
  `;
};

export const HoverTrigger = {
  render: HoverTemplate.bind({}),
  name: "Hover trigger",
  args: {},
  parameters: {}
};

export const RichContent = {
  render: RichContentTemplate.bind({}),
  name: "Rich content",
  args: {},
  parameters: {}
};

export const Placements = {
  render: PlacementsTemplate.bind({}),
  name: "Placements",
  args: {},
  parameters: {}
};
