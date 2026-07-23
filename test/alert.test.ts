import { assert, expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import sinon from "sinon";
import { SitAlert } from "../src/components";
import type { SitCloseButton } from "../src/components/CloseButton/sit-close-button";
import "./sit-web-component";

describe("<sit-alert-link>", () => {
  it("semantically matches the DOM", async () => {
    const el = await fixture(html`<sit-alert-link></sit-alert-link>`);
    assert.shadowDom.equal(
      el,
      `<a class="alert-link" tabindex="0"><slot></slot> </a>
        `
    );
  });
  it("href attribute forwarded to a", async () => {
    const el = await fixture(html`<sit-alert-link href="#"></sit-alert-link>`);
    assert.shadowDom.equal(
      el,
      `<a class="alert-link" href="#" tabindex="0"><slot></slot> </a>
        `
    );
  });
  it("target attribute forwarded to a", async () => {
    const el = await fixture(html`<sit-alert-link target="_blank"></sit-alert-link>`);
    assert.shadowDom.equal(
      el,
      `<a class="alert-link" target="_blank" tabindex="0"><slot></slot> </a>
        `
    );
  });
});
describe("<Alert>", () => {
  it("semantically matches the dom", async () => {
    const el = await fixture(html`<sit-alert show></sit-alert>`);
    assert.shadowDom.equal(
      el,
      `
        <div class="alert show" role="alert" aria-hidden="false">
        <slot name="icon"></slot>
        <div class="alert-content">
           <div class="alert-content__upper">
            <slot class="alert-content__description">
            </slot>
          </div>
          <slot
            class="alert-content__action"
            name="action"
          >
          </slot>
        </div>
          </div>        
        </div>
      `
    );
  });
  it("semantically matches the dom when slot name=icon has slotted elements", async () => {
    const el = await fixture(html`<sit-alert show>
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-0-circle"
        viewBox="0 0 16 16"
      >
        <path
          d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z"
        />
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
      </svg>
    </sit-alert>`);
    assert.shadowDom.equal(
      el,
      `
        <div class="alert show" role="alert" aria-hidden="false">
           <slot name="icon"><svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-0-circle" viewBox="0 0 16 16">
                    <path
                        d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
                </svg>  
                </slot>
        <div class="alert-content">
               <div class="alert-content__upper">
            <slot class="alert-content__description">
            </slot>
          </div>
          <slot
            class="alert-content__action"
            name="action"
          >
          </slot>
        </div>        
        </div>
      `
    );
  });
  it("Should output a alert with message", async () => {
    const message = "This is a test alert";
    const el = await fixture<SitAlert>(html` <sit-alert show>${message}</sit-alert> `);

    const alert = el.shadowRoot?.querySelector(".alert");
    assert.exists(alert, "Alert element exists");

    const slot = el.shadowRoot?.querySelectorAll("slot");
    const slotContent = slot?.[1].assignedNodes()[0]?.textContent;
    expect(slotContent).to.equal(message);
  });

  it("Should have dismissible style", async () => {
    const el = await fixture<SitAlert>(html` <sit-alert show dismissible></sit-alert> `);

    const alert = el.shadowRoot?.querySelector(".alert");
    expect(alert?.classList.value).to.contain("alert-dismissible");
  });
  it('Should default to variant="info"', async () => {
    const el = await fixture<SitAlert>(html` <sit-alert show></sit-alert> `);

    expect(el.getAttribute("variant")).to.equal("info");
  });

  it("Should emit the sit-hide event on dismiss click of close button", async () => {
    const el = await fixture<SitAlert>(html`<sit-alert show dismissible></sit-alert>`);
    const onCloseSpy = sinon.spy();
    el.addEventListener("SIT-hide", onCloseSpy);

    const closeButton = el.shadowRoot?.querySelector("SIT-close-button") as SitCloseButton;
    closeButton?.click();
    await el.updateComplete;
    expect(el.show).to.be.false;
    expect(onCloseSpy).to.have.been.calledOnce;
  });

  it("Should emit the sit-show event when alert show state is true", async () => {
    const el = await fixture<SitAlert>(html`<sit-alert></sit-alert>`);
    const onShowSpy = sinon.spy();
    el.addEventListener("SIT-show", onShowSpy);

    el.show = true;
    await el.updateComplete;
    expect(el.show).to.be.true;
    expect(onShowSpy).to.have.been.calledOnce;
  });

  it("Should have the variant that is passed in", async () => {
    const el = await fixture<SitAlert>(html` <sit-alert variant="warning" show></sit-alert> `);
    expect(el.getAttribute("variant")).to.equal("warning");
  });

  it("when show is false and dismissible, should remove from shadow DOM", async () => {
    const el = await fixture<SitAlert>(html`<sit-alert dismissible>Test alert</sit-alert>`);
    const base = el.shadowRoot?.querySelector(".alert");
    assert.notExists(base, "Alert element not exists");
  });

  it("when show is true, alert should have show class", async () => {
    const el = await fixture<SitAlert>(html`<sit-alert show>Test alert</sit-alert>`);
    const base = el.shadowRoot?.querySelector(".alert");
    expect(base?.classList.contains("show")).to.be.true;
  });

  describe("close button tone", () => {
    it("should have tone='fixed-light' by default (non-outlined, non-warning variant)", async () => {
      const el = await fixture<SitAlert>(html`<sit-alert show dismissible></sit-alert>`);
      const closeButton = el.shadowRoot?.querySelector("SIT-close-button");
      expect(closeButton?.getAttribute("tone")).to.equal("fixed-light");
    });

    it("should have tone='fixed-dark' when outlined is true", async () => {
      const el = await fixture<SitAlert>(html`<sit-alert show dismissible outlined></sit-alert>`);
      const closeButton = el.shadowRoot?.querySelector("SIT-close-button");
      expect(closeButton?.getAttribute("tone")).to.equal("fixed-dark");
    });

    it("should have tone='fixed-dark' when variant is 'warning'", async () => {
      const el = await fixture<SitAlert>(html`<sit-alert show dismissible variant="warning"></sit-alert>`);
      const closeButton = el.shadowRoot?.querySelector("SIT-close-button");
      expect(closeButton?.getAttribute("tone")).to.equal("fixed-dark");
    });

    it("should have tone='fixed-dark' when both outlined and variant='warning'", async () => {
      const el = await fixture<SitAlert>(html`<sit-alert show dismissible outlined variant="warning"></sit-alert>`);
      const closeButton = el.shadowRoot?.querySelector("SIT-close-button");
      expect(closeButton?.getAttribute("tone")).to.equal("fixed-dark");
    });

    it("should have tone='fixed-light' for non-warning variants without outlined", async () => {
      for (const variant of ["info", "success", "danger", "neutral"] as const) {
        const el = await fixture<SitAlert>(html`<sit-alert show dismissible variant=${variant}></sit-alert>`);
        const closeButton = el.shadowRoot?.querySelector("SIT-close-button");
        expect(closeButton?.getAttribute("tone"), `variant="${variant}"`).to.equal("fixed-light");
      }
    });
  });

  describe("Web Accessibility", () => {
    it("Should have alert role", async () => {
      const el = await fixture<SitAlert>(html`<sit-alert show></sit-alert>`);
      const alertEl = el.shadowRoot?.querySelector("div.alert");
      assert.equal(alertEl?.getAttribute("role"), "alert");
    });
  });
});



