import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("SegmentedControl a11y", () => {
  it("sit-segmented-control should be accessible", async () => {
    const el = await fixture(html`
      <sit-segmented-control value="list" ariaLabel="View">
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
      </sit-segmented-control>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-segmented-control with a disabled segment should be accessible", async () => {
    const el = await fixture(html`
      <sit-segmented-control value="list" ariaLabel="View">
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid" disabled>Grid</sit-segment>
      </sit-segmented-control>
    `);
    await expect(el).to.be.accessible();
  });
});
