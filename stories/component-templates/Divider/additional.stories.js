import { html } from "lit";

const ThicknessTemplate = args =>
  html`
    <div class="d-flex-column">
      <div class="d-flex-row">
        <sit-divider></sit-divider>
        <sit-divider thickness="thick"></sit-divider>
        <sit-divider thickness="thicker"></sit-divider>
      </div>
      <div class="d-flex-row" style="height: 100px">
        <sit-divider orientation="vertical"></sit-divider>
        <sit-divider orientation="vertical" thickness="thick"></sit-divider>
        <sit-divider orientation="vertical" thickness="thicker"></sit-divider>
      </div>
    </div>
  `;
const OrientationTeamplate = args =>
  html`
    <div class="d-flex-row" style="height: 500px">
      <sit-divider orientation="vertical"></sit-divider>
      <sit-divider orientation="vertical" thickness="thick"></sit-divider>
      <sit-divider orientation="vertical" thickness="thicker"></sit-divider>
    </div>
  `;

export const Orientation = {
  render: OrientationTeamplate.bind({}),
  name: "Vertical",
  args: {},
  parameters: {}
};
export const Thickness = {
  render: ThicknessTemplate.bind({}),
  name: "Thickness",
  args: {},
  parameters: {}
};
