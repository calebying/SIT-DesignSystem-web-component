import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Button a11y", () => {
  it("SIT-button should be accessible", async () => {
    const el = await fixture(html` <sit-button>Click me</sit-button> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-button as link should be accessible", async () => {
    const el = await fixture(html` <sit-button href="https://example.com">Visit site</sit-button> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-button disabled should be accessible", async () => {
    const el = await fixture(html` <sit-button disabled>Disabled</sit-button> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-icon-button should be accessible", async () => {
    const el = await fixture(html` <sit-icon-button name="plus" ariaLabel="Add item"></sit-icon-button> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-close-button should be accessible", async () => {
    const el = await fixture(html` <sit-close-button></sit-close-button> `);
    await expect(el).to.be.accessible();
  });
});



