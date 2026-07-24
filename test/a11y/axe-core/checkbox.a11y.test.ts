import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Checkbox a11y", () => {
  it("sit-checkbox should be accessible", async () => {
    const el = await fixture(html` <sit-checkbox name="agree" value="yes">I agree to the terms</sit-checkbox> `);
    await expect(el).to.be.accessible();
  });

  it("sit-checkbox required should be accessible", async () => {
    const el = await fixture(html`
      <sit-checkbox name="agree" value="yes" required>I agree to the terms</sit-checkbox>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-checkbox checked should be accessible", async () => {
    const el = await fixture(html`
      <sit-checkbox name="agree" value="yes" checked>I agree to the terms</sit-checkbox>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-checkbox indeterminate should be accessible", async () => {
    const el = await fixture(html`
      <sit-checkbox name="select-all" value="all" indeterminate>Select all</sit-checkbox>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-checkbox-group should be accessible", async () => {
    const el = await fixture(html`
      <sit-checkbox-group label="Select options">
        <sit-checkbox name="options" value="a">Option A</sit-checkbox>
        <sit-checkbox name="options" value="b">Option B</sit-checkbox>
      </sit-checkbox-group>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-checkbox-group with hintText should be accessible", async () => {
    const el = await fixture(html`
      <sit-checkbox-group label="Select options" hintText="Select at least one option">
        <sit-checkbox name="options" value="a">Option A</sit-checkbox>
        <sit-checkbox name="options" value="b">Option B</sit-checkbox>
      </sit-checkbox-group>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-checkbox-group invalid with feedback should be accessible", async () => {
    const el = await fixture(html`
      <sit-checkbox-group
        label="Select options"
        invalid
        hasFeedback
        invalidFeedback="Please select at least one option"
      >
        <sit-checkbox name="options" value="a">Option A</sit-checkbox>
        <sit-checkbox name="options" value="b">Option B</sit-checkbox>
      </sit-checkbox-group>
    `);
    await expect(el).to.be.accessible();
  });
});
