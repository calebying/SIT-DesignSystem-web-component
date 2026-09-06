import { html } from "lit";

const sizes = ["sm", "md", "lg"];

const SizesTemplate = _ => {
  return html`
    <div class="d-flex-row flex-wrap" style="align-items: flex-start; gap: 16px;">
      ${sizes.map(
        s => html`
          <sit-segmented-control size=${s} value="week" ariaLabel="Calendar range">
            <sit-segment value="day">Day</sit-segment>
            <sit-segment value="week">Week</sit-segment>
            <sit-segment value="month">Month</sit-segment>
          </sit-segmented-control>
        `
      )}
    </div>
  `;
};

const DisabledSegmentTemplate = _ => {
  return html`
    <sit-segmented-control value="draft" ariaLabel="Status">
      <sit-segment value="draft">Draft</sit-segment>
      <sit-segment value="review" disabled>In review</sit-segment>
      <sit-segment value="published">Published</sit-segment>
    </sit-segmented-control>
  `;
};

const DisabledGroupTemplate = _ => {
  return html`
    <sit-segmented-control value="list" disabled ariaLabel="View">
      <sit-segment value="list">List</sit-segment>
      <sit-segment value="grid">Grid</sit-segment>
    </sit-segmented-control>
  `;
};

const ChangeEventTemplate = _ => {
  return html`
    <div>
      <sit-segmented-control
        value="list"
        ariaLabel="View"
        @sit-change=${e => {
          const output = document.getElementById("segmented-control-output");
          if (output) output.textContent = `Selected: ${e.detail.value}`;
        }}
      >
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
        <sit-segment value="table">Table</sit-segment>
      </sit-segmented-control>
      <p id="segmented-control-output" style="margin-top: 8px;">Selected: list</p>
    </div>
  `;
};

export const Sizes = {
  render: SizesTemplate.bind({}),
  name: "Sizes",
  args: {},
  parameters: {}
};

export const DisabledSegment = {
  render: DisabledSegmentTemplate.bind({}),
  name: "One segment disabled",
  args: {},
  parameters: {}
};

export const DisabledGroup = {
  render: DisabledGroupTemplate.bind({}),
  name: "Whole group disabled",
  args: {},
  parameters: {}
};

export const ChangeEvent = {
  render: ChangeEventTemplate.bind({}),
  name: "sit-change event",
  args: {},
  parameters: {}
};
