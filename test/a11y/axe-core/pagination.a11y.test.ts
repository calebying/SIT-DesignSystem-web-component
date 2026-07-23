import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Pagination a11y", () => {
  it("default variant with icon-button navigation should be accessible", async () => {
    const el = await fixture(html` <sit-pagination dataLength="50" itemsPerPage="10"></sit-pagination> `);
    await expect(el).to.be.accessible();
  });

  it("number variant should be accessible", async () => {
    const el = await fixture(
      html` <sit-pagination variant="number" dataLength="50" itemsPerPage="10"></sit-pagination> `
    );
    await expect(el).to.be.accessible();
  });

  it("button variant with icon-button navigation should be accessible", async () => {
    const el = await fixture(
      html`
        <sit-pagination variant="button" dataLength="30" itemsPerPage="10" navigation="icon-button"></sit-pagination>
      `
    );
    await expect(el).to.be.accessible();
  });

  it("button variant with text button navigation should be accessible", async () => {
    const el = await fixture(
      html` <sit-pagination variant="button" dataLength="30" itemsPerPage="10" navigation="button"></sit-pagination> `
    );
    await expect(el).to.be.accessible();
  });

  it("description variant with icon-button navigation should be accessible", async () => {
    const el = await fixture(
      html`
        <sit-pagination
          variant="description"
          dataLength="50"
          itemsPerPage="10"
          navigation="icon-button"
        ></sit-pagination>
      `
    );
    await expect(el).to.be.accessible();
  });

  it("description variant with text button navigation should be accessible", async () => {
    const el = await fixture(
      html`
        <sit-pagination variant="description" dataLength="50" itemsPerPage="10" navigation="button"></sit-pagination>
      `
    );
    await expect(el).to.be.accessible();
  });

  it("small size should be accessible", async () => {
    const el = await fixture(html` <sit-pagination size="sm" dataLength="40" itemsPerPage="10"></sit-pagination> `);
    await expect(el).to.be.accessible();
  });
});



