import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Link a11y", () => {
  it("sit-link should be accessible", async () => {
    const el = await fixture(html` <sit-link><a href="#">Visit our website</a></sit-link> `);
    await expect(el).to.be.accessible();
  });
});
