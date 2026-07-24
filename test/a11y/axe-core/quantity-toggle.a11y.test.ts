import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("QuantityToggle a11y", () => {
  it("sit-quantity-toggle should be accessible", async () => {
    const el = await fixture(html` <sit-quantity-toggle label="Quantity"></sit-quantity-toggle> `);
    await expect(el).to.be.accessible();
  });

  it("sit-quantity-toggle required should be accessible", async () => {
    const el = await fixture(html` <sit-quantity-toggle label="Quantity" required></sit-quantity-toggle> `);
    await expect(el).to.be.accessible();
  });

  it("sit-quantity-toggle readonly should be accessible", async () => {
    const el = await fixture(html` <sit-quantity-toggle label="Quantity" readonly value="5"></sit-quantity-toggle> `);
    await expect(el).to.be.accessible();
  });

  it("sit-quantity-toggle with hintText should be accessible", async () => {
    const el = await fixture(html`
      <sit-quantity-toggle label="Quantity" hintText="Enter a value between 1 and 10"></sit-quantity-toggle>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-quantity-toggle invalid with feedback should be accessible", async () => {
    const el = await fixture(html`
      <sit-quantity-toggle
        label="Quantity"
        invalid
        hasFeedback="both"
        invalidFeedback="Quantity must be at least 1"
      ></sit-quantity-toggle>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-quantity-toggle with min max step should be accessible", async () => {
    const el = await fixture(html`
      <sit-quantity-toggle label="Quantity" min="1" max="10" step="1"></sit-quantity-toggle>
    `);
    await expect(el).to.be.accessible();
  });
});
