import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("TableOfContents a11y", () => {
  it("SIT-table-of-contents should be accessible", async () => {
    const el = await fixture(html`
      <sit-table-of-contents>
        <sit-table-of-contents-item href="#section1">Section 1</sit-table-of-contents-item>
        <sit-table-of-contents-item href="#section2">Section 2</sit-table-of-contents-item>
      </sit-table-of-contents>
    `);
    await expect(el).to.be.accessible();
  });
});



