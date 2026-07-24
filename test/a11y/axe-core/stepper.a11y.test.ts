import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Stepper a11y", () => {
  it("sit-stepper should be accessible", async () => {
    const el = await fixture(html`
      <sit-stepper
        .steps=${[
          { stepHeader: "Personal Details", component: "Step 1 content" },
          { stepHeader: "Address", component: "Step 2 content" },
          { stepHeader: "Review", component: "Step 3 content" }
        ]}
      ></sit-stepper>
    `);
    await expect(el).to.be.accessible();
  });
});
