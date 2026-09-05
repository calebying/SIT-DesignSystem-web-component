import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Avatar a11y", () => {
  it("sit-avatar with an image should be accessible", async () => {
    const el = await fixture(html`<sit-avatar src="https://example.com/a.jpg" alt="Jane Tan"></sit-avatar>`);
    await expect(el).to.be.accessible();
  });

  it("sit-avatar with initials fallback should be accessible", async () => {
    const el = await fixture(html`<sit-avatar initials="JT" alt="Jane Tan"></sit-avatar>`);
    await expect(el).to.be.accessible();
  });

  it("sit-avatar with a status dot should be accessible", async () => {
    const el = await fixture(html`<sit-avatar initials="JT" alt="Jane Tan" status="online"></sit-avatar>`);
    await expect(el).to.be.accessible();
  });
});
