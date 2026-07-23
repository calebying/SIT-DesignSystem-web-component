import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Switch a11y", () => {
  it("SIT-switch should be accessible", async () => {
    const el = await fixture(html` <sit-switch>Enable notifications</sit-switch> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-switch checked should be accessible", async () => {
    const el = await fixture(html` <sit-switch checked>Enable notifications</sit-switch> `);
    await expect(el).to.be.accessible();
  });
});



