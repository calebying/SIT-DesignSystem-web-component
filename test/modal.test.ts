import "./sit-web-component";
import type { SitModal } from "../src/components";
import { expect, fixture, waitUntil, assert } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import sinon from "sinon";
import { html } from "lit";

describe("<sit-modal>", () => {
  it("renders with default values", async () => {
    const el = await fixture<SitModal>(html`<sit-modal></sit-moadl>`);
    assert.shadowDom.equal(
      el,
      `
    <div
      class="modal"
      hidden=""
    >
        <div class="modal-overlay"></div>
        <div
          class="modal-panel"
          role="dialog"
          aria-modal="true"
          aria-hidden="true"
          aria-labelledby="title"
          tabindex="-1"
        >
          <div class="modal-content">
                <sit-close-button
                class="modal-header__close"
                aria-label="close modal"
                size="md" 
                tone="default"
              ></sit-close-button>
            <div class="modal-header">
                <div class="modal-header__title-description">
                  <slot class="modal-title" id="title" name="title"></slot>
                  <slot name="description"></slot>
                </div>
              </div>
              <div class="modal-body">
                <slot></slot>
              </div>
          </div>
          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    `
    );
  });
  it("should be visible with the open attribute", async () => {
    const el = await fixture<SitModal>(html`
      <sit-modal open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-modal>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".modal");

    expect(base?.hidden).to.be.false;
  });

  it("should not be visible without the open attribute", async () => {
    const el = await fixture<SitModal>(
      html` <sit-modal>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-modal> `
    );
    const base = el.shadowRoot?.querySelector<HTMLElement>(".modal");

    expect(base?.hidden).to.be.true;
  });

  it("should emit sit-show and sit-after-show when calling show()", async () => {
    const el = await fixture<SitModal>(html`
      <sit-modal>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-modal>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".modal");
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
    const el = await fixture<SitModal>(html`
      <sit-modal open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-modal>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".modal");
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
    const el = await fixture<SitModal>(html`
      <sit-modal>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-modal>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".modal");
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
    const el = await fixture<SitModal>(html`
      <sit-modal open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-modal>
    `);
    const base = el.shadowRoot?.querySelector<HTMLElement>(".modal");
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

  it("should not close when sit-close is prevented", async () => {
    const el = await fixture<SitModal>(html`
      <sit-modal open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sit-modal>
    `);
    const overlay = el.shadowRoot?.querySelector<HTMLElement>(".modal-overlay");

    el.addEventListener("SIT-close", event => {
      event.preventDefault();
    });
    overlay?.click();

    expect(el.open).to.be.true;
  });

  it("should close when pressing Escape", async () => {
    const el = await fixture<SitModal>(html` <sit-modal open></sit-modal> `);
    const hideHandler = sinon.spy();

    el.addEventListener("SIT-hide", hideHandler);

    await sendKeys({ press: "Escape" });
    await waitUntil(() => hideHandler.calledOnce);

    expect(el.open).to.be.false;
  });

  it("should render close button by default", async () => {
    const el = await fixture<SitModal>(html`<sit-modal></sit-modal>`);
    const closeBtn = el.shadowRoot?.querySelector("SIT-close-button");
    expect(closeBtn).to.not.be.null;
  });

  it("should not render close button when noCloseButton is set", async () => {
    const el = await fixture<SitModal>(html`<sit-modal noCloseButton></sit-modal>`);
    const closeBtn = el.shadowRoot?.querySelector("SIT-close-button");
    expect(closeBtn).to.be.null;
  });

  it("should toggle close button when noCloseButton changes dynamically", async () => {
    const el = await fixture<SitModal>(html`<sit-modal></sit-modal>`);
    expect(el.shadowRoot?.querySelector("SIT-close-button")).to.not.be.null;

    el.noCloseButton = true;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector("SIT-close-button")).to.be.null;

    el.noCloseButton = false;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector("SIT-close-button")).to.not.be.null;
  });

  it("should lock or unlock scrolling on body when modal opens or closes respectively", async () => {
    document.body.style.overflow = "auto";
    const el = await fixture<SitModal>(html` <sit-modal open></sit-modal> `);
    el.open = true;
    expect(document.body.style.overflow).to.equal("hidden");

    const afterHideHandler = sinon.spy();
    el.addEventListener("SIT-after-hide", afterHideHandler);
    el.open = false;

    await waitUntil(() => afterHideHandler.calledOnce);
    expect(document.body.style.overflow).to.not.equal("hidden");
  });
});



