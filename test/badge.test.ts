import { elementUpdated, expect, fixture, waitUntil } from "@open-wc/testing";
import { html } from "lit";
import * as Sinon from "sinon";
import type { SitBadge } from "../src/components";
import SitCloseButton from "../src/components/CloseButton/sit-close-button";
import "./sit-web-component";
import { sendMouse } from "@web/test-runner-commands";

describe("SitBadge component", () => {
  it("should render when show is true", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show></sit-badge>`);
    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector(".badge")).to.exist;
  });

  it("should render a close button when dismissible is true", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show dismissible></sit-badge>`);
    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector("sit-close-button")).to.exist;
  });

  it("should render the icon slot", async () => {
    // Mock fetch to prevent network requests
    const fetchStub = Sinon.stub(window, "fetch").resolves(
      new Response("<svg></svg>", { status: 200, headers: { "Content-Type": "image/svg+xml" } })
    );

    const el = await fixture<SitBadge>(
      html`<sit-badge show>
        <sit-icon slot="icon" name="placeholder" size="sm"></sit-icon>
        Badge
      </sit-badge>`
    );
    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector("slot[name='icon']")).to.exist;

    // Restore the stubbed fetch method
    fetchStub.restore();
  });

  it("should not render a close button when dismissible is false", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show></sit-badge>`);
    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector("sit-close-button")).to.not.exist;
  });

  it("should render with the 'badge--outlined' class when outlined is true", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show outlined></sit-badge>`);
    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector(".badge")).to.have.class("badge--outlined");
  });

  it("should not render with the 'badge--outlined' class when outlined is false", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show></sit-badge>`);
    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector(".badge")).to.not.have.class("badge--outlined");
  });

  it("close public method invoke, removes badge from the document", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show dismissible></sit-badge>`);
    el.close();
    await waitUntil(() => !el.show);
    expect(el.shadowRoot?.querySelector("div.badge")).not.to.exist;
  });

  it("default prevented in sit-hide will prevent dismissible badge from closing", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show dismissible></sit-badge>`);
    el.addEventListener("sit-hide", e => e.preventDefault());
    el.close();
    expect(el.shadowRoot?.querySelector("div.badge")).to.exist;
  });

  it("mouse click badge close button emits sit-hide and removes shadowDom contents of badge", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show dismissible></sit-badge>`);
    const spyHide = Sinon.spy();
    el.addEventListener("sit-hide", spyHide);
    const closeBtn = el.shadowRoot?.querySelector<SitCloseButton>("sit-close-button");
    closeBtn?.click();
    await waitUntil(() => spyHide.calledOnce);
    expect(spyHide).to.be.calledOnce;
    await waitUntil(() => !el.show);
    expect(el.shadowRoot?.querySelector("div.badge")).not.to.exist;
  });

  it("when show is true, emits sit-show event", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge dismissible></sit-badge>`);
    const spyShow = Sinon.spy();
    el.addEventListener("sit-show", spyShow);
    el.show = true;
    await el.updateComplete;
    expect(spyShow).to.be.calledOnce;
    expect(el.shadowRoot?.querySelector("div.badge")).to.exist;
  });

  it("when default prevented for sit-show, sit-after-show is emitted and show cannot be set to true", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge dismissible></sit-badge>`);
    const afterShowSpy = Sinon.spy();
    el.addEventListener("sit-show", e => e.preventDefault());
    el.addEventListener("sit-after-show", afterShowSpy);
    el.show = true;
    await el.updateComplete;
    expect(afterShowSpy).not.to.be.called;
    expect(el.show).to.be.false;
  });

  it("when default prevented, sit-after-hide toggling and show cannot be set to false ", async () => {
    const el = await fixture<SitBadge>(html`<sit-badge show dismissible></sit-badge>`);
    const afterHideSpy = Sinon.spy();

    el.addEventListener("sit-hide", e => e.preventDefault());
    el.addEventListener("sit-after-hide", afterHideSpy);

    el.show = false;
    await el.updateComplete;
    expect(afterHideSpy).not.to.be.called;
    expect(el.show).to.be.true;
  });

  it("should not render with the 'truncated' class when badge content fits parent width", async () => {
    const parentNode = document.createElement("div");
    parentNode.style.width = "1";

    const el = await fixture<SitBadge>(html`<sit-badge> Short text </sit-badge>`, { parentNode });

    await elementUpdated(el);

    const badge = el.shadowRoot?.querySelector(".badge");
    expect(badge).to.exist;

    const tooltip = el.shadowRoot?.querySelector("sit-tooltip");
    expect(tooltip).to.not.exist;
  });

  it("should render with the sit-tooltip when badge content exceeds max width", async () => {
    const el = await fixture<SitBadge>(
      html`<sit-badge> A very long badge name without limitation of parent width </sit-badge>`
    );

    await el.updateComplete;

    const badge = el.shadowRoot?.querySelector(".badge");
    expect(badge).to.exist;

    const tooltip = el.shadowRoot?.querySelector("sit-tooltip");
    expect(tooltip).to.exist;
  });

  it("should not trigger sit-hide when tooltip is hidden", async () => {
    const parentNode = document.createElement("div");
    parentNode.style.width = "100px";
    parentNode.style.padding = "24px";

    const el = await fixture<SitBadge>(
      html`<sit-badge> A very long badge name without limitation of parent width </sit-badge>`,
      { parentNode }
    );

    const spyHide = Sinon.spy();
    el.addEventListener("sit-hide", spyHide);

    await elementUpdated(el);

    const badge = el.shadowRoot?.querySelector(".badge");
    expect(badge).to.exist;

    const tooltip = el.shadowRoot?.querySelector("sit-tooltip");

    expect(tooltip).to.exist;

    await sendMouse({ type: "move", position: [50, 50] });
    await el.updateComplete;

    // when tooltip is shown
    expect(tooltip?.shadowRoot?.querySelector(".tooltip")).to.exist;

    await sendMouse({ type: "move", position: [0, 0] });
    await el.updateComplete;

    expect(spyHide).not.to.be.called;
  });
});
