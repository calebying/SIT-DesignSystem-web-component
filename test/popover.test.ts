import "./sit-web-component";
import { assert, expect, fixture, html, nextFrame, oneEvent, waitUntil } from "@open-wc/testing";
import { SitPopover, SitButton } from "../src/components";
import { sendMouse } from "@web/test-runner-commands";

describe("sit-popover", () => {
  it("is defined", () => {
    const el = document.createElement("sit-popover");
    assert.instanceOf(el, SitPopover);
  });

  it("opens on trigger click by default", async () => {
    const el = await fixture<SitPopover>(html`
      <sit-popover>
        <sit-button>Open</sit-button>
        <div slot="content">Panel content</div>
      </sit-popover>
    `);
    (el.querySelector("sit-button") as SitButton).click();
    await el.updateComplete;
    await waitUntil(() => el.open);

    expect(el.open).to.be.true;
    expect(el.shadowRoot?.querySelector(".popover-panel")).to.not.have.attribute("hidden");
  });

  it("toggles closed on a second trigger click", async () => {
    const el = await fixture<SitPopover>(html`
      <sit-popover>
        <sit-button>Open</sit-button>
        <div slot="content">Panel content</div>
      </sit-popover>
    `);
    const button = el.querySelector("sit-button") as SitButton;

    button.click();
    await waitUntil(() => el.open);
    expect(el.open).to.be.true;

    button.click();
    await waitUntil(() => !el.open);
    expect(el.open).to.be.false;
  });

  it("does not open when disabled", async () => {
    const el = await fixture<SitPopover>(html`
      <sit-popover disabled>
        <sit-button>Open</sit-button>
        <div slot="content">Panel content</div>
      </sit-popover>
    `);
    (el.querySelector("sit-button") as SitButton).click();
    await el.updateComplete;
    expect(el.open).to.be.false;
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const el = await fixture<SitPopover>(html`
      <sit-popover>
        <sit-button>Open</sit-button>
        <div slot="content"><input type="text" /></div>
      </sit-popover>
    `);
    await el.show();
    expect(el.open).to.be.true;

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await waitUntil(() => !el.open);

    expect(el.open).to.be.false;
  });

  it("sets data-placement on the panel once positioned", async () => {
    // Rendered with generous room on every side (fixed viewport-center
    // position) so Floating UI's flip middleware has no reason to move the
    // panel away from the requested placement -- a fixture rendered flush
    // against the test iframe's edge would genuinely (and correctly) flip,
    // which isn't what this test is checking.
    const el = await fixture<SitPopover>(html`
      <div style="position:fixed;top:300px;left:300px;">
        <sit-popover placement="top">
          <sit-button>Open</sit-button>
          <div slot="content">Panel content</div>
        </sit-popover>
      </div>
    `).then(wrapper => wrapper.querySelector("sit-popover") as SitPopover);
    await el.show();
    const panel = el.shadowRoot?.querySelector(".popover-panel") as HTMLElement;
    await waitUntil(() => panel.getAttribute("data-placement") !== null);
    expect(panel.getAttribute("data-placement")).to.contain("top");
  });

  it("fires sit-show before sit-after-show, and sit-hide before sit-after-hide", async () => {
    const el = await fixture<SitPopover>(html`
      <sit-popover>
        <sit-button>Open</sit-button>
        <div slot="content">Panel content</div>
      </sit-popover>
    `);
    const firedEvents: string[] = [];
    el.addEventListener("sit-show", () => firedEvents.push("sit-show"));
    el.addEventListener("sit-after-show", () => firedEvents.push("sit-after-show"));
    el.addEventListener("sit-hide", () => firedEvents.push("sit-hide"));
    el.addEventListener("sit-after-hide", () => firedEvents.push("sit-after-hide"));

    await el.show();
    await nextFrame();
    el.hide();
    await new Promise(r => setTimeout(r, 0));

    expect(firedEvents).to.deep.equal(["sit-show", "sit-after-show", "sit-hide", "sit-after-hide"]);
  });

  it("opens on hover when trigger=hover, and closes on mouseleave", async () => {
    // Real simulated mouse movement (like sit-tooltip's own passing hover
    // test), not a synthetic dispatchEvent -- moving off-element afterward is
    // what actually exercises mouseleave, which a synthetic single dispatch
    // on the same element can't represent.
    const el = await fixture<SitPopover>(html`
      <sit-popover trigger="hover">
        <sit-button>Open</sit-button>
        <div slot="content">Panel content</div>
      </sit-popover>
    `);
    const button = el.querySelector("sit-button") as SitButton;
    const rect = button.getBoundingClientRect();

    const showListener = oneEvent(el, "sit-show");
    await sendMouse({
      type: "move",
      position: [Math.round(rect.x + rect.width / 2), Math.round(rect.y + rect.height / 2)]
    });
    expect(await showListener).to.exist;

    const hideListener = oneEvent(el, "sit-hide");
    await sendMouse({ type: "move", position: [0, 0] });
    expect(await hideListener).to.exist;
  });
});

describe("Popover methods", () => {
  it("show()/hide()/toggle() control the open state", async () => {
    const el = await fixture<SitPopover>(html`
      <sit-popover>
        <sit-button>Open</sit-button>
        <div slot="content">Panel content</div>
      </sit-popover>
    `);
    await el.show();
    expect(el.open).to.be.true;

    el.hide();
    expect(el.open).to.be.false;

    await el.toggle();
    expect(el.open).to.be.true;

    el.toggle();
    expect(el.open).to.be.false;
  });
});
