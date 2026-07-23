import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Datepicker a11y", () => {
  it("SIT-datepicker should be accessible", async () => {
    const el = await fixture(html` <sit-datepicker label="Select date"></sit-datepicker> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-datepicker required should be accessible", async () => {
    const el = await fixture(html` <sit-datepicker label="Date of birth" required></sit-datepicker> `);
    await expect(el).to.be.accessible();
  });

  it("SIT-datepicker readonly should be accessible", async () => {
    const el = await fixture(
      html` <sit-datepicker label="Event date" readonly value="2024-01-15"></sit-datepicker> `
    );
    await expect(el).to.be.accessible();
  });

  it("SIT-datepicker with hintText should be accessible", async () => {
    const el = await fixture(html`
      <sit-datepicker label="Start date" hintText="Select your preferred start date"></sit-datepicker>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-datepicker invalid with feedback should be accessible", async () => {
    const el = await fixture(html`
      <sit-datepicker
        label="Select date"
        invalid
        hasFeedback
        invalidFeedback="Please select a valid date"
      ></sit-datepicker>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-datepicker range mode should be accessible", async () => {
    const el = await fixture(html` <sit-datepicker label="Select date range" mode="range"></sit-datepicker> `);
    await expect(el).to.be.accessible();
  });
});



