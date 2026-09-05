import "./sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";
import type { SitSpinner } from "../src/components";

describe("<sit-spinner>", () => {
  it("should have default class of 'spinner-wrapper__spinner--md' if no size attribute define", async () => {
    const el = await fixture<SitSpinner>(html`<sit-spinner></sit-spinner>`);
    const base = el.shadowRoot?.querySelector<HTMLElement>('[role="status"]');
    expect(base).to.have.class("spinner-wrapper__spinner--md");
  });

  it("should have class of 'spinner-wrapper__spinner--sm' if size='sm'", async () => {
    const el = await fixture(html`<sit-spinner size="sm"></sit-spinner>`);
    const base = el.shadowRoot?.querySelector<HTMLElement>('[role="status"]');
    expect(base).to.have.class("spinner-wrapper__spinner--sm");
  });

  it("should have class of 'spinner-wrapper__spinner--lg' if size='lg'", async () => {
    const el = await fixture(html`<sit-spinner size="lg"></sit-spinner>`);
    const base = el.shadowRoot?.querySelector<HTMLElement>('[role="status"]');
    expect(base).to.have.class("spinner-wrapper__spinner--lg");
  });
  it("span.sr-only should exist when there is no label", async () => {
    const el = await fixture(html`<sit-spinner></sit-spinner>`);
    const screenReaderOnly = el.shadowRoot?.querySelector<HTMLElement>("span.sr-only");
    expect(screenReaderOnly).to.exist;
    expect(screenReaderOnly?.textContent).to.equal("Loading...");
    // spinner-wrapper__label does not exist when label prop is not defined
    const spinnerLabel = el.shadowRoot?.querySelector(".spinner-wrapper__label");
    expect(spinnerLabel).not.to.exist;
  });
  it("span.sr-only should NOT exist when there is a label", async () => {
    const el = await fixture(html`<sit-spinner label="Loading"></sit-spinner>`);
    const screenReaderOnly = el.shadowRoot?.querySelector<HTMLElement>("span.sr-only");
    expect(screenReaderOnly).not.to.exist;

    const spinnerLabel = el.shadowRoot?.querySelector(".spinner-wrapper__label");
    expect(spinnerLabel).to.exist;
    expect(spinnerLabel?.textContent).to.equal("Loading");
  });
  it("when orientation='horizontal', should render modifier class 'spinner-wrapper--horizontal'", async () => {
    const el = await fixture(html`<sit-spinner label="Loading" orientation="horizontal"></sit-spinner>`);
    const wrapper = el.shadowRoot?.querySelector<HTMLElement>(".spinner-wrapper");
    expect(wrapper).to.have.class("spinner-wrapper--horizontal");
  });
});
