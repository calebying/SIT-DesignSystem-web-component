import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Accordion a11y", () => {
  it("SIT-accordion should be accessible", async () => {
    const el = await fixture(html`
      <sit-accordion>
        <sit-accordion-item ariaLabel="Accordion title #1">
          <div slot="header">Accordion title #1</div>
          <div slot="content">Content for item 1</div>
        </sit-accordion-item>
        <sit-accordion-item ariaLabel="Accordion title #2">
          <div slot="header">Accordion title #2</div>
          <div slot="content">Content for item 2</div>
        </sit-accordion-item>
        <sit-accordion-item ariaLabel="Accordion title #3">
          <div slot="header">Accordion title #3</div>
          <div slot="content">Content for item 3</div>
        </sit-accordion-item>
      </sit-accordion>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-accordion-item (open) should be accessible", async () => {
    const el = await fixture(html`
      <sit-accordion-item open ariaLabel="Accordion title">
        <div slot="header">Accordion title</div>
        <div slot="content">Accordion content</div>
      </sit-accordion-item>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-accordion-item (closed) should be accessible", async () => {
    const el = await fixture(html`
      <sit-accordion-item ariaLabel="Accordion title">
        <div slot="header">Accordion title</div>
        <div slot="content">Accordion content</div>
      </sit-accordion-item>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-accordion-item (disabled) should be accessible", async () => {
    const el = await fixture(html`
      <sit-accordion-item disabled ariaLabel="Disabled accordion">
        <div slot="header">Disabled accordion</div>
        <div slot="content">This item is disabled</div>
      </sit-accordion-item>
    `);
    await expect(el).to.be.accessible();
  });
});



