import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("DescriptionList a11y", () => {
  it("sit-description-list should be accessible", async () => {
    const el = await fixture(html`
      <sit-description-list-group>
        <sit-description-list>
          <span>Term 1</span>
          <span slot="data">Description 1</span>
        </sit-description-list>
        <sit-description-list>
          <span>Term 2</span>
          <span slot="data">Description 2</span>
        </sit-description-list>
      </sit-description-list-group>
    `);
    await expect(el).to.be.accessible();
  });
});
