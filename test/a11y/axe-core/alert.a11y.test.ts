import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Alert a11y", () => {
  it("sit-alert should be accessible", async () => {
    const el = await fixture(html` <sit-alert show> This is an alert message. </sit-alert> `);
    await expect(el).to.be.accessible();
  });

  it("sit-alert with icon should be accessible", async () => {
    const el = await fixture(html`
      <sit-alert show variant="warning">
        <sit-icon slot="icon" name="exclamation-triangle"></sit-icon>
        Warning alert with icon.
      </sit-alert>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-alert with anchor link should be accessible", async () => {
    const el = await fixture(html`
      <sit-alert show> This is an alert with a <a href="https://example.com">link</a> and more text. </sit-alert>
    `);
    await expect(el).to.be.accessible();
  });
});
