import { html } from "lit";
import { assert, fixture, expect } from "@open-wc/testing";
import { SitIconList } from "../src/components";
import "./sit-web-component";

describe("<sit-icon-list>", () => {
  it("matches shadowDom semantically", async () => {
    const el = await fixture<SitIconList>(html`<sit-icon-list></sit-icon-list>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="md">
        <slot></slot>
        </div>`
    );
  });
  it("role=list attribute is added to the custom element", async () => {
    const el = await fixture<SitIconList>(html`<sit-icon-list></sit-icon-list>`);
    expect(el.getAttribute("role")).to.equal("list");
  });
  it("size prop is forwarded down to the class attribute of shadow dom ", async () => {
    const el = await fixture<SitIconList>(html`<sit-icon-list size="sm"></sit-icon-list>`);
    expect(el.shadowRoot?.querySelector("div")?.classList.value).to.contain("sm");
  });
});


