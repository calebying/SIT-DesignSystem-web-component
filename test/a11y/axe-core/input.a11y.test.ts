import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Input a11y", () => {
  it("SIT-input should be accessible", async () => {
    const el = await fixture(html` <sit-input label="Full name" inputId="name-input"></sit-input> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-input with hint text should be accessible", async () => {
    const el = await fixture(html`
      <sit-input label="Email" inputId="email-input" hintText="Enter your work email"></sit-input>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-input required should be accessible", async () => {
    const el = await fixture(html` <sit-input label="Full name" inputId="required-input" required></sit-input> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-input readonly should be accessible", async () => {
    const el = await fixture(html`
      <sit-input label="Reference ID" inputId="readonly-input" readonly value="REF-12345"></sit-input>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-input invalid with feedback should be accessible", async () => {
    const el = await fixture(html`
      <sit-input
        label="Email"
        inputId="invalid-input"
        invalid
        hasFeedback="both"
        invalidFeedback="Please enter a valid email"
      ></sit-input>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-input type number should be accessible", async () => {
    const el = await fixture(html`
      <sit-input label="Age" inputId="number-input" type="number" min="0" max="120"></sit-input>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-input with prefix and suffix should be accessible", async () => {
    const el = await fixture(html`
      <sit-input label="Amount" inputId="prefix-input" prefix="$" suffix=".00"></sit-input>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-textarea should be accessible", async () => {
    const el = await fixture(html` <sit-textarea label="Comments" textareaId="comments-textarea"></sit-textarea> `);
    await expect(el).to.be.accessible();
  });
});



