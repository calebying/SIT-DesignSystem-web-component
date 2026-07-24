import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Radio a11y", () => {
  it("sit-radio-group should be accessible", async () => {
    const el = await fixture(html`
      <sit-radio-group label="Choose an option" name="option">
        <sit-radio value="a">Option A</sit-radio>
        <sit-radio value="b">Option B</sit-radio>
        <sit-radio value="c">Option C</sit-radio>
      </sit-radio-group>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-radio-group required should be accessible", async () => {
    const el = await fixture(html`
      <sit-radio-group label="Choose an option" name="option-required" required>
        <sit-radio value="a">Option A</sit-radio>
        <sit-radio value="b">Option B</sit-radio>
        <sit-radio value="c">Option C</sit-radio>
      </sit-radio-group>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-radio-group with pre-selected value should be accessible", async () => {
    const el = await fixture(html`
      <sit-radio-group label="Choose an option" name="option-preselected" value="b">
        <sit-radio value="a">Option A</sit-radio>
        <sit-radio value="b">Option B</sit-radio>
        <sit-radio value="c">Option C</sit-radio>
      </sit-radio-group>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-radio-group with hintText should be accessible", async () => {
    const el = await fixture(html`
      <sit-radio-group label="Choose an option" name="option-hint" hintText="Select one option only">
        <sit-radio value="a">Option A</sit-radio>
        <sit-radio value="b">Option B</sit-radio>
        <sit-radio value="c">Option C</sit-radio>
      </sit-radio-group>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-radio-group invalid with feedback should be accessible", async () => {
    const el = await fixture(html`
      <sit-radio-group
        label="Choose an option"
        name="option-invalid"
        invalid
        hasFeedback
        invalidFeedback="Please select an option"
      >
        <sit-radio value="a">Option A</sit-radio>
        <sit-radio value="b">Option B</sit-radio>
        <sit-radio value="c">Option C</sit-radio>
      </sit-radio-group>
    `);
    await expect(el).to.be.accessible();
  });
});
