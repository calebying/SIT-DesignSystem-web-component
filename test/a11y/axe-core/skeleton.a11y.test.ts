import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Skeleton a11y", () => {
  it("sit-skeleton should be accessible", async () => {
    const el = await fixture(html` <sit-skeleton></sit-skeleton> `);
    await expect(el).to.be.accessible();
  });
});
