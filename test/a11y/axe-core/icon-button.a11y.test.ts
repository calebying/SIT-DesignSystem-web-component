import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("IconButton a11y", () => {
  it("SIT-icon-button should be accessible", async () => {
    const el = await fixture(html` <sit-icon-button name="plus" ariaLabel="Add item"></sit-icon-button> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-icon-button disabled should be accessible", async () => {
    const el = await fixture(html` <sit-icon-button name="search" ariaLabel="Search" disabled></sit-icon-button> `);
    await expect(el).to.be.accessible();
  });
});



