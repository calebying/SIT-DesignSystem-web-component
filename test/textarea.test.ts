import { assert, expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import sinon from "sinon";
import type { SitButton, SitTextarea } from "../src/components";
import "./sit-web-component";
import { sendKeys } from "@web/test-runner-commands";

describe("SIT-textarea", () => {
  it("renders with default values", async () => {
    const el = await fixture<SitTextarea>(html`<sit-textarea maxlength="10" required></sit-textarea>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="form-control-container m-width-256">
        <label class="form-label"></label>
        <textarea class=" form-control-group textarea-resize-vertical "  rows="4" placeholder="Placeholder" maxlength="10" aria-invalid="false" spellcheck="false" required=""></textarea>
        <div class="textarea-info-container">
          <div class="form-text word-count">0/10</div>
        </div>
      </div>
    `,
      { ignoreAttributes: ["id", "for"] }
    );
  });
  it("label for attr should equal to textarea id attribute", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea></sit-textarea> `);
    const label = el.shadowRoot?.querySelector("label");
    const textarea = el.shadowRoot?.querySelector("textarea");
    expect(label?.getAttribute("for")).to.equal(textarea?.getAttribute("id"));
  });
  it("when invalid feedback element is in shadowm dom, its div id should contain same id value as textarea", async () => {
    const el = await fixture<SitTextarea>(
      html` <sit-textarea hasFeedback invalid invalidFeedback="test"></sit-textarea> `
    );
    const feedback = el.shadowRoot?.querySelector("div.invalid-feedback");
    const textarea = el.shadowRoot?.querySelector("textarea");
    expect(feedback?.getAttribute("id")).to.contain(textarea?.getAttribute("id"));
  });
  it("should be disabled with the disabled attribute", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea disabled></sit-textarea> `);
    const textarea = el.shadowRoot?.querySelector<HTMLTextAreaElement>("textarea");

    expect(textarea?.disabled).to.be.true;
  });

  it("should focus the textarea when clicking on the label", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea label="Name"></sit-textarea> `);
    const label = el.shadowRoot?.querySelector(".form-label");
    const submitHandler = sinon.spy();

    el.addEventListener("SIT-focus", submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });
  it("when hasFeedback is true and invalidFeedback specified, div.invalid-feedback appears", async () => {
    const el = await fixture<SitTextarea>(
      html` <sit-textarea label="Name" invalid hasFeedback invalidFeedback="test"></sit-textarea> `
    );
    expect(el.shadowRoot?.querySelector("div.invalid-feedback")).to.exist;
  });
  it("when hasFeedback is true, div.invalid-feedback appears and invalidFeedback value is forwarded to it", async () => {
    const el = await fixture<SitTextarea>(html`
      <sit-textarea label="Name" invalid hasFeedback invalidFeedback="teast"></sit-textarea>
    `);
    expect(el.shadowRoot?.querySelector("div.invalid-feedback")).to.exist;
    expect(el.shadowRoot?.querySelector("div.invalid-feedback")?.textContent).to.contain("teast");
  });

  it(".is-invalid appears on textarea when hasFeedback and state of component is invalid", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea label="Name" hasFeedback></sit-textarea> `);
    const textarea = el.shadowRoot?.querySelector("textarea");
    expect(textarea?.className).not.to.include("is-invalid");

    //force an invalid state
    el.invalid = true;
    await el.updateComplete;
    expect(textarea?.className).to.include("is-invalid");
  });
});

describe("when using constraint validation", () => {
  it("should be valid by default", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea></sit-textarea> `);
    expect(el.invalid).to.be.false;
  });

  it("should be valid when required and empty by default", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea required></sit-textarea> `);

    expect(el.invalid).to.be.false;
  });

  it("when disabled, invalid state is removed", async () => {
    const el = await fixture<SitTextarea>(
      html` <sit-textarea invalid invalidFeedback="test" hasFeedback required></sit-textarea> `
    );
    expect(el.invalid).to.be.true;
    el.disabled = true;
    await el.updateComplete;
    expect(el.invalid).to.be.false;
    el.disabled = false;
    expect(el.invalid).to.be.false;
  });
});

describe("when resetting a form", () => {
  it("should reset the element to its initial value", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea name="a" value="test"></sit-textarea>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const button = form.querySelector<SitButton>("SIT-button");
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");
    if (textarea) textarea.value = "1234";

    await textarea?.updateComplete;

    setTimeout(() => button?.click());
    await oneEvent(form, "reset");
    await textarea?.updateComplete;

    expect(textarea?.value).to.equal("test");

    if (textarea) textarea.defaultValue = "";

    setTimeout(() => button?.click());
    await oneEvent(form, "reset");
    await textarea?.updateComplete;

    expect(textarea?.value).to.equal("");
  });
});

describe("when maxlength is declared", () => {
  it("form text should exist", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea required maxlength="250"></sit-textarea> `);
    const formtext = el.shadowRoot?.querySelector(".form-text");

    expect(formtext).to.exist;
    expect(formtext?.textContent).to.contain("0/250");

    el.setAttribute("maxlength", "300");
    await el.updateComplete;

    expect(formtext).to.exist;
    expect(formtext?.textContent).to.contain("0/300");
  });
});

describe("Feedback UI optional", () => {
  it("when hasFeedback and invalid is true, div.invalid-feedback appears in shadowDOM", async () => {
    const el = await fixture<SitTextarea>(
      html` <sit-textarea hasFeedback invalid invalidFeedback="invalid feedback"></sit-textarea> `
    );
    expect(el.shadowRoot?.querySelector("div.invalid-feedback")).not.to.be.null;
    expect(el.shadowRoot?.querySelector("div.invalid-feedback")?.textContent).to.contain("invalid feedback");
  });
  it("when hasFeedback is true and invalid state is true, invalid stylings", async () => {
    const el = await fixture<SitTextarea>(
      html` <sit-textarea hasFeedback invalidFeedback="invalid feedback"></sit-textarea> `
    );
    expect(el.invalid).to.be.false;
    expect(el.shadowRoot?.querySelector("textarea")).does.not.have.class("is-invalid");
    //force an invalid state
    el.invalid = true;
    expect(el.invalid).to.be.true;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector("textarea")).to.have.class("is-invalid");

    // //force an valid state
    el.invalid = false;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector("textarea")).does.not.have.class("is-invalid");
  });
});

describe("Validaiton", () => {
  it("fulfills required validation", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea required value="test"></sit-textarea>
      </form>
    `);
    expect(form.reportValidity()).to.be.true;
  });
  it("fulfills required validation", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea required value=""></sit-textarea>
      </form>
    `);
    expect(form.reportValidity()).to.be.false;
  });
  it("validates when touched", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea required></sit-textarea> `);
    expect(el.invalid).to.be.false;
    el.focus();
    el.blur();
    await el.updateComplete;
    expect(el.invalid).to.be.true;
  });
  it("validation is reset when typing occurs", async () => {
    const el = await fixture<SitTextarea>(html` <sit-textarea required></sit-textarea> `);
    expect(el.invalid).to.be.false;
    el.focus();
    el.blur();
    await el.updateComplete;
    expect(el.invalid).to.be.true;

    el.focus();
    await sendKeys({ press: "A" });
    await el.updateComplete;
    expect(el.invalid).to.be.false;
  });
  it("form resets works on textarea", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea required value=""></sit-textarea>
      </form>
    `);

    const textarea = form.querySelector("SIT-textarea");
    textarea?.focus();
    await sendKeys({ press: "A" });
    await waitUntil(() => textarea?.value === "A");

    form.reset();

    await waitUntil(() => textarea?.value === "");
    expect(textarea?.value).to.equal("");
  });
  it("form resets resets validity on textarea", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea invalid invalidFeedback="test" hasFeedback></sit-textarea>
      </form>
    `);
    const textarea = form.querySelector("SIT-textarea");
    form.reset();

    await waitUntil(() => !textarea?.invalid);
    expect(textarea?.invalid).to.be.false;
  });
});

describe("noValidate disables native and sit validation behaviours", () => {
  it("should disable native validation when textarea has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea noValidate></sit-textarea>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);

    const button = form.querySelector<SitButton>("SIT-button");
    button?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("should override required prop and disable native validation when textarea has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea noValidate required></sit-textarea>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);

    const button = form.querySelector<SitButton>("SIT-button");
    button?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("should override minlength prop and disable native validation when textarea has noValidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea noValidate minlength="10"></sit-textarea>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");
    if (textarea) textarea.value = "short";
    await textarea?.updateComplete;
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    form.addEventListener("submit", submitHandler);

    const button = form.querySelector<SitButton>("SIT-button");
    button?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("with noValidate, feedback UI does not appear for a required textarea when touched", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea noValidate hasFeedback required></sit-textarea>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");
    textarea?.focus();
    textarea?.blur();
    await textarea?.updateComplete;
    expect(textarea?.invalid).to.be.false;
    expect(textarea?.shadowRoot?.querySelector("div.invalid-feedback")).to.be.null;
  });

  it("should still populate FormData when noValidate is enabled", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea noValidate name="test-field" value="test-value"></sit-textarea>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");
    const submitButton = form.querySelector<SitButton>("SIT-button");
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

  it("should update FormData when textarea value changes with noValidate enabled", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sit-textarea noValidate name="test-field" value="initial"></sit-textarea>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");

    if (textarea) textarea.value = "updated-value";
    await textarea?.updateComplete;

    const submitButton = form.querySelector<SitButton>("SIT-button");
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
        <sit-textarea noValidate name="test"></sit-textarea>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");
    textarea?.setInvalid(true);
    await textarea?.updateComplete;
    expect(textarea?.invalid).to.be.true;

    form.querySelector<SitButton>("SIT-button")?.click();
    await waitUntil(() => textarea?.invalid === false);
    expect(textarea?.invalid).to.be.false;
  });

  it("reset clears programmatic invalid state when form has novalidate", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-textarea name="test"></sit-textarea>
        <sit-button type="reset">Reset</sit-button>
      </form>
    `);
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");
    textarea?.setInvalid(true);
    await textarea?.updateComplete;
    expect(textarea?.invalid).to.be.true;

    form.querySelector<SitButton>("SIT-button")?.click();
    await waitUntil(() => textarea?.invalid === false);
    expect(textarea?.invalid).to.be.false;
  });
});

describe("form novalidate", () => {
  it("when form has novalidate, form submission proceeds even when textarea is required", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-textarea required></sit-textarea>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("SIT-button");
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
    expect(form.reportValidity()).to.equal(true);
    form.addEventListener("submit", submitHandler);
    submitButton?.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(submitHandler).to.have.been.calledOnce;
  });

  it("when form has novalidate, textarea does not have any validation stylings", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-textarea required hasFeedback></sit-textarea>
        <sit-button type="submit"></sit-button>
      </form>
    `);
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");
    textarea?.focus();
    textarea?.blur();
    await textarea?.updateComplete;
    expect(textarea?.invalid).to.be.false;
    expect(textarea?.shadowRoot?.querySelector("div.invalid-feedback")).to.be.null;
  });

  it("should still populate FormData when form has novalidate attribute", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-textarea name="test-field" value="test-value"></sit-textarea>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const submitButton = form.querySelector<SitButton>("SIT-button");
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

  it("should update FormData when textarea value changes with form novalidate attribute", async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form novalidate>
        <sit-textarea name="test-field" value="initial"></sit-textarea>
        <sit-button type="submit">Submit</sit-button>
      </form>
    `);
    const textarea = form.querySelector<SitTextarea>("SIT-textarea");

    if (textarea) textarea.value = "updated-value";
    await textarea?.updateComplete;

    const submitButton = form.querySelector<SitButton>("SIT-button");
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



