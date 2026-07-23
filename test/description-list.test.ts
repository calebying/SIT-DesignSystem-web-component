import { html } from "lit";
import { fixture, expect, elementUpdated } from "@open-wc/testing";
import "../src/index";
import { SitDescriptionList } from "../src/components";

describe("<sit-description-list>", () => {
  it("should render label content when label is provided", async () => {
    const el = await fixture<SitDescriptionList>(html` <sit-description-list> Label Text </sit-description-list> `);
    await elementUpdated(el);
    const labelElement = el.shadowRoot?.querySelector(".label");
    expect(labelElement).to.exist;
  });

  it("should render data content when data is provided", async () => {
    const el = await fixture<SitDescriptionList>(html`
      <sit-description-list>
        <span slot="data">Data Text</span>
      </sit-description-list>
    `);
    await elementUpdated(el);
    const dataElement = el.shadowRoot?.querySelector(".data");
    expect(dataElement).to.exist;
  });

  it("should always have label and data containers present", async () => {
    const el = await fixture<SitDescriptionList>(html`<sit-description-list></sit-description-list>`);
    await elementUpdated(el);
    expect(el.shadowRoot?.querySelector(".label-container")).to.exist;
    expect(el.shadowRoot?.querySelector(".data-container")).to.exist;
  });
});


