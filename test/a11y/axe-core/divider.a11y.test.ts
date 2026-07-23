import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Divider a11y", () => {
  it("SIT-divider should be accessible", async () => {
    const el = await fixture(html` <sit-divider></sit-divider> `);
    await expect(el).to.be.accessible();
  });
});



