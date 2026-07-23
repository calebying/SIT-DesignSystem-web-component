import "./sit-web-component";
import { expect, fixture, html } from "@open-wc/testing";
import { SitTable } from "../src/components/Table/sit-table";
import { SitTableRow } from "../src/components/Table/sit-table-row";

describe("Table", () => {
  it("renders with default properties", async () => {
    const el = await fixture<SitTable>(html`<sit-table></sit-table>`);
    expect(el).to.exist;
    expect(el.headerPosition).to.equal("horizontal");
    expect(el.rowHeader).to.deep.equal([]);
    expect(el.columnHeader).to.deep.equal([]);
    expect(el.tableData).to.deep.equal([]);
    expect(el.headerBackground).to.be.false;
    expect(el.tableBorder).to.be.false;
  });

  it("renders with row headers", async () => {
    const el = await fixture<SitTable>(html`<sit-table .rowHeader=${["Name", "Age", "Country"]}></sit-table>`);
    expect(el.rowHeader).to.deep.equal(["Name", "Age", "Country"]);
  });

  it("renders table data correctly", async () => {
    const el = await fixture<SitTable>(
      html`<sit-table
        .rowHeader=${["Name", "Age"]}
        .tableData=${[
          ["Alice", 25],
          ["Bob", 30]
        ]}
      ></sit-table>`
    );

    await el.updateComplete;

    const rows = el.shadowRoot?.querySelectorAll("tbody tr");
    expect(rows?.length).to.equal(2);
    expect(rows?.[0].innerHTML).to.include("Alice");
    expect(rows?.[1].innerHTML).to.include("Bob");
  });

  it("renders with column headers in vertical mode", async () => {
    const el = await fixture<SitTable>(
      html`<sit-table
        headerPosition="vertical"
        .columnHeader=${["Attribute", "Value"]}
        .tableData=${[
          ["Alice", 25],
          ["Bob", 30]
        ]}
      ></sit-table>`
    );

    await el.updateComplete;

    const thElements = el.shadowRoot?.querySelectorAll("th");
    expect(thElements?.[0].innerText).to.equal("Attribute");
    expect(thElements?.[1].innerText).to.equal("Value");
  });

  it("renders with both row and column headers", async () => {
    const el = await fixture<SitTable>(
      html`<sit-table
        headerPosition="both"
        .rowHeader=${["Name", "Age"]}
        .columnHeader=${["Person 1", "Person 2"]}
        .tableData=${[
          ["Alice", 25],
          ["Bob", 30]
        ]}
      ></sit-table>`
    );
    await el.updateComplete;

    const table = el.shadowRoot?.querySelector("table");
    expect(table).to.exist;
    expect(table?.innerHTML).to.include("Name");
    expect(table?.innerHTML).to.include("Person 1");
  });

  it("outer wrapper is a table element", async () => {
    const el = await fixture<SitTable>(html`<sit-table></sit-table>`);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it("Should have responsive wrapper with tabindex", async () => {
    const el = await fixture<SitTable>(html`<sit-table responsive="always"></sit-table>`);

    expect(el.shadowRoot?.querySelector("div")?.classList.contains("table-responsive")).to.be.true;
    expect(el.shadowRoot?.querySelector("div")).to.have.attribute("tabindex", "0");
  });

  it("Should have responsive breakpoints", async () => {
    const el = await fixture<SitTable>(html`<sit-table responsive="md"></sit-table>`);
    expect(el.shadowRoot?.querySelector("div")?.classList.contains("table-responsive-md")).to.be.true;
  });

  it("Should set headerBackground property", async () => {
    const el = await fixture<SitTable>(html`<sit-table headerBackground></sit-table>`);
    expect(el.headerBackground).to.be.true;
  });

  it("Should set tableBorder property", async () => {
    const el = await fixture<SitTable>(html`<sit-table tableBorder></sit-table>`);
    expect(el.tableBorder).to.be.true;
  });

  it("Should toggle headerBackground and tableBorder dynamically", async () => {
    const el = await fixture<SitTable>(html`<sit-table></sit-table>`);
    expect(el.headerBackground).to.be.false;
    expect(el.tableBorder).to.be.false;

    el.headerBackground = true;
    el.tableBorder = true;
    await el.updateComplete;

    expect(el.headerBackground).to.be.true;
    expect(el.tableBorder).to.be.true;
  });

  it("Should render all content passed in slot, without the provided table data", async () => {
    const el = await fixture<SitTable>(html`<sit-table
      responsive="md"
      .rowHeader=${["Name", "Age"]}
      .tableData=${[
        ["Alice", 25],
        ["Bob", 30]
      ]}
    >
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
        <sit-table-cell> </sit-table-cell>
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
        <sit-table-cell>
          <sit-icon-button name="three-dots-vertical"></sit-icon-button>
        </sit-table-cell>
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
    </sit-table>`);

    await el.updateComplete;

    expect(el.shadowRoot?.querySelector("div")?.classList.contains("table-responsive-md")).to.be.true;
    expect(el.shadowRoot?.querySelector("#table-slot")).not.to.be.null;

    const rows = el.shadowRoot?.querySelectorAll("tbody tr");
    expect(rows?.length).to.equal(0);

    // const columns = el.shadowRoot?.querySelectorAll("tbody td");
    // expect(columns?.length).to.equal(0);

    // const slot = el.shadowRoot?.querySelector("slot");
    // const slotContent = slot?.assignedElements() as HTMLSlotElement[];
    // expect(slotContent?.length).to.equal(4);

    // const headerCells = slotContent?.[0].querySelectorAll("SIT-table-head");
    // expect(headerCells.length).to.equal(5);
    // expect(headerCells?.[0].innerHTML).to.include("#");
    // expect(headerCells?.[1].innerHTML).to.include("First name");
    // expect(headerCells?.[2].innerHTML).to.include("Last name");
    // expect(headerCells?.[3].innerHTML).to.include("Username");
    // expect(headerCells?.[4].innerHTML).to.include("Action");

    // const secondRowCells = slotContent?.[2].querySelectorAll("SIT-table-cell");
    // expect(secondRowCells.length).to.equal(5);
    // expect(secondRowCells?.[0].innerHTML).to.include("2");
    // expect(secondRowCells?.[1].innerHTML).to.include("Jane");
    // expect(secondRowCells?.[2].innerHTML).to.include("Doe");
    // expect(secondRowCells?.[3].innerHTML).to.include("janedoe");
    // expect(secondRowCells?.[4].innerHTML).to.include("SIT-icon-button");
  });

  it("Should render all content when passed into a sit-table-row", async () => {
    const el = await fixture<SitTableRow>(html`<sit-table-row>
      <sit-table-head>#</sit-table-head>
      <sit-table-head>First name</sit-table-head>
      <sit-table-head>Last name</sit-table-head>
      <sit-table-head>Username</sit-table-head>
      <sit-table-head>Action</sit-table-head>
    </sit-table-row> `);

    expect(el.shadowRoot?.querySelector("slot")?.classList.contains("table-row")).to.be.true;
    const slot = el.shadowRoot?.querySelector("slot");
    const slotContent = slot?.assignedElements() as HTMLSlotElement[];
    expect(slotContent?.length).to.equal(5);
    expect(slotContent?.[0].innerHTML).to.include("#");
    expect(slotContent?.[1].innerHTML).to.include("First name");
    expect(slotContent?.[2].innerHTML).to.include("Last name");
    expect(slotContent?.[3].innerHTML).to.include("Username");
    expect(slotContent?.[4].innerHTML).to.include("Action");
  });
});

//TODO: Test cases needs to be revised :3



