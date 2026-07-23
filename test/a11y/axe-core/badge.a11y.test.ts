import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Badge a11y", () => {
  it("SIT-badge should be accessible", async () => {
    const el = await fixture(html` <sit-badge variant="primary">New</sit-badge> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-badge outlined should be accessible", async () => {
    const el = await fixture(html` <sit-badge variant="neutral" outlined>Tag</sit-badge> `);
    await expect(el).to.be.accessible();
  });
});



