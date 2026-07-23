import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Masthead a11y", () => {
  it("SIT-masthead should be accessible", async () => {
    const el = await fixture(html` <sit-masthead></sit-masthead> `);
    await expect(el).to.be.accessible();
  });
});



