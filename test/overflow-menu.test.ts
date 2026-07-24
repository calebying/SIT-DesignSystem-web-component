import { assert, fixture } from "@open-wc/testing";
import { html } from "lit";
import "../src/index";

describe("<sit-overflow-menu>", () => {
  it("semantically matches the DOM", async () => {
    const el = await fixture(html`<sit-overflow-menu></sit-overflow-menu>`);
    assert.shadowDom.equal(
      el,
      `
      <sit-dropdown
        close="default"
        drop="down"
      >
        <button aria-expanded="false" aria-haspopup="menu" aria-label="More options" slot="toggler" class="overflow-btn">
            <sit-icon name="three-dots" size="md"></sit-icon>
        </button>
        <slot></slot>
      </sit-dropdown>
      `
    );
  });
});
