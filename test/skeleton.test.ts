import { html } from "lit";
import { expect, assert, fixture, elementUpdated } from "@open-wc/testing";
import { SitSkeleton } from "../src/components";
import "../src/index";

describe("<sit-skeleton>", () => {
  it("matches semantic shadowDOM", async () => {
    const el = await fixture(html`<sit-skeleton></sit-skeleton>`);
    assert.shadowDom.equal(
      el,
      `
          <div class="skeleton" style=""></div>
        `
    );
  });
  it("matches semantic shadowDOM when rows are defined", async () => {
    const el = await fixture(html`<sit-skeleton rows="3"></sit-skeleton>`);
    assert.shadowDom.equal(
      el,
      `
          <div class="skeleton skeleton--paragraph skeleton--auto-size-rows" style="">
          <div class="skeleton__row"></div>
          <div class="skeleton__row"></div>
          <div class="skeleton__row"></div>
          </div>
        `
    );
  });
  it("matches semantic shadowDOM when sheen is defined", async () => {
    const el = await fixture(html`<sit-skeleton sheen></sit-skeleton>`);
    assert.shadowDom.equal(
      el,
      `
          <div class="skeleton skeleton__sheen" style="">
          </div>
        `
    );
  });
  it("matches semantic shadowDOM when sheen and rows are defined", async () => {
    const el = await fixture(html`<sit-skeleton sheen rows="3"></sit-skeleton>`);
    assert.shadowDom.equal(
      el,
      `
          <div class="skeleton skeleton--auto-size-rows skeleton--paragraph" style="">
          <div class="skeleton__row skeleton__sheen"></div>
          <div class="skeleton__row skeleton__sheen"></div>
          <div class="skeleton__row skeleton__sheen"></div>
          </div>
        `
    );
  });
  it("width, height and borderRadius are forwarded to style of .skeleton element", async () => {
    const el = await fixture(html`<sit-skeleton width="100px" height="100px" borderRadius="5px"></sit-skeleton>`);
    const skeletonDiv = el.shadowRoot?.querySelector(".skeleton");
    const skeletonStyles = skeletonDiv?.getAttribute("style")?.split(";");
    expect(skeletonStyles?.[0]).to.contain("width: 100px");
    expect(skeletonStyles?.[1]).to.contain("height: 100px");
    expect(skeletonStyles?.[2]).to.contain("border-radius: 5px");
  });
  it("borderRadius is forwarded to style of .skeleton__row elements when row is defined", async () => {
    const el = await fixture<SitSkeleton>(
      html`<sit-skeleton rows="3" width="100px" height="100px" borderRadius="5px"></sit-skeleton>`
    );
    await elementUpdated(el);
    const skeletonRowDivs = el.shadowRoot?.querySelectorAll(".skeleton__row");
    expect(skeletonRowDivs?.length).to.equal(3);
    skeletonRowDivs?.forEach(row => expect(row.getAttribute("style")).to.contain("border-radius: 5px"));
  });
});
