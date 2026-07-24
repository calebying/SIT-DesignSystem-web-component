import { html } from "lit";

export default {
  title: "Foundation/Grid System"
};

/** 🎨 Basic Grid Example */
const BasicGrid = () => html`
  <div class="sit-container">
    <div class="sit-grid">
      <div class="sit-col-2 grid-item">1</div>
      <div class="sit-col-2 grid-item">2</div>
      <div class="sit-col-2 grid-item">3</div>
      <div class="sit-col-2 grid-item">4</div>
    </div>
  </div>
`;

/** 📲 Responsive Grid Example */
const ResponsiveGrid = () => html`
  <div class="sit-container">
    <div class="sit-grid">
      <div class="sit-col-4 sit-col-sm-4 sit-col-md-3 sit-col-lg-3 grid-item">Col 1</div>
      <div class="sit-col-4 sit-col-sm-4 sit-col-md-3 sit-col-lg-3 grid-item">Col 2</div>
      <div class="sit-col-4 sit-col-sm-4 sit-col-md-3 sit-col-lg-3 grid-item">Col 3</div>
      <div class="sit-col-4 sit-col-sm-4 sit-col-md-3 sit-col-lg-3 grid-item">Col 4</div>
    </div>
  </div>
`;

/** 👀 Hidden Columns Example */
const HiddenColumns = () => html`
  <div class="sit-container">
    <div class="sit-grid">
      <div class="sit-col-2 sit-col-sm-4 sit-col-md-none grid-item">Hidden in md</div>
      <div class="sit-col-none sit-col-2 sit-col-sm-4 grid-item">Hidden in xs</div>
    </div>
  </div>
`;

/** 👀 Center Column Example */
const CenterColumn = () => html`
  <div class="sit-container">
    <div class="sit-grid">
      <div
        class="sit-col-center-2 sit-col-sm-center-4 sit-col-md-center-4 sit-col-lg-center-6 sit-col-xl-center-6 sit-col-2-xl-center-6 grid-item"
      >
        Center
      </div>
    </div>
  </div>
`;

export const Basic = {
  render: BasicGrid.bind({}),
  name: "Basic Grid",
  args: {},
  parameters: {},
  tags: ["!dev", "!autodocs"]
};

export const Responsive = {
  render: ResponsiveGrid.bind({}),
  name: "Responsive Grid",
  args: {},
  parameters: {},
  tags: ["!dev", "!autodocs"]
};

export const HiddenCol = {
  render: HiddenColumns.bind({}),
  name: "Hidden Columns",
  args: {},
  parameters: {},
  tags: ["!dev", "!autodocs"]
};

export const CenterCol = {
  render: CenterColumn.bind({}),
  name: "Hidden Columns",
  args: {},
  parameters: {},
  tags: ["!dev", "!autodocs"]
};
