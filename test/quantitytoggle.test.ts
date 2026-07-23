import "./sit-web-component";
import { expect, fixture, waitUntil } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import { html } from "lit";
import sinon from "sinon";
import { SitIconButton, SitInput, SitQuantityToggle } from "../src/components";

describe("visual appearance", () => {
  it("minus button has variant=outline, tone=neutral, size=md and class minus-btn", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle></sit-quantity-toggle>`);
    const minusBtn = el.shadowRoot?.querySelector("SIT-icon-button.minus-btn") as HTMLElement;

    expect(minusBtn).to.exist;
    expect(minusBtn.getAttribute("variant")).to.equal("outline");
    expect(minusBtn.getAttribute("tone")).to.equal("neutral");
    expect(minusBtn.getAttribute("size")).to.equal("md");
  });

  it("plus button has variant=outline, tone=neutral, size=md and class plus-btn", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle></sit-quantity-toggle>`);
    const plusBtn = el.shadowRoot?.querySelector("SIT-icon-button.plus-btn") as HTMLElement;

    expect(plusBtn).to.exist;
    expect(plusBtn.getAttribute("variant")).to.equal("outline");
    expect(plusBtn.getAttribute("tone")).to.equal("neutral");
    expect(plusBtn.getAttribute("size")).to.equal("md");
  });
});

describe("when minusBtn or plusBtn is clicked", () => {
  it("should decrease and increase the value by 1 respectively", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle value="10"></sit-quantity-toggle>`);
    const minusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='decrease by']") as HTMLButtonElement;
    const plusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='increase by']") as HTMLButtonElement;

    minusBtn.click();
    await waitUntil(() => el.value === 9);
    expect(el.value).to.equal(9);

    plusBtn.click();
    await waitUntil(() => el.value === 10);
    expect(el.value).to.equal(10);
  });

  it("minusBtn is disabled when reaches 0 without minimum value set", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle value="1"></sit-quantity-toggle>`);
    const minusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='decrease by']") as HTMLButtonElement;

    minusBtn.click();
    await waitUntil(() => el.value === 0);

    expect(el.value).to.equal(0);
    expect(minusBtn.hasAttribute("disabled")).to.be.true;
  });

  it("minusBtn is disabled when reaches minimum value", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle value="10" min="8"></sit-quantity-toggle>`
    );
    const minusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='decrease by']") as HTMLButtonElement;

    minusBtn.click();
    await waitUntil(() => el.value === 9);

    expect(el.value).to.equal(9);

    minusBtn.click();
    await waitUntil(() => el.value === 8);

    expect(el.value).to.equal(8);
    expect(minusBtn.hasAttribute("disabled")).to.be.true;
  });

  it("minusBtn is disabled when reaches maximum value", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle value="10" max="11"></sit-quantity-toggle>`
    );
    const plusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='increase by']") as HTMLButtonElement;

    plusBtn.click();
    await waitUntil(() => el.value === 11);

    expect(el.value).to.equal(11);
    expect(plusBtn.hasAttribute("disabled")).to.be.true;
  });
});

describe("when value change", () => {
  it("fires sit-input event when value is entered", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle value="10"></sit-quantity-toggle>`);
    const inputEl = el.shadowRoot?.querySelector("SIT-input") as SitInput;
    const inputHandler = sinon.spy();
    inputEl.focus();
    el.addEventListener("SIT-input", inputHandler);
    await sendKeys({ press: "0" });
    waitUntil(() => inputHandler.calledOnce);
    expect(inputHandler).to.have.been.calledOnce;
  });

  it("prevent from entering special characters", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle value="15"></sit-quantity-toggle>`);
    const inputEl = el.shadowRoot?.querySelector("SIT-input") as SitInput;
    const inputHandler = sinon.spy();
    inputEl.focus();
    el.addEventListener("SIT-input", inputHandler);
    await sendKeys({ press: "ArrowLeft" });
    await sendKeys({ press: "ArrowLeft" });
    waitUntil(() => inputHandler.calledTwice);
    await sendKeys({ press: "Minus" });
    waitUntil(() => inputHandler.calledOnce);
    expect(inputEl.value).to.equal(15);
  });

  it("resets value to 0 when delete the value", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle value="15"></sit-quantity-toggle>`);
    const inputEl = el.shadowRoot?.querySelector("SIT-input") as SitInput;
    const inputHandler = sinon.spy();
    inputEl.focus();
    el.addEventListener("SIT-input", inputHandler);
    await sendKeys({ press: "Backspace" });
    waitUntil(() => inputHandler.calledOnce);
    expect(inputEl.value).to.equal(1);

    await sendKeys({ press: "Backspace" });
    waitUntil(() => inputHandler.calledOnce);
    expect(inputEl.value).to.equal(0);
  });
});

describe("when step", () => {
  it("should decrease and increase with steps", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle value="10" step="91"></sit-quantity-toggle>`
    );
    const minusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='decrease by']") as HTMLButtonElement;
    const plusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='increase by']") as HTMLButtonElement;

    minusBtn.click();
    await waitUntil(() => el.value === 0);

    expect(el.value).to.equal(0);

    plusBtn.click();
    await waitUntil(() => el.value === 91);

    expect(el.value).to.equal(91);
  });
});

describe("when step changes", () => {
  it("should change arialabel accordingly", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle step="5"></sit-quantity-toggle>`);
    const minusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='decrease by']") as HTMLButtonElement;
    const plusBtn = el.shadowRoot?.querySelector("SIT-icon-button[arialabel^='increase by']") as HTMLButtonElement;

    expect(minusBtn).to.not.be.undefined;
    expect(minusBtn.getAttribute("arialabel")).to.equal("decrease by 5");

    expect(plusBtn.getAttribute("arialabel")).to.equal("increase by 5");
  });
});

describe("methods", () => {
  it("plus method works to increment value of quantity-toggle", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle value="10"></sit-quantity-toggle>`);
    el.plus();
    await waitUntil(() => el.value === 11);
    expect(el.value).to.equal(11);
  });

  it("minus method works to decrement value of quantity-toggle", async () => {
    const el = await fixture<SitQuantityToggle>(html`<sit-quantity-toggle value="10"></sit-quantity-toggle>`);
    el.minus();
    await waitUntil(() => el.value === 9);
    expect(el.value).to.equal(9);
  });
});

describe("in form context", () => {
  it("resets to defaultValue when reset sit-icon-button is clicked", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-quantity-toggle name="a" value="5"></sit-quantity-toggle>
      </form>
    `);
    const qtyToggle = form.querySelector<SitQuantityToggle>("SIT-quantity-toggle");
    expect(qtyToggle?.defaultValue).to.equal(5);
    //force a random value different from default value
    if (qtyToggle) qtyToggle.value = 10;

    await qtyToggle?.updateComplete;
    expect(qtyToggle?.defaultValue).to.equal(5);
    form.reset();
    await waitUntil(() => qtyToggle?.value === 5);

    expect(qtyToggle?.value).to.equal(5);
  });

  it("valid when quantity toggle has no contraints", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-quantity-toggle name="a" value="5"></sit-quantity-toggle>
      </form>
    `);
    expect(form.reportValidity()).to.be.true;
  });

  it("valid when passes min max validation", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-quantity-toggle name="a" max="6" min="3" value="5"></sit-quantity-toggle>
      </form>
    `);
    expect(form.reportValidity()).to.be.true;
  });

  it("invalid when fails min max validation", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-quantity-toggle name="a" max="6" min="3" value="7"></sit-quantity-toggle>
      </form>
    `);
    expect(form.reportValidity()).to.be.false;
  });

  it("input typing validation happens on change", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle hasFeedback="both" min="3"></sit-quantity-toggle>`
    );
    const input = el.shadowRoot?.querySelector<SitInput>("SIT-input");
    input?.focus();
    expect(el.shadowRoot?.querySelector(".invalid-feedback")).to.be.null;
    await sendKeys({ press: "2" });
    expect(el.shadowRoot?.querySelector(".invalid-feedback")).to.be.null;
    input?.blur();
    await waitUntil(() => el.shadowRoot?.querySelector(".invalid-feedback"));
    expect(el.shadowRoot?.querySelector(".invalid-feedback")).to.exist;
  });

  it("validation happens as user clicks button", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle hasFeedback="both" min="2"></sit-quantity-toggle>`
    );
    const plusBtn = el.shadowRoot?.querySelectorAll("SIT-icon-button")[1] as SitIconButton;
    expect(el.value).to.equal(0);
    expect(el.shadowRoot?.querySelector(".invalid-feedback")).to.be.null;
    plusBtn?.click();
    await waitUntil(() => el.shadowRoot?.querySelector(".invalid-feedback"));
    expect(el.shadowRoot?.querySelector(".invalid-feedback")).to.exist;
    expect(el.value).to.equal(1);
    plusBtn?.click();
    await el.updateComplete;
    await waitUntil(() => !el.shadowRoot?.querySelector(".invalid-feedback"));

    expect(el.value).to.equal(2);
    expect(el.shadowRoot?.querySelector(".invalid-feedback")).to.be.null;
  });

  it("validation happens on touch by sit-input", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle hasFeedback="both" min="2" value="1"></sit-quantity-toggle>`
    );
    expect(el.invalid).to.equal(false);
    const input = el.shadowRoot?.querySelector<SitInput>("SIT-input");
    input?.focus();
    input?.blur();
    await input?.updateComplete;
    expect(el.invalid).to.equal(true);
  });

  it("hasFeedback=both provides error message and sit-input hasFeedback will be set as style", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle hasFeedback="both" invalid invalidFeedback="test"></sit-quantity-toggle>`
    );

    expect(el.shadowRoot?.querySelector(".invalid-feedback")?.textContent).to.contain("test");
    expect(el.shadowRoot?.querySelector<SitInput>("SIT-input")?.hasFeedback).to.equal("style");
  });

  it("hasFeedback=text provides error message and sit-input hasFeedback will be set as style", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle hasFeedback="text" invalid invalidFeedback="test"></sit-quantity-toggle>`
    );

    expect(el.shadowRoot?.querySelector(".invalid-feedback")?.textContent).to.contain("test");
    expect(el.shadowRoot?.querySelector<SitInput>("SIT-input")?.getAttribute("hasfeedback")).to.be.null;
  });

  it("hasFeedback=style provides error message and sit-input hasFeedback will be set as style", async () => {
    const el = await fixture<SitQuantityToggle>(
      html`<sit-quantity-toggle hasFeedback="style" invalid invalidFeedback="test"></sit-quantity-toggle>`
    );

    expect(el.shadowRoot?.querySelector(".invalid-feedback")).to.be.null;
    expect(el.shadowRoot?.querySelector<SitInput>("SIT-input")?.getAttribute("hasfeedback")).to.equal("style");
  });

  it("when disabled, invalid state is removed", async () => {
    const el = await fixture<SitInput>(
      html` <sit-quantity-toggle invalid invalidFeedback="" hasFeedback="both"></sit-quantity-toggle> `
    );
    expect(el.invalid).to.be.true;
    el.disabled = true;
    await el.updateComplete;
    expect(el.invalid).to.be.false;
    el.disabled = false;
    expect(el.invalid).to.be.false;
  });
});



