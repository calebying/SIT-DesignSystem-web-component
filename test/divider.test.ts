import { html } from "lit";
import { expect, fixture } from "@open-wc/testing";
import { SitDivider } from "../src/components";
import "../src/index";

describe("<sit-divider>", () => {
  it("has the default attributes", async () => {
    const el = await fixture<SitDivider>(html`<sit-divider></sit-divider>`);
    expect(el.getAttribute("role")).to.equal("separator");
    expect(el.getAttribute("aria-orientation")).to.equal("horizontal");
    expect(el.getAttribute("thickness")).to.equal("thin");
  });
});


