import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Tooltip a11y", () => {
  it("sit-tooltip should be accessible", async () => {
    const el = await fixture(html`
      <sit-tooltip content="Helpful tooltip text">
        <sit-button>Hover me</sit-button>
      </sit-tooltip>
    `);
    await expect(el).to.be.accessible();
  });
});
