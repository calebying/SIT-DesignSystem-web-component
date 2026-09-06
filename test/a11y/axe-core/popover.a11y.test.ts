import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Popover a11y", () => {
  it("sit-popover (closed) should be accessible", async () => {
    const el = await fixture(html`
      <sit-popover>
        <sit-button>Open</sit-button>
        <div slot="content">Panel content</div>
      </sit-popover>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-popover (open) should be accessible", async () => {
    const el = await fixture(html`
      <sit-popover open>
        <sit-button>Open</sit-button>
        <div slot="content">Panel content</div>
      </sit-popover>
    `);
    await expect(el).to.be.accessible();
  });
});
