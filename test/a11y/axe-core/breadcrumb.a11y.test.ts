import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Breadcrumb a11y", () => {
  it("SIT-breadcrumb should be accessible", async () => {
    const el = await fixture(html`
      <sit-breadcrumb>
        <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
        <sit-breadcrumb-item><a href="#">About</a></sit-breadcrumb-item>
        <sit-breadcrumb-item><a href="#">Contacts</a></sit-breadcrumb-item>
      </sit-breadcrumb>
    `);
    await expect(el).to.be.accessible();
  });
});



