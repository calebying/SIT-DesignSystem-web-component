import "./sit-web-component";
import { SitAccordionItem, SitAccordion } from "../src/components";
import { fixture, expect, waitUntil } from "@open-wc/testing";
import { html } from "lit";
import sinon from "sinon";

// customElements.define("SIT-accordion", SitAccordion);
// customElements.define("SIT-accordion-item", SitAccordionItem);

describe("<sit-accordion>", () => {
  it("accordion items should contain the attribute [first,nth,last]-of-type if items is more than 2", async () => {
    const el = await fixture<SitAccordion>(html`
      <sit-accordion>
        <sit-accordion-item> Lorem ipsum </sit-accordion-item>
        <sit-accordion-item> Lorem ipsum </sit-accordion-item>
        <sit-accordion-item> Lorem ipsum </sit-accordion-item>
        <sit-accordion-item> Lorem ipsum </sit-accordion-item>
      </sit-accordion>
    `);

    const first = el.shadowRoot?.querySelector("slot")?.assignedNodes()[1];
    expect(first).to.have.attribute("first-of-type");
    const second = el.shadowRoot?.querySelector("slot")?.assignedNodes()[3];
    const third = el.shadowRoot?.querySelector("slot")?.assignedNodes()[5];
    expect(second).to.have.attribute("nth-of-type");
    expect(third).to.have.attribute("nth-of-type");

    const last = el.shadowRoot?.querySelector("slot")?.assignedNodes()[7];
    expect(last).to.have.attribute("last-of-type");
  });
});

describe("<sit-accordion-item>", () => {
  it("should be visible with the open attribute", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const body = el.shadowRoot?.querySelector<HTMLElement>(".accordion-body");

    expect(body?.hidden).to.be.false;
  });

  it("should not be visible without the open attribute", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const body = el.shadowRoot?.querySelector<HTMLElement>(".accordion-body");

    expect(body?.classList.contains("hidden")).to.be.true;
  });

  it("should emit sit-show and sit-after-show when calling show()", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const body = el.shadowRoot?.querySelector<HTMLElement>(".accordion-body");
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener("SIT-show", showHandler);
    el.addEventListener("SIT-after-show", afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body?.hidden).to.be.false;
  });

  it("should emit sit-hide and sit-after-hide when calling hide()", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const body = el.shadowRoot?.querySelector<HTMLElement>(".accordion-body");
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener("SIT-hide", hideHandler);
    el.addEventListener("SIT-after-hide", afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body?.classList.contains("hidden")).to.be.true;
  });

  it("should emit sit-show and sit-after-show when setting open = true", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const body = el.shadowRoot?.querySelector<HTMLElement>(".accordion-body");
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener("SIT-show", showHandler);
    el.addEventListener("SIT-after-show", afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body?.hidden).to.be.false;
  });

  it("should emit sit-hide and sit-after-hide when setting open = false", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const body = el.shadowRoot?.querySelector<HTMLElement>(".accordion-body");
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener("SIT-hide", hideHandler);
    el.addEventListener("SIT-after-hide", afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body?.classList.contains("hidden")).to.be.true;
  });

  it("should not open when preventing sit-show", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const showHandler = sinon.spy((event: Event) => event.preventDefault());

    el.addEventListener("SIT-show", showHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(el.open).to.be.false;
  });

  it("should not close when preventing sit-hide", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const hideHandler = sinon.spy((event: Event) => event.preventDefault());

    el.addEventListener("SIT-hide", hideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(el.open).to.be.true;
  });

  it("variant prop is forwarded to variant prop of sit-accordion-item element", async () => {
    const el = await fixture<SitAccordion>(html`<sit-accordion variant="border">
      <sit-accordion-item>
        <div slot="header">Accordion 1</div>
        <span slot="content"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio?
          Eum.</span
        >
      </sit-accordion-item>
    </sit-accordion>`);
    expect(el.querySelectorAll("SIT-accordion-item")[0]).to.have.attribute("variant", "border");
  });

  it("density prop is forwarded to density prop of sit-accordion-item element", async () => {
    const el = await fixture<SitAccordion>(html`<sit-accordion density="compact">
      <sit-accordion-item>
        <div slot="header">Accordion 1</div>
        <span slot="content"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio?
          Eum.</span
        >
      </sit-accordion-item>
    </sit-accordion>`);
    expect(el.querySelectorAll("SIT-accordion-item")[0]).to.have.attribute("density", "compact");
  });

  it("should be disabled when disabled = true", async () => {
    const el = await fixture<SitAccordionItem>(html`
      <sit-accordion-item disabled>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sit-accordion-item>
    `);
    const button = el.shadowRoot?.querySelector(".accordion-btn") as HTMLButtonElement;

    expect(button?.classList.contains("disabled")).to.be.true;

    button.click();
    await el.updateComplete;

    const accordionBody = el.shadowRoot?.querySelector(".accordion-body") as HTMLButtonElement;
    expect(accordionBody?.classList.contains("hidden")).to.be.true;
  });

  it("accordion-btn should use --sit-font-size-subtitle-sm and --sit-line-height-2-xs for compact density", async () => {
    const el = await fixture<SitAccordionItem>(html`<sit-accordion-item density="compact"></sit-accordion-item>`);
    const button = el.shadowRoot?.querySelector<HTMLElement>(".accordion-btn");
    el.style.setProperty("--sit-font-size-subtitle-sm", "14px");
    el.style.setProperty("--sit-line-height-2-xs", "20px");
    await el.updateComplete;
    expect(getComputedStyle(button!).fontSize).to.equal("14px");
    expect(getComputedStyle(button!).lineHeight).to.equal("20px");
  });

  it("accordion-btn should use --sit-font-size-subtitle-md and --sit-line-height-xs for default density", async () => {
    const el = await fixture<SitAccordionItem>(html`<sit-accordion-item></sit-accordion-item>`);
    const button = el.shadowRoot?.querySelector<HTMLElement>(".accordion-btn");
    el.style.setProperty("--sit-font-size-subtitle-md", "18px");
    el.style.setProperty("--sit-line-height-xs", "24px");
    await el.updateComplete;
    expect(getComputedStyle(button!).fontSize).to.equal("18px");
    expect(getComputedStyle(button!).lineHeight).to.equal("24px");
  });

  it("accordion-btn should use --sit-font-size-heading-sm and --sit-line-height-sm for spacious density", async () => {
    const el = await fixture<SitAccordionItem>(html`<sit-accordion-item density="spacious"></sit-accordion-item>`);
    const button = el.shadowRoot?.querySelector<HTMLElement>(".accordion-btn");
    el.style.setProperty("--sit-font-size-heading-sm", "24px");
    el.style.setProperty("--sit-line-height-sm", "28px");
    await el.updateComplete;
    expect(getComputedStyle(button!).fontSize).to.equal("24px");
    expect(getComputedStyle(button!).lineHeight).to.equal("28px");
  });

  it("should have an icon slot inside the accordion button", async () => {
    const el = await fixture<SitAccordionItem>(html`<sit-accordion-item></sit-accordion-item>`);
    const button = el.shadowRoot?.querySelector(".accordion-btn");
    expect(button?.querySelector("slot[name='icon']")).to.exist;
  });

  it("should have a badge slot inside accordion-header__trailing", async () => {
    const el = await fixture<SitAccordionItem>(html`<sit-accordion-item></sit-accordion-item>`);
    const trailing = el.shadowRoot?.querySelector(".accordion-header__trailing");
    expect(trailing?.querySelector("slot[name='badge']")).to.exist;
  });
});



