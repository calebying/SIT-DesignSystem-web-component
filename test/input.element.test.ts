import "./sit-web-component";
import type { SitInput, SitButton, SitIcon } from "../src/components";
import { expect, fixture, html, oneEvent, waitUntil, assert, elementUpdated } from "@open-wc/testing";
import sinon from "sinon";
import { sendKeys, sendMouse } from "@web/test-runner-commands";

describe("sit-input", () => {
  it("renders with default values", async () => {
    const el = await fixture(html`<sit-input inputId="test-id" label="label" hintText="hello"></sit-input>`);
    assert.shadowDom.equal(
      el,
      `
        <div class="form-control-container">
          <label class="form-label" for="test-id">label</label>
           <div class="form-control-row">
          <div class="form-control-group">
            <slot name="icon"></slot>
            <input type="text" class="form-control" id="test-id" aria-invalid="false" autocomplete="on" placeholder="placeholder">
            <slot name="trailing-icon"></slot>
          </div>
          <slot name="action"></slot>
          </div>
          <div class="form-text" id="test-idHelp">hello</div>
        </div>
    `,
      { ignoreAttributes: ["id", "for", "aria-describedby"] }
    );
  });
  it("renders with suffix defined", async () => {
    const el = await fixture(html`<sit-input inputId="test-id" suffix="test"></sit-input>`);
    assert.shadowDom.equal(
      el,
      `
        <div class="form-control-container">
        <div class="form-control-row">
          <div class="form-control-group">
            <slot name="icon"></slot>
            <input type="text" class="form-control" id="test-id" aria-invalid="false" autocomplete="on" placeholder="placeholder">
            <span class="form-control-suffix">test</span>
            <slot name="trailing-icon"></slot>
          </div>
            <slot name="action"></slot>
        </div>
    `,
      { ignoreAttributes: ["id", "for", "aria-describedby"] }
    );
  });
  it("renders with prefix defined", async () => {
    const el = await fixture(html`<sit-input inputId="test-id" prefix="test"></sit-input>`);
    assert.shadowDom.equal(
      el,
      `
        <div class="form-control-container">
        <div class="form-control-row">
          <div class="form-control-group">
            <slot name="icon"></slot>
            <span class="form-control-prefix">
              test
            </span>
            <input type="text" class="form-control" id="test-id" aria-invalid="false" autocomplete="on" placeholder="placeholder">
            <slot name="trailing-icon"></slot>
          </div>
            <slot name="action"></slot>
          </div>
    `,
      { ignoreAttributes: ["id", "for", "aria-describedby"] }
    );
  });
  it("renders with spinner when loading=true", async () => {
    const el = await fixture(html`<sit-input inputId="test-id" loading></sit-input>`);
    assert.shadowDom.equal(
      el,
      `
        <div class="form-control-container">
          <div class="form-control-row">
            <div class="form-control-group">
              <slot name="icon"></slot>
              <input type="text" class="form-control" id="test-id" aria-invalid="false" autocomplete="on" placeholder="placeholder">
              <slot name="trailing-icon">
              <sit-spinner
                size="sm"
                variant="primary"
                tone="brand"
                orientation="vertical"
                >
              </sit-spinner>
            </slot>
            </div>
              <slot name="action"></slot>
        </div>
    `,
      { ignoreAttributes: ["id", "for", "aria-describedby"] }
    );
  });

  it("input's id attribute should equal to label's for attribute and contain in hint text id attribute", async () => {
    const el = await fixture(html`<sit-input label="label" hintText="hello"></sit-input>`);
    const input = el.shadowRoot?.querySelector("input");
    const label = el.shadowRoot?.querySelector("label");
    const hintText = el.shadowRoot?.querySelector("div.form-text");
    expect(input?.getAttribute("id")).to.equal(label?.getAttribute("for"));
    expect(hintText?.getAttribute("id")).to.contain(input?.getAttribute("id"));
  });
  it("input's aria-describedby points to hint text id and invalid-feedback id", async () => {
    const el = await fixture<SitInput>(html`<sit-input label="label" hintText="hello" hasFeedback="both"></sit-input>`);
    const input = el.shadowRoot?.querySelector("input");
    const hintText = el.shadowRoot?.querySelector("div.form-text");
    expect(input?.getAttribute("aria-describedby")).to.contain(hintText?.getAttribute("id"));

    el.invalid = true;
    await elementUpdated(el);
    const feedback = el.shadowRoot?.querySelector(".invalid-feedback");
    expect(input?.getAttribute("aria-describedby")).to.contain(feedback?.getAttribute("id"));
  });

  it("aria-describedby includes hint text id when hintText is provided", async () => {
    const el = await fixture<SitInput>(html`<sit-input hintText="hello"></sit-input>`);
    const input = el.shadowRoot?.querySelector("input");
    const hintText = el.shadowRoot?.querySelector("div.form-text");
    const ariaDescribedBy = input?.getAttribute("aria-describedby");
    expect(ariaDescribedBy).to.equal(hintText?.getAttribute("id"));
  });

  it("aria-describedby is not rendered when no hintText is provided", async () => {
    const el = await fixture<SitInput>(html`<sit-input label="label"></sit-input>`);
    const input = el.shadowRoot?.querySelector("input");
    expect(input?.hasAttribute("aria-describedby")).to.be.false;
  });

  it("aria-labelledby is not rendered", async () => {
    const el = await fixture<SitInput>(html`<sit-input label="label" hintText="hello"></sit-input>`);
    const input = el.shadowRoot?.querySelector("input");
    expect(input?.hasAttribute("aria-labelledby")).to.be.false;
  });

  it("aria-describedby excludes invalid-feedback id when hasFeedback is style only", async () => {
    const el = await fixture<SitInput>(
      html`<sit-input label="label" hintText="hello" hasFeedback="style"></sit-input>`
    );
    el.invalid = true;
    await elementUpdated(el);
    const input = el.shadowRoot?.querySelector("input");
    const ariaDescribedBy = input?.getAttribute("aria-describedby");
    const hintText = el.shadowRoot?.querySelector("div.form-text");
    expect(ariaDescribedBy).to.equal(hintText?.getAttribute("id"));
    expect(ariaDescribedBy).to.not.contain("-invalid");
  });

  it("aria-describedby is not set when no hintText and hasFeedback is style only", async () => {
    const el = await fixture<SitInput>(html`<sit-input label="label" hasFeedback="style"></sit-input>`);
    el.invalid = true;
    await elementUpdated(el);
    const input = el.shadowRoot?.querySelector("input");
    expect(input?.hasAttribute("aria-describedby")).to.be.false;
  });

  it("input's id attribute should contain in .invalid-feedback's id attribute", async () => {
    const el = await fixture<SitInput>(html`<sit-input hasFeedback="both"></sit-input>`);
    el.invalid = true;
    await elementUpdated(el);
    const input = el.shadowRoot?.querySelector("input");
    const feedback = el.shadowRoot?.querySelector(".invalid-feedback");
    expect(feedback?.getAttribute("id")).to.contain(input?.getAttribute("id"));
    expect(input?.getAttribute("aria-describedby")).to.contain(feedback?.getAttribute("id"));
  });

  it("should be disabled with the disabled attribute", async () => {
    const el = await fixture<SitInput>(html` <sit-input disabled></sit-input> `);
    const input = el.shadowRoot?.querySelector<HTMLInputElement>("input");

    expect(input?.disabled).to.be.true;
  });

  // Labels
  it("should replace label value the if updated", async () => {
    const el = await fixture(html`<sit-input></sit-input>`);
    el.setAttribute("label", "Enter your name");
    await elementUpdated(el);
    const labelText = el.shadowRoot?.querySelector(".form-label");
    expect(labelText?.textContent).to.contain("Enter your name");
  });

  // Hint Text
  it("should render hint text element if hintText attribute is defined", async () => {
    const el = await fixture(html`<sit-input hintText="hint"></sit-input>`);
    const hintText = el.shadowRoot?.querySelector(".form-text");
    el.setAttribute("hintText", "hint");
    await elementUpdated(el);
    expect(hintText?.textContent).to.equal("hint");
    expect(hintText).to.exist;
  });

  //Name
  it("updates the name attribute value to 'Hello'", async () => {
    const el = await fixture(html`<sit-input></sit-input>`);
    el?.setAttribute("name", "Hello");
    await elementUpdated(el);
    const name = el.shadowRoot?.querySelector(".form-control");
    expect(name?.getAttribute("name")).to.equal("Hello");
  });

  //Placeholder
  it("updates the default placeholder value to 'Hello'", async () => {
    const el = await fixture(html`<sit-input></sit-input>`);
    el?.setAttribute("placeholder", "Hello");
    await elementUpdated(el);
    const placeHolder = el.shadowRoot?.querySelector(".form-control");
    expect(placeHolder?.getAttribute("placeholder")).to.equal("Hello");
  });

  it("placeholder prop is passed to input", async () => {
    const el = await fixture(html`<sit-input placeholder="hello"></sit-input>`);
    const placeHolder = el.shadowRoot?.querySelector(".form-control");
    expect(placeHolder?.getAttribute("placeholder")).to.equal("hello");
  });
  it("should focus the input when clicking on the label", async () => {
    const el = await fixture<SitInput>(html` <sit-input label="Name"></sit-input> `);
    const label = el.shadowRoot?.querySelector("label");
    const submitHandler = sinon.spy();

    el.addEventListener("sit-focus", submitHandler);
    (label as HTMLElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });
});

describe("sit-input type='password'", () => {
  it("when type=password, eye-fill icon should appear", async () => {
    const el = await fixture<SitInput>(html` <sit-input type="password"></sit-input> `);
    const icon = el.shadowRoot?.querySelector<SitIcon>("sit-icon");
    expect(icon?.name).to.equal("eye-fill");
  });
  it("when eye-fill icon is clicked, it becomes eye-slash-fill icon", async () => {
    const el = await fixture<SitInput>(html` <sit-input type="password"></sit-input> `);
    const icon = el.shadowRoot?.querySelector<SitIcon>("sit-icon");
    expect(icon?.name).to.equal("eye-fill");

    icon?.click();
    await elementUpdated(el);
    expect(icon?.name).to.equal("eye-slash-fill");
  });
  it("when eye-fill icon is clicked, shadow dom input's type becomes text to show password", async () => {
    const el = await fixture<SitInput>(html` <sit-input type="password"></sit-input> `);
    const icon = el.shadowRoot?.querySelector<SitIcon>("sit-icon");
    expect(icon?.name).to.equal("eye-fill");

    icon?.click();
    await elementUpdated(el);
    const shadowInput = el.shadowRoot?.querySelector("input");
    expect(shadowInput?.type).to.equal("text");
  });
});
describe("Feedback UI optional", () => {
  it("when hasFeedback and invalid is true, div.invalid-feedback appears in shadowDOM", async () => {
    const el = await fixture<SitInput>(
      html` <sit-input invalid hasFeedback="both" invalidFeedback="invalid feedback"></sit-input> `
    );
    el.invalid = true;
    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector("div.invalid-feedback")).not.to.be.null;
    expect(el.shadowRoot?.querySelector("div.invalid-feedback")?.textContent).to.contain("invalid feedback");
  });
  it("when hasFeedback is true and invalid state is true, invalid stylings", async () => {
    const el = await fixture<SitInput>(
      html` <sit-input hasFeedback="both" invalidFeedback="invalid feedback"></sit-input> `
    );
    expect(el.invalid).to.be.false;
    expect(el.shadowRoot?.querySelector(".form-control-group")).does.not.have.class("is-invalid");
    //force an invalid state
    el.invalid = true;
    expect(el.invalid).to.be.true;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(".form-control-group")).to.have.class("is-invalid");

    //force an valid state
    el.invalid = false;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(".form-control-group")).does.not.have.class("is-invalid");
  });
});
describe("when using constraint validation", () => {
  it("by default, invalid should be false", async () => {
    const el = await fixture<SitInput>(html` <sit-input></sit-input> `);
    expect(el.invalid).to.be.false;
    expect(el.checkValidity()).to.be.true;
  });
  it("invalid is true for a required input when it is touched ", async () => {
    const el = await fixture<SitInput>(html` <sit-input required></sit-input> `);
    expect(el.invalid).to.be.false;

    el.focus();
    el.blur();
    await el.updateComplete;
    expect(el.invalid).to.be.true;
    expect(el.checkValidity()).to.be.false;
  });
  it("for non requried fields invalid is always false even after touching", async () => {
    const el = await fixture<SitInput>(html` <sit-input></sit-input> `);
    expect(el.invalid).to.be.false;

    el.focus();
    el.blur();
    await el.updateComplete;
    expect(el.invalid).to.be.false;
  });
  it("when required, validation occurs upon onChange ", async () => {
    const el = await fixture<SitInput>(html` <sit-input required></sit-input> `);
    expect(el.invalid).to.be.false;

    el.focus();
    await sendKeys({ type: "s" });
    el.blur();
    await el.updateComplete;

    expect(el.value).to.equal("s");
    expect(el.invalid).to.be.false;
    expect(el.checkValidity()).to.be.true;
    el.focus();
    await sendKeys({ press: "Backspace" });
    el.blur();
    await el.updateComplete;
    expect(el.value).to.equal("");

    expect(el.invalid).to.be.true;
    expect(el.checkValidity()).to.be.false;
  });

  it("when required, blurring out an empty and touched field should cause input to be invalid", async () => {
    const el = await fixture<SitInput>(html` <sit-input required></sit-input> `);
    expect(el.invalid).to.be.false;

    el.focus();
    await sendKeys({ type: "ssd" });
    el.blur();
    await el.updateComplete;
    expect(el.value).to.equal("ssd");
    expect(el.invalid).to.be.false;

    el.focus();
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendMouse({ type: "click", position: [0, 0] });

    expect(el.invalid).to.be.true;
    expect(el.checkValidity()).to.be.false;

    el.focus();
    await sendKeys({ type: "ssd" });
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendMouse({ type: "click", position: [0, 0] });
    expect(el.invalid).to.be.true;
    expect(el.checkValidity()).to.be.false;
  });
  it("when NOT required, blurring out an empty and touched field should NOT cause input to be invalid", async () => {
    const el = await fixture<SitInput>(html` <sit-input></sit-input> `);
    expect(el.invalid).to.be.false;

    el.focus();
    await sendKeys({ type: "ssd" });
    el.blur();
    await el.updateComplete;
    expect(el.value).to.equal("ssd");
    expect(el.invalid).to.be.false;

    el.focus();
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendMouse({ type: "click", position: [0, 0] });

    expect(el.invalid).to.be.false;
    expect(el.checkValidity()).to.be.true;

    el.focus();
    await sendKeys({ type: "ssd" });
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendKeys({ press: "Backspace" });
    await sendMouse({ type: "click", position: [0, 0] });
    expect(el.invalid).to.be.false;
    expect(el.checkValidity()).to.be.true;
  });

  it("for an invalid field,  invalid is set to false (reset) when user is typing", async () => {
    const el = await fixture<SitInput>(html` <sit-input invalid></sit-input> `);
    expect(el.invalid).to.be.true;
    el.focus();
    await sendKeys({ type: "s" });
    await el.updateComplete;
    expect(el.invalid).to.be.false;
  });
  it("should be invalid when the pattern does not match", async () => {
    const el = await fixture<SitInput>(html` <sit-input pattern="failtest" value="fail"></sit-input> `);
    expect(el.invalid).to.be.false;
    expect(el.checkValidity()).to.be.false;
    el.focus();
    await sendKeys({ type: "tes" });
    el.blur();
    await el.updateComplete;
    expect(el.value).to.equal("failtes");
    expect(el.invalid).to.be.true;
    expect(el.checkValidity()).to.be.false;
    el.focus();
    await sendKeys({ type: "t" });
    el.blur();
    await el.updateComplete;
    expect(el.value).to.equal("failtest");
    expect(el.invalid).to.be.false;
    expect(el.checkValidity()).to.be.true;
    el.focus();
    await sendKeys({ press: "Backspace" });
    el.blur();
    await el.updateComplete;
    expect(el.value).to.equal("failtes");
    expect(el.invalid).to.be.true;
    expect(el.checkValidity()).to.be.false;
  });

  it("when disabled, invalid state is removed", async () => {
    const el = await fixture<SitInput>(
      html` <sit-input invalid invalidFeedback="test" hasFeedback="both"></sit-input> `
    );
    expect(el.invalid).to.be.true;
    el.disabled = true;
    await el.updateComplete;
    expect(el.invalid).to.be.false;
    el.disabled = false;
    expect(el.invalid).to.be.false;
  });
});

describe("when calling HTMLFormElement.reportValidity()", () => {
  it("should be valid when the input is empty and form.reportValidity() is called", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input required value="test"></sit-input>
      </form>
    `);

    expect(form.reportValidity()).to.be.true;
  });
  it("should be invalid when the input is empty and form.reportValidity() is called", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input required value=""></sit-input>
      </form>
    `);

    expect(form.reportValidity()).to.be.false;
  });

  it("fires sit-input event when value is entered", async () => {
    const el = await fixture<SitInput>(html` <sit-input></sit-input> `);
    const inputHandler = sinon.spy();
    el.focus();
    el.addEventListener("sit-input", inputHandler);
    await sendKeys({ press: "A" });
    waitUntil(() => inputHandler.calledOnce);
    expect(inputHandler).to.have.been.calledOnce;
  });
});

describe("when submitting a form", () => {
  it("should submit the form when pressing enter in a form with a submit button", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input></sit-input>
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

  it("when disabled is true in SitInput, form can be submitted even if input is required", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input required disabled></sit-input>
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

  it("form submission is blocked when input is required", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input required></sit-input>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    expect(form.reportValidity()).to.equal(false);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    expect(submitHandler).not.to.have.been.calledOnce;
  });

  it("should capture default value in form data when input is not touched before submission", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input name="test-field" value="default-value"></sit-input>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(form);
      expect(formData.get("test-field")).to.equal("default-value");
    });

    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });
});

describe("when resetting a form", () => {
  it("should reset the element to its initial value", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input name="a" value="test"></sit-input>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const button = form.querySelector<SitButton>("sit-button");
    const input = form.querySelector<SitInput>("sit-input");
    expect(input?.defaultValue).to.equal("test");
    if (input) input.value = "1234";
    // defaultValue should still be test as set when first created
    expect(input?.defaultValue).to.equal("test");

    await input?.updateComplete;

    setTimeout(() => button?.click());
    await oneEvent(form, "reset");
    await input?.updateComplete;

    expect(input?.value).to.equal("test");

    if (input) input.defaultValue = "";

    setTimeout(() => button?.click());
    await oneEvent(form, "reset");
    await input?.updateComplete;

    expect(input?.value).to.equal("");
  });
  it("form validity gets reset", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input invalid></sit-input>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const button = form.querySelector<SitButton>("sit-button");
    const input = form.querySelector<SitInput>("sit-input");
    expect(input?.invalid).to.equal(true);

    setTimeout(() => button?.click());
    await oneEvent(form, "reset");
    await input?.updateComplete;

    expect(input?.invalid).to.equal(false);
  });
});

describe("noValidate disables native and sit validation behaviours", async () => {
  it("should disable native validation when form has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input noValidate></sit-input>
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
  it("should override required prop and  disable native validation when form has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input noValidate required></sit-input>
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
  it("should override pattern prop and disable native validation when form has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input noValidate pattern="test"></sit-input>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const input = form.querySelector<SitInput>("sit-input");
    if (input) input.value = "tes";
    await input?.updateComplete;
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);

    const button = form.querySelector<SitButton>("sit-button");
    button?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });
  it("with noValidate, feedback UI does not appear for a required input when touched ", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input noValidate hasFeedback="both" required></sit-input>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const input = form.querySelector<SitInput>("sit-input");
    input?.focus();
    input?.blur();
    await input?.updateComplete;
    expect(input?.invalid).to.be.false;
    expect(input?.shadowRoot?.querySelector("div.invalid-feedback")).to.be.null;
  });
  it("should still populate FormData when noValidate is enabled", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input noValidate name="test-field" value="test-value"></sit-input>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const input = form.querySelector<SitInput>("sit-input");
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(form);
      expect(formData.get("test-field")).to.equal("test-value");
    });

    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });
  it("should update FormData when input value changes with noValidate enabled", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-input noValidate name="test-field" value="initial"></sit-input>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const input = form.querySelector<SitInput>("sit-input");

    if (input) input.value = "updated-value";
    await input?.updateComplete;

    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy(async (event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(form);
      await waitUntil(() => expect(formData.get("test-field")).to.equal("updated-value"));
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
        <sit-input noValidate name="test"></sit-input>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const input = form.querySelector<SitInput>("sit-input");
    input?.setInvalid(true);
    await input?.updateComplete;
    expect(input?.invalid).to.be.true;

    form.querySelector<SitButton>("sit-button")?.click();
    await waitUntil(() => input?.invalid === false);
    expect(input?.invalid).to.be.false;
  });

  it("reset clears programmatic invalid state when form has novalidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-input name="test"></sit-input>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const input = form.querySelector<SitInput>("sit-input");
    input?.setInvalid(true);
    await input?.updateComplete;
    expect(input?.invalid).to.be.true;

    form.querySelector<SitButton>("sit-button")?.click();
    await waitUntil(() => input?.invalid === false);
    expect(input?.invalid).to.be.false;
  });
});

describe("form novalidate", () => {
  it("when form has novalidate, form submission proceeds even when input is required", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-input required></sit-input>
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
  it("when form has novalidate, input does not have any validation stylings", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-input required hasFeedback="both"></sit-input>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const input = form.querySelector<SitInput>("sit-input");
    input?.focus();
    input?.blur();
    await input?.updateComplete;
    expect(input?.invalid).to.be.false;
    expect(input?.shadowRoot?.querySelector("div.invalid-feedback")).to.be.null;
  });
  it("should still populate FormData when form has novalidate attribute", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-input name="test-field" value="test-value"></sit-input>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(form);
      expect(formData.get("test-field")).to.equal("test-value");
    });

    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });
  it("should update FormData when input value changes with form novalidate attribute", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-input name="test-field" value="initial"></sit-input>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const input = form.querySelector<SitInput>("sit-input");

    if (input) input.value = "updated-value";
    await input?.updateComplete;

    const submitButton = form.querySelector<SitButton>("sit-button");
    const submitHandler = sinon.spy(async (event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(form);
      await waitUntil(() => expect(formData.get("test-field")).to.equal("updated-value"));
    });

    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });
});
