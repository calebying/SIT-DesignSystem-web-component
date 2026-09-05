import "./sit-web-component";
import { assert, expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import { SitSegmentedControl, SitSegment } from "../src/components";

describe("<sit-segmented-control>", () => {
  it("is defined", () => {
    const el = document.createElement("sit-segmented-control");
    assert.instanceOf(el, SitSegmentedControl);
  });

  it("selects the segment matching value", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control value="grid">
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
      </sit-segmented-control>
    `);
    await el.updateComplete;
    const segments = el.querySelectorAll<SitSegment>("sit-segment");
    expect(segments[0].selected).to.be.false;
    expect(segments[1].selected).to.be.true;
  });

  it("auto-selects the first segment when value matches nothing", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control>
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
      </sit-segmented-control>
    `);
    await el.updateComplete;
    expect(el.value).to.equal("list");
    const segments = el.querySelectorAll<SitSegment>("sit-segment");
    expect(segments[0].selected).to.be.true;
  });

  it("skips a disabled segment when auto-selecting the first one", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control>
        <sit-segment value="list" disabled>List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
      </sit-segmented-control>
    `);
    await el.updateComplete;
    expect(el.value).to.equal("grid");
  });

  it("changes selection and emits sit-change on segment click", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control value="list">
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
      </sit-segmented-control>
    `);
    const gridSegment = el.querySelectorAll<SitSegment>("sit-segment")[1];
    const listener = oneEvent(el, "sit-change");

    gridSegment.shadowRoot?.querySelector("button")?.click();

    const event = await listener;
    expect(event.detail.value).to.equal("grid");
    expect(el.value).to.equal("grid");
    expect(gridSegment.selected).to.be.true;
  });

  it("does not select a disabled segment on click", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control value="list">
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid" disabled>Grid</sit-segment>
      </sit-segmented-control>
    `);
    const gridSegment = el.querySelectorAll<SitSegment>("sit-segment")[1];
    gridSegment.shadowRoot?.querySelector("button")?.click();
    await el.updateComplete;
    expect(el.value).to.equal("list");
  });

  it("moves selection with ArrowRight and wraps around", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control value="table">
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
        <sit-segment value="table">Table</sit-segment>
      </sit-segmented-control>
    `);
    const container = el.shadowRoot?.querySelector(".segmented-control") as HTMLElement;
    container.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
    await waitUntil(() => el.value === "list");
    expect(el.value).to.equal("list");
  });

  it("moves selection with ArrowLeft", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control value="grid">
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
        <sit-segment value="table">Table</sit-segment>
      </sit-segmented-control>
    `);
    const container = el.shadowRoot?.querySelector(".segmented-control") as HTMLElement;
    container.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }));
    await waitUntil(() => el.value === "list");
    expect(el.value).to.equal("list");
  });

  it("disables every segment when the group is disabled", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control value="list" disabled>
        <sit-segment value="list">List</sit-segment>
        <sit-segment value="grid">Grid</sit-segment>
      </sit-segmented-control>
    `);
    await el.updateComplete;
    const segments = el.querySelectorAll<SitSegment>("sit-segment");
    expect(segments[0].disabled).to.be.true;
    expect(segments[1].disabled).to.be.true;
  });

  it("renders role=radiogroup and each segment as role=radio", async () => {
    const el = await fixture<SitSegmentedControl>(html`
      <sit-segmented-control value="list" ariaLabel="View">
        <sit-segment value="list">List</sit-segment>
      </sit-segmented-control>
    `);
    const group = el.shadowRoot?.querySelector(".segmented-control");
    expect(group).to.have.attribute("role", "radiogroup");
    expect(group).to.have.attribute("aria-label", "View");

    const segment = el.querySelector("sit-segment") as SitSegment;
    const button = segment.shadowRoot?.querySelector("button");
    expect(button).to.have.attribute("role", "radio");
    expect(button).to.have.attribute("aria-checked", "true");
  });
});
