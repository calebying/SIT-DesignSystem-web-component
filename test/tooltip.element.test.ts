import "./sit-web-component";
import { assert, expect, fixture, nextFrame, oneEvent, waitUntil } from "@open-wc/testing";
import { html } from "lit";
import { SitTooltip, SitButton } from "../src/components";
import { sendMouse } from "@web/test-runner-commands";

describe("SIT-tooltip", () => {
  it("is defined", () => {
    const el = document.createElement("SIT-tooltip");
    assert.instanceOf(el, SitTooltip);
  });

  // it("can be semantically compare with shadowDom trees", async () => {
  //   const el = await fixture(html`<sit-tooltip></sit-tooltip>`);
  //   assert.shadowDom.equal(
  //     el,
  //     `  <div data-bs-original-title="" title="">
  //       <slot>
  //       </slot>
  //      </div>
  //   `
  //   );
  // });

  it("tooltip is triggered via hover by default", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );
    //hovering the button
    await sendMouse({ type: "move", position: [50, 10] });
    await el.updateComplete;
    await waitUntil(() => el.shadowRoot?.querySelector("div.tooltip"));

    const tooltip = el.shadowRoot?.querySelector(".tooltip") as HTMLElement;

    expect(el.shadowRoot?.querySelector(".tooltip")).not.to.be.null;
    expect(tooltip).to.have.text("hello");
  });

  it("when trigger=click, clicking outside of the element will trigger it to close", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip trigger="click" content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );
    (el.querySelector("SIT-button") as SitButton).click();
    await el.updateComplete;
    await waitUntil(() => el.shadowRoot?.querySelector(".tooltip"));
    expect(el.shadowRoot?.querySelector("div.tooltip")).to.have.text("hello");

    await sendMouse({ type: "click", position: [0, 0] });
    await el.updateComplete;
    await waitUntil(() => !el.shadowRoot?.querySelector(".tooltip"));
    expect(el.shadowRoot?.querySelector(".tooltip")).to.be.null;
  });

  it("placement props updates tooltipConfig", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip trigger="click" content="hello" placement="bottom"
        ><sit-button>Hover me</sit-button></sit-tooltip
      >`
    );
    (el.querySelector("SIT-button") as SitButton).click();
    await el.updateComplete;

    const tooltip = el.shadowRoot?.querySelector(".tooltip") as HTMLElement;
    await waitUntil(() => tooltip.getAttribute("data-placement") !== null);

    expect(tooltip).to.have.attribute("data-placement", "bottom");
  });

  it("fires sit-show and sit-after-show when tooltip opens", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );

    setTimeout(() => el.show());
    const showEvent = await oneEvent(el, "SIT-show");
    expect(showEvent).to.exist;

    const afterShowEvent = await oneEvent(el, "SIT-after-show");
    expect(afterShowEvent).to.exist;

    const tooltip = el.shadowRoot?.querySelector(".tooltip") as HTMLElement;
    // await waitUntil(() => tooltip.getAttribute("data-placement") !== null);

    expect(tooltip).to.have.text("hello");
    expect(tooltip).not.to.be.null;
  });

  it("fires sit-show before sit-after-show", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );

    const firedEvents: string[] = [];

    el.addEventListener("SIT-show", () => firedEvents.push("SIT-show"));
    el.addEventListener("SIT-after-show", () => firedEvents.push("SIT-after-show"));

    await el.show();

    // Wait a frame for events to flush
    await nextFrame();

    expect(firedEvents).to.deep.equal(["SIT-show", "SIT-after-show"]);
  });

  it("fires sit-hide and sit-after-hide when menu closes", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );

    await el.show();

    let tooltip = el.shadowRoot?.querySelector(".tooltip") as HTMLElement;
    await waitUntil(() => el.shadowRoot?.querySelector(".tooltip")?.getAttribute("data-placement") !== null);

    expect(tooltip).to.have.text("hello");
    expect(tooltip).not.to.be.null;

    setTimeout(() => el.hide());

    const hideEvent = await oneEvent(el, "SIT-hide");
    expect(hideEvent).to.exist;

    const afterHideEvent = await oneEvent(el, "SIT-after-hide");
    expect(afterHideEvent).to.exist;

    tooltip = el.shadowRoot?.querySelector(".tooltip") as HTMLElement;
    expect(tooltip).to.be.null;
  });

  it("fires sit-hide before sit-after-hide", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );

    await el.show();

    const firedEvents: string[] = [];
    el.addEventListener("SIT-hide", () => firedEvents.push("SIT-hide"));
    el.addEventListener("SIT-after-hide", () => firedEvents.push("SIT-after-hide"));

    el.hide();

    // wait for the setTimeout in hide()
    await new Promise(r => setTimeout(r, 0));

    expect(firedEvents).to.deep.equal(["SIT-hide", "SIT-after-hide"]);
  });
});

describe("Tooltip a11y", () => {
  it("data-sit-tooltip is added to element passed to default slot of tooltip", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );
    expect(el.querySelector("SIT-button")).to.have.attribute("data-sit-tooltip", "hello");
  });
  it("data-sit-tooltip is added to all elements passed to default slot of tooltip", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello">
        <sit-button>Hover me</sit-button>
        <span></span>
      </sit-tooltip>`
    );
    expect(el.querySelector("SIT-button")).to.have.attribute("data-sit-tooltip", "hello");
    expect(el.querySelector("span")).to.have.attribute("data-sit-tooltip", "hello");
  });
});

describe("Tooltip methods", () => {
  it("show method makes tooltip appear in document", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );
    el.show();
    await el.updateComplete;
    await waitUntil(() => el.shadowRoot?.querySelector(".tooltip"));
    expect(el.shadowRoot?.querySelector(".tooltip")).not.to.be.null;
  });
  it("hide method makes tooltip disappear in document", async () => {
    const el = await fixture<SitTooltip>(
      html`<sit-tooltip content="hello"><sit-button>Hover me</sit-button></sit-tooltip>`
    );
    el.show();
    await el.updateComplete;
    await waitUntil(() => el.shadowRoot?.querySelector(".tooltip"));
    expect(el.shadowRoot?.querySelector(".tooltip")).not.to.be.null;
    el.hide();
    await el.updateComplete;
    await waitUntil(() => !el.shadowRoot?.querySelector(".tooltip"));
    expect(el.shadowRoot?.querySelector(".tooltip")).to.be.null;
  });
});



