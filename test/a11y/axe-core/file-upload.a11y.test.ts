import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("FileUpload a11y", () => {
  it("default variant should be accessible", async () => {
    const el = await fixture(html` <sit-file-upload label="Upload file"></sit-file-upload> `);
    await expect(el).to.be.accessible();
  });

  it("drag-and-drop variant should be accessible", async () => {
    const el = await fixture(
      html` <sit-file-upload label="Upload document" variant="drag-and-drop"></sit-file-upload> `
    );
    await expect(el).to.be.accessible();
  });

  it("multiple files should be accessible", async () => {
    const el = await fixture(html` <sit-file-upload label="Upload files" multiple></sit-file-upload> `);
    await expect(el).to.be.accessible();
  });

  it("required should be accessible", async () => {
    const el = await fixture(html` <sit-file-upload label="Required upload" required></sit-file-upload> `);
    await expect(el).to.be.accessible();
  });

  it("custom ariaLabel should be accessible", async () => {
    const el = await fixture(
      html` <sit-file-upload label="Upload photo" ariaLabel="Upload photo"></sit-file-upload> `
    );
    await expect(el).to.be.accessible();
  });

  it("with accept filter should be accessible", async () => {
    const el = await fixture(html` <sit-file-upload label="Upload PDF" accept=".pdf"></sit-file-upload> `);
    await expect(el).to.be.accessible();
  });

  it("with hintText should be accessible", async () => {
    const el = await fixture(
      html` <sit-file-upload label="Upload file" hintText="Maximum file size: 5MB"></sit-file-upload> `
    );
    await expect(el).to.be.accessible();
  });

  it("invalid with feedback should be accessible", async () => {
    const el = await fixture(
      html`
        <sit-file-upload
          label="Upload file"
          invalid
          hasFeedback
          invalidFeedback="Please upload a file"
        ></sit-file-upload>
      `
    );
    await expect(el).to.be.accessible();
  });
});



