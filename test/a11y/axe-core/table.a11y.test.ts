import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Table a11y", () => {
  it("sit-table should be accessible", async () => {
    const el = await fixture(html`
      <sit-table>
        <sit-table-row>
          <sit-table-head>Name</sit-table-head>
          <sit-table-head>Age</sit-table-head>
        </sit-table-row>
        <sit-table-row>
          <sit-table-cell>Alice</sit-table-cell>
          <sit-table-cell>25</sit-table-cell>
        </sit-table-row>
        <sit-table-row>
          <sit-table-cell>Bob</sit-table-cell>
          <sit-table-cell>30</sit-table-cell>
        </sit-table-row>
      </sit-table>
    `);
    await expect(el).to.be.accessible();
  });
});
