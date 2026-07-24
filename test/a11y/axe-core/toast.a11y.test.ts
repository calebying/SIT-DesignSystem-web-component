import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Toast a11y", () => {
  it("sit-toast should be accessible", async () => {
    const el = await fixture(html` <sit-toast show> This is a toast notification. </sit-toast> `);
    await expect(el).to.be.accessible();
  });

  it("sit-toast dismissible should be accessible", async () => {
    const el = await fixture(html` <sit-toast show dismissible> Dismissible toast message. </sit-toast> `);
    await expect(el).to.be.accessible();
  });
});
