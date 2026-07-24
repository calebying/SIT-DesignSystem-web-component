import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Tab a11y", () => {
  it("sit-tab-group should be accessible", async () => {
    const el = await fixture(html`
      <sit-tab-group>
        <sit-tab slot="nav">Tab 1</sit-tab>
        <sit-tab slot="nav">Tab 2</sit-tab>
        <sit-tab slot="nav">Tab 3</sit-tab>
        <sit-tab-panel>Panel 1 content</sit-tab-panel>
        <sit-tab-panel>Panel 2 content</sit-tab-panel>
        <sit-tab-panel>Panel 3 content</sit-tab-panel>
      </sit-tab-group>
    `);
    await expect(el).to.be.accessible();
  });
});
