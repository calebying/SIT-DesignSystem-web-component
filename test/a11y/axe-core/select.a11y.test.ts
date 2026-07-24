import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Select a11y", () => {
  it("sit-select with slot children should be accessible", async () => {
    const el = await fixture(html`
      <sit-select label="Choose a country">
        <sit-select-option value="sg">Singapore</sit-select-option>
        <sit-select-option value="my">Malaysia</sit-select-option>
        <sit-select-option value="id">Indonesia</sit-select-option>
      </sit-select>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-select required should be accessible", async () => {
    const el = await fixture(html`
      <sit-select label="Choose a country" required>
        <sit-select-option value="sg">Singapore</sit-select-option>
        <sit-select-option value="my">Malaysia</sit-select-option>
        <sit-select-option value="id">Indonesia</sit-select-option>
      </sit-select>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-select readonly should be accessible", async () => {
    const el = await fixture(html`
      <sit-select label="Choose a country" readonly value="sg">
        <sit-select-option value="sg">Singapore</sit-select-option>
        <sit-select-option value="my">Malaysia</sit-select-option>
        <sit-select-option value="id">Indonesia</sit-select-option>
      </sit-select>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-select with hintText should be accessible", async () => {
    const el = await fixture(html`
      <sit-select label="Choose a country" hintText="Select your country of residence">
        <sit-select-option value="sg">Singapore</sit-select-option>
        <sit-select-option value="my">Malaysia</sit-select-option>
        <sit-select-option value="id">Indonesia</sit-select-option>
      </sit-select>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-select invalid with feedback should be accessible", async () => {
    const el = await fixture(html`
      <sit-select label="Choose a country" invalid hasFeedback invalidFeedback="Please select a country">
        <sit-select-option value="sg">Singapore</sit-select-option>
        <sit-select-option value="my">Malaysia</sit-select-option>
        <sit-select-option value="id">Indonesia</sit-select-option>
      </sit-select>
    `);
    await expect(el).to.be.accessible();
  });
});
