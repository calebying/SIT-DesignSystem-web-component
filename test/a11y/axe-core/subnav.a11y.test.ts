import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Subnav a11y", () => {
  it("SIT-subnav should be accessible", async () => {
    const el = await fixture(html`
      <sit-subnav>
        <sit-subnav-item href="#" active>Tab 1</sit-subnav-item>
        <sit-subnav-item href="#">Tab 2</sit-subnav-item>
        <sit-subnav-item href="#">Tab 3</sit-subnav-item>
      </sit-subnav>
    `);
    await expect(el).to.be.accessible();
  });
});



