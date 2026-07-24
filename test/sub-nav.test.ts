import { html } from "lit";
import { expect, fixture } from "@open-wc/testing";
import { SitSubnav } from "../src/components";
import "../src/index";

describe("<sit-subnav>", () => {
  it("renders sit-subnav with a default slot item", async () => {
    const el = await fixture<SitSubnav>(html`
      <sit-subnav>
        <sit-subnav-item>
          <a href="#">Home</a>
        </sit-subnav-item>
      </sit-subnav>
    `);

    const item = el.querySelector("sit-subnav-item");
    expect(item).to.exist;
    const anchor = item?.querySelector("a");
    expect(anchor).to.exist;
    expect(anchor?.textContent?.trim()).to.equal("Home");
  });

  it("automatically wraps text node in an anchor tag", async () => {
    const el = await fixture<SitSubnav>(html`
      <sit-subnav>
        <sit-subnav-item>Dashboard</sit-subnav-item>
      </sit-subnav>
    `);

    const item = el.querySelector("sit-subnav-item");
    const anchor = item?.querySelector("a");
    expect(anchor).to.exist;
    expect(anchor?.textContent?.trim()).to.equal("Dashboard");
  });

  it("sets aria-current when active is true", async () => {
    const el = await fixture<SitSubnav>(html`
      <sit-subnav>
        <sit-subnav-item active>
          <a href="#">Current Page</a>
        </sit-subnav-item>
      </sit-subnav>
    `);

    const anchor = el.querySelector("a");
    expect(anchor?.getAttribute("aria-current")).to.equal("true");
  });

  it("disables link and removes tab index when disabled", async () => {
    const el = await fixture<SitSubnav>(html`
      <sit-subnav>
        <sit-subnav-item disabled>
          <a href="#">Disabled Page</a>
        </sit-subnav-item>
      </sit-subnav>
    `);

    const anchor = el.querySelector("a");
    expect(anchor?.getAttribute("href")).to.equal("javascript:void(0)");
    expect(anchor?.getAttribute("tabindex")).to.equal("-1");
  });

  it("renders header and actions slots correctly", async () => {
    const el = await fixture<SitSubnav>(html`
      <sit-subnav>
        <div slot="header">Subnav Header</div>
        <sit-subnav-item>Home</sit-subnav-item>
        <div slot="actions">
          <sit-button>Action</sit-button>
        </div>
      </sit-subnav>
    `);

    const headerSlot = el.querySelector('[slot="header"]');
    const actionsSlot = el.querySelector('[slot="actions"]');
    const button = actionsSlot?.querySelector("sit-button");

    expect(headerSlot).to.exist;
    expect(headerSlot?.textContent?.trim()).to.equal("Subnav Header");

    expect(button).to.exist;
    expect(button?.textContent?.trim()).to.equal("Action");
  });

  it("handles absence of actions slot correctly", async () => {
    const el = await fixture<SitSubnav>(html`
      <sit-subnav>
        <div slot="header">Subnav Header</div>
        <sit-subnav-item>Home</sit-subnav-item>
      </sit-subnav>
    `);

    const actionsContainer = el.shadowRoot?.querySelector(".subnav-actions");
    expect(actionsContainer).to.exist;

    expect(actionsContainer?.classList.contains("no-actions")).to.be.true;

    const slottedActions = el.querySelector('[slot="actions"]');
    expect(slottedActions).to.not.exist;

    expect(el.hasActionsSlot).to.be.false;
  });
});
