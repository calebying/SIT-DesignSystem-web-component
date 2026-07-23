import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("OverflowMenu a11y", () => {
  it("SIT-overflow-menu should be accessible", async () => {
    const el = await fixture(html`
      <sit-overflow-menu>
        <sit-dropdown-item>View</sit-dropdown-item>
        <sit-dropdown-item>Edit</sit-dropdown-item>
        <sit-dropdown-item>Delete</sit-dropdown-item>
      </sit-overflow-menu>
    `);
    await expect(el).to.be.accessible();
  });
});



