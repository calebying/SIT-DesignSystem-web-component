import "./sit-web-component";
import { assert, elementUpdated, expect, fixture, fixtureCleanup, triggerFocusFor, waitUntil } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import { html } from "lit";
import sinon from "sinon";
import type { SitButton } from "../src/components";
import { SitRadio, SitRadioGroup } from "../src/components";

describe("<sit-radio>", () => {
  afterEach(() => fixtureCleanup());
  it("is defined", () => {
    const el = document.createElement("sit-radio");
    assert.instanceOf(el, SitRadio);
  });

  it("by default, tabindex='-1'", async () => {
    const el = await fixture(html`<sit-radio></sit-radio>`);
    expect(el).to.have.attribute("tabindex", "-1");
  });

  it("input's id should be equal to label's for attribute", async () => {
    const el = await fixture(html`<sit-radio></sit-radio>`);
    const input = el.shadowRoot?.querySelector("input");
    const label = el.shadowRoot?.querySelector("label");
    expect(input?.getAttribute("id")).to.equal(label?.getAttribute("for"));
  });

  it("should be disabled with the disabled attribute & aria-disabled to be true", async () => {
    const el = await fixture(html`<sit-radio disabled></sit-radio>`);
    const radio = el.shadowRoot?.querySelector("input");
    expect(radio?.disabled).to.be.true;
    expect(radio).to.have.attribute("aria-disabled", "true");
  });

  it("should be able to pass in value to value attribute", async () => {
    const el = await fixture(html`<sit-radio value="3"></sit-radio>`);
    const radio = el.shadowRoot?.querySelector("input");
    expect(radio).to.have.attribute("value", "3");
  });
});

describe("<sit-radio-group>", () => {
  it("is defined", () => {
    const el = document.createElement("sit-radio-group");
    assert.instanceOf(el, SitRadioGroup);
  });

  it("should render the name attribute when passed", async () => {
    const el = await fixture(html`<sit-radio-group name="option"></sit-radio-group>`);
    const fieldset = el.shadowRoot?.querySelector("fieldset");
    expect(fieldset).to.have.attribute("name", "option");
  });

  it("radio2 should have aria-checked to be true when checked", async () => {
    const el = await fixture(
      html`<sit-radio-group name="option"
        ><sit-radio id="radio1" value="1">one</sit-radio
        ><sit-radio id="radio2" value="2">two</sit-radio></sit-radio-group
      >`
    );
    const radio1 = <SitRadio>el.querySelector("sit-radio#radio1");
    const radio2 = <SitRadio>el.querySelector("sit-radio#radio2");
    expect(radio1.checked).to.be.false;
    expect(radio2.checked).to.be.false;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.false;
    expect(radio2.checked).to.be.true;
  });

  it("radio-group should emit sit-change event when one of the radio is clicked", async () => {
    const el = await fixture(
      html`<sit-radio-group name="option"> <sit-radio id="radio2" value="2">two</sit-radio></sit-radio-group>`
    );
    const toggleHandler = sinon.spy();
    el.addEventListener("sit-change", toggleHandler);
    const radio2 = <SitRadio>el.querySelector("sit-radio#radio2");
    radio2.click();
    await Promise.all([elementUpdated(el)]);
    expect(toggleHandler).to.have.been.calledOnce;
  });

  it("radio-group should update and reflect the value for the checked radio", async () => {
    const el = await fixture<SitRadioGroup>(
      html`<sit-radio-group id="radio-group">
        <sit-radio id="radio2" value="1">two</sit-radio>
      </sit-radio-group>`
    );

    expect(el).to.have.attribute("value", undefined);

    const radio = el.querySelector("sit-radio");
    radio?.click();
    await el.updateComplete;
    expect(el).to.have.attribute("value", "1");
  });

  it("should be invalid state on form submission with required passed in", async () => {
    const el = await fixture<HTMLFormElement>(
      html`<form>
        <sit-radio-group id="radio-group" required>
          <sit-radio id="radio2" value="2">two</sit-radio>
        </sit-radio-group>
        <sit-button type="submit">Submit</sit-button>
      </form>`
    );

    const button = <SitButton>el.querySelector("sit-button");
    button?.click();
    await el.updateComplete;
    expect(el.reportValidity()).to.be.false;
    const radioGroup = <SitRadioGroup>el.querySelector("sit-radio-group");
    expect(radioGroup.invalid).to.be.true;
    expect(el.reportValidity()).to.be.false;
  });
  it("required radio group should be validated when radios are touched", async () => {
    const el = await fixture<SitRadioGroup>(
      html`
        <sit-radio-group id="radio-group" required hasFeedback>
          <sit-radio id="radio2" value="2">two</sit-radio>
        </sit-radio-group>
        <sit-button type="submit">Submit</sit-button>
      `
    );
    const radio = el.querySelector("sit-radio");
    radio?.focus();
    radio?.blur();
    await waitUntil(() => el?.invalid);
    expect(el?.shadowRoot?.querySelector("div.invalid-feedback")).to.exist;
  });
  it("invalidFeedback sets the feedback message", async () => {
    const el = await fixture<SitRadioGroup>(
      html`
        <sit-radio-group id="radio-group" hasFeedback invalid invalidFeedback="test">
          <sit-radio id="radio2" value="2">two</sit-radio>
        </sit-radio-group>
      `
    );
    const invalidFeedback = el.shadowRoot?.querySelector("div.invalid-feedback");
    expect(invalidFeedback?.textContent).to.contain("test");
  });

  it("by default, first radio is tabindex 0", async () => {
    const el = await fixture<SitRadioGroup>(html`<sit-radio-group>
      <sit-radio value="1">one</sit-radio>
      <sit-radio value="2">two</sit-radio>
      <sit-radio value="3">three</sit-radio>
    </sit-radio-group>`);

    expect(el.querySelectorAll("sit-radio")[0]).to.have.attribute("tabindex", "0");
    expect(el.querySelectorAll("sit-radio")[1]).to.have.attribute("tabindex", "-1");
    expect(el.querySelectorAll("sit-radio")[2]).to.have.attribute("tabindex", "-1");
  });

  it("should toggle tabindex 0 for checked radio & tabindex -1 when unchecked upon clicking", async () => {
    const el = await fixture<SitRadioGroup>(html`<sit-radio-group>
      <sit-radio value="1">one</sit-radio>
      <sit-radio value="2">two</sit-radio>
      <sit-radio value="3">three</sit-radio>
    </sit-radio-group>`);

    const radio1 = el.querySelectorAll("sit-radio")[0];
    const radio2 = el.querySelectorAll("sit-radio")[1];
    const radio3 = el.querySelectorAll("sit-radio")[2];

    radio1.click();
    await el.updateComplete;

    expect(radio1).to.have.attribute("tabindex", "0");
    expect(radio2).to.have.attribute("tabindex", "-1");
    expect(radio3).to.have.attribute("tabindex", "-1");

    radio2.click();
    await el.updateComplete;

    expect(radio1).to.have.attribute("tabindex", "-1");
    expect(radio2).to.have.attribute("tabindex", "0");
    expect(radio3).to.have.attribute("tabindex", "-1");
  });

  it("clicking label should focus on first radio when radios unchecked", async () => {
    const el = await fixture<SitRadioGroup>(html`<sit-radio-group label="Hello world">
      <sit-radio value="1">one</sit-radio>
      <sit-radio value="2">two</sit-radio>
      <sit-radio value="3">three</sit-radio>
    </sit-radio-group>`);

    const radio1 = el.querySelectorAll("sit-radio")[0];

    const label = <HTMLLabelElement>el.shadowRoot?.querySelector("label.form-label");
    label.click();

    await triggerFocusFor(radio1);
    expect(document.activeElement === radio1).to.be.true;
  });

  it("autofocus should focus the checked radio in the group", async () => {
    const el = await fixture<SitRadioGroup>(html`<sit-radio-group name="test-autofocus" autofocus>
      <sit-radio value="1">one</sit-radio>
      <sit-radio value="2">two</sit-radio>
      <sit-radio value="3">three</sit-radio>
    </sit-radio-group>`);

    const radio2 = <SitRadio>el.querySelectorAll("sit-radio")[1];

    radio2.click();
    await Promise.all([el.updateComplete, radio2.updateComplete]);

    expect(radio2.checked).to.be.true;
    const input = radio2.shadowRoot?.querySelector("input");
    expect(document.activeElement === radio2 || input?.matches(":focus")).to.be.true;
  });

  it("when a radio is checked, clicking label should focus on the checked radio", async () => {
    const el = await fixture<SitRadioGroup>(html`<sit-radio-group label="Hello world">
      <sit-radio value="1">one</sit-radio>
      <sit-radio value="2">two</sit-radio>
      <sit-radio value="3">three</sit-radio>
    </sit-radio-group>`);

    const radio2 = el.querySelectorAll("sit-radio")[1];

    radio2.click();
    await el.updateComplete;

    const label = <HTMLLabelElement>el.shadowRoot?.querySelector("label.form-label");
    label.click();

    await triggerFocusFor(radio2);
    expect(document.activeElement === radio2).to.be.true;
  });

  it("should allow for the following keyboard interactions upon keydown", async () => {
    const el = await fixture<SitRadioGroup>(html`<sit-radio-group label="Hello world">
      <sit-radio value="1">one</sit-radio>
      <sit-radio value="2">two</sit-radio>
      <sit-radio value="3">three</sit-radio>
    </sit-radio-group>`);

    const radio1 = el.querySelectorAll("sit-radio")[0];
    const radio2 = el.querySelectorAll("sit-radio")[1];
    const radio3 = el.querySelectorAll("sit-radio")[2];

    const label = <HTMLLabelElement>el.shadowRoot?.querySelector("label.form-label");
    label.click();

    await triggerFocusFor(radio1);
    expect(document.activeElement === radio1).to.be.true;

    // spacebar key
    await sendKeys({ press: " " });
    expect(radio1).to.have.attribute("tabindex", "0");
    expect(radio1.checked).to.be.true;
    expect(el).to.have.attribute("value", "1");

    // arrowright incr index
    await sendKeys({ press: "ArrowRight" });
    expect(radio2).to.have.attribute("tabindex", "0");
    expect(radio2.checked).to.be.true;
    expect(el).to.have.attribute("value", "2");

    // arrowdown incr index
    await sendKeys({ press: "ArrowDown" });
    expect(radio3).to.have.attribute("tabindex", "0");
    expect(radio3.checked).to.be.true;
    expect(el).to.have.attribute("value", "3");

    // arrowleft decr index
    await sendKeys({ press: "ArrowLeft" });
    expect(radio2).to.have.attribute("tabindex", "0");
    expect(radio2.checked).to.be.true;
    expect(el).to.have.attribute("value", "2");

    // arrowup decr index
    await sendKeys({ press: "ArrowLeft" });
    expect(radio1).to.have.attribute("tabindex", "0");
    expect(radio1.checked).to.be.true;
    expect(el).to.have.attribute("value", "1");
  });
  it("when disabled, invalid state is removed", async () => {
    const el = await fixture<SitRadioGroup>(html`<sit-radio-group invalid></sit-radio-group>`);
    expect(el.invalid).to.be.true;
    el.disabled = true;
    await el.updateComplete;
    expect(el.invalid).to.be.false;
    el.disabled = false;
    expect(el.invalid).to.be.false;
  });
  it("when disabled on first load, all child are disabled", async () => {
    const el = await fixture<SitRadioGroup>(html` <sit-radio-group disabled>
      <sit-radio>one</sit-radio>
      <sit-radio>two</sit-radio>
    </sit-radio-group>`);
    const radios = el.querySelectorAll("sit-radio");
    radios.forEach(r => expect(r.disabled).to.be.true);
  });
  it("subsequent disable, all child are disabled", async () => {
    const el = await fixture<SitRadioGroup>(html` <sit-radio-group>
      <sit-radio>one</sit-radio>
      <sit-radio>two</sit-radio>
    </sit-radio-group>`);
    el.disabled = true;
    await el.updateComplete;
    const radios = el.querySelectorAll("sit-radio");
    radios.forEach(r => expect(r.disabled).to.be.true);
  });
});

describe("noValidate disables native and sit validation behaviours", () => {
  afterEach(() => fixtureCleanup());

  it("should override required and allow form submission when noValidate is set", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-radio-group noValidate required hasFeedback>
          <sit-radio value="a">A</sit-radio>
          <sit-radio value="b">B</sit-radio>
        </sit-radio-group>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("with noValidate, invalid state does not appear on blur when required and empty", async () => {
    const el = await fixture<SitRadioGroup>(html`
      <sit-radio-group noValidate hasFeedback required>
        <sit-radio value="a">A</sit-radio>
        <sit-radio value="b">B</sit-radio>
      </sit-radio-group>
    `);
    el.dispatchEvent(new Event("sit-blur"));
    await el.updateComplete;
    expect(el.invalid).to.be.false;
  });

  it("with noValidate, setInvalid(true) still works for programmatic control", async () => {
    const el = await fixture<SitRadioGroup>(html`
      <sit-radio-group noValidate required hasFeedback>
        <sit-radio value="a">A</sit-radio>
        <sit-radio value="b">B</sit-radio>
      </sit-radio-group>
    `);
    el.setInvalid(true);
    el.invalidFeedback = "Please select an option";
    await el.updateComplete;
    expect(el.invalid).to.be.true;
  });

  it("with noValidate, programmatic setInvalid(true) persists after blur", async () => {
    const el = await fixture<SitRadioGroup>(html`
      <sit-radio-group noValidate required hasFeedback>
        <sit-radio value="a">A</sit-radio>
        <sit-radio value="b">B</sit-radio>
      </sit-radio-group>
    `);
    el.setInvalid(true);
    await el.updateComplete;
    el.dispatchEvent(new Event("sit-blur"));
    await el.updateComplete;
    expect(el.invalid).to.be.true;
  });

  it("should still populate FormData when noValidate is enabled", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-radio-group noValidate name="radio-field" value="a">
          <sit-radio value="a">A</sit-radio>
          <sit-radio value="b">B</sit-radio>
        </sit-radio-group>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(form);
      expect(formData.get("radio-field")).to.equal("a");
    });

    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });
});

describe("form novalidate for sit-radio-group", () => {
  afterEach(() => fixtureCleanup());

  it("when form has novalidate, form submission proceeds even when radio-group is required", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-radio-group required>
          <sit-radio value="a">A</sit-radio>
          <sit-radio value="b">B</sit-radio>
        </sit-radio-group>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("when form has novalidate, radio-group does not show invalid state on blur", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-radio-group required hasFeedback>
          <sit-radio value="a">A</sit-radio>
          <sit-radio value="b">B</sit-radio>
        </sit-radio-group>
      </form>
    `);
    const radioGroup = form.querySelector<SitRadioGroup>("sit-radio-group");
    radioGroup?.dispatchEvent(new Event("sit-blur"));
    await radioGroup?.updateComplete;
    expect(radioGroup?.invalid).to.be.false;
  });
});

describe("reset clears invalid state when noValidate is true for radio-group", () => {
  afterEach(() => fixtureCleanup());

  it("reset clears programmatic invalid state when component has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-radio-group noValidate name="test">
          <sit-radio value="a">A</sit-radio>
          <sit-radio value="b">B</sit-radio>
        </sit-radio-group>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const radioGroup = form.querySelector<SitRadioGroup>("sit-radio-group");
    radioGroup?.setInvalid(true);
    await radioGroup?.updateComplete;
    expect(radioGroup?.invalid).to.be.true;

    setTimeout(() => form.querySelector<SitButton>("sit-button")?.click());
    await waitUntil(() => radioGroup?.invalid === false);
    expect(radioGroup?.invalid).to.be.false;
  });

  it("reset clears programmatic invalid state when form has novalidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-radio-group name="test">
          <sit-radio value="a">A</sit-radio>
          <sit-radio value="b">B</sit-radio>
        </sit-radio-group>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const radioGroup = form.querySelector<SitRadioGroup>("sit-radio-group");
    radioGroup?.setInvalid(true);
    await radioGroup?.updateComplete;
    expect(radioGroup?.invalid).to.be.true;

    setTimeout(() => form.querySelector<SitButton>("sit-button")?.click());
    await waitUntil(() => radioGroup?.invalid === false);
    expect(radioGroup?.invalid).to.be.false;
  });
});

describe("reset does not emit sit-change for radio-group", () => {
  afterEach(() => fixtureCleanup());

  it("should not emit sit-change when form is reset", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-radio-group noValidate name="test" value="a">
          <sit-radio value="a">A</sit-radio>
          <sit-radio value="b">B</sit-radio>
        </sit-radio-group>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const radioGroup = form.querySelector<SitRadioGroup>("sit-radio-group")!;
    await radioGroup.updateComplete;

    // Change value to "b" first
    radioGroup.value = "b";
    await radioGroup.updateComplete;

    const changeHandler = sinon.spy();
    radioGroup.addEventListener("sit-change", changeHandler);

    // Reset the form
    changeHandler.resetHistory();
    setTimeout(() => form.querySelector<SitButton>("sit-button")?.click());
    await waitUntil(() => radioGroup.value === "a");

    expect(changeHandler).to.not.have.been.called;
  });
});

describe("setInvalid emits sit-invalid and sit-valid events for radio-group", () => {
  afterEach(() => fixtureCleanup());

  it("setInvalid(true) emits sit-invalid event", async () => {
    const el = await fixture<SitRadioGroup>(html`
      <sit-radio-group noValidate>
        <sit-radio value="a">A</sit-radio>
        <sit-radio value="b">B</sit-radio>
      </sit-radio-group>
    `);
    const handler = sinon.spy();
    el.addEventListener("sit-invalid", handler);
    el.setInvalid(true);
    await el.updateComplete;
    expect(handler).to.have.been.calledOnce;
  });

  it("setInvalid(false) emits sit-valid event", async () => {
    const el = await fixture<SitRadioGroup>(html`
      <sit-radio-group noValidate>
        <sit-radio value="a">A</sit-radio>
        <sit-radio value="b">B</sit-radio>
      </sit-radio-group>
    `);
    const handler = sinon.spy();
    el.addEventListener("sit-valid", handler);
    el.setInvalid(false);
    await el.updateComplete;
    expect(handler).to.have.been.calledOnce;
  });
});

// Keyboard interactions (arrowdown, arrowup) --> to keep check on the handleKeyDown() you wrote --> and that it updates the sit-radio-group
