import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("ComboBox a11y", () => {
  it("SIT-combo-box with slot children should be accessible", async () => {
    const el = await fixture(html`
      <sit-combo-box label="Select a fruit">
        <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
        <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
        <sit-combo-box-option value="cherry">Cherry</sit-combo-box-option>
      </sit-combo-box>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-combo-box required should be accessible", async () => {
    const el = await fixture(html`
      <sit-combo-box label="Select a fruit" required>
        <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
        <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
        <sit-combo-box-option value="cherry">Cherry</sit-combo-box-option>
      </sit-combo-box>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-combo-box readonly should be accessible", async () => {
    const el = await fixture(html`
      <sit-combo-box label="Select a fruit" readonly value="apple">
        <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
        <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
        <sit-combo-box-option value="cherry">Cherry</sit-combo-box-option>
      </sit-combo-box>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-combo-box with hintText should be accessible", async () => {
    const el = await fixture(html`
      <sit-combo-box label="Select a fruit" hintText="Start typing to filter options">
        <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
        <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
        <sit-combo-box-option value="cherry">Cherry</sit-combo-box-option>
      </sit-combo-box>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-combo-box invalid with feedback should be accessible", async () => {
    const el = await fixture(html`
      <sit-combo-box label="Select a fruit" invalid hasFeedback invalidFeedback="Please select a fruit">
        <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
        <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
        <sit-combo-box-option value="cherry">Cherry</sit-combo-box-option>
      </sit-combo-box>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-combo-box multiSelect should be accessible", async () => {
    const el = await fixture(html`
      <sit-combo-box label="Select fruits" multiSelect>
        <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
        <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
        <sit-combo-box-option value="cherry">Cherry</sit-combo-box-option>
      </sit-combo-box>
    `);
    await expect(el).to.be.accessible();
  });
});



