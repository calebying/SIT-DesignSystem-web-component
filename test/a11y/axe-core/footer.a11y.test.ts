import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Footer a11y", () => {
  it("SIT-footer should be accessible", async () => {
    const el = await fixture(html`
      <sit-footer
        contacthref="https://form.gov.sg/"
        feedbackhref="https://form.gov.sg/"
        privacyhref="https://example.com/privacy"
        termsofusehref="https://example.com/terms"
      >
        <h2 slot="title">Portal Name</h2>
        <p slot="description">Brief description of the portal</p>
      </sit-footer>
    `);
    await expect(el).to.be.accessible();
  });
});



