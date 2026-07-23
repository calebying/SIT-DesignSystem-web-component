import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Dropdown a11y", () => {
  it("SIT-dropdown should be accessible", async () => {
    const el = await fixture(html`
      <sit-dropdown>
        <sit-button slot="toggler">Actions</sit-button>
        <sit-dropdown-item>Option 1</sit-dropdown-item>
        <sit-dropdown-item>Option 2</sit-dropdown-item>
        <sit-dropdown-item>Option 3</sit-dropdown-item>
      </sit-dropdown>
    `);
    await expect(el).to.be.accessible();
  });

  it("SIT-dropdown should set aria-haspopup and aria-expanded on toggler", async () => {
    const el = await fixture(html`
      <sit-dropdown>
        <sit-button slot="toggler">Actions</sit-button>
        <sit-dropdown-item>Option 1</sit-dropdown-item>
      </sit-dropdown>
    `);
    const toggler = el.querySelector("[slot='toggler']");
    expect(toggler).to.have.attribute("aria-haspopup", "menu");
    expect(toggler).to.have.attribute("aria-expanded", "false");
  });

  it("SIT-dropdown should update aria-expanded when menu opens", async () => {
    const el = await fixture(html`
      <sit-dropdown menuIsOpen>
        <sit-button slot="toggler">Actions</sit-button>
        <sit-dropdown-item>Option 1</sit-dropdown-item>
      </sit-dropdown>
    `);
    const toggler = el.querySelector("[slot='toggler']");
    expect(toggler).to.have.attribute("aria-expanded", "true");
  });

  it("SIT-overflow-menu should be accessible", async () => {
    const el = await fixture(html`
      <sit-overflow-menu>
        <sit-dropdown-item>View</sit-dropdown-item>
        <sit-dropdown-item>Edit</sit-dropdown-item>
        <sit-dropdown-item>Delete</sit-dropdown-item>
      </sit-overflow-menu>
    `);
    await expect(el).to.be.accessible();
  });
});



