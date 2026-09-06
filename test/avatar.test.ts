import { expect, fixture, html, oneEvent } from "@open-wc/testing";
import { SitAvatar } from "../src/components/Avatar/sit-avatar";
import "../src/components/Avatar";

describe("<sit-avatar>", () => {
  it("renders initials when there's no src", async () => {
    const el = await fixture<SitAvatar>(html`<sit-avatar initials="JT"></sit-avatar>`);
    const initials = el.shadowRoot?.querySelector(".avatar-initials");
    expect(initials).to.exist;
    expect(initials).to.have.trimmed.text("JT");
    expect(el.shadowRoot?.querySelector(".avatar-image")).to.not.exist;
  });

  it("renders the generic person icon when there's no src and no initials", async () => {
    const el = await fixture<SitAvatar>(html`<sit-avatar></sit-avatar>`);
    const icon = el.shadowRoot?.querySelector("sit-icon");
    expect(icon).to.exist;
    expect(icon?.getAttribute("name")).to.equal("user-circle");
  });

  it("renders an <img> when src is set", async () => {
    const el = await fixture<SitAvatar>(html`<sit-avatar src="https://example.com/a.jpg" initials="JT"></sit-avatar>`);
    const img = el.shadowRoot?.querySelector<HTMLImageElement>(".avatar-image");
    expect(img).to.exist;
    expect(img?.src).to.equal("https://example.com/a.jpg");
    expect(el.shadowRoot?.querySelector(".avatar-fallback")).to.not.exist;
  });

  it("falls back to initials and emits sit-error when the image fails to load", async () => {
    const el = await fixture<SitAvatar>(
      html`<sit-avatar src="https://broken.example/does-not-exist.jpg" initials="JT"></sit-avatar>`
    );
    const listener = oneEvent(el, "sit-error");
    const img = el.shadowRoot?.querySelector<HTMLImageElement>(".avatar-image");
    img?.dispatchEvent(new Event("error"));

    const event = await listener;
    expect(event).to.exist;
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector(".avatar-image")).to.not.exist;
    expect(el.shadowRoot?.querySelector(".avatar-initials")).to.have.trimmed.text("JT");
  });

  it("picks a deterministic fallback colour from the same seed every time", async () => {
    const el1 = await fixture<SitAvatar>(html`<sit-avatar initials="AB"></sit-avatar>`);
    const el2 = await fixture<SitAvatar>(html`<sit-avatar initials="AB"></sit-avatar>`);

    const style1 = el1.shadowRoot?.querySelector(".avatar-fallback")?.getAttribute("style");
    const style2 = el2.shadowRoot?.querySelector(".avatar-fallback")?.getAttribute("style");
    expect(style1).to.equal(style2);
  });

  it("renders no status dot when status is unset", async () => {
    const el = await fixture<SitAvatar>(html`<sit-avatar initials="JT"></sit-avatar>`);
    expect(el.shadowRoot?.querySelector(".status-dot")).to.not.exist;
  });

  it("renders the status dot with the matching class when status is set", async () => {
    const el = await fixture<SitAvatar>(html`<sit-avatar initials="JT" status="online"></sit-avatar>`);
    const dot = el.shadowRoot?.querySelector(".status-dot");
    expect(dot).to.exist;
    expect(dot?.classList.contains("status-online")).to.be.true;
  });

  it("renders custom content passed into the status slot", async () => {
    const el = await fixture<SitAvatar>(html`
      <sit-avatar initials="JT" status="online">
        <sit-icon slot="status" name="placeholder"></sit-icon>
      </sit-avatar>
    `);
    const slot = el.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="status"]');
    expect(slot).to.exist;
    const slotted = el.querySelector('[slot="status"]');
    expect(slotted).to.exist;
  });
});
