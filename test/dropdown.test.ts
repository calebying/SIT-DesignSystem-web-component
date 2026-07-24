import "./sit-web-component";
import { SitDropdown, SitDropdownItem } from "../src/components";
import { fixture, assert, expect, waitUntil, oneEvent, nextFrame } from "@open-wc/testing";
import sinon from "sinon";
import { html } from "lit";
import { sendKeys, sendMouse } from "@web/test-runner-commands";
import { MockDropdown } from "../mocks/dropdown";
import "../mocks/dropdown";

describe("dropdown-element generic keyboard interactions", () => {
  // //keyboard navigation
  const closeKeys = ["Enter", "Escape"];
  closeKeys.forEach(key => {
    it(`should close an opened menu on ${key} press`, async () => {
      const el = await fixture<MockDropdown>(
        html`<mock-dropdown menuIsOpen>
          <sit-dropdown-item>slot 1</sit-dropdown-item>
          <sit-dropdown-item>slot 2</sit-dropdown-item>
        </mock-dropdown> `
      );
      expect(el.menuIsOpen).to.be.true;
      el.shadowRoot?.querySelector("button")?.focus();
      await waitUntil(() => el.shadowRoot?.querySelector("button:focus"));
      await sendKeys({ press: key });
      await el.updateComplete;
      await waitUntil(() => !el.menuIsOpen);
      expect(el.menuIsOpen).to.be.false;
    }).retries(1);
  });
  const openKeys = ["ArrowDown", "ArrowUp", "Enter"];
  openKeys.forEach(key => {
    it(`should open menu on ${key} key`, async () => {
      const el = await fixture<MockDropdown>(
        html`<mock-dropdown>
          <sit-dropdown-item>slot 1</sit-dropdown-item>
          <sit-dropdown-item>slot 2</sit-dropdown-item>
        </mock-dropdown> `
      );
      expect(el.menuIsOpen).to.be.false;
      el.shadowRoot?.querySelector("button")?.focus();
      await sendKeys({ press: key });
      await waitUntil(() => el.menuIsOpen);
      expect(el.menuIsOpen).to.be.true;
    }).retries(1); // allowing retries as these tests tends to be flaky on firefox
  });

  it("for a newly opened menu with no focus on any items, ArrowDown key will navigate to the first dropdown-item on the menu and continue looping once it reaches the last menu item", async () => {
    const el = await fixture<MockDropdown>(
      html`<mock-dropdown menuIsOpen>
        <sit-dropdown-item>slot 1</sit-dropdown-item>
        <sit-dropdown-item>slot 2</sit-dropdown-item>
      </mock-dropdown> `
    );
    expect(el.nextDropdownItemNo).to.equal(0);
    expect(el.prevDropdownItemNo).to.equal(-1);
    el.shadowRoot?.querySelector("button")?.focus();

    await sendKeys({ press: "ArrowDown" });
    // currentItem = 0
    await el.updateComplete;
    expect(el.nextDropdownItemNo).to.equal(1);
    expect(el.prevDropdownItemNo).to.equal(1);
    expect(el.querySelectorAll("sit-dropdown-item")[0].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );
    expect(el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "-1"
    );
    await sendKeys({ press: "ArrowDown" });
    //currentItem = 1
    await el.updateComplete;
    expect(el.nextDropdownItemNo).to.equal(0);
    expect(el.prevDropdownItemNo).to.equal(0);
    expect(el.querySelectorAll("sit-dropdown-item")[0].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "-1"
    );
    expect(el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );
    await sendKeys({ press: "ArrowDown" });
    //currentItem = 0
    await el.updateComplete;
    expect(el.nextDropdownItemNo).to.equal(1);
    expect(el.prevDropdownItemNo).to.equal(1);
    expect(el.querySelectorAll("sit-dropdown-item")[0].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );
    expect(el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "-1"
    );
  }).retries(1);
  it("for a newly opened menu with no focus on any items, ArrowUp key will navigate to the last dropdown-item on the menu and continue looping once it reaches the last menu item", async () => {
    const el = await fixture<MockDropdown>(
      html`<mock-dropdown menuIsOpen>
        <sit-dropdown-item>slot 1</sit-dropdown-item>
        <sit-dropdown-item>slot 2</sit-dropdown-item>
      </mock-dropdown> `
    );
    expect(el.nextDropdownItemNo).to.equal(0);
    expect(el.prevDropdownItemNo).to.equal(-1);
    el.shadowRoot?.querySelector("button")?.focus();
    await sendKeys({ press: "ArrowUp" });
    // currentItem = 1
    await el.updateComplete;
    expect(el.nextDropdownItemNo).to.equal(0);
    expect(el.prevDropdownItemNo).to.equal(0);
    expect(el.querySelectorAll("sit-dropdown-item")[0].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "-1"
    );
    expect(el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );
    await sendKeys({ press: "ArrowUp" });
    //currentItem = 0
    await el.updateComplete;
    expect(el.nextDropdownItemNo).to.equal(1);
    expect(el.prevDropdownItemNo).to.equal(1);
    expect(el.querySelectorAll("sit-dropdown-item")[0].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );
    expect(el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "-1"
    );
    await sendKeys({ press: "ArrowUp" });
    //currentItem = 1
    await el.updateComplete;
    expect(el.nextDropdownItemNo).to.equal(0);
    expect(el.prevDropdownItemNo).to.equal(0);
    expect(el.querySelectorAll("sit-dropdown-item")[0].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "-1"
    );
    expect(el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );

    //closing the menu resets the states nextDropdownItemNo and prevDropdownItemNo
    await sendKeys({ press: "Escape" });
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;
    expect(el.nextDropdownItemNo).to.equal(0);
    expect(el.prevDropdownItemNo).to.equal(-1);
    expect(
      el.querySelectorAll("sit-dropdown-item")[0].shadowRoot?.querySelector(".dropdown-item")
    ).not.to.have.attribute("tabindex");
    expect(
      el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")
    ).not.to.have.attribute("tabindex");
  }).retries(1);
  it("keyboard navigation skips disabled items", async () => {
    const el = await fixture<MockDropdown>(
      html`<mock-dropdown menuIsOpen>
        <sit-dropdown-item disabled>slot 1</sit-dropdown-item>
        <sit-dropdown-item>slot 2</sit-dropdown-item>
        <sit-dropdown-item>slot 3</sit-dropdown-item>
        <sit-dropdown-item disabled>slot 4</sit-dropdown-item>
      </mock-dropdown> `
    );
    el.shadowRoot?.querySelector("button")?.focus();
    await sendKeys({ press: "ArrowDown" });
    expect(el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );
    await sendKeys({ press: "ArrowDown" });
    expect(el.querySelectorAll("sit-dropdown-item")[2].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );
    await sendKeys({ press: "ArrowDown" });
    expect(el.querySelectorAll("sit-dropdown-item")[1].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "0"
    );
    expect(el.querySelectorAll("sit-dropdown-item")[3].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
      "tabindex",
      "-1"
    );
  }).retries(1);
  // // test case: when close="outside" and user mouse clicks on menu and then change to keyboard navigation
  // it("transition from mouse click to keyboard navigation should be seamless", async () => {
  //   const el = await fixture<MockDropdown>(
  //     html`<mock-dropdown menuIsOpen close="outside">
  //       <sit-dropdown-item>slot 1</sit-dropdown-item>
  //       <sit-dropdown-item disabled>slot 2</sit-dropdown-item>
  //       <sit-dropdown-item>slot 3</sit-dropdown-item>
  //       <sit-dropdown-item>slot 4</sit-dropdown-item>
  //     </mock-dropdown> `
  //   );
  //   const itemOne = el.querySelectorAll("sit-dropdown-item")[0] as SitDropdownItem;
  //   itemOne.click();
  //   await sendKeys({ press: "ArrowDown" });
  //   expect(el.querySelectorAll("sit-dropdown-item")[2].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
  //     "tabindex",
  //     "0"
  //   );
  //   await sendKeys({ press: "ArrowDown" });
  //   expect(el.querySelectorAll("sit-dropdown-item")[2].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
  //     "tabindex",
  //     "-1"
  //   );
  //   expect(el.querySelectorAll("sit-dropdown-item")[3].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
  //     "tabindex",
  //     "0"
  //   );

  //   itemOne.click();
  //   await sendKeys({ press: "ArrowUp" });
  //   expect(el.querySelectorAll("sit-dropdown-item")[3].shadowRoot?.querySelector(".dropdown-item")).to.have.attribute(
  //     "tabindex",
  //     "0"
  //   );
  // }).retries(1);
});

describe("sit-dropdown", () => {
  it("is defined", () => {
    const el = document.createElement("sit-dropdown");
    assert.instanceOf(el, SitDropdown);
  });

  it("can be semantically compare with shadowDom trees", async () => {
    const el = await fixture(html`<sit-dropdown>
      <sit-button slot="toggler">Dropdown</sit-button>
    </sit-dropdown>`);
    assert.shadowDom.equal(
      el,
      `<div class="dropdown">
        <div class="toggler-container">
          <slot name="toggler"></slot>
        </div>
        <div class="dropdown-menu" role="menu">
          <slot id="default"></slot>
        </div>
      </div>
    `
    );
  });
  it("when disabled is true, toggle is disabled", async () => {
    const el = await fixture<SitDropdown>(html` <sit-dropdown disabled>
      <sit-button slot="toggler">Dropdown</sit-button>
    </sit-dropdown>`);
    expect(el.querySelector("sit-button")).to.have.attribute("disabled");
    el.disabled = false;
    await el.updateComplete;
    expect(el.querySelector("sit-button")).not.to.have.attribute("disabled");
  });
  it("when menuAlignRight is false (default) on default dropdown, floatingOpts.placement is bottom-start", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown><sit-button slot="toggler">Dropdown</sit-button></sit-dropdown>`
    );

    await el.showMenu();

    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;
    await waitUntil(() => menuEl.getAttribute("data-placement") !== null);

    expect(menuEl.getAttribute("data-placement")).to.equal("bottom-start");
  });

  it("when menuAlignRight is true on default dropdown, floatingOpts placement is bottom-end", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuAlignRight><sit-button slot="toggler">Dropdown</sit-button></sit-dropdown>`
    );

    await el.showMenu();

    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;
    await waitUntil(() => menuEl.getAttribute("data-placement") !== null);

    expect(menuEl.getAttribute("data-placement")).to.equal("bottom-end");
  });
  it("when menuAlignRight is true on dropup, floatingOpts placement is top-end", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuAlignRight drop="up" .noFlip=${true}
        ><sit-button slot="toggler">Dropdown</sit-button></sit-dropdown
      >`
    );

    await el.showMenu();

    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;
    await waitUntil(() => menuEl.getAttribute("data-placement") !== null);

    expect(menuEl.getAttribute("data-placement")).to.equal("top-end");
  });
  it("when menuAlignRight is false on dropup, floatingOpts placement is top-start", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown drop="up" .noFlip=${true}><sit-button slot="toggler">Dropdown</sit-button></sit-dropdown>`
    );

    await el.showMenu();

    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;
    await waitUntil(() => menuEl.getAttribute("data-placement") !== null);

    expect(menuEl.getAttribute("data-placement")).to.equal("top-start");
  });
  it("when dropright, floatingOpts placement is right-start", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown drop="right"><sit-button slot="toggler">Dropdown</sit-button></sit-dropdown>`
    );

    await el.showMenu();

    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;
    await waitUntil(() => menuEl.getAttribute("data-placement") !== null);

    expect(menuEl.getAttribute("data-placement")).to.equal("right-start");
  });
  it("when dropleft, floatingOpts placement is left-start", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown drop="left"><sit-button slot="toggler">Dropdown</sit-button></sit-dropdown>`
    );

    await el.showMenu();

    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;
    await waitUntil(() => menuEl.getAttribute("data-placement") !== null);

    expect(menuEl?.getAttribute("data-placement")).to.equal("left-start");
  });
  it("applies flip() middleware when noFlip = false", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown drop="up"><sit-button slot="toggler">Toggle</sit-button></sit-dropdown>`
    );

    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.left = "0px";
    document.body.appendChild(el);

    await el.showMenu();
    const menu = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;

    await new Promise(r => setTimeout(r));

    const placement = menu.getAttribute("data-placement");
    expect(placement?.startsWith("bottom")).to.be.true;
  });
  it("does not apply flip() when noFlip = true", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown drop="up"><sit-button slot="toggler">Toggle</sit-button></sit-dropdown>`
    );
    el.noFlip = true;

    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.left = "0px";
    document.body.appendChild(el);

    await el.showMenu();
    const menu = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;

    await new Promise(r => setTimeout(r));

    const placement = menu.getAttribute("data-placement");
    // Should stay top-* even though it's overflowing, since flip is disabled
    expect(placement?.startsWith("top")).to.be.true;
  });
  it("menuIsOpen prop opens menu on first load", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen><sit-button slot="toggler">Dropdown</sit-button></sit-dropdown>`
    );
    const menuEl = el.shadowRoot?.querySelector("div.dropdown-menu") as HTMLUListElement;
    expect(getComputedStyle(menuEl).display).to.equal("block");
  });
  it("fires sit-show and sit-after-show when menu opens", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown><sit-button slot="toggler">Toggle</sit-button></sit-dropdown>`
    );

    setTimeout(() => el.showMenu());
    const showEvent = await oneEvent(el, "sit-show");
    expect(showEvent).to.exist;

    const afterShowEvent = await oneEvent(el, "sit-after-show");
    expect(afterShowEvent).to.exist;

    expect(el.menuIsOpen).to.be.true;
  });
  it("fires sit-show before sit-after-show", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown><sit-button slot="toggler">Toggle</sit-button></sit-dropdown>`
    );

    const firedEvents: string[] = [];

    el.addEventListener("sit-show", () => firedEvents.push("sit-show"));
    el.addEventListener("sit-after-show", () => firedEvents.push("sit-after-show"));

    await el.showMenu();

    // Wait a frame for events to flush
    await nextFrame();

    expect(firedEvents).to.deep.equal(["sit-show", "sit-after-show"]);
  });
  it("fires sit-hide and sit-after-hide when menu closes", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown><sit-button slot="toggler">Toggle</sit-button></sit-dropdown>`
    );

    await el.showMenu();
    expect(el.menuIsOpen).to.be.true;

    setTimeout(() => el.hideMenu());
    const hideEvent = await oneEvent(el, "sit-hide");
    expect(hideEvent).to.exist;

    const afterHideEvent = await oneEvent(el, "sit-after-hide");
    expect(afterHideEvent).to.exist;

    expect(el.menuIsOpen).to.be.false;
  });
  it("fires sit-hide before sit-after-hide", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown><sit-button slot="toggler">Toggle</sit-button></sit-dropdown>`
    );

    await el.showMenu();

    const firedEvents: string[] = [];
    el.addEventListener("sit-hide", () => firedEvents.push("sit-hide"));
    el.addEventListener("sit-after-hide", () => firedEvents.push("sit-after-hide"));

    await el.hideMenu();

    // wait for the setTimeout in hideMenu()
    await new Promise(r => setTimeout(r, 0));

    expect(firedEvents).to.deep.equal(["sit-hide", "sit-after-hide"]);
  });
  it("showMenu/hideMenu method opens/closes menu", async () => {
    const el = await fixture<SitDropdown>(html`<sit-dropdown>
      <sit-button slot="toggler">Dropdown</sit-button>
    </sit-dropdown>`);
    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLUListElement;

    expect(el.menuIsOpen).to.be.false;
    expect(getComputedStyle(menuEl).display).to.equal("none");
    el.showMenu();
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.true;
    expect(getComputedStyle(menuEl).display).to.equal("block");
    el.hideMenu();
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;
    expect(getComputedStyle(menuEl).display).to.equal("none");
  });
  // // testing _handleSelectSlot functionality
  it("emits sit-select event when its slots are clicked on", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item>slot 1</sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);
    const item = el.querySelector("sit-dropdown-item");
    item?.click();
    await el.updateComplete;
    expect(selectHandler).to.be.calledOnce;
  });
  it("does not emit sit-select event when its disabled slots are clicked on", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item disabled>slot 1</sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);

    const item = el.querySelector("sit-dropdown-item");
    item?.click();
    await el.updateComplete;
    expect(selectHandler).not.to.be.called;
  });
  it("emits sit-select exactly once when dropdown-item has no anchor (plain text)", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item>plain text item</sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);
    const item = el.querySelector("sit-dropdown-item");
    item?.click();
    await el.updateComplete;
    expect(selectHandler).to.be.calledOnce;
  });
  it("emits sit-select exactly once when dropdown-item has an anchor", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item><a href="#">Option</a></sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);
    const item = el.querySelector("sit-dropdown-item");
    item?.click();
    await el.updateComplete;
    expect(selectHandler).to.be.calledOnce;
  });
  it("sit-select event detail contains the clicked dropdown-item", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item>item 1</sit-dropdown-item>
        <sit-dropdown-item>item 2</sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);
    const items = el.querySelectorAll("sit-dropdown-item");
    items[1].click();
    await el.updateComplete;
    expect(selectHandler).to.be.calledOnce;
    expect(selectHandler.firstCall.args[0].detail.item).to.equal(items[1]);
  });
  // // testing _handleSelectSlot functionality
  it("when clicked on slot, menu closes", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item>slot 1</sit-dropdown-item>
      </sit-dropdown>`
    );
    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLUListElement;
    expect(getComputedStyle(menuEl).display).to.equal("block");
    const item = el.querySelector("sit-dropdown-item");
    item?.click();
    await el.updateComplete;
    expect(getComputedStyle(menuEl).display).to.equal("none");
  });
  it("clicking the slotted toggler opens the menu when closed", async () => {
    const el = await fixture<SitDropdown>(html`<sit-dropdown>
      <sit-button slot="toggler">Dropdown</sit-button>
      <sit-dropdown-item>item 1</sit-dropdown-item>
    </sit-dropdown>`);
    expect(el.menuIsOpen).to.be.false;
    const button = el.querySelector("sit-button") as HTMLElement;
    button.click();
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.true;
  });

  it("clicking the slotted toggler closes the menu when open", async () => {
    const el = await fixture<SitDropdown>(html`<sit-dropdown menuIsOpen>
      <sit-button slot="toggler">Dropdown</sit-button>
      <sit-dropdown-item>item 1</sit-dropdown-item>
    </sit-dropdown>`);
    expect(el.menuIsOpen).to.be.true;
    const button = el.querySelector("sit-button") as HTMLElement;
    button.click();
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;
  });

  it("clicking the empty toggler-container area closes an open menu", async () => {
    const el = await fixture<SitDropdown>(html`<sit-dropdown menuIsOpen>
      <sit-button slot="toggler">Dropdown</sit-button>
      <sit-dropdown-item>item 1</sit-dropdown-item>
    </sit-dropdown>`);
    expect(el.menuIsOpen).to.be.true;
    // Simulate the click that falls through pointer-events:none on .toggler-container to .dropdown
    const dropdownDiv = el.shadowRoot?.querySelector(".dropdown") as HTMLElement;
    dropdownDiv.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;
  });

  it("clicking the empty toggler-container area does not open a closed menu", async () => {
    const el = await fixture<SitDropdown>(html`<sit-dropdown>
      <sit-button slot="toggler">Dropdown</sit-button>
      <sit-dropdown-item>item 1</sit-dropdown-item>
    </sit-dropdown>`);
    expect(el.menuIsOpen).to.be.false;
    const dropdownDiv = el.shadowRoot?.querySelector(".dropdown") as HTMLElement;
    dropdownDiv.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;
  });

  it("clicking a menu item does not prevent the menu from closing", async () => {
    const el = await fixture<SitDropdown>(html`<sit-dropdown menuIsOpen>
      <sit-button slot="toggler">Dropdown</sit-button>
      <sit-dropdown-item>item 1</sit-dropdown-item>
    </sit-dropdown>`);
    expect(el.menuIsOpen).to.be.true;
    const item = el.querySelector("sit-dropdown-item") as HTMLElement;
    item.click();
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;
  });

  // // tests _handleClickOutOfElement & blur event listener
  it("click outside of component, closes the dropdown by default", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item>slot 1</sit-dropdown-item>
        <sit-dropdown-item>slot 2</sit-dropdown-item>
      </sit-dropdown> `
    );
    const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLUListElement;

    expect(el.menuIsOpen).to.be.true;
    expect(getComputedStyle(menuEl).display).to.equal("block");
    await sendMouse({ type: "click", position: [0, 0] });
    await el.updateComplete;
    expect(getComputedStyle(menuEl).display).to.equal("none");
    expect(el.menuIsOpen).to.be.false;
  });
  // it("when close=inside , dropdown menu closes only when clicked on menu item", async () => {
  //   const el = await fixture<SitDropdown>(
  //     html`<sit-dropdown menuIsOpen close="inside">
  //       <sit-button slot="toggler">Dropdown</sit-button>
  //       <sit-dropdown-item>slot 1</sit-dropdown-item>
  //       <sit-dropdown-item>slot 2</sit-dropdown-item>
  //     </sit-dropdown> `
  //   );
  //   expect(el.menuIsOpen).to.be.true;
  //   expect(el.shadowRoot?.querySelector("div.dropdown-menu")).to.have.class("show");
  //   // proving that clicking outside of dropdown menu wont trigger menuclose
  //   await sendMouse({ type: "click", position: [0, 0] });
  //   await el.updateComplete;
  //   expect(el.shadowRoot?.querySelector("div.dropdown-menu")).to.have.class("show");
  //   expect(el.menuIsOpen).to.be.true;
  //   const itemOne = el.querySelectorAll("sit-dropdown-item")[0] as SitDropdownItem;
  //   itemOne.click();
  //   await el.updateComplete;
  //   expect(el.shadowRoot?.querySelector("div.dropdown-menu")).not.to.have.class("show");
  //   expect(el.menuIsOpen).to.be.false;
  // });
  // it("when close=outside , dropdown menu closes only when clicked on menu item", async () => {
  //   const el = await fixture<SitDropdown>(
  //     html`<sit-dropdown menuIsOpen close="outside">
  //       <sit-dropdown-item>slot 1</sit-dropdown-item>
  //       <sit-dropdown-item>slot 2</sit-dropdown-item>
  //     </sit-dropdown> `
  //   );
  //   expect(el.menuIsOpen).to.be.true;
  //   expect(el.shadowRoot?.querySelector("div.dropdown-menu")).to.have.class("show");
  //   // proving that clicking inside menu item will not close the menu
  //   const itemOne = el.querySelectorAll("sit-dropdown-item")[0] as SitDropdownItem;
  //   itemOne.click();
  //   await el.updateComplete;
  //   expect(el.shadowRoot?.querySelector("div.dropdown-menu")).to.have.class("show");
  //   expect(el.menuIsOpen).to.be.true;
  //   // clicking outside closes the menu
  //   await sendMouse({ type: "click", position: [0, 0] });
  //   await el.updateComplete;
  //   expect(el.shadowRoot?.querySelector("div.dropdown-menu")).not.to.have.class("show");
  //   expect(el.menuIsOpen).to.be.false;
  // });
  // type close = "default" | "outside" | "inside";
  // const closeValues = ["default", "outside", "inside"];
  // closeValues.forEach(closeVal => {
  //   it(`dropdown menu always closes when click on button regardless of prop close value = ${closeVal}`, async () => {
  //     const el = await fixture<SitDropdown>(
  //       html`<sit-dropdown menuIsOpen close=${closeVal as close}>
  //         <sit-dropdown-item>slot 1</sit-dropdown-item>
  //         <sit-dropdown-item>slot 2</sit-dropdown-item>
  //       </sit-dropdown> `
  //     );
  //     expect(el.menuIsOpen).to.be.true;
  //     expect(el.shadowRoot?.querySelector("div.dropdown-menu")).to.have.class("show");
  //     (el.shadowRoot?.querySelector("sit-button") as SitButton).click();
  //     // proving that clicking inside menu item will not close the menu
  //     await el.updateComplete;
  //     expect(el.shadowRoot?.querySelector("div.dropdown-menu")).not.to.have.class("show");
  //     expect(el.menuIsOpen).to.be.false;
  //   });
  // });
});

describe("sit-dropdown-item", () => {
  it("is defined", () => {
    const el = document.createElement("sit-dropdown-item");
    assert.instanceOf(el, SitDropdownItem);
  });
  it("can be semantically compare with shadowDom trees", async () => {
    const el = await fixture<SitDropdownItem>(html`<sit-dropdown-item></sit-dropdown-item>`);
    assert.shadowDom.equal(
      el,
      `   <div
        class="dropdown-item"
        tabindex="0"
      >
        <slot></slot>
      </div>`
    );
  });
  it("active prop is forwarded to .dropdown-item", async () => {
    const el = await fixture(html`<sit-dropdown-item active>test</sit-dropdown-item>`);
    expect(el.shadowRoot?.querySelector("div.dropdown-item")).to.have.class("active");
  });
  it("when clicked on, should trigger a navigation and change the page url", async () => {
    const el = await fixture<SitDropdownItem>(html`<sit-dropdown-item>
      <a href="#navigation-test">Example</a>
    </sit-dropdown-item>`);
    const anchor = el.querySelector("a") as HTMLAnchorElement;
    anchor.click();
    await waitUntil(() => window.location.hash === "#navigation-test");
    expect(window.location.hash).to.equal("#navigation-test");
    window.location.hash = "";
  });
});

describe("handleSelectSlot with nested elements", () => {
  it("finds SitDropdownItem when clicking on nested anchor element", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item><a href="#">Nested Link</a></sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);

    const anchor = el.querySelector("sit-dropdown-item a") as HTMLAnchorElement;
    anchor.click();
    await el.updateComplete;

    expect(selectHandler).to.be.calledOnce;
    expect(selectHandler.firstCall.args[0].detail.item).to.be.instanceOf(SitDropdownItem);
  });

  it("finds SitDropdownItem when clicking on deeply nested content", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item>
          <a href="#"
            ><span><strong>Deep content</strong></span></a
          >
        </sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);

    const strong = el.querySelector("sit-dropdown-item strong") as HTMLElement;
    strong.click();
    await el.updateComplete;

    expect(selectHandler).to.be.calledOnce;
    expect(selectHandler.firstCall.args[0].detail.item).to.equal(el.querySelector("sit-dropdown-item"));
  });

  it("returns correct SitDropdownItem when multiple items exist and nested content is clicked", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item>Item 1</sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 2 Link</a></sit-dropdown-item>
        <sit-dropdown-item>Item 3</sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);

    const secondItemAnchor = el.querySelectorAll("sit-dropdown-item")[1].querySelector("a") as HTMLAnchorElement;
    secondItemAnchor.click();
    await el.updateComplete;

    expect(selectHandler).to.be.calledOnce;
    expect(selectHandler.firstCall.args[0].detail.item).to.equal(el.querySelectorAll("sit-dropdown-item")[1]);
  });

  it("does not emit sit-select when disabled item's nested content is clicked", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item disabled><a href="#">Disabled Link</a></sit-dropdown-item>
      </sit-dropdown>`
    );
    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);

    const anchor = el.querySelector("sit-dropdown-item a") as HTMLAnchorElement;
    anchor.click();
    await el.updateComplete;

    expect(selectHandler).not.to.be.called;
  });

  it("emits sit-select on Enter keypress when menu item is focused via keyboard navigation", async () => {
    const el = await fixture<SitDropdown>(
      html`<sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Dropdown</sit-button>
        <sit-dropdown-item>Item 1</sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 2 Link</a></sit-dropdown-item>
        <sit-dropdown-item>Item 3</sit-dropdown-item>
      </sit-dropdown>`
    );

    const selectHandler = sinon.spy();
    el.addEventListener("sit-select", selectHandler);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const SitButton = el.querySelector("sit-button")!;
    expect(SitButton).to.be.not.null;

    SitButton.shadowRoot?.querySelector("button")?.focus();
    await waitUntil(() => SitButton.shadowRoot?.querySelector("button:focus"));
    await sendKeys({ press: "ArrowUp" });
    await el.updateComplete;
    await sendKeys({ press: "Enter" });
    await el.updateComplete;
    expect(selectHandler).to.be.calledOnce;
    expect(selectHandler.firstCall.args[0].detail.item).to.be.instanceOf(SitDropdownItem);
  }).retries(1);
});
