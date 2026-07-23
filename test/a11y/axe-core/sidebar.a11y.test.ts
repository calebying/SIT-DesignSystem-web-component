import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Sidebar a11y", () => {
  it("SIT-sidebar should be accessible", async () => {
    const el = await fixture(html`
      <sit-sidebar>
        <sit-sidebar-item title="Dashboard">
          <sit-icon slot="icon" name="house"></sit-icon>
        </sit-sidebar-item>
        <sit-sidebar-item title="Settings">
          <sit-icon slot="icon" name="gear"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar>
    `);
    await expect(el).to.be.accessible();
  });
});



