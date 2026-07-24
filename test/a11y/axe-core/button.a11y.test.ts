import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Button a11y", () => {
  it("sit-button should be accessible", async () => {
    const el = await fixture(html` <sit-button>Click me</sit-button> `);
    await expect(el).to.be.accessible();
  });

  it("sit-button as link should be accessible", async () => {
    const el = await fixture(html` <sit-button href="https://example.com">Visit site</sit-button> `);
    await expect(el).to.be.accessible();
  });

  it("sit-button disabled should be accessible", async () => {
    const el = await fixture(html` <sit-button disabled>Disabled</sit-button> `);
    await expect(el).to.be.accessible();
  });

  it("sit-icon-button should be accessible", async () => {
    const el = await fixture(html` <sit-icon-button name="plus" ariaLabel="Add item"></sit-icon-button> `);
    await expect(el).to.be.accessible();
  });

  it("sit-close-button should be accessible", async () => {
    const el = await fixture(html` <sit-close-button></sit-close-button> `);
    await expect(el).to.be.accessible();
  });
});
