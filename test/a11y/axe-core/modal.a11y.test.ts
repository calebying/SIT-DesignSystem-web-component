import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Modal a11y", () => {
  it("sit-modal should be accessible", async () => {
    const el = await fixture(html`
      <sit-modal open>
        <span slot="title">Modal title</span>
        <p slot="description">Are you sure you want to proceed?</p>
        <sit-button slot="footer">Confirm</sit-button>
      </sit-modal>
    `);
    await expect(el).to.be.accessible();
  });
});
