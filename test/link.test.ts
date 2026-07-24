import { assert, expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { SitIcon, SitLink } from "../src/components";
import "../src/index";

describe("<sit-link>", () => {
  it("can be semantically compare with shadowDom trees", async () => {
    const el = await fixture<SitLink>(html`<sit-link></sit-link>`);
    assert.shadowDom.equal(
      el,
      `
      <slot class="nav-link"></slot>
      `
    );
  });
  const linkToIconSizeMap = {
    xs: "sm",
    sm: "md",
    md: "lg",
    lg: "xl"
  };
  Object.entries(linkToIconSizeMap).map(([key, value]) => {
    it(`when link size=${key}, a size attribute of ${value} added to slotted sit-icon`, async () => {
      const el = await fixture<SitLink>(
        html`<sit-link size=${key}
          ><a href="#"><sit-icon name="placeholder"></sit-icon></a
        ></sit-link>`
      );
      await el.updateComplete;
      const icon = el.querySelector<SitIcon>("sit-icon");
      await icon?.updateComplete;
      expect(icon?.getAttribute("size")).to.equal(value);
    });
  });
  it("slotted anchor has tabindex=0 by default", async () => {
    const el = await fixture<SitLink>(html`<sit-link><a href="#"></a></sit-link>`);
    expect(el.querySelector("a")).to.have.attribute("tabindex", "0");
  });
  it("when link is disabled, it adds disabled attribute to the slotted anchor elmement", async () => {
    const el = await fixture<SitLink>(html`<sit-link disabled><a href="#"></a></sit-link>`);
    expect(el.querySelector("a")).to.exist;
    expect(el.querySelector("a")).to.have.attribute("disabled");
    expect(el.querySelector("a")).to.have.attribute("href", "javascript:void(0)");
    expect(el.querySelector("a")).to.have.attribute("tabindex", "-1");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(getComputedStyle(el.querySelector("a")!).pointerEvents).to.equal("none");
  });
});
