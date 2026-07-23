import "./sit-web-component";
import { fixture, expect, waitUntil } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import { html } from "lit";
import sinon from "sinon";
import { SitDrawer } from "../src/components";

describe("<sit-drawer>", () => {
  it("should be visible with the open attribute", async () => {
    const el = await fixture<SitDrawer>(html`
      <sit-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-drawer>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".drawer");

    expect(base?.hidden).to.be.false;
  });

  it("should not be visible without the open attribute", async () => {
    const el = await fixture<SitDrawer>(
      html` <sit-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-drawer> `
    );
    const base = el.shadowRoot?.querySelector<HTMLElement>(".drawer");

    expect(base?.hidden).to.be.true;
  });

  it("should emit sit-show and sit-after-show when calling show()", async () => {
    const el = await fixture<SitDrawer>(html`
      <sit-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-drawer>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".drawer");
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener("SIT-show", showHandler);
    el.addEventListener("SIT-after-show", afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base?.hidden).to.be.false;
  });

  it("should emit sit-hide and sit-after-hide when calling hide()", async () => {
    const el = await fixture<SitDrawer>(html`
      <sit-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-drawer>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".drawer");
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener("SIT-hide", hideHandler);
    el.addEventListener("SIT-after-hide", afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base?.hidden).to.be.true;
  });

  it("should emit sit-show and sit-after-show when setting open = true", async () => {
    const el = await fixture<SitDrawer>(html`
      <sit-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-drawer>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".drawer");
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener("SIT-show", showHandler);
    el.addEventListener("SIT-after-show", afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base?.hidden).to.be.false;
  });

  it("should emit sit-hide and sit-after-hide when setting open = false", async () => {
    const el = await fixture<SitDrawer>(html`
      <sit-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-drawer>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".drawer");
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener("SIT-hide", hideHandler);
    el.addEventListener("SIT-after-hide", afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base?.hidden).to.be.true;
  });

  it("should not close when sit-request-close is prevented", async () => {
    const el = await fixture<SitDrawer>(html`
      <sit-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-drawer>
    `);
    const overlay = el.shadowRoot?.querySelector<HTMLElement>(".drawer-overlay");

    el.addEventListener("SIT-request-close", event => {
      event.preventDefault();
    });
    overlay?.click();

    expect(el.open).to.be.true;
  });

  it("should allow initial focus to be set", async () => {
    const el = await fixture<SitDrawer>(html` <sit-drawer><input /></sit-drawer> `);
    const input = el.querySelector<HTMLInputElement>("input");
    const initialFocusHandler = sinon.spy((event: Event) => {
      event.preventDefault();
      input?.focus();
    });

    el.addEventListener("SIT-initial-focus", initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });

  it("should close when pressing Escape", async () => {
    const el = await fixture<SitDrawer>(html` <sit-drawer open></sit-drawer> `);
    const hideHandler = sinon.spy();

    el.addEventListener("SIT-hide", hideHandler);

    await sendKeys({ press: "Escape" });
    await waitUntil(() => hideHandler.calledOnce);

    expect(el.open).to.be.false;
  });

  it("should lock or unlock scrolling on body when drawer opens or closes respectively", async () => {
    document.body.style.overflow = "auto";
    const el = await fixture<SitDrawer>(html` <sit-drawer open></sit-drawer> `);
    el.open = true;
    expect(document.body.style.overflow).to.equal("hidden");

    const afterHideHandler = sinon.spy();
    el.addEventListener("SIT-after-hide", afterHideHandler);
    el.open = false;

    await waitUntil(() => afterHideHandler.calledOnce);
    expect(document.body.style.overflow).to.not.equal("hidden");
  });

  it("should accept size prop and reflect it", async () => {
    const el = await fixture<SitDrawer>(html`<sit-drawer size="md"></sit-drawer>`);
    expect(el.size).to.equal("md");
    expect(el.hasAttribute("size")).to.be.true;
  });

  it("should render footer slot content", async () => {
    const el = await fixture<SitDrawer>(html`
      <sit-drawer open>
        <div slot="footer" id="footer-content">Footer here</div>
      </sit-drawer>
    `);

    const footer = el.shadowRoot?.querySelector("slot[name='footer']") as HTMLSlotElement;
    const assigned = footer.assignedNodes({ flatten: true });
    expect(assigned.length).to.be.greaterThan(0);
    expect((assigned[0] as HTMLElement).id).to.equal("footer-content");
  });
});



