import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Drawer a11y", () => {
  it("SIT-drawer should be accessible", async () => {
    const el = await fixture(html`
      <sit-drawer open ariaLabel="Drawer title">
        <p>Drawer content here</p>
      </sit-drawer>
    `);
    await expect(el).to.be.accessible();
  });
});



