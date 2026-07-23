import { assert, elementUpdated, expect, fixture, fixtureCleanup, html, waitUntil } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import Sinon from "sinon";
import type { SitButton } from "../src/components";
import { SitCheckbox, SitCheckboxGroup } from "../src/components";
import "./sit-web-component";

describe("<sit-checkbox>", () => {
  it("can be semantically compare with shadowDom trees (default)", async () => {
    const el = await fixture<SitCheckbox>(
      html`<sit-checkbox name="testname" value="testvalue">label</sit-checkbox>`
    );
    assert.shadowDom.equal(
      el,
      `
           <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      aria-invalid= "false"
                      aria-disabled="false"
                      aria-checked="false"
                      name="testname"
                    />
                  <label class="form-check-label"><slot></slot></label>
                </div>
          `,
      { ignoreAttributes: ["id", "for"] }
    );
  });
  it("can be semantically compare with shadowDom trees with error message", async () => {
    const el = await fixture<SitCheckbox>(
      html`<sit-checkbox invalid hasFeedback="both" invalidFeedback="test" value="testvalue">label</sit-checkbox>`
    );
    assert.shadowDom.equal(
      el,
      `
           <div class="form-check">
                    <input
                      class="form-check-input is-invalid"
                      type="checkbox"
                      aria-invalid= "true"
                      aria-disabled="false"
                      aria-checked="false"
                    />
                  <label class="form-check-label"><slot></slot></label>
                </div>
                      <div class="invalid-feedback-container">
                        <slot name="invalidIcon">
                          <sit-icon name="exclamation-circle-fill" size="md"></sit-icon>
                        </slot>
                        <div id="checkbox-feedback" tabindex="0" class="invalid-feedback">
                          test
                        </div>
                      </div>
          `,
      { ignoreAttributes: ["id", "for"] }
    );
  });
  it("value remains the same when clicked", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox value="testvalue">Test</sit-checkbox>`);
    expect(el.checked).to.be.false;
    expect(el.value).to.equal("testvalue");
    el.click();
    expect(el.checked).to.be.true;
    expect(el.value).to.equal("testvalue");
  });
  it("should be disabled with the disabled attribute & aria-disabled to be true", async () => {
    const el = await fixture(html`<sit-checkbox disabled></sit-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector("input");
    expect(checkbox?.disabled).to.be.true;
    expect(checkbox).to.have.attribute("aria-disabled", "true");
  });

  it("when disabled, invalid state is removed", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox invalid></sit-checkbox>`);
    expect(el.invalid).to.be.true;
    el.disabled = true;
    await el.updateComplete;
    expect(el.invalid).to.be.false;
    el.disabled = false;
    expect(el.invalid).to.be.false;
  });
  it("id attribute should equal to label for attribute", async () => {
    const el = await fixture(html`<sit-checkbox></sit-checkbox>`);
    const input = el.shadowRoot?.querySelector("input");
    const label = el.shadowRoot?.querySelector("label");
    expect(input?.getAttribute("id")).to.equal(label?.getAttribute("for"));
  });

  it("should have class .is-invalid when invalid state is true and hasFeedback is both", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox hasFeedback="both"></sit-checkbox>`);
    el.invalid = true;
    await el.updateComplete;
    const checkbox = el.shadowRoot?.querySelector("input");
    expect(checkbox?.classList.value).to.contain("is-invalid");
  });
  it("should not have class .invalid when hasFeedback is false ", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    el.invalid = true;
    await el.updateComplete;
    const checkbox = el.shadowRoot?.querySelector("input");
    expect(checkbox?.classList.value).not.to.contain("is-invalid");
  });

  it("should render aria-invalid to true with invalid state and required attribute", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector("input");
    el.invalid = true;
    await el.updateComplete;
    expect(checkbox).to.have.attribute("aria-invalid", "true");
  });

  it("should emit sit-change event when input is clicked", async () => {
    const el = await fixture(html`<sit-checkbox></sit-checkbox>`);
    const toggleHandler = Sinon.spy();
    el.addEventListener("SIT-change", toggleHandler);
    el.shadowRoot?.querySelector("input")?.click();
    expect(toggleHandler).to.have.been.calledOnce;
  });

  it("should emit sit-change event when label is clicked", async () => {
    const el = await fixture(html`<sit-checkbox></sit-checkbox>`);
    const toggleHandler = Sinon.spy();
    el.addEventListener("SIT-change", toggleHandler);
    el.shadowRoot?.querySelector("label")?.click();
    expect(toggleHandler).to.have.been.calledOnce;
  });

  it("should have input aria-checked false by default", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector("input");

    expect(checkbox).to.have.attribute("aria-checked", "false");
  });

  it("should show aria-checked to be true when checked is true", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector("input");
    const clickSpy = Sinon.spy();

    checkbox?.addEventListener("click", clickSpy, { once: true });

    el.click();
    await el.updateComplete;

    expect(clickSpy.called).to.equal(true);
    expect(el.checked).to.equal(true);
    expect(checkbox).to.have.attribute("aria-checked", "true");
  });

  it("should be invalid when the input is empty and form.reportValidity() is called", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox required value=""></sit-checkbox>
      </form>
    `);

    expect(form.reportValidity()).to.be.false;
  });

  // it("should bypass validity when the input is not checked, reportValidity() is called, and the form has novalidate", async () => {
  //   const form = await fixture<HTMLFormElement>(html`
  //     <form novalidate>
  //       <sit-checkbox required value="hello"></sit-checkbox>
  //     </form>
  //   `);

  //   expect(form.reportValidity()).to.be.true;
  // });

  it("should not show checked by default", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    expect(el.checked).to.be.false;
  });

  it("should show checked to be true when click", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector("input");
    const clickSpy = Sinon.spy();

    checkbox?.addEventListener("click", clickSpy, { once: true });

    el.click();
    await el.updateComplete;

    expect(clickSpy.called).to.equal(true);
    expect(el.checked).to.equal(true);
  });

  it("clicking directly on the host element (e.g. padding area) delegates to the internal input and toggles the checkbox", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    const inputSpy = Sinon.spy();
    el.shadowRoot?.querySelector("input")?.addEventListener("click", inputSpy);

    el.click();
    await el.updateComplete;

    expect(inputSpy.calledOnce).to.be.true;
    expect(el.checked).to.be.true;
  });

  it("clicking directly on the host element twice toggles the checkbox back to unchecked", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);

    el.click();
    await el.updateComplete;
    expect(el.checked).to.be.true;

    el.click();
    await el.updateComplete;
    expect(el.checked).to.be.false;
  });

  it("host click does not propagate the original event, only the delegated input click propagates", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    const hostClickSpy = Sinon.spy();
    // Listener on a parent to count how many clicks bubble out of sit-checkbox
    el.parentElement?.addEventListener("click", hostClickSpy);

    el.click();
    await el.updateComplete;

    // The original host click was stopped; only the delegated input click bubbles out
    expect(hostClickSpy.callCount).to.equal(1);
  });

  it("When required attr is passed in, it should not show invalid on first load", async () => {
    const el = await fixture<SitCheckbox>(html` <sit-checkbox required></sit-checkbox> `);
    expect(el.invalid).to.be.false;
  });

  it("When required attr is passed in, it should show invalid on submit", async () => {
    const el = await fixture<SitCheckbox>(html` <sit-checkbox required></sit-checkbox> `);
    expect(el.invalid).to.be.false;
  });

  it("when required attr is passed in, should show invalid state upon submission", async () => {
    const form = await fixture<HTMLFormElement>(
      html` <form><sit-checkbox required></sit-checkbox><sit-button type="submit"></sit-button></form> `
    );
    const button = form.querySelector<SitButton>("SIT-button");
    const checkbox = form.querySelector<SitCheckbox>("SIT-checkbox");

    const clickSpy = Sinon.spy();

    button?.addEventListener("click", clickSpy, { once: true });
    if (checkbox) await elementUpdated(checkbox);
    expect(checkbox?.invalid).to.exist;
  });

  it("By default, should be able to check and uncheck using enter key", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    el.shadowRoot?.querySelector("input")?.focus();
    await sendKeys({ press: "Enter" });
    await el.updateComplete;
    expect(el.checked).to.be.true;

    await sendKeys({ press: "Enter" });
    await el.updateComplete;
    expect(el.checked).to.be.false;
  });

  it("when required attr is passed in, should show invalid state on unchecked by clicking", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox required></sit-checkbox>`);
    el.shadowRoot?.querySelector("input")?.focus();
    el.shadowRoot?.querySelector("input")?.click();
    await elementUpdated(el);
    expect(el.checked).to.be.true;
    el.shadowRoot?.querySelector("input")?.click();
    await elementUpdated(el);
    expect(el.invalid).to.be.true;
  });

  it("when required is true, blurring from checkbox should trigger invalid ot be true", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox required></sit-checkbox>`);
    expect(el.invalid).to.be.false;
    el.shadowRoot?.querySelector("input")?.focus();
    el.shadowRoot?.querySelector("input")?.blur();
    await elementUpdated(el);
    expect(el.invalid).to.be.true;
  });
  it("when required attr is passed in, should show invalid state on unchecked using enter key", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox required></sit-checkbox>`);
    el.shadowRoot?.querySelector("input")?.focus();
    await sendKeys({ press: "Enter" });
    await el.updateComplete;
    expect(el.checked).to.be.true;

    await sendKeys({ press: "Enter" });
    await el.updateComplete;
    expect(el.invalid).to.be.true;
  });

  it("focus method makes input focused, blur method makes input lose focus", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    expect(el.shadowRoot?.querySelector("input:focus")).to.be.null;
    el.focus();
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector("input:focus")).not.to.be.null;
    el.blur();
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector("input:focus")).to.be.null;
  });

  it("should apply the 'is-invalid' class to a checkbox when it's invalid and hasFeedback is true", async () => {
    const el = await fixture<SitCheckbox>(
      html`<sit-checkbox hasFeedback="both" invalid invalidFeedback="invalid feedback"></sit-checkbox>`
    );
    el.invalid = true;
    await elementUpdated(el);
    const checkbox = el.shadowRoot?.querySelector("input");
    expect(checkbox?.classList.contains("is-invalid")).to.be.true;
  });

  it("should not apply the 'is-invalid' class to a checkbox when it's invalid and hasFeedback is false", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox invalid></sit-checkbox>`);
    el.invalid = true;
    await elementUpdated(el);
    const checkbox = el.shadowRoot?.querySelector("input");
    expect(checkbox?.classList.contains("is-invalid")).to.be.false;
  });

  it("should not display feedback if no child checkbox is invalid even with hasFeedback", async () => {
    const group = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group hasFeedback invalidFeedback="Group error">
        <sit-checkbox required></sit-checkbox>
      </sit-checkbox-group>
    `);

    const checkbox = group.querySelector<SitCheckbox>("SIT-checkbox");
    if (checkbox) {
      checkbox.invalid = false;
      await elementUpdated(checkbox);
    }

    const feedback = group.shadowRoot?.querySelector(".error-message-container");
    expect(feedback).not.to.exist;
  });

  it("should not display feedback if the group does not have hasFeedback and at least one checkbox is invalid", async () => {
    const group = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group>
        <sit-checkbox invalid required></sit-checkbox>
      </sit-checkbox-group>
    `);

    const checkbox = group.querySelector<SitCheckbox>("SIT-checkbox");
    if (checkbox) {
      checkbox.invalid = true;
      await elementUpdated(checkbox);
    }

    const feedback = group.shadowRoot?.querySelector(".error-message-container");
    expect(feedback).not.to.exist;
  });

  it("should mark the checkbox as invalid when required and not checked upon form submission", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox required></sit-checkbox>
        <sit-button type="submit"></sit-button>
      </form>
    `);

    form.addEventListener("submit", event => {
      event.preventDefault(); // Prevent page navigation
    });

    const checkbox = form.querySelector<SitCheckbox>("SIT-checkbox");
    const button = form.querySelector<SitButton>("SIT-button");

    if (checkbox) {
      checkbox.checked = false;
      await elementUpdated(checkbox);
      button?.click();
      expect(checkbox.invalid).to.be.true;
    }
  });

  it("should not mark the checkbox as invalid when not required and not checked upon form submission", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox></sit-checkbox>
        <sit-button type="submit"></sit-button>
      </form>
    `);

    form.addEventListener("submit", event => {
      event.preventDefault(); // Prevent page navigation
    });

    const checkbox = form.querySelector<SitCheckbox>("SIT-checkbox");
    const button = form.querySelector<SitButton>("SIT-button");

    if (checkbox) {
      checkbox.checked = false;
      await elementUpdated(checkbox);
      button?.click();
      expect(checkbox.invalid).to.be.false;
    }
  });
  it("form submission success when checkbox is required and checked", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox required checked></sit-checkbox>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitHandler = Sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);
    expect(form.reportValidity()).to.equal(true);

    const checkbox = form.querySelector<SitCheckbox>("SIT-checkbox");
    const button = form.querySelector<SitButton>("SIT-button");

    if (checkbox) {
      await elementUpdated(checkbox);
      button?.click();
      expect(submitHandler).to.have.been.calledOnce;
      expect(checkbox.invalid).to.be.false;
    }
  });
  it("form submission prevented when checkbox is required and not checked", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox required></sit-checkbox>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitHandler = Sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);
    expect(form.reportValidity()).to.equal(false);

    const checkbox = form.querySelector<SitCheckbox>("SIT-checkbox");
    const button = form.querySelector<SitButton>("SIT-button");

    if (checkbox) {
      await elementUpdated(checkbox);
      button?.click();
      expect(submitHandler).not.to.have.been.calledOnce;
      expect(checkbox.invalid).to.be.true;
    }
  });
  it("form submission successful when checkbox is disabled, despite required", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox required disabled></sit-checkbox>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitHandler = Sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);
    expect(form.reportValidity()).to.equal(true);

    const checkbox = form.querySelector<SitCheckbox>("SIT-checkbox");
    const button = form.querySelector<SitButton>("SIT-button");

    if (checkbox) {
      await elementUpdated(checkbox);
      button?.click();
      expect(submitHandler).to.have.been.calledOnce;
      expect(checkbox.invalid).to.be.false;
    }
  });
  it("form reset unchecks box", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox></sit-checkbox>
      </form>
    `);
    const checkbox = form.querySelector<SitCheckbox>("SIT-checkbox");
    checkbox?.click();
    await checkbox?.updateComplete;
    expect(checkbox?.checked).to.be.true;

    form.reset();
    await checkbox?.updateComplete;
    expect(checkbox?.checked).to.be.false;
  });
  it("form reset, resets validity of check box", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox required></sit-checkbox>
      </form>
    `);
    const checkbox = form.querySelector<SitCheckbox>("SIT-checkbox");
    await checkbox?.updateComplete;
    checkbox?.reportValidity();
    expect(checkbox?.invalid).to.be.true;

    form.reset();
    await checkbox?.updateComplete;
    expect(checkbox?.invalid).to.be.false;
  });

  it("indeterminate required checkbox should be invalid", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox indeterminate required></sit-checkbox>`);
    // const checkbox = el.shadowRoot?.querySelector("input");
    expect(el.reportValidity()).to.be.false;
    expect(el?.invalid).to.be.true;
  });
  it("indeterminate checkbox should not affected validity and be valid by default", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox indeterminate></sit-checkbox>`);
    // const checkbox = el.shadowRoot?.querySelector("input");
    expect(el.reportValidity()).to.be.true;
    expect(el?.invalid).to.be.false;
  });
  it("should apply the 'indeterminate' property to a checkbox when it's set", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox indeterminate></sit-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector("input");

    expect(checkbox?.getAttribute("indeterminate")).to.exist;
  });

  it("should not apply the 'indeterminate' property to a checkbox when it's not set", async () => {
    const el = await fixture<SitCheckbox>(html`<sit-checkbox></sit-checkbox>`);
    const checkbox = el.shadowRoot?.querySelector("input");

    expect(checkbox?.getAttribute("indeterminate")).to.not.exist;
  });
});

describe("SIT-checkbox-group", () => {
  it("on initial render, if any checkboxes are checked, value is saved in checkboxgroup", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group>
        <sit-checkbox value="he" checked>he</sit-checkbox>
        <sit-checkbox value="him" checked>him</sit-checkbox>
      </sit-checkbox-group>
    `);
    const checkboxes = el.querySelectorAll<SitCheckbox>("SIT-checkbox");
    await elementUpdated(el);
    checkboxes.forEach(async c => await elementUpdated(c));

    expect(el.value).to.equal("he;him");
  });

  it("on initial render, if disabled is true, all children are disabled", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group disabled>
        <sit-checkbox value="he">he</sit-checkbox>
        <sit-checkbox value="him">him</sit-checkbox>
      </sit-checkbox-group>
    `);
    const checkboxes = el.querySelectorAll("SIT-checkbox");
    checkboxes.forEach(c => expect(c.disabled).to.be.true);
  });
  it("on initial render, if a child has required set to true, delete the checkbox and send console error", async () => {
    const consoleStub = Sinon.stub(console, "error");
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group>
        <sit-checkbox value="he" required>he</sit-checkbox>
        <sit-checkbox value="him">him</sit-checkbox>
      </sit-checkbox-group>
    `);
    await el.updateComplete;
    await waitUntil(() => consoleStub.calledOnce);
    expect(consoleStub.calledOnce).to.be.true;
    expect(el.querySelectorAll("SIT-checkbox").length).to.equal(1);
  });
  it("on initial render, if invalid prop is set to true, should reflect checkboxes child invalid state", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group invalid hasFeedback>
        <sit-checkbox value="he" required>he</sit-checkbox>
        <sit-checkbox value="him">him</sit-checkbox>
      </sit-checkbox-group>
    `);
    const checkboxes = el.querySelectorAll("SIT-checkbox") as NodeListOf<SitCheckbox>;
    checkboxes.forEach(c => expect(c.invalid).to.be.true);

    expect(el.shadowRoot?.querySelector(".invalid-feedback-container")).to.exist;
  });
  it("programatically setting value checkboxgroup will be reflected on the checkboxes child", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group>
        <sit-checkbox value="he">he</sit-checkbox>
        <sit-checkbox value="him">him</sit-checkbox>
      </sit-checkbox-group>
    `);

    el.value = "he";
    await el.updateComplete;
    const heCheckbox = el.querySelector<SitCheckbox>("SIT-checkbox[value='he']");
    expect(heCheckbox?.checked).to.be.true;
  });
  it("value prop should properly reflect checked children in initial render", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group value="he;him;">
        <sit-checkbox value="he">he</sit-checkbox>
        <sit-checkbox value="him">him</sit-checkbox>
        <sit-checkbox value="she">she</sit-checkbox>
      </sit-checkbox-group>
    `);
    await el.updateComplete;
    const [one, two, three] = el.querySelectorAll<SitCheckbox>("SIT-checkbox") as NodeListOf<SitCheckbox>;
    expect(one.checked).to.be.true;
    expect(two.checked).to.be.true;
    expect(three.checked).to.be.false;
  });
  it("when checked and unchecked, checkboxgroup value should be updated", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group>
        <sit-checkbox value="he">he</sit-checkbox>
        <sit-checkbox value="him">him</sit-checkbox>
        <sit-checkbox value="she">she</sit-checkbox>
      </sit-checkbox-group>
    `);
    expect(el.value).to.equal("");
    const [one, two, three] = el.querySelectorAll<SitCheckbox>("SIT-checkbox") as NodeListOf<SitCheckbox>;
    //checking
    one.click();
    await elementUpdated(el);
    expect(el.value).to.equal("he");
    two.click();
    await elementUpdated(el);
    expect(el.value).to.equal("he;him");
    //unchecking
    two.click();
    await elementUpdated(el);
    expect(el.value).to.equal("he");
  });
  it("at initial render, checked children will be reflected on checkbox group value", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group>
        <sit-checkbox value="he" checked>he</sit-checkbox>
        <sit-checkbox value="him" checked>him</sit-checkbox>
        <sit-checkbox value="she">she</sit-checkbox>
      </sit-checkbox-group>
    `);
    expect(el.value).to.equal("he;him");
  });
  //form testings
  const triggerSubmitFormError = async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group required hasFeedback>
          <sit-checkbox value="he">he</sit-checkbox>
          <sit-checkbox value="him">him</sit-checkbox>
          <sit-checkbox value="she">she</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit">Submit</sit-button>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const submitHandler = Sinon.spy((event: SubmitEvent) => event.preventDefault());
    const submitButton = form.querySelector<SitButton>("SIT-button[type='submit']");
    const resetButton = form.querySelector<SitButton>("SIT-button[type='reset']");

    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    expect(submitHandler).not.to.have.been.calledOnce;

    const checkboxGroup = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group");
    const checkbox = form.querySelectorAll<SitCheckbox>("SIT-checkbox");
    await waitUntil(() => checkboxGroup?.invalid);
    expect(checkboxGroup?.invalid).to.be.true;
    Array.from(checkbox).map(c => expect(c.invalid).to.be.true);
    return {
      submitHandler,
      submitButton,
      form,
      resetButton,
      checkboxGroup,
      checkbox
    };
  };
  it("when submitting a required and hasFeedback , should show error for unchecked", triggerSubmitFormError);
  const prepareValidForm = async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group required hasFeedback>
          <sit-checkbox value="he">he</sit-checkbox>
          <sit-checkbox value="him">him</sit-checkbox>
          <sit-checkbox value="she">she</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitHandler = Sinon.spy((event: SubmitEvent) => event.preventDefault());
    const submitButton = form.querySelector<SitButton>("SIT-button");
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    expect(submitHandler).not.to.have.been.calledOnce;

    const checkboxGroup = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group");
    const checkbox = form.querySelectorAll<SitCheckbox>("SIT-checkbox");
    await waitUntil(() => checkboxGroup?.invalid);
    expect(checkboxGroup?.invalid).to.be.true;
    Array.from(checkbox).map(c => expect(c.invalid).to.be.true);

    checkbox[0].click();
    await waitUntil(() => checkbox[0].checked);

    expect(checkboxGroup?.invalid).to.be.false;
    Array.from(checkbox).map(c => expect(c.invalid).to.be.false);
    return { submitButton, submitHandler };
  };
  it("Error resolves when at least one checkbox is tick", prepareValidForm);
  it("Form submits successfuly for errorless form", async () => {
    const { submitButton, submitHandler } = await prepareValidForm();
    submitButton?.click();
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("when setting rseet should remove all errors", async () => {
    const { submitHandler, submitButton, form, resetButton, checkboxGroup, checkbox } = await triggerSubmitFormError();
    resetButton?.click();
    await waitUntil(() => !checkboxGroup?.invalid);
    Array.from(checkbox).map(c => expect(c.invalid).to.be.false);
  });

  const triggerErrorFromUnchecking = async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group required hasFeedback>
          <sit-checkbox value="he">he</sit-checkbox>
          <sit-checkbox value="him">him</sit-checkbox>
          <sit-checkbox value="she">she</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit">Submit</sit-button>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const checkbox = form.querySelectorAll<SitCheckbox>("SIT-checkbox");
    const checkboxGroup = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group");
    const resetButton = form.querySelector<SitButton>("SIT-button[type='reset']");

    checkbox[0].click();
    await waitUntil(() => checkbox[0].checked);

    checkbox[0].click();
    await waitUntil(() => !checkbox[0].checked);
    expect(checkboxGroup?.invalid).to.be.true;
    Array.from(checkbox).map(c => expect(c.invalid).to.be.true);
    return { form, checkbox, checkboxGroup, resetButton };
  };
  it("When unchecking checkboxes to be emmpty value, should show error", triggerErrorFromUnchecking);
  it("when setting reset should remove validation errors and restore checked boxes to default state", async () => {
    const { form, checkbox, checkboxGroup, resetButton } = await triggerErrorFromUnchecking();

    resetButton?.click();
    await waitUntil(() => !checkboxGroup?.invalid);
    Array.from(checkbox).map(c => expect(c.invalid).to.be.false);

    checkbox[1].click();
    expect(checkbox[1].checked).to.be.true;
    resetButton?.click();
    await waitUntil(() => checkboxGroup?.value === "");
    expect(checkboxGroup?.invalid).to.be.false; // failing
  });
  it("programmatically setting the checkboxgroup value should make a it pass form validtion", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group required hasFeedback>
          <sit-checkbox value="he">he</sit-checkbox>
          <sit-checkbox value="him">him</sit-checkbox>
          <sit-checkbox value="she">she</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit">Submit</sit-button>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);

    const group = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group") as SitCheckboxGroup;
    expect(group.checkValidity()).to.be.false;
    expect(form.checkValidity()).to.be.false;

    group!.value = "he;him";
    await elementUpdated(group);
    expect(group.checkValidity()).to.be.true;
    expect(form.checkValidity()).to.be.true;
  });
  it("resets to default value", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group required hasFeedback value="he">
          <sit-checkbox value="he">he</sit-checkbox>
          <sit-checkbox value="him">him</sit-checkbox>
          <sit-checkbox value="she">she</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit">Submit</sit-button>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);

    const group = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group") as SitCheckboxGroup;
    const checkboxes = form.querySelectorAll("SIT-checkbox") as NodeListOf<SitCheckbox>;
    group!.value = "he;him";
    await elementUpdated(group);

    expect(checkboxes[0].checked).to.be.true;
    expect(checkboxes[1].checked).to.be.true;
    expect(checkboxes[2].checked).to.be.false;

    const reset = form.querySelector("SIT-button[type='reset']") as SitButton;
    reset.click();

    await waitUntil(() => group!.value === "he");
    expect(checkboxes[0].checked).to.be.true;
    expect(checkboxes[1].checked).to.be.false;
    expect(checkboxes[2].checked).to.be.false;
  });
  // KEYBOARD
  it("when tabbing in and out a required checkbox group, it should turn invalid", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group required hasFeedback>
          <sit-checkbox value="he">he</sit-checkbox>
          <sit-checkbox value="him">him</sit-checkbox>
          <sit-checkbox value="she">she</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit">Submit</sit-button>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const group = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group");
    const [one, two, three] = form.querySelectorAll("SIT-checkbox");
    one.focus();
    await waitUntil(() => one.shadowRoot?.activeElement === one.shadowRoot?.querySelector("input"));
    await sendKeys({ press: "Tab" });
    await waitUntil(() => two.shadowRoot?.activeElement === two.shadowRoot?.querySelector("input"));
    await sendKeys({ press: "Tab" });
    expect(group?.invalid).to.be.false;
    await waitUntil(() => three.shadowRoot?.activeElement === three.shadowRoot?.querySelector("input"));
    await sendKeys({ press: "Tab" });
    await waitUntil(() => group?.invalid);
    // await elementUpdated(group!);
    expect(group?.invalid).to.be.true;
  });
});

describe("noValidate disables native and sit validation for standalone checkbox", () => {
  afterEach(() => fixtureCleanup());

  it("should override required and allow form submission when noValidate is set", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox noValidate required value="terms">I agree</sit-checkbox>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("SIT-button");
    const submitHandler = Sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("with noValidate, invalid state does not appear on blur when required and unchecked", async () => {
    const el = await fixture<SitCheckbox>(html`
      <sit-checkbox noValidate hasFeedback="both" required value="terms">I agree</sit-checkbox>
    `);
    el.input.focus();
    el.input.blur();
    await el.updateComplete;
    expect(el.invalid).to.be.false;
  });

  it("with noValidate, setInvalid(true) still works for programmatic control", async () => {
    const el = await fixture<SitCheckbox>(html`
      <sit-checkbox noValidate required hasFeedback="both" value="terms">I agree</sit-checkbox>
    `);
    el.setInvalid(true);
    el.invalidFeedback = "You must agree to the terms";
    await el.updateComplete;
    expect(el.invalid).to.be.true;
  });

  it("setInvalid(true) emits sit-invalid event", async () => {
    const el = await fixture<SitCheckbox>(html` <sit-checkbox noValidate value="terms">I agree</sit-checkbox> `);
    const handler = Sinon.spy();
    el.addEventListener("SIT-invalid", handler);
    el.setInvalid(true);
    await el.updateComplete;
    expect(handler).to.have.been.calledOnce;
  });

  it("setInvalid(false) emits sit-valid event", async () => {
    const el = await fixture<SitCheckbox>(html` <sit-checkbox noValidate value="terms">I agree</sit-checkbox> `);
    const handler = Sinon.spy();
    el.addEventListener("SIT-valid", handler);
    el.setInvalid(false);
    await el.updateComplete;
    expect(handler).to.have.been.calledOnce;
  });
});

describe("noValidate disables native and sit validation for checkbox-group", () => {
  afterEach(() => fixtureCleanup());

  it("should override required and allow form submission when noValidate is set", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group noValidate required hasFeedback>
          <sit-checkbox value="a">A</sit-checkbox>
          <sit-checkbox value="b">B</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("SIT-button");
    const submitHandler = Sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("with noValidate, invalid state does not appear after all checkboxes blurred", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group noValidate hasFeedback required>
        <sit-checkbox value="a">A</sit-checkbox>
        <sit-checkbox value="b">B</sit-checkbox>
      </sit-checkbox-group>
    `);
    const checkboxes = el.querySelectorAll("SIT-checkbox");
    checkboxes.forEach(cb => cb.dispatchEvent(new Event("SIT-blur", { bubbles: true })));
    await el.updateComplete;
    expect(el.invalid).to.be.false;
  });

  it("with noValidate, setInvalid(true) still works for programmatic control", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group noValidate required hasFeedback>
        <sit-checkbox value="a">A</sit-checkbox>
        <sit-checkbox value="b">B</sit-checkbox>
      </sit-checkbox-group>
    `);
    el.setInvalid(true);
    el.invalidFeedback = "Please select at least one option";
    await el.updateComplete;
    expect(el.invalid).to.be.true;
  });

  it("setInvalid(true) emits sit-invalid event", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group noValidate>
        <sit-checkbox value="a">A</sit-checkbox>
      </sit-checkbox-group>
    `);
    const handler = Sinon.spy();
    el.addEventListener("SIT-invalid", handler);
    el.setInvalid(true);
    await el.updateComplete;
    expect(handler).to.have.been.calledOnce;
  });

  it("setInvalid(false) emits sit-valid event", async () => {
    const el = await fixture<SitCheckboxGroup>(html`
      <sit-checkbox-group noValidate>
        <sit-checkbox value="a">A</sit-checkbox>
      </sit-checkbox-group>
    `);
    const handler = Sinon.spy();
    el.addEventListener("SIT-valid", handler);
    el.setInvalid(false);
    await el.updateComplete;
    expect(handler).to.have.been.calledOnce;
  });
});

describe("form novalidate for checkbox-group", () => {
  afterEach(() => fixtureCleanup());

  it("when form has novalidate, form submission proceeds even when checkbox-group is required", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-checkbox-group required>
          <sit-checkbox value="a">A</sit-checkbox>
          <sit-checkbox value="b">B</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("SIT-button");
    const submitHandler = Sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });
});

describe("reset clears invalid state when noValidate is true for checkbox-group", () => {
  afterEach(() => fixtureCleanup());

  it("reset clears programmatic invalid state when component has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group noValidate name="test">
          <sit-checkbox value="a">A</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const group = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group");
    group?.setInvalid(true);
    await group?.updateComplete;
    expect(group?.invalid).to.be.true;

    setTimeout(() => form.querySelector<SitButton>("SIT-button")?.click());
    await waitUntil(() => group?.invalid === false);
    expect(group?.invalid).to.be.false;
  });

  it("reset clears programmatic invalid state when form has novalidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-checkbox-group name="test">
          <sit-checkbox value="a">A</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const group = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group");
    group?.setInvalid(true);
    await group?.updateComplete;
    expect(group?.invalid).to.be.true;

    setTimeout(() => form.querySelector<SitButton>("SIT-button")?.click());
    await waitUntil(() => group?.invalid === false);
    expect(group?.invalid).to.be.false;
  });
});

describe("FormData is correct when sit-change fires for checkbox-group", () => {
  afterEach(() => fixtureCleanup());

  it("FormData should reflect the updated value inside sit-change listener", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group name="colors" value="">
          <sit-checkbox value="red">Red</sit-checkbox>
          <sit-checkbox value="blue">Blue</sit-checkbox>
        </sit-checkbox-group>
      </form>
    `);
    const group = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group")!;
    await group.updateComplete;

    let formDataValue: string | null = null;
    group.addEventListener("SIT-change", () => {
      const formData = new FormData(form);
      formDataValue = formData.get("colors") as string;
    });

    // Simulate user clicking "red" checkbox
    const redCheckbox = group.querySelector<SitCheckbox>('SIT-checkbox[value="red"]')!;
    redCheckbox.click();
    await group.updateComplete;

    expect(formDataValue).to.equal("red");
  });
});

describe("reset does not emit sit-change for checkbox-group", () => {
  afterEach(() => fixtureCleanup());

  it("should not emit sit-change when form is reset", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-checkbox-group noValidate name="test" value="a">
          <sit-checkbox value="a">A</sit-checkbox>
          <sit-checkbox value="b">B</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const group = form.querySelector<SitCheckboxGroup>("SIT-checkbox-group")!;
    await group.updateComplete;

    // Check "b" to change the value from default
    const bCheckbox = group.querySelector<SitCheckbox>('SIT-checkbox[value="b"]')!;
    bCheckbox.click();
    await group.updateComplete;

    const changeHandler = Sinon.spy();
    group.addEventListener("SIT-change", changeHandler);

    // Reset the form
    setTimeout(() => form.querySelector<SitButton>("SIT-button")?.click());
    await waitUntil(() => group.value === "a");
    await group.updateComplete;

    expect(changeHandler).to.not.have.been.called;
  });
});




