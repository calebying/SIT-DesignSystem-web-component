import { assert, expect, fixture } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import { html } from "lit";
import Sinon from "sinon";
import { SitIcon, SitIconButton, SitSpinner } from "../src/components";
import "../src/index";

describe("<sit-icon-button>", () => {
  it("semantically matches the DOM", async () => {
    // Mock fetch to prevent network requests
    const fetchStub = Sinon.stub(window, "fetch").resolves(
      new Response("<svg></svg>", { status: 200, headers: { "Content-Type": "image/svg+xml" } })
    );

    const el = await fixture<SitIconButton>(html`<sit-icon-button name="placeholder"></sit-icon-button>`);
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <button
      aria-disabled="false"
      class="btn btn-icon btn-primary btn-md"
      tabindex="0"
      type="button">
        <sit-icon name="placeholder" size="lg"></sit-icon>
      </button>
      `
    );

    // Restore the stubbed fetch method
    fetchStub.restore();
  });
  const mappedSize = [
    { btnSize: "xs", iconSize: "sm" },
    { btnSize: "sm", iconSize: "md" },
    { btnSize: "md", iconSize: "lg" },
    { btnSize: "lg", iconSize: "xl" }
  ];
  mappedSize.forEach(({ btnSize, iconSize }) => {
    it(`when icon button size is ${btnSize}, expected icon size is ${iconSize}`, async () => {
      const el = await fixture<SitIconButton>(
        html`<sit-icon-button size=${btnSize} name="placeholder"></sit-icon-button>`
      );
      const icon = el.shadowRoot?.querySelector("SIT-icon") as SitIcon;
      expect(icon.size).to.equal(iconSize);
    });
  });

  const mappedIconButtonToSpinnerSize = [
    { btnSize: "xs", spinnerSize: "xs" },
    { btnSize: "sm", spinnerSize: "xs" },
    { btnSize: "md", spinnerSize: "sm" },
    { btnSize: "lg", spinnerSize: "sm" }
  ];
  mappedIconButtonToSpinnerSize.forEach(({ btnSize, spinnerSize }) => {
    it(`when icon button size is ${btnSize}, expected spinner size is ${spinnerSize}`, async () => {
      const el = await fixture<SitIconButton>(
        html`<sit-icon-button size=${btnSize} loading name="placeholder"></sit-icon-button>`
      );
      const spinner = el.shadowRoot?.querySelector("SIT-spinner") as SitSpinner;
      expect(spinner.size).to.equal(spinnerSize);
    });
  });
  it("renders an anchor tag when href is provided", async () => {
    // Mock fetch to prevent network requests
    const fetchStub = Sinon.stub(window, "fetch").resolves(
      new Response("<svg></svg>", { status: 200, headers: { "Content-Type": "image/svg+xml" } })
    );

    const el = await fixture<SitIconButton>(
      html`<sit-icon-button href="https://example.com" name="placeholder"></sit-icon-button>`
    );
    const anchorTag = el.shadowRoot?.querySelector("a");
    expect(anchorTag).to.exist;
    expect(anchorTag).to.have.attribute("href", "https://example.com");
    expect(anchorTag).to.have.attribute("role", "button");
    expect(anchorTag).not.to.have.attribute("type", "button");
    expect(el.shadowRoot?.querySelector("button")).not.to.exist;

    // Restore the stubbed fetch method
    fetchStub.restore();
  });

  it("applies correct attributes when rendering an anchor tag", async () => {
    // Mock fetch to prevent network requests
    const fetchStub = Sinon.stub(window, "fetch").resolves(
      new Response("<svg></svg>", { status: 200, headers: { "Content-Type": "image/svg+xml" } })
    );

    const el = await fixture(
      html`<sit-icon-button href="https://example.com" target="_blank" download="example.pdf" name="placeholder">
      </sit-icon-button>`
    );
    const anchor = el.shadowRoot?.querySelector("a");
    expect(anchor).to.have.attribute("href", "https://example.com");
    expect(anchor).to.have.attribute("target", "_blank");
    expect(anchor).to.have.attribute("download", "example.pdf");
    expect(anchor).to.have.attribute("rel", "noreferrer noopener");

    // Restore the stubbed fetch method
    fetchStub.restore();
  });

  it("applies the correct classes for size and variant", async () => {
    // Mock fetch to prevent network requests
    const fetchStub = Sinon.stub(window, "fetch").resolves(
      new Response("<svg></svg>", { status: 200, headers: { "Content-Type": "image/svg+xml" } })
    );

    const el = await fixture<SitIconButton>(
      html`<sit-icon-button size="lg" variant="primary" name="placeholder"></sit-icon-button>`
    );
    const button = el.shadowRoot?.querySelector("button");
    expect(button).to.have.class("btn-icon");
    expect(button).to.have.class("btn-primary");
    expect(button).to.have.class("btn-lg");

    // Restore the stubbed fetch method
    fetchStub.restore();
  });

  it("sets disabled attribute correctly", async () => {
    // Mock fetch to prevent network requests
    const fetchStub = Sinon.stub(window, "fetch").resolves(
      new Response("<svg></svg>", { status: 200, headers: { "Content-Type": "image/svg+xml" } })
    );

    const el = await fixture<SitIconButton>(html`<sit-icon-button disabled name="placeholder"></sit-icon-button>`);
    const button = el.shadowRoot?.querySelector("button");
    expect(button).to.have.attribute("disabled");
    expect(button).to.have.attribute("aria-disabled", "true");

    // Restore the stubbed fetch method
    fetchStub.restore();
  });

  it("does not allow interaction when disabled", async () => {
    const el = await fixture(html`<sit-icon-button disabled name="placeholder"></sit-icon-button>`);
    const button = el.shadowRoot?.querySelector("button");
    expect(button).attribute("tabindex").to.equal("-1");

    let clicked = false;
    el.addEventListener("click", () => (clicked = true));
    button?.click();
    expect(clicked).to.be.false;
  });

  it("handles focus and blur events", async () => {
    const el = await fixture(html`<sit-icon-button name="placeholder"></sit-icon-button>`);
    const button = el.shadowRoot?.querySelector("button");
    let focused = false;
    let blurred = false;
    el.addEventListener("SIT-focus", () => (focused = true));
    el.addEventListener("SIT-blur", () => (blurred = true));

    button?.focus();
    expect(focused).to.be.true;

    button?.blur();
    expect(blurred).to.be.true;
  });
  it("loading is true, spinner replaces the icon", async () => {
    const el = await fixture(html`<sit-icon-button name="placeholder" loading></sit-icon-button>`);
    const icon = el.shadowRoot?.querySelector("SIT-icon");
    const spinner = el.shadowRoot?.querySelector("SIT-spinner");
    expect(spinner).to.exist;
    expect(icon).not.to.exist;
  });
  it("loading is true, aria-label set to Loading, aria-disabled is true, .disabled.loading styles are set", async () => {
    const el = await fixture(html`<sit-icon-button name="placeholder" loading></sit-icon-button>`);
    const button = el.shadowRoot?.querySelector("button");
    expect(button).to.have.attribute("aria-label", "Loading");
    expect(button).to.have.attribute("aria-disabled", "true");
    expect(button).to.have.class("loading");
  });
  it("loading is true, onclick handler are disabled", async () => {
    const el = await fixture<SitIconButton>(
      html`<sit-icon-button
        name="placeholder"
        ?loading=${true}
        onclick=${() => console.log("click")}
      ></sit-icon-button>`
    );
    const button = el.shadowRoot?.querySelector<HTMLButtonElement>("button");

    let clicked = false;
    el.addEventListener("click", () => (clicked = true));
    button?.click();
    expect(clicked).to.be.false;

    el.loading = false;
    await el.updateComplete;
    button?.click();
    expect(clicked).to.be.true;
  });
  it("loading is true, keydown enter handler are disabled", async () => {
    const el = await fixture<SitIconButton>(
      html`<sit-icon-button
        name="placeholder"
        loading
        onkeydown=${(e: KeyboardEvent) => (e.key === "Enter" ? console.log("enter") : null)}
      ></sit-icon-button>`
    );
    const button = el.shadowRoot?.querySelector<HTMLButtonElement>("button");
    let enter = false;
    el.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        enter = true;
      }
    });
    button?.focus();
    await sendKeys({ press: "Enter" });
    expect(enter).to.be.false;

    el.loading = false;
    await el.updateComplete;

    button?.focus();
    await sendKeys({ press: "Enter" });
    expect(enter).to.be.true;
  });
});


