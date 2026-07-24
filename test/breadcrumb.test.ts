import "./sit-web-component";
import { assert, fixture, expect } from "@open-wc/testing";
import { html } from "lit";
import { SitBreadcrumb, SitBreadcrumbItem } from "../src/components";
import Sinon from "sinon";

describe("sit-breadcrumb", () => {
  it("renders with default values", async () => {
    const el = await fixture<SitBreadcrumb>(html`<sit-breadcrumb></sit-breadcrumb>`);
    assert.shadowDom.equal(
      el,
      ` <div aria-label="breadcrumb">
        <div class="breadcrumb">
          <slot></slot>
        </div>
      </div>
        `
    );
  });
  it("when items are less than 5 , matches shadowDOM semantically ", async () => {
    const el = await fixture<SitBreadcrumb>(html`<sit-breadcrumb>
      <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">About</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="https://www.google.com/">Contacts</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="https://www.google.com/">Info</a></sit-breadcrumb-item>
    </sit-breadcrumb>`);
    assert.shadowDom.equal(
      el,
      ` <div aria-label="breadcrumb">
        <div class="breadcrumb">
          <slot></slot>
        </div>
      </div>
        `
    );
  });
  it("when items are more than 4 , matches shadowDOM semantically ", async () => {
    // Mock fetch to prevent network requests
    const fetchStub = Sinon.stub(window, "fetch").resolves(
      new Response("<svg></svg>", { status: 200, headers: { "Content-Type": "image/svg+xml" } })
    );

    const el = await fixture<SitBreadcrumb>(html`<sit-breadcrumb>
      <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">About</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="https://www.google.com/">Contacts</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="https://www.google.com/">Info</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="https://www.google.com/">Last</a></sit-breadcrumb-item>
    </sit-breadcrumb>`);
    assert.shadowDom.equal(
      el,
      ` <div aria-label="breadcrumb">
        <div class="breadcrumb">
              <sit-breadcrumb-item
          >
            <a href="#">
              Home
            </a>
          </sit-breadcrumb-item>
         <sit-breadcrumb-item class="overflow-menu">
           <sit-overflow-menu aria-haspopup="menu" size="sm">
             <sit-dropdown-item
               aria-disabled="false"
               role="menuitem"
             >
               <a href="#">
                 About
               </a>
             </sit-dropdown-item>
             <sit-dropdown-item
               aria-disabled="false"
               role="menuitem"
             >
               <a href="https://www.google.com/">
                 Contacts
               </a>
             </sit-dropdown-item>
           </sit-overflow-menu>
         </sit-breadcrumb-item>
         <sit-breadcrumb-item
         >
           <a href="https://www.google.com/">
             Info
           </a>
         </sit-breadcrumb-item>
         <sit-breadcrumb-item
           active=""
           aria-current="page"
         >
          <a
            href="https://www.google.com/"
            tabindex="-1"
          >
            Last
           </a>
         </sit-breadcrumb-item>
        </div>
      </div>
        `
    );

    // Restore the stubbed fetch method
    fetchStub.restore();
  });
  it("the last breadcrumb-item in breadcrumb gets active true auto assigned", async () => {
    const el = await fixture<SitBreadcrumb>(html`<sit-breadcrumb>
      <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">About</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="https://www.google.com/">Contacts</a></sit-breadcrumb-item>
    </sit-breadcrumb>`);

    const lastItem = el.querySelectorAll("sit-breadcrumb-item")[2];
    expect(lastItem.active).to.equal(true);
  });
});

describe("sit-breadcrumb-item", () => {
  it("is defined", () => {
    const el = document.createElement("sit-breadcrumb-item");
    assert.instanceOf(el, SitBreadcrumbItem);
  });
  it("renders with default values", async () => {
    const el = await fixture(html`<sit-breadcrumb-item></sit-breadcrumb-item>`);
    assert.shadowDom.equal(
      el,
      `<sit-link
        size="md"
        tone="primary"
        variant="primary"
      >
      <slot class="nav-link"></slot>
      </sit-link>
      <div class="separator">
        <sit-icon name="chevron-right" size="sm"></sit-icon>
      </div>
        `
    );
  });

  it("sets tabindex=-1 on the slotted anchor of the active item", async () => {
    const el = await fixture<SitBreadcrumb>(html`
      <sit-breadcrumb>
        <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
        <sit-breadcrumb-item><a href="#">Current</a></sit-breadcrumb-item>
      </sit-breadcrumb>
    `);
    const lastItem = el.querySelectorAll("sit-breadcrumb-item")[1];
    expect(lastItem.querySelector("a")?.getAttribute("tabindex")).to.equal("-1");
  });
  it("does not set tabindex=-1 on non-active item anchors", async () => {
    const el = await fixture<SitBreadcrumb>(html`
      <sit-breadcrumb>
        <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
        <sit-breadcrumb-item><a href="#">Current</a></sit-breadcrumb-item>
      </sit-breadcrumb>
    `);
    const firstItem = el.querySelectorAll("sit-breadcrumb-item")[0];
    expect(firstItem.querySelector("a")?.getAttribute("tabindex")).to.not.equal("-1");
  });
  it("prevents mouse click navigation on the active anchor", async () => {
    const el = await fixture<SitBreadcrumb>(html`
      <sit-breadcrumb>
        <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
        <sit-breadcrumb-item><a href="#">Current</a></sit-breadcrumb-item>
      </sit-breadcrumb>
    `);
    const lastItem = el.querySelectorAll("sit-breadcrumb-item")[1];
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    lastItem.querySelector("a")?.dispatchEvent(clickEvent);
    expect(clickEvent.defaultPrevented).to.be.true;
  });
  it("prevents keyboard Enter navigation on the active anchor", async () => {
    const el = await fixture<SitBreadcrumb>(html`
      <sit-breadcrumb>
        <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
        <sit-breadcrumb-item><a href="#">Current</a></sit-breadcrumb-item>
      </sit-breadcrumb>
    `);
    const lastItem = el.querySelectorAll("sit-breadcrumb-item")[1];
    // browsers fire a click event on a focused anchor when Enter is pressed
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    lastItem.querySelector("a")?.dispatchEvent(clickEvent);
    expect(clickEvent.defaultPrevented).to.be.true;
  });
  it("does not prevent click navigation on non-active item anchors", async () => {
    const el = await fixture<SitBreadcrumb>(html`
      <sit-breadcrumb>
        <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
        <sit-breadcrumb-item><a href="#">Current</a></sit-breadcrumb-item>
      </sit-breadcrumb>
    `);
    const firstItem = el.querySelectorAll("sit-breadcrumb-item")[0];
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    firstItem.querySelector("a")?.dispatchEvent(clickEvent);
    expect(clickEvent.defaultPrevented).to.be.false;
  });
});
