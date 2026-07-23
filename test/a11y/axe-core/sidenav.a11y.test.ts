import "../../sit-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Sidenav a11y", () => {
  it("SIT-sidenav should be accessible", async () => {
    const el = await fixture(html`
      <sit-sidenav>
        <sit-sidenav-item>
          <a href="#">Link 1</a>
        </sit-sidenav-item>
        <sit-sidenav-item>
          <a href="#">Link 2</a>
        </sit-sidenav-item>
      </sit-sidenav>
    `);
    await expect(el).to.be.accessible();
  });
});



