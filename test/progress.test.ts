import "./sit-web-component";
import { html } from "lit";
import { fixture, assert } from "@open-wc/testing";
import type { SitProgressBar } from "../src/components";

describe("<sit-progress-bar>", () => {
  it("renders with default values", async () => {
    const el = await fixture<SitProgressBar>(html` <sit-progress-bar value="50"></sit-progress-bar> `);
    assert.shadowDom.equal(
      el,
      `<div class="progress-container">
      <div class="progress">
        <div
          aria-valuenow="50"
          class="progress-bar"
          role="progressbar"
          style="width:50%;"
        >
        </div>
      </div>`
    );
  });
});


