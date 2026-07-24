import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Spinner a11y", () => {
  it("sit-spinner should be accessible", async () => {
    const el = await fixture(html` <sit-spinner aria-label="Loading"></sit-spinner> `);
    await expect(el).to.be.accessible();
  });
});
