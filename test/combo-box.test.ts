import { assert, aTimeout, elementUpdated, expect, fixture, oneEvent, waitUntil } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import { html } from "lit";
import sinon from "sinon";
import "./sit-web-component";
import { ifDefined } from "lit/directives/if-defined.js";
import type { SitBadge, SitButton, SitCheckbox, SitComboBox, SitIcon } from "../src/components";
import SitComboBoxOption from "../src/components/ComboBox/sit-combo-box-option";
import SitCloseButton from "../src/components/CloseButton/sit-close-button";
interface IComboBoxRenderProps {
  multiSelect?: boolean;
  value?: string;
}
const FiveOptionsCombobox = [
  {
    render: ({ multiSelect, value }: IComboBoxRenderProps) => html`<sit-combo-box
      ?multiSelect=${multiSelect}
      value=${ifDefined(value)}
      .menuList=${[
        { label: "Apple", value: "option1" },
        { label: "Apricot", value: "option2" },
        { label: "Durian", value: "option3" },
        { label: "Grapes", value: "option4" },
        { label: "Orange", value: "option5" }
      ]}
    ></sit-combo-box>`,
    mode: "property"
  },
  {
    render: ({ multiSelect, value }: IComboBoxRenderProps) => html`<sit-combo-box
      ?multiSelect=${multiSelect}
      value=${ifDefined(value)}
    >
      <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
      <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      <sit-combo-box-option value="option3">Durian</sit-combo-box-option>
      <sit-combo-box-option value="option4">Grapes</sit-combo-box-option>
      <sit-combo-box-option value="option5">Orange</sit-combo-box-option>
    </sit-combo-box>`,
    mode: "slot"
  }
];

const TwoOptionsComboBox = [
  {
    render: ({ multiSelect }: IComboBoxRenderProps) => html`<sit-combo-box
      ?multiSelect=${multiSelect}
      .menuList=${[
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" }
      ]}
    ></sit-combo-box>`,
    mode: "property"
  },
  {
    render: ({ multiSelect }: IComboBoxRenderProps) => html`<sit-combo-box ?multiSelect=${multiSelect}>
      <sit-combo-box-option value="option1">Option 1</sit-combo-box-option>
      <sit-combo-box-option value="option2">Option 2</sit-combo-box-option>
    </sit-combo-box>`,
    mode: "slot"
  }
];

const ThreeOptionsComboBox = [
  {
    render: ({ value, multiSelect }: IComboBoxRenderProps) => html`<sit-combo-box
      .menuList=${[
        { label: "Apple", value: "option1" },
        { label: "Apricot", value: "option2" },
        { label: "Durian", value: "option3" }
      ]}
      ?multiSelect=${multiSelect}
      value=${ifDefined(value)}
    ></sit-combo-box>`,
    mode: "property"
  },
  {
    render: ({ value, multiSelect }: IComboBoxRenderProps) => html`<sit-combo-box
      ?multiSelect=${multiSelect}
      value=${ifDefined(value)}
    >
      <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
      <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      <sit-combo-box-option value="option3">Durian</sit-combo-box-option>
    </sit-combo-box>`,
    mode: "slot"
  }
];

function getRootActiveElement(el: HTMLElement | null): Element | null {
  if (!el) return null;
  const root = el.getRootNode();
  return (root as Document | ShadowRoot).activeElement as Element | null;
}

async function simulateUserClick(element: HTMLElement) {
  // Simulate a real user pointer/mouse sequence before calling focus
  element.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, composed: true }));
  element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, composed: true }));
  element.click(); // triggers click handlers
  element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, composed: true }));
  // ensure focus after the click
  element.focus();
  // allow event loop/slot listeners to run
  await aTimeout(0);
}

describe("sit-combo-box ", () => {
  it("matches shadowDom semantically", async () => {
    const el = await fixture<SitComboBox>(html` <sit-combo-box
      .menuList=${[
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" }
      ]}
    ></sit-combo-box>`);
    await el.updateComplete;
    await waitUntil(() => !el.shadowRoot?.querySelector(".empty-menu"));
    assert.shadowDom.equal(
      el,
      `
      <div class="combobox form-control-container m-width-256">
        <div class="form-control-group">
          <div class="combobox-input-container">
            <input
              aria-invalid="false"
              autocomplete="on"
                class="form-control"
              type="text"
              role="combobox"
              aria-expanded="false"
              aria-haspopup="listbox"
            >
          </div>
          <sit-icon
            name="chevron-down"
            size="md"
          >
          </sit-icon>
          </div>
        <div
          class="dropdown-menu"
          id="id-7895-sit-dropdown-menu-div"
          part="menu"
          tabindex="-1"
          role="listbox"
          aria-label="Options"
          >
              <slot></slot>
        </div>
          `,
      { ignoreAttributes: ["id", "aria-controls", "aria-labelledby"] }
    );
  });

  it("should be disabled with the disabled attribute to be true", async () => {
    const el = await fixture(html`<sit-combo-box disabled></sit-combo-box>`);
    const comboBoxInput = el.shadowRoot?.querySelector("input");
    expect(comboBoxInput?.disabled).to.be.true;
  });

  it("when readonly is true, menu cannot open ", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box readonly></sit-combo-box>`);
    const input = el.shadowRoot?.querySelector("input");
    input?.click();
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;

    input?.focus();
    await sendKeys({ press: "ArrowDown" });
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;
    await sendKeys({ press: "ArrowUp" });
    await el.updateComplete;
    expect(el.menuIsOpen).to.be.false;
  });

  it("should emit sit-select event when combobox option is selected by user", async () => {
    const el = await fixture<SitComboBox>(html` <sit-combo-box>
      <sit-combo-box-option value="option1">Option 1</sit-combo-box-option>
      <sit-combo-box-option value="option2">Option 2</sit-combo-box-option>
    </sit-combo-box>`);
    const selectHandler = sinon.spy();
    el?.addEventListener("sit-select", selectHandler);

    expect(el.value).to.equal("");
    const option1 = el.querySelector<SitComboBoxOption>('sit-combo-box-option[value="option1"]')!;
    option1.click();
    await el.updateComplete;

    expect(selectHandler).to.have.been.calledOnce;
  });

  it("should emit sit-input event when input value changes", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box></sit-combo-box>`);
    const comboBoxInput = el.shadowRoot?.querySelector("input");
    const listener = oneEvent(el, "sit-input");

    comboBoxInput?.focus();
    await sendKeys({ press: "A" });
    const event = await listener;
    expect(event.detail).to.deep.equal({ displayValue: "A" });
  });

  it("should emit sit-change event when combobox option is selected by user", async () => {
    const el = await fixture<SitComboBox>(html` <sit-combo-box>
      <sit-combo-box-option value="option1">Option 1</sit-combo-box-option>
      <sit-combo-box-option value="option2">Option 2</sit-combo-box-option>
    </sit-combo-box>`);
    const changeHandler = sinon.spy();
    el?.addEventListener("sit-change", changeHandler);

    expect(el.value).to.equal("");
    const option1 = el.querySelector<SitComboBoxOption>('sit-combo-box-option[value="option1"]')!;
    option1.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
  });

  it("should emit sit-focus and sit-blur event when combobox is focused/blurred", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box></sit-combo-box>`);
    const comboBoxInput = el.shadowRoot?.querySelector("input");

    const focusHandler = sinon.spy();
    el?.addEventListener("sit-focus", focusHandler);

    const blurHandler = sinon.spy();
    el?.addEventListener("sit-blur", blurHandler);

    comboBoxInput?.focus();
    await waitUntil(() => focusHandler.calledOnce);
    expect(focusHandler).to.have.been.calledOnce;

    comboBoxInput?.blur();
    await waitUntil(() => blurHandler.calledOnce);
    expect(blurHandler).to.have.been.calledOnce;
  });

  TwoOptionsComboBox.forEach(({ render, mode }) => {
    it(`MODE=${mode}, mouse click on item, should update value of selected item`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: false }));

      const input = el.shadowRoot?.querySelector("input");
      input?.click();
      await waitUntil(() => el.menuIsOpen);
      const item = el?.querySelectorAll("sit-combo-box-option")[0] as SitComboBoxOption;
      const itemContent = item.shadowRoot?.querySelector("div.normal-item-content") as HTMLDivElement;
      itemContent?.click();

      await waitUntil(() => el.value === "option1");

      expect(el.value).to.equal("option1");
    });
  });

  TwoOptionsComboBox.forEach(({ render, mode }) => {
    it(`MODE=${mode}should not show any items in dropdown menu when there is no match (for default filter)`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: false }));

      el.value = "apples";
      await el.updateComplete;
      const items = el.shadowRoot?.querySelectorAll("sit-combox-box-option");
      expect(items?.length).to.equal(0);
    });
  });

  ThreeOptionsComboBox.forEach(({ render, mode }) => {
    it(`MODE=${mode},should filter the right items (for default filter)`, async () => {
      const el = await fixture<SitComboBox>(render({}));
      const input = el.shadowRoot?.querySelector("input");
      input?.focus();
      await sendKeys({ type: "a" });

      // should only have "apple", "apricot"
      await el.updateComplete;
      expect(input?.value).to.equal("a");
      const items = el.querySelectorAll("sit-combo-box-option:not([hidden])");
      await waitUntil(() => items?.length === 2);

      // should only have "apple"
      await sendKeys({ type: "pp" });
      await el.updateComplete;
      expect(input?.value).to.equal("app");
      await waitUntil(() => el.querySelectorAll("sit-combo-box-option:not([hidden])").length === 1);
      const item = el.querySelector("sit-combo-box-option");
      const itemVal = (item as SitComboBoxOption).innerText;
      expect(itemVal).to.equal("Apple");
    });
    it("when options are empty, returns empty menu", async () => {
      const el = await fixture<SitComboBox>(html`<sit-combo-box></sit-combo-box>`);
      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      await simulateUserClick(input);
      await waitUntil(() => el.menuIsOpen);
      expect(el.querySelectorAll("sit-combo-box-option").length).to.equal(0);
      expect(el.shadowRoot?.querySelector("div.empty-menu")?.textContent?.trim()).to.equal("No options");
    });
  });

  ThreeOptionsComboBox.forEach(({ render, mode }) => {
    it(`MODE=${mode}, should change filterFunction`, async () => {
      const el = await fixture<SitComboBox>(render({}));

      // filterFunction that accepts all menuItem regardless of inputValue
      el.filterFunction = () => true;

      const input = el.shadowRoot?.querySelector("input");
      input?.focus();
      await sendKeys({ type: "test" });
      await el.updateComplete;
      expect(input?.value).to.equal("test");
      const items = el.querySelectorAll("sit-combo-box-option:not([hidden])");
      expect(items?.length).to.equal(3);
    });
  });

  TwoOptionsComboBox.forEach(({ render, mode }) => {
    it(`MODE=${mode}, should display checkboxes for each item in multi-select mode`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true }));

      // Open dropdown
      const comboBoxInput = el.shadowRoot?.querySelector("input") as HTMLElement;
      expect(comboBoxInput, "input not found").to.exist;
      comboBoxInput.click();
      await el.updateComplete;

      // Expect 2 <sit-combo-box-option>
      const items = () => el.querySelectorAll("sit-combo-box-option:not([hidden])") || [];
      await waitUntil(() => items().length === 2);
      expect(items().length).to.equal(2);

      items().forEach(item => {
        // The item’s shadow root should contain <sit-checkbox>
        const checkboxEl = item.shadowRoot?.querySelector("sit-checkbox") as HTMLElement;
        expect(checkboxEl, "sit-checkbox found").to.exist;
      });
    });
    it(`MODE=${mode}, empty menu appears when no search options found`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: false }));
      const comboBoxInput = el.shadowRoot?.querySelector("input") as HTMLElement;
      comboBoxInput.focus();
      await sendKeys({ type: "abcd" });

      await el.updateComplete;
      expect(el.shadowRoot?.querySelector(".empty-menu")).to.exist;
    });
  });

  it("should display the badge with max-width of 192px with badgeFullWidth is not set", async () => {
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --sit-dimension-192: 192px;
      }
    `;
    document.head.appendChild(style);

    const parentNode = document.createElement("div");
    parentNode.style.width = "300px";

    const el = await fixture<SitComboBox>(
      html`
        <sit-combo-box
          multiSelect
          value="option1"
          .menuList=${[
            { label: "A very long badge name without limitation of parent width", value: "option1" },
            { label: "Option 2", value: "option2" }
          ]}
        ></sit-combo-box>
      `,
      { parentNode }
    );
    const parentContainer = () => el.shadowRoot?.querySelector(".combobox-input-container");

    await waitUntil(() => parentContainer());

    const parentWidth = getComputedStyle(parentContainer() as Element).width;

    const badge = el.shadowRoot?.querySelector("sit-badge") as SitBadge;
    const badgeEl = badge.shadowRoot?.querySelector(".badge") as HTMLElement;

    const styles = getComputedStyle(badgeEl);
    const badgeWidth = styles.width;

    // should not match width parent width
    expect(badgeWidth).to.equal("192px");
    expect(badgeWidth).not.to.equal(parentWidth);
  });

  it("should display the badge with max-width of parent with badgeFullWidth is set to true", async () => {
    const parentNode = document.createElement("div");
    parentNode.style.width = "300px";

    const el = await fixture<SitComboBox>(
      html`
        <sit-combo-box
          multiSelect
          badgeFullWidth
          value="option1"
          .menuList=${[
            { label: "A very long badge name without limitation of parent width", value: "option1" },
            { label: "Option 2", value: "option2" }
          ]}
        ></sit-combo-box>
      `,
      { parentNode }
    );

    await elementUpdated(el);
    const parentContainer = el.shadowRoot?.querySelector(".combobox-input-container");
    const badge = el.shadowRoot?.querySelector("sit-badge");
    await waitUntil(() => badge?.clientWidth === parentContainer?.clientWidth);
    // should match width parent width
    expect(badge?.clientWidth).to.equal(parentContainer?.clientWidth);
  });

  FiveOptionsCombobox.forEach(({ render, mode }) => {
    it(`MODE=${mode}, (multiselect) when menu list is updated, and the current value is no longer valid it should null the value`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true, value: "option1;option2" }));

      expect(el.value).to.equal("option1;option2");
      const newMenuList = [
        { label: "Durian", value: "option3" },
        { label: "Grapes", value: "option4" },
        { label: "Orange", value: "option5" }
      ];
      if (mode === "property") {
        el.setAttribute("menuList", JSON.stringify(newMenuList));
      } else {
        const newElements = newMenuList.map(list => {
          const newOption = document.createElement("sit-combo-box-option");
          newOption.textContent = list.label;
          newOption.setAttribute("value", "option3");
          return newOption;
        });
        el.replaceChildren(...newElements);
        el.requestUpdate();
      }

      await el.updateComplete;
      // testing that menu has changed
      const newMenu = () => el.querySelectorAll("sit-combo-box-option")[0];
      await waitUntil(() => newMenu()?.textContent.trim() === "Durian");
      expect(newMenu()?.textContent.trim()).to.equal("Durian");
      await waitUntil(() => el.value === "");
      expect(el.value).to.equal("");
      //displayValue should also be cleared
      expect(el.shadowRoot?.querySelector("input.form-control")?.textContent.trim()).to.equal("");
    });
    it("when value is updated, it should reflect the new value on the select", async () => {
      // Create component with initial value
      const el = await fixture<SitComboBox>(render({ multiSelect: true, value: "option1;option2" }));
      await el.updateComplete;

      // Get and verify input element
      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      expect(input, "Input element should exist").to.exist;
      expect(input instanceof HTMLInputElement, "Input should be HTMLInputElement").to.be.true;

      // Verify initial values
      const badges = () => el.shadowRoot?.querySelectorAll("sit-badge");
      await waitUntil(() => badges()?.length === 2);
      expect(badges()?.length).to.equal(2);
      expect(badges()?.[0].textContent?.trim()).to.equal("Apple");
      expect(badges()?.[1].textContent?.trim()).to.equal("Apricot");
      // Update value and wait for changes to propagate
      el.setAttribute("value", "option4;option5");
      await el.updateComplete;

      // Verify value change
      expect(el.value).to.equal("option4;option5");
      await waitUntil(
        () => badges()?.[0].textContent?.trim() === "Grapes" && badges()?.[1].textContent?.trim() === "Orange"
      );

      expect(badges()?.[0].textContent?.trim()).to.equal("Grapes");
      expect(badges()?.[1].textContent?.trim()).to.equal("Orange");
    });
  });

  it("No option dropdown item should present when no child is provided", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box
      label="Combobox using slot"
      hinttext="Select an option"
      placeholder="Select an option"
    ></sit-combo-box>`);

    const input = el.shadowRoot?.querySelector("input");
    input?.click();

    await el.updateComplete;
    expect(el.menuIsOpen).to.be.true;

    expect(el.shadowRoot?.querySelector(".empty-menu")).to.exist;
  });

  it("no option div should not persist when menu is closed", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box
      label="Combobox using slot"
      hinttext="Select an option"
      placeholder="Select an option"
      ><sit-combo-box-option value="one">One</sit-combo-box-option>
    </sit-combo-box>`);
    await waitUntil(() => !el.shadowRoot?.querySelector(".empty-menu"));
    expect(el.shadowRoot?.querySelector("div>.empty-menu")).to.not.exist;
    const input = el.shadowRoot?.querySelector<HTMLInputElement>("input.form-control");
    input?.focus();

    await el.updateComplete;
    await sendKeys({ type: "x" });
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector("div>.empty-menu")).to.exist;
    input?.blur();
    await el.updateComplete;
    input?.click();
    await waitUntil(() => !el.shadowRoot?.querySelector("div>.empty-menu"));
    expect(el.shadowRoot?.querySelector("div>.empty-menu")).to.not.exist;
  });
  it("loading menu overrides no options menu ", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box loading menuIsOpen> </sit-combo-box>`);
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector("slot#default");
    expect(slot?.classList.contains("d-none")).to.be.true;
    const dropdownMenu = el.shadowRoot?.querySelector(".dropdown-menu");
    expect(dropdownMenu?.textContent).to.contain("Loading...");
  });

  it("loading menu overrides options menu ", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box loading menuIsOpen>
      <sit-combo-box-option value="1">Option 1</sit-combo-box-option>
    </sit-combo-box>`);
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector("slot#default");
    expect(slot?.classList.contains("d-none")).to.be.true;
    const dropdownMenu = el.shadowRoot?.querySelector(".dropdown-menu");
    expect(dropdownMenu?.textContent).to.contain("Loading...");
  });

  it("emptyMenuAsync overrides options menu", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box emptyMenuAsync menuIsOpen>
      <sit-combo-box-option value="1">Option 1</sit-combo-box-option>
    </sit-combo-box>`);
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector("slot#default");
    expect(slot?.classList.contains("d-none")).to.be.true;
    const dropdownMenu = el.shadowRoot?.querySelector(".dropdown-menu");
    expect(dropdownMenu?.textContent).to.contain("No options");
  });
  it("when options length is 0, no options appear", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box menuIsOpen></sit-combo-box>`);
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector("slot#default");
    expect(slot?.classList.contains("d-none")).to.be.true;
    const dropdownMenu = el.shadowRoot?.querySelector(".dropdown-menu");
    expect(dropdownMenu?.textContent).to.contain("No options");
  });
  it("readonly prevents clear button from showing", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box readonly clearable value="1">
      <sit-combo-box-option value="1">Option 1</sit-combo-box-option>
    </sit-combo-box>`);
    await el.updateComplete;
    const input = el.shadowRoot?.querySelector("input");
    input?.focus();
    await el.updateComplete;
    const clearBtn = el.shadowRoot?.querySelector(".form-clearable");
    expect(clearBtn).to.be.null;
  });
});

describe("single select combobox", () => {
  ThreeOptionsComboBox.forEach(({ render, mode }) => {
    it(`MODE=${mode} when initial value is specified, input is populated, item is active`, async () => {
      const el = await fixture<SitComboBox>(render({ value: "option3" }));
      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      const durianItem = () => el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;
      await waitUntil(() => input.value === "Durian");
      expect(input.value).to.equal("Durian");
      expect(el.value).to.equal("option3");
      expect(durianItem().active).to.be.true;
    });

    it(`MODE=${mode} invalid displayValue entered should be cleared when blurred`, async () => {
      const el = await fixture<SitComboBox>(render({}));
      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      input.focus();

      await sendKeys({ type: "asdfs" });
      await el.updateComplete;
      expect(input.value).to.equal("asdfs"); // equivalent to displayValue
      expect(el.value).to.equal("");
      input.blur();
      await el.updateComplete;
      expect(input.value).to.equal("");
      expect(el.value).to.equal("");
    });

    it(`MODE=${mode}, When input is cleared, the active item is no longer active`, async () => {
      const el = await fixture<SitComboBox>(
        html`<sit-combo-box
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
          value="option3"
        ></sit-combo-box>`
      );
      const durianItem = el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;
      expect(durianItem.active).to.be.true;

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      input.focus();
      await sendKeys({ press: "Backspace" });
      await sendKeys({ press: "Backspace" });
      await sendKeys({ press: "Backspace" });
      await waitUntil(() => el.value === "");
      const updatedDurianItem = el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;
      expect(updatedDurianItem.active).to.be.false;
    });

    it(`MODE=${mode} When no purpose selection is made through clicking or keyboard, input clears when blur`, async () => {
      const el = await fixture<SitComboBox>(render({}));
      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      input.focus();
      await sendKeys({ type: "Durian" });

      await waitUntil(() => input.value === "Durian");
      input.blur();
      await waitUntil(() => input.value === "");
      expect(el.value).to.equal("");
      const durItem = el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;
      expect(durItem.active).to.be.false;
    });

    it(`MODE=${mode} When there is already a selectedItem, even when user types more rubbish, the value of input or displayValue will sync with the menu selected item regardless of the value`, async () => {
      const el = await fixture<SitComboBox>(render({ value: "option1" }));

      expect(el.value).to.equal("option1");

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      input.focus();
      await sendKeys({ type: "rubbish" });
      await waitUntil(() => el.shadowRoot?.querySelector("input")?.value === "Applerubbish");
      expect(el.value).to.equal("option1");

      input.blur();
      await waitUntil(() => el.shadowRoot?.querySelector("input")?.value === "Apple");
      expect(el.value).to.equal("option1");
    });

    it(`MODE=${mode} Keyboard arrowDown and enter populates the input and update value`, async () => {
      const el = await fixture<SitComboBox>(render({}));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      await simulateUserClick(input);

      await sendKeys({ press: "ArrowDown" });
      await sendKeys({ press: "Enter" });

      expect(el.value).to.equal("option1");
      expect(input.value).to.equal("Apple");
    });
    it(`MODE=${mode} Keyboard arrowDown and enter populates the input and update value, sit-change and sit-select will be called`, async () => {
      const el = await fixture<SitComboBox>(render({}));

      const spySelect = sinon.spy();
      el.addEventListener("sit-select", spySelect);

      const spyChange = sinon.spy();
      el.addEventListener("sit-change", spyChange);

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      await simulateUserClick(input);

      await sendKeys({ press: "ArrowDown" });
      await sendKeys({ press: "Enter" });
      await el.updateComplete;

      expect(spyChange).to.be.called;
      expect(spySelect).to.be.called;
    });

    it(`MODE=${mode} Menu filters while typing, but when reopen should show the full menu again`, async () => {
      const el = await fixture<SitComboBox>(render({}));

      const input = () => el.shadowRoot?.querySelector("input") as HTMLInputElement;
      input().focus();
      await sendKeys({ type: "D" });
      await waitUntil(() => el.querySelectorAll("sit-combo-box-option:not([hidden])").length === 1);
      expect(el.querySelectorAll("sit-combo-box-option:not([hidden])").length).to.equal(1);
      expect(el.querySelectorAll("sit-combo-box-option:not([hidden])")[0].textContent?.trim()).to.equal("Durian");

      const item = el
        ?.querySelectorAll("sit-combo-box-option:not([hidden])")[0]
        .shadowRoot?.querySelector(".normal-item-content") as HTMLElement;
      item.click();

      await el.updateComplete;

      expect(input().value).to.equal("Durian");

      input().click();

      await waitUntil(() => el.menuIsOpen);
      expect(el.querySelectorAll("sit-combo-box-option:not([hidden])").length).to.equal(3);
      expect(el.querySelector("sit-combo-box-option[value='option3']")).to.have.attribute("active");
    });

    it(`MODE=${mode}, when menu is close, focused is brought back to input`, async () => {
      const el = await fixture<SitComboBox>(render({}));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLElement;

      await simulateUserClick(input);
      await waitUntil(() => el.menuIsOpen === true, "menu did not open", { timeout: 2000 });
      expect(getComputedStyle(menuEl).display).to.equal("block");

      await sendKeys({ press: "ArrowDown" });

      await waitUntil(
        () => {
          const comboItem1 = el.querySelectorAll("sit-combo-box-option")[0];
          return document.activeElement === comboItem1;
        },
        "focus did not move into first combo item",
        { timeout: 2000 }
      );

      await sendKeys({ press: "Escape" });
      await waitUntil(() => getRootActiveElement(input) === input, "focus did not return to the input after Escape", {
        timeout: 2000
      });
      expect(getRootActiveElement(input)).to.equal(input);
    });
  });

  FiveOptionsCombobox.forEach(({ render, mode }) => {
    it(`MODE=${mode}, when menu list is updated, and the current value is no longer valid it should null the value`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: false, value: "option1" }));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      await waitUntil(() => input.value === "Apple");
      expect(input.value).to.equal("Apple");
      expect(el.value).to.equal("option1");

      const newMenuList = [
        { label: "Durian", value: "option3" },
        { label: "Grapes", value: "option4" },
        { label: "Orange", value: "option5" }
      ];
      if (mode === "property") {
        el.setAttribute("menuList", JSON.stringify(newMenuList));
      } else {
        const newElements = newMenuList.map(list => {
          const newOption = document.createElement("sit-combo-box-option");
          newOption.textContent = list.label;
          newOption.setAttribute("value", "option3");
          return newOption;
        });
        el.replaceChildren(...newElements);
        el.requestUpdate();
      }
      await el.updateComplete;
      await waitUntil(() => input.value === "", "this timeout");
      expect(input.value).to.equal("");
      expect(el.value).to.equal("");
    });
  });

  FiveOptionsCombobox.forEach(({ render, mode }) => {
    it(`MODE=${mode}, when value is updated, it should reflect the new value on the select`, async () => {
      const el = await fixture<SitComboBox>(render({ value: "option1", multiSelect: false }));

      await el.updateComplete;

      // Get and verify input element
      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      expect(input, "Input element should exist").to.exist;
      expect(input instanceof HTMLInputElement, "Input should be HTMLInputElement").to.be.true;

      // Verify initial values
      await waitUntil(() => input.value === "Apple");
      expect(input.value).to.equal("Apple");
      expect(el.value).to.equal("option1");

      // Update value and wait for changes to propagate
      el.setAttribute("value", "option4");
      await el.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 100)); // Wait for value change to process

      // Verify value change
      expect(el.value).to.equal("option4");

      // Wait for and verify input update
      await waitUntil(() => input.value === "Grapes", "Input value should update to Grapes", { timeout: 2000 });
      expect(input.value).to.equal("Grapes");
    });
    it(`MODE=${mode}, when value is updated to rubbish value, it should clear everything in the input`, async () => {
      const el = await fixture<SitComboBox>(render({ value: "option1", multiSelect: false }));

      await el.updateComplete;

      // Get and verify input element
      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      expect(input, "Input element should exist").to.exist;
      expect(input instanceof HTMLInputElement, "Input should be HTMLInputElement").to.be.true;

      // Verify initial values
      await waitUntil(() => input.value === "Apple");
      expect(input.value).to.equal("Apple");
      expect(el.value).to.equal("option1");

      // Update value and wait for changes to propagate
      el.setAttribute("value", "optionNULL");
      await el.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 100)); // Wait for value change to process

      // Verify value change
      expect(el.value).to.equal("");

      // Wait for and verify input update
      await waitUntil(() => input.value === "", "Input value should update to empty", { timeout: 2000 });
      expect(input.value).to.equal("");
    });
  });
});

describe("multi select combobox", () => {
  it("when combobox is disabled with a value, badges cannot be removed", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box disabled multiSelect value="option1">
      <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
      <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      <sit-combo-box-option value="option3">Durian</sit-combo-box-option>
    </sit-combo-box>`);
    const badges = () => el.shadowRoot?.querySelector("sit-badge") as SitBadge;
    await waitUntil(() => badges());
    expect(badges()).to.exist;
    const closeButton = badges().shadowRoot?.querySelector<SitCloseButton>("sit-close-button");
    expect(closeButton).not.to.exist;
  });
  it("when combobox is readonly with a value, badges cannot be removed", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box readonly multiSelect value="option1">
      <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
      <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      <sit-combo-box-option value="option3">Durian</sit-combo-box-option>
    </sit-combo-box>`);
    const badges = () => el.shadowRoot?.querySelector("sit-badge") as SitBadge;
    await waitUntil(() => badges());
    expect(badges()).to.exist;
    const closeButton = badges().shadowRoot?.querySelector<SitCloseButton>("sit-close-button");
    expect(closeButton).not.to.exist;
  });
  ThreeOptionsComboBox.forEach(({ render, mode }) => {
    it(`MODE=${mode}, when badge dismissed by keyboard, menu is synced`, async () => {
      const el = await fixture<SitComboBox>(render({ value: "option3", multiSelect: true }));
      const option3 = () => el.querySelector<SitComboBoxOption>("sit-combo-box-option[value='option3']");
      await option3()?.updateComplete;
      await waitUntil(() => option3());

      expect(option3()?.active).to.be.true;
      const input = () => el.shadowRoot?.querySelector("input");
      input()?.focus();

      await sendKeys({ press: "Backspace" });
      await waitUntil(() => expect(option3()).not.to.have.attribute("active"));
    });

    it(`MODE=${mode}, when badge dismissed by mouseclick, menu and badges are sync`, async () => {
      const el = await fixture<SitComboBox>(render({ value: "option1;option2;option3", multiSelect: true }));

      const badges = () => el.shadowRoot?.querySelectorAll("sit-badge") as NodeListOf<SitBadge>;
      await waitUntil(() => badges().length === 3);
      expect(badges().length).to.equal(3);
      const appleBadgeCloseButton = badges()[0].shadowRoot?.querySelector<SitCloseButton>("sit-close-button");
      appleBadgeCloseButton?.click();
      await waitUntil(() => el.value === "option2;option3");
      expect(badges()?.length).to.equal(2);
      expect(badges()[0].textContent).to.equal("Apricot");
      expect(badges()[1].textContent).to.equal("Durian");

      await el.updateComplete;
      await waitUntil(() =>
        expect(el.querySelector("sit-combo-box-option[value='option1']")).not.to.have.attribute("active")
      );
      await waitUntil(() =>
        expect(el.querySelector("sit-combo-box-option[value='option2']")).to.have.attribute("active")
      );
      await waitUntil(() =>
        expect(el.querySelector("sit-combo-box-option[value='option3']")).to.have.attribute("active")
      );
    });
    it(`MODE=${mode}, when initial value is specified, input is populated, item is active`, async () => {
      const el = await fixture<SitComboBox>(render({ value: "option3", multiSelect: true }));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      const badges = () => el.shadowRoot?.querySelectorAll("sit-badge") as NodeListOf<SitBadge>;
      const durianItem = () => el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;

      await durianItem().updateComplete;
      await waitUntil(() => durianItem());

      expect(durianItem().active).to.be.true;

      await waitUntil(() => badges().length === 1);
      expect(badges().length).to.equal(1);
      expect(badges()[0].innerText).to.equal("Durian");
      expect(input.value).to.equal("");
      expect(el.value).to.equal("option3");
    });

    it(`MODE=${mode}, when initial value (more than 1) is specified, input is populated, item is active`, async () => {
      const el = await fixture<SitComboBox>(render({ value: "option1;option3", multiSelect: true }));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      const badges = () => el.shadowRoot?.querySelectorAll("sit-badge");
      const durianItem = () => el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;
      const appleItem = () => el.querySelector("sit-combo-box-option[value='option1']") as SitComboBoxOption;
      const apricotItem = () => el.querySelector("sit-combo-box-option[value='option2']") as SitComboBoxOption;
      await waitUntil(() => durianItem());
      await waitUntil(() => appleItem());
      await waitUntil(() => apricotItem());
      expect(durianItem().active).to.be.true;
      expect(appleItem().active).to.be.true;
      expect(apricotItem().active).to.be.false;
      await waitUntil(() => badges()?.length === 2);
      expect(badges()?.[0].innerText).to.equal("Apple");
      expect(badges()?.[1].innerText).to.equal("Durian");
      expect(input.value).to.equal("");
      expect(el.value).to.equal("option1;option3");
    });
    it(`MODE=${mode}, invalid displayValue entered should be cleared when blurred`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true }));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      input.focus();

      await sendKeys({ type: "asdfs" });
      await el.updateComplete;
      expect(input.value).to.equal("asdfs"); // equivalent to displayValue
      expect(el.value).to.equal("");
      input.blur();
      await el.updateComplete;
      expect(input.value).to.equal("");
      expect(el.value).to.equal("");
    });

    it(`MODE=${mode}, When input is cleared, the active item is no longer active, badge is removed`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true, value: "option3" }));
      const durianItem = () => el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;
      await durianItem().updateComplete;
      await waitUntil(() => durianItem());
      expect(durianItem().active).to.be.true;

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      const badge = () => el.shadowRoot?.querySelector("sit-badge") as SitBadge;
      await waitUntil(() => badge());
      expect(badge().innerText).to.equal("Durian");
      input.focus();
      await sendKeys({ press: "Backspace" });
      await waitUntil(() => el.value === "");

      const updatedDurianItem = () => el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;
      await updatedDurianItem().updateComplete;
      expect(updatedDurianItem().active).to.be.false;
      await el.updateComplete;
      expect(badge()).not.to.exist;
    });

    it(`MODE=${mode},When no purposeful selection is made through clicking or keyboard, input clears when blur`, async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true }));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      input.focus();
      await sendKeys({ type: "Durian" });

      await waitUntil(() => input.value === "Durian");
      input.blur();
      await waitUntil(() => input.value === "");
      expect(el.value).to.equal("");
      const durItem = el.querySelector("sit-combo-box-option[value='option3']") as SitComboBoxOption;
      expect(durItem.active).to.be.false;
    });
    it("Keyboard arrowDown and enter populates the input with badge", async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true }));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      await simulateUserClick(input);

      await sendKeys({ press: "ArrowDown" });
      await sendKeys({ press: "Enter" });

      expect(el.value).to.equal("option1");
      const badge = el.shadowRoot?.querySelector("sit-badge") as SitBadge;
      expect(badge.innerText).to.equal("Apple");
    });

    it("Keyboard arrowDown and enter populates the input with badge, sit-change and sit-select will be called", async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true }));

      const spySelect = sinon.spy();
      el.addEventListener("sit-select", spySelect);

      const spyChange = sinon.spy();
      el.addEventListener("sit-change", spyChange);

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      await simulateUserClick(input);

      await sendKeys({ press: "ArrowDown" });
      await sendKeys({ press: "Enter" });

      expect(spyChange).to.be.called;
      expect(spySelect).to.be.called;
    });

    it("When badge is dismissed and value is set to empty, sit-change will be called", async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true, value: "option1" }));

      const spySelect = sinon.spy();
      el.addEventListener("sit-select", spySelect);

      const spyChange = sinon.spy();
      el.addEventListener("sit-change", spyChange);

      const badges = () => el.shadowRoot?.querySelectorAll("sit-badge") as NodeListOf<SitBadge>;
      await waitUntil(() => badges().length === 1);
      expect(badges().length).to.equal(1);

      const badgeCloseBtn = badges()[0].shadowRoot?.querySelector<SitCloseButton>("sit-close-button");
      badgeCloseBtn?.click();

      await waitUntil(() => spyChange.called);
      await waitUntil(() => spySelect.notCalled);

      expect(spyChange).to.be.called;
      expect(spySelect).not.to.be.called;
    });
    it("Menu filters while typing, but when reopen should show the full menu again", async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true }));

      const input = () => el.shadowRoot?.querySelector("input") as HTMLInputElement;
      input().focus();
      await sendKeys({ type: "D" });
      await waitUntil(() => el.querySelectorAll("sit-combo-box-option:not([hidden])").length === 1);
      expect(el.querySelectorAll("sit-combo-box-option:not([hidden])")[0].textContent?.trim()).to.equal("Durian");

      el.querySelectorAll("sit-combo-box-option:not([hidden])")[0].shadowRoot?.querySelector("sit-checkbox")?.click();

      await el.updateComplete;
      expect(el.shadowRoot?.querySelector("sit-badge")?.textContent?.trim()).to.equal("Durian");

      // to trigger closing of menu
      input().click();
      await waitUntil(() => !el.menuIsOpen);

      // to trigger opening of menu
      input().click();
      await waitUntil(() => el.menuIsOpen);

      expect(el.querySelectorAll("sit-combo-box-option:not([hidden])").length).to.equal(3);
      expect(el.querySelector("sit-combo-box-option[value='option3']")).to.have.attribute("active");
    });
    it("when menu is close, focused is brought back to input", async () => {
      const el = await fixture<SitComboBox>(render({ multiSelect: true }));

      const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
      const menuEl = el.shadowRoot?.querySelector(".dropdown-menu") as HTMLUListElement;

      await simulateUserClick(input);

      await waitUntil(() => el.menuIsOpen === true, "menu did not open", { timeout: 2000 });

      expect(getComputedStyle(menuEl).display).to.equal("block");

      await sendKeys({ press: "ArrowDown" });
      await waitUntil(
        () => {
          const comboItem1 = el.querySelectorAll("sit-combo-box-option")[0];
          return document.activeElement === comboItem1;
        },
        "focus did not move into first combo item",
        { timeout: 2000 }
      );

      await sendKeys({ press: "Escape" });
      await waitUntil(() => getRootActiveElement(input) === input, "focus did not return to the input after Escape", {
        timeout: 2000
      });
      expect(getRootActiveElement(input)).to.equal(input);
    });
  });
  it("when there is value, and on focus, it should show clearable button when enabled and can clear value", async () => {
    const closeButtonClass = "sit-icon[name='xcircle-fill']";
    const el = await fixture<SitComboBox>(html` <sit-combo-box value="1;2" clearable multiSelect>
      <sit-combo-box-option value="1">Afghanistan</sit-combo-box-option>
      <sit-combo-box-option value="2">Zimbabwe</sit-combo-box-option>
      <sit-combo-box-option value="3">Zoo</sit-combo-box-option>
      <sit-combo-box-option value="4">Zzzbabwe</sit-combo-box-option>
    </sit-combo-box>`);

    await el.updateComplete;

    expect(el.value).to.equal("1;2");
    expect(el.shadowRoot?.querySelector(closeButtonClass)).to.be.null;

    const input = el.shadowRoot?.querySelector("input");
    input?.focus();

    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(closeButtonClass)).not.to.be.null;

    const closeButton = el.shadowRoot?.querySelector(closeButtonClass) as HTMLElement;
    expect(closeButton).not.to.be.null;

    closeButton && simulateUserClick(closeButton);
    await el.updateComplete;
    expect(el.value).to.equal("");
  });
  it("when there is value, and on focus, it should not show clearable button when disabled", async () => {
    const closeButtonClass = "sit-icon[name='xcircle-fill']";
    const el = await fixture<SitComboBox>(html` <sit-combo-box value="1;2" multiSelect>
      <sit-combo-box-option value="1">Afghanistan</sit-combo-box-option>
      <sit-combo-box-option value="2">Zimbabwe</sit-combo-box-option>
      <sit-combo-box-option value="3">Zoo</sit-combo-box-option>
      <sit-combo-box-option value="4">Zzzbabwe</sit-combo-box-option>
    </sit-combo-box>`);

    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(closeButtonClass)).to.be.null;

    const input = el.shadowRoot?.querySelector("input");
    input?.focus();

    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(closeButtonClass)).to.be.null;
  });
});

describe("single select >> when submitting a form", () => {
  it("when required=true should block submission of form when there is no value", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box
          required
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
        <sit-button type="submit"></sit-button>
      </form>`
    );
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    expect(form.reportValidity()).to.equal(false);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    expect(submitHandler).not.to.have.been.calledOnce;
  });

  it("when required=true and value is true , form can be submitted", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box
          required
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
          value="option3"
        ></sit-combo-box>
        <sit-button type="submit"></sit-button>
      </form>`
    );
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    await waitUntil(() => form.reportValidity());
    expect(form.reportValidity()).to.equal(true);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("when disabled, form is always able to submit even if there is no value", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box
          required
          disabled
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
        <sit-button type="submit"></sit-button>
      </form>`
    );
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    expect(form.reportValidity()).to.equal(true);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("when reset, values are reset to defaultValue", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box
          required
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
          value="option3"
        ></sit-combo-box>
        <sit-button type="submit"></sit-button>
        <sit-button type="reset"></sit-button>
      </form>`
    );
    const input = () => form.querySelector("sit-combo-box")?.shadowRoot?.querySelector("input");
    const comboBox = () => form.querySelector("sit-combo-box");
    expect(input()?.value).to.equal("Dur");
    // Clear input
    input()?.focus();
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await waitUntil(() => input()?.value === "");

    const submitButton = form.querySelector<SitButton>("sit-button[type='submit']");
    submitButton?.click();
    //submitting empty combobox value triggers invalid
    await waitUntil(() => comboBox()?.invalid);
    expect(comboBox()?.invalid).to.be.true;

    const resetButton = form.querySelector<SitButton>("sit-button[type='reset']");
    resetButton?.click();
    // resets value to the defaultValue and removes the invalid state
    await waitUntil(() => !comboBox()?.invalid);
    expect(comboBox()?.invalid).to.be.false;
    expect(input()?.value).to.equal("Dur");
  });

  it("when value exist in required field, pressing submit should not show error", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box required value="option1">
          <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
          <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
          <sit-combo-box-option value="option3">Dur</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="submit">Submit</sit-button>
      </form>`
    );
    const combobox = form.querySelector<SitComboBox>("sit-combo-box");
    const button = form.querySelector<SitButton>("sit-button");
    form?.addEventListener("submit", e => e.preventDefault());
    expect(combobox?.value).to.equal("option1");
    expect(combobox?.invalid).to.be.false;
    button?.click();
    await combobox?.updateComplete;
    expect(combobox?.invalid).to.be.false;
  });

  it("when value is truthy, and reset button is clicked, input is reset and is valid", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box required menuIsOpen>
          <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
          <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
          <sit-combo-box-option value="option3">Dur</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="reset">Reset</sit-button>
      </form>`
    );

    const button = form.querySelector<SitButton>("sit-button");
    const combobox = form.querySelector<SitComboBox>("sit-combo-box");
    const appleItem = form
      .querySelector<SitComboBoxOption>("sit-combo-box-option[value='option1']")
      ?.shadowRoot?.querySelector("div.normal-item-content") as HTMLElement;
    appleItem?.click();
    await combobox?.updateComplete;
    await waitUntil(() => combobox?.value === "option1");
    expect(combobox?.value).to.equal("option1");
    button?.click();

    await waitUntil(() => !combobox?.value);
    expect(combobox?.invalid).to.be.false;
  });

  it("when touched and blurred and value is empty, error is shown", async () => {
    const el = await fixture<SitComboBox>(
      html`
        <sit-combo-box
          hasFeedback
          required
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
      `
    );
    const input = el.shadowRoot?.querySelector("input");
    input?.focus();
    el.blur();
    await el.updateComplete;
    await waitUntil(() => el.shadowRoot?.querySelector("input:invalid"));
  });

  it("when invalid, typing in the input sets invalid to false", async () => {
    const el = await fixture<SitComboBox>(
      html`
        <sit-combo-box
          hasFeedback
          required
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
      `
    );
    const input = el.shadowRoot?.querySelector("input");
    input?.focus();
    el.blur();

    await el.updateComplete;
    await waitUntil(() => el.shadowRoot?.querySelector("input:invalid"));
    input?.focus();
    await sendKeys({ type: "Abcd" });
    await waitUntil(() => el.shadowRoot?.querySelector("input")?.value === "Abcd");
    expect(el.invalid).to.be.false;
  });

  it("when traversing menu, no error should be shown", async () => {
    const el = await fixture<SitComboBox>(
      html`
        <sit-combo-box
          hasFeedback
          required
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
      `
    );
    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
    await simulateUserClick(input);

    await sendKeys({ press: "ArrowDown" });
    await waitUntil(
      () => {
        const comboItem1 = el.querySelectorAll("sit-combo-box-option")[0];
        return document.activeElement === comboItem1;
      },
      "focus did not move into first combo item",
      { timeout: 2000 }
    );

    expect(el.invalid).to.be.false;
  });

  it("when clicking menu item, only one option turns active at a time", async () => {
    const el = await fixture<SitComboBox>(html` <sit-combo-box>
      <sit-combo-box-option value="1">Afghanistan</sit-combo-box-option>
      <sit-combo-box-option value="2">Zimbabwe</sit-combo-box-option>
      <sit-combo-box-option value="3">Zoo</sit-combo-box-option>
      <sit-combo-box-option value="4">Zzzbabwe</sit-combo-box-option>
    </sit-combo-box>`);

    const comboBoxOptionOne = el.querySelector<SitComboBoxOption>("sit-combo-box-option[value='1']");
    const clickDiv1 = comboBoxOptionOne?.shadowRoot?.querySelector("div.normal-item-content") as HTMLDivElement;
    clickDiv1?.click();
    await waitUntil(() => comboBoxOptionOne?.active);

    const comboBoxOptionTwo = el.querySelector<SitComboBoxOption>("sit-combo-box-option[value='2']");
    const clickDiv2 = comboBoxOptionTwo?.shadowRoot?.querySelector("div.normal-item-content") as HTMLDivElement;
    clickDiv2?.click();
    await waitUntil(() => comboBoxOptionTwo?.active);
    expect(comboBoxOptionOne?.active).to.be.false;
  });

  it("when there is value, and on focus, it should show clearable button when enabled and can clear value", async () => {
    const closeButtonClass = "sit-icon[name='xcircle-fill']";
    const el = await fixture<SitComboBox>(html` <sit-combo-box value="1" clearable>
      <sit-combo-box-option value="1">Afghanistan</sit-combo-box-option>
      <sit-combo-box-option value="2">Zimbabwe</sit-combo-box-option>
      <sit-combo-box-option value="3">Zoo</sit-combo-box-option>
      <sit-combo-box-option value="4">Zzzbabwe</sit-combo-box-option>
    </sit-combo-box>`);

    await el.updateComplete;

    expect(el.value).to.equal("1");
    expect(el.shadowRoot?.querySelector(closeButtonClass)).to.be.null;

    const input = el.shadowRoot?.querySelector("input");
    input?.focus();

    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(closeButtonClass)).not.to.be.null;

    const closeButton = el.shadowRoot?.querySelector(closeButtonClass) as HTMLElement;
    expect(closeButton).not.to.be.null;

    closeButton && simulateUserClick(closeButton);
    await el.updateComplete;
    expect(el.value).to.equal("");
  });

  it("when there is value, and on focus, it should not show clearable button when disabled", async () => {
    const closeButtonClass = "sit-icon[name='xcircle-fill']";
    const el = await fixture<SitComboBox>(html` <sit-combo-box value="1">
      <sit-combo-box-option value="1">Afghanistan</sit-combo-box-option>
      <sit-combo-box-option value="2">Zimbabwe</sit-combo-box-option>
      <sit-combo-box-option value="3">Zoo</sit-combo-box-option>
      <sit-combo-box-option value="4">Zzzbabwe</sit-combo-box-option>
    </sit-combo-box>`);

    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(closeButtonClass)).to.be.null;

    const input = el.shadowRoot?.querySelector("input");
    input?.focus();

    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(closeButtonClass)).to.be.null;
  });
});

describe("multi select >> when submitting a form", () => {
  it("when required=true should block submission of form when there is no value", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box
          required
          multiSelect
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
        <sit-button type="submit"></sit-button>
      </form>`
    );
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    expect(form.reportValidity()).to.equal(false);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    expect(submitHandler).not.to.have.been.calledOnce;
  });

  it("when required=true and value is true , form can be submitted", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box
          required
          multiSelect
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
          value="option3"
        ></sit-combo-box>
        <sit-button type="submit"></sit-button>
      </form>`
    );
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    expect(form.reportValidity()).to.equal(true);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("when disabled, form is always able to submit even if there is no value", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box
          required
          disabled
          multiSelect
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
        <sit-button type="submit"></sit-button>
      </form>`
    );
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    expect(form.reportValidity()).to.equal(true);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("when reset, values are reset to defaultValue", async () => {
    const form = await fixture<HTMLFormElement>(
      html`<form>
        <sit-combo-box
          required
          multiSelect
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
          value="option3"
        ></sit-combo-box>
        <sit-button type="submit"></sit-button>
        <sit-button type="reset"></sit-button>
      </form>`
    );
    const input = () => form.querySelector("sit-combo-box")?.shadowRoot?.querySelector("input");
    const comboBox = () => form.querySelector("sit-combo-box");
    const badge = () => comboBox()?.shadowRoot?.querySelector("sit-badge");

    expect(badge()?.textContent).to.equal("Dur");
    // Clear input
    input()?.focus();
    await sendKeys({ press: "Backspace" });
    await waitUntil(() => !badge());

    const submitButton = form.querySelector<SitButton>("sit-button[type='submit']");
    submitButton?.click();
    //submitting empty combobox value triggers invalid
    await waitUntil(() => comboBox()?.invalid);
    expect(comboBox()?.invalid).to.be.true;

    const resetButton = form.querySelector<SitButton>("sit-button[type='reset']");
    resetButton?.click();
    // resets value to the defaultValue and removes the invalid state
    await waitUntil(() => !comboBox()?.invalid);
    expect(comboBox()?.invalid).to.be.false;
    expect(badge()?.textContent).to.equal("Dur");
  });

  it("when touched and blurred and value is empty, error is shown", async () => {
    const el = await fixture<SitComboBox>(
      html`
        <sit-combo-box
          hasFeedback
          multiSelect
          required
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
      `
    );
    const input = el.shadowRoot?.querySelector("input");
    input?.focus();
    el.blur();
    await el.updateComplete;
    await waitUntil(() => el.shadowRoot?.querySelector("input:invalid"));
  });

  it("when invalid, typing in the input sets invalid to false", async () => {
    const el = await fixture<SitComboBox>(
      html`
        <sit-combo-box
          hasFeedback
          required
          multiSelect
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
      `
    );
    const input = el.shadowRoot?.querySelector("input");
    input?.focus();
    el.blur();

    await el.updateComplete;
    await waitUntil(() => el.shadowRoot?.querySelector("input:invalid"));
    input?.focus();
    await sendKeys({ type: "Abcd" });
    await waitUntil(() => el.shadowRoot?.querySelector("input")?.value === "Abcd");
    expect(el.invalid).to.be.false;
  });

  it("when traversing menu, no error should be shown", async () => {
    const el = await fixture<SitComboBox>(
      html`
        <sit-combo-box
          hasFeedback
          multiSelect
          required
          .menuList=${[
            { label: "Apple", value: "option1" },
            { label: "Apricot", value: "option2" },
            { label: "Dur", value: "option3" }
          ]}
        ></sit-combo-box>
      `
    );
    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
    await simulateUserClick(input);

    await sendKeys({ press: "ArrowDown" });
    await waitUntil(
      () => {
        const comboItem1 = el.querySelectorAll("sit-combo-box-option")[0];
        return document.activeElement === comboItem1;
      },
      "focus did not move into first combo item",
      { timeout: 2000 }
    );

    expect(el.invalid).to.be.false;
  });
  it("for clearable combobox, when there is value, and on form reset, it should not restore values of combobox with no error", async () => {
    const closeButtonClass = "sit-icon[name='xcircle-fill']";
    const el = await fixture<HTMLFormElement>(html`
      <form>
        <sit-combo-box value="1;2" multiSelect clearable required hasFeedback>
          <sit-combo-box-option value="1">Afghanistan</sit-combo-box-option>
          <sit-combo-box-option value="2">Zimbabwe</sit-combo-box-option>
          <sit-combo-box-option value="3">Zoo</sit-combo-box-option>
          <sit-combo-box-option value="4">Zzzbabwe</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const combobox = el.querySelector<SitComboBox>("sit-combo-box");
    const comboboxInput = combobox?.shadowRoot?.querySelector<HTMLInputElement>("input.form-control");
    comboboxInput?.focus();

    await combobox?.updateComplete;
    const clearable = combobox?.shadowRoot?.querySelector<SitIcon>(closeButtonClass);

    expect(clearable).to.exist;

    clearable?.click();
    await combobox?.updateComplete;
    expect(combobox?.value).to.equal("");

    const resetButton = el.querySelector<SitButton>("sit-button[type='reset']");
    resetButton?.click();

    await combobox?.updateComplete;

    expect(combobox?.value).to.equal("1;2");
    await waitUntil(() => !combobox?.invalid);
    expect(combobox?.invalid).to.equal(false);
  });
});

// UT scenarios
// Single Select
// 1. when initial value is specified, input is populated, item is active (DONE)
// 2. When invalid displayValue is written, it should clear the input after losing focus (DONE)
// 3. When input value matches an item, item menu is shown and focused . On enter populates the input (??? clarify with andy)
// 4. When input is cleared, the active item is no longer active (DONE)
// 5. When a selection is made and input is blurred. The value of input or displayValue will sync with the menu selected item regardless of the value (DONE)
// 6. If a purposeful selection is not made through enter or click, input is blurred. the displayValue clears regardless if value match anot (DONE)
// 7. Keyboard ArrowDown and Enter populates the input with value (DONE)
// 8. Menu filters while typing, but when reopen should show the full menu again
//9. When menu is close, focus is brought back to input
// Required VALIDATION
// 8. When first submitted untouched, throw error (DONE)
// 9. When touched and blurred, throw error (DONE)
// 10. When typing, error should be gone (DONE)
// 11. when traversing menu, no error to show (DONE)
// 12. When reset, no error , values revert to defaultValue (DONE)

// UT scenarios
// Multi Select
// 1. when initial value is specified, input is populated, item is checked and active, badge is in input (DONE)
// 2. When invalid displayValue is written, it should clear the input after losing focus (DONE)
// 3. When input value matches an item, item menu is shown and focused . On enter populates the input (??? clarify with andy)
// 4. If a purposeful selection is not made through enter or click, input is blurred. the displayValue clears regardless if value match anot (DONE)
// 5. When a badge is cancelled, it syncs with the removal actie item in the menu (DONE)
// 6. Keyboard arrowdown and enter populates the input with badge (DONE)
// 8. Menu filters while typing, but when reopen should show the full menu again

describe("sit-combo-box-option (default)", () => {
  it("matches shadowDom semantically", async () => {
    const el = await fixture<SitComboBoxOption>(html`<sit-combo-box-option></sit-combo-box-option>`);
    assert.shadowDom.equal(
      el,
      `
       <div class="dropdown-item" tabindex="0">
       <div class="normal-item-content" role="presentation">
                  <slot></slot>
                </div>
      </div>
      `
    );
  });
  it("when active is true, tick sit-icon appears", async () => {
    const el = await fixture<SitComboBoxOption>(html`<sit-combo-box-option active></sit-combo-box-option>`);
    assert.shadowDom.equal(
      el,
      `
          <div class="dropdown-item active" tabindex="0">
          <div class="normal-item-content" role="presentation">
            <slot></slot>
            <sit-icon name="check" size="lg"></sit-icon>
          </div>
          </div>
      `
    );
  });
  it("when disabled is true, matches the shadow Dom semantically", async () => {
    const el = await fixture<SitComboBoxOption>(html`<sit-combo-box-option disabled></sit-combo-box-option>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="dropdown-item disabled" tabindex="-1">
          <div class="normal-item-content" role="presentation">
            <slot></slot>
          </div>
        </div>
      `
    );
  });
});

describe("sit-combo-box-option (checkbox)", () => {
  it("matches shadowDom semantically ", async () => {
    const el = await fixture<SitComboBoxOption>(html`<sit-combo-box-option checkbox></sit-combo-box-option>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="dropdown-item" tabindex="0">
          <sit-checkbox>
            <slot></slot>
          </sit-checkbox>
        </div>
      `,
      { ignoreAttributes: ["hinttext", "invalidfeedback", "label"] }
    );
  });
  it("when checkbox and active is true, checkbox is checked", async () => {
    const el = await fixture<SitComboBoxOption>(html`<sit-combo-box-option checkbox active></sit-combo-box-option>`);
    const checkbox = el.shadowRoot?.querySelector<SitCheckbox>("sit-checkbox");
    expect(checkbox?.checked).to.be.true;
  });
});

describe("async combobox", () => {
  it("when emptyMenuAsync is true, returns empty menu. It takes precedence even when options are available", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box emptyMenuAsync async>
      <sit-combo-box-option value="1">Afghanistan</sit-combo-box-option>
    </sit-combo-box>`);
    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
    await simulateUserClick(input);
    await waitUntil(() => el.menuIsOpen);
    expect(el.querySelectorAll("sit-combo-box-option").length).to.equal(1);
    expect(el.shadowRoot?.querySelector("div.empty-menu")?.textContent?.trim()).to.equal("No options");
  });
  it("when options are empty, returns empty menu", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box async></sit-combo-box>`);
    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
    await simulateUserClick(input);
    await waitUntil(() => el.menuIsOpen);
    expect(el.querySelectorAll("sit-combo-box-option").length).to.equal(0);
    expect(el.shadowRoot?.querySelector("div.empty-menu")?.textContent?.trim()).to.equal("No options");
  });
  it("filterFunction returns true", async () => {
    const el = await fixture<SitComboBox>(html`<sit-combo-box async></sit-combo-box>`);
    await el.updateComplete;
    expect(el.filterFunction("", { label: "", value: "" })).to.be.true;
  });
});

describe("noValidate disables native and sit validation behaviours", () => {
  it("should override required and allow form submission when noValidate is set", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-combo-box noValidate required>
          <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
          <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);

    const button = form.querySelector<SitButton>("sit-button");
    button?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("with noValidate, invalid state does not appear on blur when required and empty", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box noValidate hasFeedback required>
        <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
        <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      </sit-combo-box>
    `);
    const input = el.shadowRoot?.querySelector("input");
    input?.focus();
    el.blur();
    await el.updateComplete;
    expect(el.invalid).to.be.false;
  });

  it("with noValidate, setInvalid(true) still works for programmatic control", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box noValidate required>
        <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
        <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      </sit-combo-box>
    `);
    el.setInvalid(true);
    await el.updateComplete;
    expect(el.invalid).to.be.true;

    el.setInvalid(false);
    await el.updateComplete;
    expect(el.invalid).to.be.false;
  });

  it("with noValidate, programmatic setInvalid(true) persists after blur", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box noValidate required>
        <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
        <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      </sit-combo-box>
    `);
    el.setInvalid(true);
    await el.updateComplete;

    const input = el.shadowRoot?.querySelector("input");
    input?.focus();
    el.blur();
    await el.updateComplete;
    expect(el.invalid).to.be.true;
  });

  it("should still populate FormData when noValidate is enabled", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-combo-box noValidate name="combo-field" value="option1">
          <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
          <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(form);
      expect(formData.get("combo-field")).to.equal("option1");
    });

    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });
});

describe("reset clears invalid state when noValidate is true", () => {
  it("reset clears programmatic invalid state when component has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-combo-box noValidate name="test">
          <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const comboBox = form.querySelector<SitComboBox>("sit-combo-box");
    comboBox?.setInvalid(true);
    await comboBox?.updateComplete;
    expect(comboBox?.invalid).to.be.true;

    form.querySelector<SitButton>("sit-button")?.click();
    await waitUntil(() => comboBox?.invalid === false);
    expect(comboBox?.invalid).to.be.false;
  });

  it("reset clears programmatic invalid state when form has novalidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-combo-box name="test">
          <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const comboBox = form.querySelector<SitComboBox>("sit-combo-box");
    comboBox?.setInvalid(true);
    await comboBox?.updateComplete;
    expect(comboBox?.invalid).to.be.true;

    form.querySelector<SitButton>("sit-button")?.click();
    await waitUntil(() => comboBox?.invalid === false);
    expect(comboBox?.invalid).to.be.false;
  });
});

describe("form novalidate for combo-box", () => {
  it("when form has novalidate, form submission proceeds even when combo-box is required", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-combo-box required>
          <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
          <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    expect(form.reportValidity()).to.equal(true);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("when form has novalidate, combo-box does not show invalid state on blur", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-combo-box required hasFeedback>
          <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
          <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const comboBox = form.querySelector<SitComboBox>("sit-combo-box");
    const input = comboBox?.shadowRoot?.querySelector("input");
    input?.focus();
    comboBox?.blur();
    await comboBox?.updateComplete;
    expect(comboBox?.invalid).to.be.false;
  });
});

describe("setInvalid emits sit-invalid and sit-valid events", () => {
  it("setInvalid(true) emits sit-invalid event", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box noValidate>
        <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
        <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      </sit-combo-box>
    `);
    const handler = sinon.spy();
    el.addEventListener("sit-invalid", handler);

    el.setInvalid(true);
    await el.updateComplete;
    expect(handler).to.have.been.calledOnce;
  });

  it("setInvalid(false) emits sit-valid event", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box noValidate>
        <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
        <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      </sit-combo-box>
    `);
    const handler = sinon.spy();
    el.addEventListener("sit-valid", handler);

    el.setInvalid(false);
    await el.updateComplete;
    expect(handler).to.have.been.calledOnce;
  });

  it("setInvalid(true) followed by setInvalid(false) emits both events in order", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box noValidate>
        <sit-combo-box-option value="option1">Apple</sit-combo-box-option>
        <sit-combo-box-option value="option2">Apricot</sit-combo-box-option>
      </sit-combo-box>
    `);
    const invalidHandler = sinon.spy();
    const validHandler = sinon.spy();
    el.addEventListener("sit-invalid", invalidHandler);
    el.addEventListener("sit-valid", validHandler);

    el.setInvalid(true);
    await el.updateComplete;
    expect(invalidHandler).to.have.been.calledOnce;
    expect(validHandler).not.to.have.been.called;

    el.setInvalid(false);
    await el.updateComplete;
    expect(validHandler).to.have.been.calledOnce;
  });
});

describe("sit-scroll-end event", () => {
  const manyOptionsFixture = () => html`
    <sit-combo-box menuIsOpen style="--sit-combo-box-menu-max-height:100px">
      <sit-combo-box-option value="a">Afghanistan</sit-combo-box-option>
      <sit-combo-box-option value="b">Albania</sit-combo-box-option>
      <sit-combo-box-option value="c">Algeria</sit-combo-box-option>
      <sit-combo-box-option value="d">Andorra</sit-combo-box-option>
      <sit-combo-box-option value="e">Angola</sit-combo-box-option>
      <sit-combo-box-option value="f">Argentina</sit-combo-box-option>
      <sit-combo-box-option value="g">Armenia</sit-combo-box-option>
      <sit-combo-box-option value="h">Australia</sit-combo-box-option>
      <sit-combo-box-option value="i">Austria</sit-combo-box-option>
      <sit-combo-box-option value="j">Azerbaijan</sit-combo-box-option>
    </sit-combo-box>
  `;

  it("emits sit-scroll-end when scrolled to the bottom", async () => {
    const el = await fixture<SitComboBox>(manyOptionsFixture());
    await el.updateComplete;

    const menu = el.shadowRoot?.querySelector("[role='listbox']") as HTMLElement;
    const handler = sinon.spy();
    el.addEventListener("sit-scroll-end", handler);

    menu.scrollTop = menu.scrollHeight - menu.clientHeight;
    menu.dispatchEvent(new Event("scroll"));
    await el.updateComplete;

    expect(handler).to.have.been.calledOnce;
  });

  it("does not emit sit-scroll-end again while still at the bottom", async () => {
    const el = await fixture<SitComboBox>(manyOptionsFixture());
    await el.updateComplete;

    const menu = el.shadowRoot?.querySelector("[role='listbox']") as HTMLElement;
    const handler = sinon.spy();
    el.addEventListener("sit-scroll-end", handler);

    menu.scrollTop = menu.scrollHeight - menu.clientHeight;
    menu.dispatchEvent(new Event("scroll"));
    await el.updateComplete;
    menu.dispatchEvent(new Event("scroll"));
    await el.updateComplete;

    expect(handler).to.have.been.calledOnce;
  });

  it("emits sit-scroll-end again after scrolling back up then back to the bottom", async () => {
    const el = await fixture<SitComboBox>(manyOptionsFixture());
    await el.updateComplete;

    const menu = el.shadowRoot?.querySelector("[role='listbox']") as HTMLElement;
    const handler = sinon.spy();
    el.addEventListener("sit-scroll-end", handler);

    menu.scrollTop = menu.scrollHeight - menu.clientHeight;
    menu.dispatchEvent(new Event("scroll"));
    await el.updateComplete;

    menu.scrollTop = 0;
    menu.dispatchEvent(new Event("scroll"));
    await el.updateComplete;

    menu.scrollTop = menu.scrollHeight - menu.clientHeight;
    menu.dispatchEvent(new Event("scroll"));
    await el.updateComplete;

    expect(handler).to.have.been.calledTwice;
  });

  it("fires sit-scroll-end early when scrollBottomOffset is set", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box menuIsOpen scrollBottomOffset="50" style="--sit-combo-box-menu-max-height:100px">
        <sit-combo-box-option value="a">Afghanistan</sit-combo-box-option>
        <sit-combo-box-option value="b">Albania</sit-combo-box-option>
        <sit-combo-box-option value="c">Algeria</sit-combo-box-option>
        <sit-combo-box-option value="d">Andorra</sit-combo-box-option>
        <sit-combo-box-option value="e">Angola</sit-combo-box-option>
        <sit-combo-box-option value="f">Argentina</sit-combo-box-option>
        <sit-combo-box-option value="g">Armenia</sit-combo-box-option>
        <sit-combo-box-option value="h">Australia</sit-combo-box-option>
        <sit-combo-box-option value="i">Austria</sit-combo-box-option>
        <sit-combo-box-option value="j">Azerbaijan</sit-combo-box-option>
      </sit-combo-box>
    `);
    await el.updateComplete;

    const menu = el.shadowRoot?.querySelector("[role='listbox']") as HTMLElement;
    const handler = sinon.spy();
    el.addEventListener("sit-scroll-end", handler);

    const endOfScroll = menu.scrollHeight - menu.clientHeight;
    menu.scrollTop = endOfScroll - 50;
    menu.dispatchEvent(new Event("scroll"));
    await el.updateComplete;

    expect(handler).to.have.been.calledOnce;
  });

  it("treats negative scrollBottomOffset as 0", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box menuIsOpen scrollBottomOffset="-100">
        <sit-combo-box-option value="a">Afghanistan</sit-combo-box-option>
        <sit-combo-box-option value="b">Albania</sit-combo-box-option>
        <sit-combo-box-option value="c">Algeria</sit-combo-box-option>
        <sit-combo-box-option value="d">Andorra</sit-combo-box-option>
        <sit-combo-box-option value="e">Angola</sit-combo-box-option>
        <sit-combo-box-option value="f">Argentina</sit-combo-box-option>
        <sit-combo-box-option value="g">Armenia</sit-combo-box-option>
        <sit-combo-box-option value="h">Australia</sit-combo-box-option>
        <sit-combo-box-option value="i">Austria</sit-combo-box-option>
        <sit-combo-box-option value="j">Azerbaijan</sit-combo-box-option>
      </sit-combo-box>
    `);
    await el.updateComplete;

    const menu = el.shadowRoot?.querySelector("[role='listbox']") as HTMLElement;
    const handler = sinon.spy();
    el.addEventListener("sit-scroll-end", handler);

    // Scroll to the exact bottom — should fire because offset is clamped to 0
    const endOfScroll = menu.scrollHeight - menu.clientHeight;
    menu.scrollTop = endOfScroll;
    menu.dispatchEvent(new Event("scroll"));
    await el.updateComplete;

    expect(handler).to.have.been.calledOnce;
  });
});

describe("reset does not emit sit-change for combo-box", () => {
  it("should not emit sit-change when form is reset (single select)", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-combo-box value="1">
          <sit-combo-box-option value="1">One</sit-combo-box-option>
          <sit-combo-box-option value="2">Two</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const combobox = form.querySelector<SitComboBox>("sit-combo-box")!;
    await combobox.updateComplete;

    // Select a different option to change value
    const option2 = combobox.querySelector<SitComboBoxOption>('sit-combo-box-option[value="2"]')!;
    option2.click();
    await combobox.updateComplete;
    expect(combobox.value).to.equal("2");

    const changeHandler = sinon.spy();
    combobox.addEventListener("sit-change", changeHandler);

    // Reset the form
    const resetButton = form.querySelector<SitButton>("sit-button[type='reset']")!;
    resetButton.click();
    await combobox.updateComplete;
    await waitUntil(() => combobox.value === "1");

    expect(changeHandler).to.not.have.been.called;
  });

  it("should not emit sit-change when form is reset (multi select)", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-combo-box value="1" multiSelect>
          <sit-combo-box-option value="1">One</sit-combo-box-option>
          <sit-combo-box-option value="2">Two</sit-combo-box-option>
          <sit-combo-box-option value="3">Three</sit-combo-box-option>
        </sit-combo-box>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const combobox = form.querySelector<SitComboBox>("sit-combo-box")!;
    await combobox.updateComplete;

    // Select an additional option to change value
    const option2 = combobox.querySelector<SitComboBoxOption>('sit-combo-box-option[value="2"]')!;
    option2.click();
    await combobox.updateComplete;
    expect(combobox.value).to.equal("1;2");

    const changeHandler = sinon.spy();
    combobox.addEventListener("sit-change", changeHandler);

    // Reset the form
    const resetButton = form.querySelector<SitButton>("sit-button[type='reset']")!;
    resetButton.click();
    await combobox.updateComplete;
    await waitUntil(() => combobox.value === "1");

    expect(changeHandler).to.not.have.been.called;
  });

  it("should emit sit-change when user selects option in multi select", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box multiSelect>
        <sit-combo-box-option value="1">One</sit-combo-box-option>
        <sit-combo-box-option value="2">Two</sit-combo-box-option>
      </sit-combo-box>
    `);
    await el.updateComplete;

    const changeHandler = sinon.spy();
    el.addEventListener("sit-change", changeHandler);

    const option1 = el.querySelector<SitComboBoxOption>('sit-combo-box-option[value="1"]')!;
    option1.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(el.value).to.equal("1");
  });

  it("should emit sit-change when user unselects option in multi select", async () => {
    const el = await fixture<SitComboBox>(html`
      <sit-combo-box value="1;2" multiSelect>
        <sit-combo-box-option value="1">One</sit-combo-box-option>
        <sit-combo-box-option value="2">Two</sit-combo-box-option>
      </sit-combo-box>
    `);
    await el.updateComplete;

    // Wait for async initialization to set active on options
    const option1 = el.querySelector<SitComboBoxOption>('sit-combo-box-option[value="1"]')!;
    await waitUntil(() => option1.active, "option1 should be active after initialization");

    const changeHandler = sinon.spy();
    el.addEventListener("sit-change", changeHandler);

    // Unselect option 1
    option1.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(el.value).to.equal("2");
  });
});
