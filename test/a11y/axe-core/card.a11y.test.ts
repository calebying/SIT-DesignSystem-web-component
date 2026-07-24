import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Card a11y", () => {
  it("sit-card should be accessible", async () => {
    const el = await fixture(html`
      <sit-card>
        <span slot="title">Card title</span>
        <p slot="description">Card description</p>
      </sit-card>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-icon-card should be accessible", async () => {
    const el = await fixture(html`
      <sit-icon-card>
        <sit-icon slot="icon" name="box-seam" size="3-xl"></sit-icon>
        <span slot="title">Icon card title</span>
        <p slot="description">Icon card description</p>
      </sit-icon-card>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-image-card should be accessible", async () => {
    const el = await fixture(html`
      <sit-image-card>
        <img slot="image" alt="Sample image" src="https://placehold.co/467x300" />
        <span slot="title">Image card title</span>
        <p slot="description">Image card description</p>
      </sit-image-card>
    `);
    await expect(el).to.be.accessible();
  });

  it("sit-thumbnail-card should be accessible", async () => {
    const el = await fixture(html`
      <sit-thumbnail-card>
        <img slot="thumbnail" alt="Thumbnail" width="64" height="64" src="https://placehold.co/64x64" />
        <span slot="title">Thumbnail card title</span>
        <p slot="description">Thumbnail card description</p>
      </sit-thumbnail-card>
    `);
    await expect(el).to.be.accessible();
  });
});
