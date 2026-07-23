import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Icon a11y", () => {
  it("SIT-icon should be accessible", async () => {
    const el = await fixture(html` <sit-icon name="plus"></sit-icon> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-icon-list should be accessible", async () => {
    const el = await fixture(html`
      <sit-icon-list>
        <div role="listitem"><sit-icon name="check"></sit-icon>Item one</div>
        <div role="listitem"><sit-icon name="check"></sit-icon>Item two</div>
      </sit-icon-list>
    `);
    await expect(el).to.be.accessible();
  });
});



