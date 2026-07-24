import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Badge a11y", () => {
  it("sit-badge should be accessible", async () => {
    const el = await fixture(html` <sit-badge variant="primary">New</sit-badge> `);
    await expect(el).to.be.accessible();
  });

  it("sit-badge outlined should be accessible", async () => {
    const el = await fixture(html` <sit-badge variant="neutral" outlined>Tag</sit-badge> `);
    await expect(el).to.be.accessible();
  });
});
