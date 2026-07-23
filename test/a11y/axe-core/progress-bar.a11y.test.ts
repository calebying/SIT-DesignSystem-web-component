import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("ProgressBar a11y", () => {
  it("SIT-progress-bar should be accessible", async () => {
    const el = await fixture(html` <sit-progress-bar value="50" ariaLabel="Loading progress"></sit-progress-bar> `);
    await expect(el).to.be.accessible();
  });
});



