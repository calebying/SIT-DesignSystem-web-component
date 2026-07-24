import { html } from "lit";

const StructuredElementsTemplate = () => html`
  <sit-table ?headerbackground=${true} ?tableBorder=${true}>
    <sit-table-row>
      <sit-table-head>#</sit-table-head>
      <sit-table-head>First name</sit-table-head>
      <sit-table-head>Last name</sit-table-head>
      <sit-table-head>Username</sit-table-head>
      <sit-table-head>Action</sit-table-head>
    </sit-table-row>

    <sit-table-row>
      <sit-table-cell>1</sit-table-cell>
      <sit-table-cell>John</sit-table-cell>
      <sit-table-cell>Doe</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@johndoe</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell>
        <sit-icon-button name="three-dots-vertical"></sit-icon-button>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>2</sit-table-cell>
      <sit-table-cell>Jane</sit-table-cell>
      <sit-table-cell>Doe</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@janedoe</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell>-</sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell>3</sit-table-cell>
      <sit-table-cell>Bob</sit-table-cell>
      <sit-table-cell>Smith</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@bobsmith</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell>
        <sit-badge outlined> active </sit-badge>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;

const StructuredElementsTemplateVertical = () => html`
  <sit-table ?headerbackground=${true} ?tableBorder=${true}>
    <sit-table-row>
      <sit-table-head>1</sit-table-head>
      <sit-table-cell>John</sit-table-cell>
      <sit-table-cell>Doe</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@johndoe</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell>
        <sit-icon-button name="three-dots-vertical"></sit-icon-button>
      </sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-head>2</sit-table-head>
      <sit-table-cell>Jane</sit-table-cell>
      <sit-table-cell>Doe</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@janedoe</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell>-</sit-table-cell>
    </sit-table-row>
    <sit-table-row>
      <sit-table-head>3</sit-table-head>
      <sit-table-cell>Bob</sit-table-cell>
      <sit-table-cell>Smith</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@bobsmith</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell>
        <sit-badge outlined> active </sit-badge>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
`;

const StructuredElementsTemplateBoth = () => html` <sit-table ?headerbackground=${true} ?tableBorder=${true}>
  <sit-table-row>
    <sit-table-head>#</sit-table-head>
    <sit-table-head>First name</sit-table-head>
    <sit-table-head>Last name</sit-table-head>
    <sit-table-head>Username</sit-table-head>
    <sit-table-head>Action</sit-table-head>
  </sit-table-row>

  <sit-table-row>
    <sit-table-head>1</sit-table-head>
    <sit-table-cell>John</sit-table-cell>
    <sit-table-cell>Doe</sit-table-cell>
    <sit-table-cell>
      <sit-link>
        <a href="#">@johndoe</a>
      </sit-link>
    </sit-table-cell>
    <sit-table-cell>
      <sit-icon-button name="three-dots-vertical"></sit-icon-button>
    </sit-table-cell>
  </sit-table-row>
  <sit-table-row>
    <sit-table-head>2</sit-table-head>
    <sit-table-cell>Jane</sit-table-cell>
    <sit-table-cell>Doe</sit-table-cell>
    <sit-table-cell>
      <sit-link>
        <a href="#">@janedoe</a>
      </sit-link>
    </sit-table-cell>
    <sit-table-cell>-</sit-table-cell>
  </sit-table-row>
  <sit-table-row>
    <sit-table-head>3</sit-table-head>
    <sit-table-cell>Bob</sit-table-cell>
    <sit-table-cell>Smith</sit-table-cell>
    <sit-table-cell>
      <sit-link>
        <a href="#">@bobsmith</a>
      </sit-link>
    </sit-table-cell>
    <sit-table-cell>
      <sit-badge outlined> active </sit-badge>
    </sit-table-cell>
  </sit-table-row>
</sit-table>`;

export const AlwaysResponsive = {
  render: Template.bind({}),
  name: "Always responsive",
  args: { responsive: "always" },
  parameters: {}
};

export const Responsive = {
  render: Template.bind({}),
  name: "Responsive",
  args: { responsive: "sm" },
  parameters: {}
};

export const StructuredElements = {
  render: StructuredElementsTemplate.bind({}),
  name: "Structured elements",
  args: { responsive: "sm" },
  parameters: {}
};

export const StructuredElementsVertical = {
  render: StructuredElementsTemplateVertical.bind({}),
  name: "Structured elements with vertical",
  args: { responsive: "sm" },
  parameters: {}
};

export const StructuredElementsBoth = {
  render: StructuredElementsTemplateBoth.bind({}),
  name: "Structured elements with both header",
  args: { responsive: "sm" },
  parameters: {}
};
