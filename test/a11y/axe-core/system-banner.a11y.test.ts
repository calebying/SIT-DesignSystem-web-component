import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("SystemBanner a11y", () => {
  it("sit-system-banner should be accessible", async () => {
    const el = await fixture(html`
      <sit-system-banner show>
        <sit-system-banner-item> Important system announcement. </sit-system-banner-item>
      </sit-system-banner>
    `);
    await expect(el).to.be.accessible();
  });
});
