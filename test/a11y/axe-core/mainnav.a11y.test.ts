import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Mainnav a11y", () => {
  it("SIT-mainnav should be accessible", async () => {
    const el = await fixture(html`
      <sit-mainnav>
        <img slot="brand" alt="Site logo" src="https://placehold.co/120x40" />
        <sit-mainnav-item href="#">Home</sit-mainnav-item>
        <sit-mainnav-item href="#">About</sit-mainnav-item>
      </sit-mainnav>
    `);
    await expect(el).to.be.accessible();
  });
});



