import { assert, expect, fixture, waitUntil } from "@open-wc/testing";
import { html } from "lit";
import * as sinon from "sinon";
import { SitIconButton, SitSystemBanner } from "../src/components";
import SitSystemBannerItem from "../src/components/SystemBanner/sit-system-banner-item";
import "./sit-web-component";
import { moveMouseOnElement, moveMouseOutOfElement } from "./utils";

describe("<sit-system-banner>", () => {
  it("matches the shadowDOM", async () => {
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show></sit-system-banner>`);
    assert.shadowDom.equal(
      el,
      `   
                <div class="banner-wrapper">
                <div class="banner" role="alert" aria-hidden="false">
                <div class="content">
                    <slot id="loop-slot"></slot>
                </div>
                </div>
                </div>
            `
    );
  });
  it("if show is false, .banner is display none, aria-hidden is true", async () => {
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner></sit-system-banner>`);
    const bannerDiv = el.shadowRoot?.querySelector(".banner") as HTMLDivElement;
    expect(getComputedStyle(bannerDiv).display).to.equal("none");
    expect(bannerDiv.getAttribute("aria-hidden")).to.equal("true");
  });
  it("when dimissible is true, close button is rendered", async () => {
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show dismissible></sit-system-banner>`);
    const closeButton = el.shadowRoot?.querySelector("sit-close-button[tone='fixed-light']");
    expect(closeButton).to.exist;
  });
  it("when more than one child, pagination is rendered, matches shadowDOM", async () => {
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show>
      <sit-system-banner-item></sit-system-banner-item>
      <sit-system-banner-item></sit-system-banner-item>
    </sit-system-banner>`);
    assert.shadowDom.equal(
      el,
      `
              <div class="banner-wrapper">
                <div class="banner" role="alert" aria-hidden="false">
                <div class="content">
                    <slot id="loop-slot"></slot>
                </div>
                <div class="pagination">
              <sit-icon-button
                name="chevron-left"
                tone="fixed-light"
                variant="ghost"
                size="xs"
                target="_self"
              ></sit-icon-button>
              <span>1/2</span>
              <sit-icon-button
                name="chevron-right"
                tone="fixed-light"
                variant="ghost"
                size="xs"
                target="_self"
              ></sit-icon-button>
                </div>
              </div>
            </div>
            `
    );
  });
  it("system banner item rotates automatically every 5 seconds", async () => {
    const clock = sinon.useFakeTimers();
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show>
      <sit-system-banner-item>one</sit-system-banner-item>
      <sit-system-banner-item>two</sit-system-banner-item>
      <sit-system-banner-item>three</sit-system-banner-item>
    </sit-system-banner>`);

    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    clock.tick(5000);
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("two");
    clock.tick(5000);
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal(
      "three"
    );
    clock.tick(5000);
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    clock.restore();
  });
  it("mouse enter the banner, pauses the interval", async () => {
    const clock = sinon.useFakeTimers();
    const mouseEnterHandler = sinon.spy();
    const mouseLeaveHandler = sinon.spy();
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show>
      <sit-system-banner-item>one</sit-system-banner-item>
      <sit-system-banner-item>two</sit-system-banner-item>
      <sit-system-banner-item>three</sit-system-banner-item>
    </sit-system-banner>`);
    el.addEventListener("mouseenter", mouseEnterHandler);
    el.addEventListener("mouseleave", mouseLeaveHandler);
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    await moveMouseOnElement(el);
    expect(mouseEnterHandler).to.have.been.called;
    clock.tick(5000);
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    //mouseleaves clock ticks rotation resumes
    await moveMouseOutOfElement(el);
    expect(mouseLeaveHandler).to.have.been.called;
    clock.tick(5000);
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("two");
    clock.restore();
  });
  it("keyboard focuses the elements , pauses the interval", async () => {
    const clock = sinon.useFakeTimers();
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show>
      <sit-system-banner-item>one</sit-system-banner-item>
      <sit-system-banner-item>two</sit-system-banner-item>
      <sit-system-banner-item>three</sit-system-banner-item>
    </sit-system-banner>`);
    const paginationButton = el.shadowRoot?.querySelector("sit-icon-button[name='chevron-right']") as SitIconButton;
    paginationButton.focus();
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    clock.tick(5000);
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    //mouseleaves clock ticks rotation resumes
    paginationButton.blur();
    clock.tick(5000);
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("two");
    clock.restore();
  });
  it("clicking next button loops the items and page indicator", async () => {
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show>
      <sit-system-banner-item>one</sit-system-banner-item>
      <sit-system-banner-item>two</sit-system-banner-item>
      <sit-system-banner-item>three</sit-system-banner-item>
    </sit-system-banner>`);
    const nextBtn = el.shadowRoot?.querySelector("sit-icon-button[name='chevron-right']") as SitIconButton;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    expect(el.shadowRoot?.querySelector("span")?.textContent.trim()).to.equal("1/3");
    nextBtn.click();
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("two");
    expect(el.shadowRoot?.querySelector("span")?.textContent.trim()).to.equal("2/3");

    nextBtn.click();
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal(
      "three"
    );
    expect(el.shadowRoot?.querySelector("span")?.textContent.trim()).to.equal("3/3");

    nextBtn.click();

    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    expect(el.shadowRoot?.querySelector("span")?.textContent.trim()).to.equal("1/3");
  });
  it("clicking prev button loops the items and page indicator", async () => {
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show>
      <sit-system-banner-item>one</sit-system-banner-item>
      <sit-system-banner-item>two</sit-system-banner-item>
      <sit-system-banner-item>three</sit-system-banner-item>
    </sit-system-banner>`);
    const prevBtn = el.shadowRoot?.querySelector("sit-icon-button[name='chevron-left']") as SitIconButton;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    expect(el.shadowRoot?.querySelector("span")?.textContent.trim()).to.equal("1/3");
    prevBtn.click();
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal(
      "three"
    );
    expect(el.shadowRoot?.querySelector("span")?.textContent.trim()).to.equal("3/3");

    prevBtn.click();
    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("two");
    expect(el.shadowRoot?.querySelector("span")?.textContent.trim()).to.equal("2/3");

    prevBtn.click();

    await el.updateComplete;
    expect(el.querySelector<SitSystemBannerItem>("sit-system-banner-item[active]")?.textContent.trim()).to.equal("one");
    expect(el.shadowRoot?.querySelector("span")?.textContent.trim()).to.equal("1/3");
  });

  it("more than 5 items trigger console warning", async () => {
    const consoleWarnStub = sinon.stub(console, "warn");

    await fixture<SitSystemBanner>(html`<sit-system-banner show>
      <sit-system-banner-item>one</sit-system-banner-item>
      <sit-system-banner-item>two</sit-system-banner-item>
      <sit-system-banner-item>three</sit-system-banner-item>
      <sit-system-banner-item>four</sit-system-banner-item>
      <sit-system-banner-item>five</sit-system-banner-item>
      <sit-system-banner-item>six</sit-system-banner-item>
    </sit-system-banner>`);
    expect(consoleWarnStub).to.have.been.calledWith(
      "It is not recommended to have more than 5 <sit-system-banner-item> elements."
    );
  });

  it("when noClampAction is true on parent, children inherit the property", async () => {
    const el = await fixture<SitSystemBanner>(html`<sit-system-banner show noClampAction>
      <sit-system-banner-item id="item1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, voluptatum.
      </sit-system-banner-item>
    </sit-system-banner>`);

    await el.updateComplete;
    const bannerItem = el.querySelector("#item1") as SitSystemBannerItem;
    await bannerItem.updateComplete;

    expect(bannerItem.noClampAction).to.be.true;
  });

  it("when noClampAction is true, show more link does not appear even when text is long", async () => {
    const el = await fixture<SitSystemBannerItem>(html`<sit-system-banner-item noClampAction>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
    </sit-system-banner-item>`);

    await el.updateComplete;
    const showMoreLink = el.shadowRoot?.querySelector(".show-more__link");
    expect(showMoreLink).to.not.exist;
  });

  it("when noClampAction is true, text is not truncated", async () => {
    const el = await fixture<SitSystemBannerItem>(html`<sit-system-banner-item noClampAction>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Quisquam, voluptatum.
    </sit-system-banner-item>`);

    await el.updateComplete;
    const messageDiv = el.shadowRoot?.querySelector(".message");
    expect(messageDiv?.classList.contains("truncated")).to.be.false;
  });

  it("when noClampAction is false, show more link appears for long text", async () => {
    const el = await fixture<SitSystemBanner>(html`
      <sit-system-banner-item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quisquam, voluptatum.
      </sit-system-banner-item>
    `);

    await el.updateComplete;
    const messageDiv = el.shadowRoot?.querySelector(".message");
    await waitUntil(() => messageDiv?.classList.contains("truncated") === true, "Message div did not get truncated");

    expect(messageDiv?.classList.contains("truncated")).to.be.true;
    const showMore = el.shadowRoot?.querySelector(".show-more");
    expect(showMore).to.exist;
  });

  it("clicking show more link emits sit-show-more event", async () => {
    const el = await fixture<SitSystemBannerItem>(html`<sit-system-banner-item>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </sit-system-banner-item>`);

    const showMoreHandler = sinon.spy();
    el.addEventListener("sit-show-more", showMoreHandler);

    await el.updateComplete;
    // Force clamping
    const messageDiv = el.shadowRoot?.querySelector(".message") as HTMLElement;
    if (messageDiv) {
      Object.defineProperty(messageDiv, "scrollHeight", { value: 100, configurable: true });
      Object.defineProperty(messageDiv, "clientHeight", { value: 50, configurable: true });
      (el as unknown as { _clampCheck: () => void })._clampCheck();
      await el.updateComplete;
    }

    const showMoreLink = el.shadowRoot?.querySelector(".show-more__link") as HTMLAnchorElement;
    if (showMoreLink) {
      showMoreLink.click();
      expect(showMoreHandler).to.have.been.called;
    }
  });

  it("triggers console error when both icon and badge slots are used", async () => {
    const consoleErrorStub = sinon.stub(console, "error");

    await fixture<SitSystemBannerItem>(html`<sit-system-banner-item>
      <sit-icon slot="icon" name="info-circle"></sit-icon>
      <sit-badge slot="badge" variant="warning">New</sit-badge>
      Message content
    </sit-system-banner-item>`);

    await waitUntil(() => consoleErrorStub.called, "Console error was not called");

    expect(consoleErrorStub).to.have.been.calledWith(
      "Both icon and badge slot are used in the same banner item. This is not recommended as it may cause layout issues."
    );

    consoleErrorStub.restore();
  });
});
