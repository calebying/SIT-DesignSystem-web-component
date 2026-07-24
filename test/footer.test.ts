import "./sit-web-component";
import { fixture, assert, expect } from "@open-wc/testing";
import { html } from "lit";
import { SitFooter, SitFooterItem, SitLink } from "../src/components";

describe("footer", () => {
  it("renders with default values", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer></sit-footer>`);
    assert.shadowDom.equal(
      el,
      `
          <footer class="footer">
          <section class="sit-container">
            <div class="footer-header">
              <slot name="title"></slot>
              <slot name="description"></slot>
            </div>
            <div>
              <div class="footer-items">
                <slot name="items"></slot>
              </div>
            </div>
          </section>
          <section class="footer-bottom sit-container">
            <div class="footer-mandatory-links">
              <ul>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a href="#" tabindex="0">Contact</a>
                  </sit-link>
                </li>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a href="#" tabindex="0">Feedback</a>
                  </sit-link>
                </li>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a
                      href="https://tech.gov.sg/report_vulnerability"
                      rel="noopener noreferrer"
                      tabindex="0"
                      target="_blank"
                      >Report Vulnerability</a
                    >
                  </sit-link>
                </li>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a href="#" tabindex="0">Privacy Statement</a>
                  </sit-link>
                </li>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a href="#" tabindex="0">Terms of use</a>
                  </sit-link>
                </li>
              </ul>
              <div class="footer-copyrights">© ${new Date().getFullYear()}, Government of Singapore</div>
            </div>
          </section>
        </footer>
          `
    );
  });

  it("renders with default values when default slot has content", async () => {
    const el = await fixture<SitFooter>(
      html`
        <sit-footer>
          <p>footer content</p>
        </sit-footer>
      `
    );
    assert.shadowDom.equal(
      el,
      `
          <footer class="footer">
          <section class="footer-top has-content sit-container">
            <div class="footer-header">
              <slot name="title"></slot>
              <slot name="description"></slot>
            </div>
            <div>
              <slot></slot>
            </div>
          </section>
          <section class="footer-bottom sit-container">
            <div class="footer-mandatory-links">
              <ul>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a href="#" tabindex="0">Contact</a>
                  </sit-link>
                </li>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a href="#" tabindex="0">Feedback</a>
                  </sit-link>
                </li>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a
                      href="https://tech.gov.sg/report_vulnerability"
                      rel="noopener noreferrer"
                      tabindex="0"
                      target="_blank"
                      >Report Vulnerability</a
                    >
                  </sit-link>
                </li>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a href="#" tabindex="0">Privacy Statement</a>
                  </sit-link>
                </li>
                <li>
                  <sit-link size="sm" variant="primary" tone="fixed-light">
                    <a href="#" tabindex="0">Terms of use</a>
                  </sit-link>
                </li>
              </ul>
              <div class="footer-copyrights">© ${new Date().getFullYear()}, Government of Singapore</div>
            </div>
          </section>
        </footer>
          `
    );
  });

  it("content should be slotted into title", async () => {
    const el = await fixture(
      html`<sit-footer>
        <h2 slot="title">test title</h2>
      </sit-footer>`
    );
    expect(el.querySelector("[slot='title']")?.textContent).to.equal("test title");
  });

  it("content should be slotted into description", async () => {
    const el = await fixture(
      html`<sit-footer>
        <h2 slot="description">test description</h2>
      </sit-footer>`
    );
    expect(el.querySelector("[slot='description']")?.textContent).to.equal("test description");
  });

  it("copyrightLiner prop forward to approriate div el", async () => {
    const el = await fixture(html`<sit-footer copyrightLiner="copyright liner"></sit-footer>`);
    expect(el.shadowRoot?.querySelector(".footer-copyrights")?.textContent).to.contain("copyright liner");
  });

  it("contactHref prop forward to contact's href attr", async () => {
    const el = await fixture(html`<sit-footer contactHref="test"></sit-footer>`);
    expect(el.shadowRoot?.querySelector("a[href='test']")?.textContent).to.contain("Contact");
  });

  it("feedbackHref prop forward to feedback's href attr", async () => {
    const el = await fixture(html`<sit-footer feedbackHref="test"></sit-footer>`);
    expect(el.shadowRoot?.querySelector("a[href='test']")?.textContent).to.contain("Feedback");
  });
  it("privacyHref prop forward to Privacy Statement's href attr", async () => {
    const el = await fixture(html`<sit-footer privacyHref="test"></sit-footer>`);
    expect(el.shadowRoot?.querySelector("a[href='test']")?.textContent).to.contain("Privacy Statement");
  });
  it("termsOfUseHref prop forward to Terms of use's href attr", async () => {
    const el = await fixture(html`<sit-footer termsOfUseHref="test"></sit-footer>`);
    expect(el.shadowRoot?.querySelector("a[href='test']")?.textContent).to.contain("Terms of use");
  });
  it("sitemapHref prop forward to Ssitemap href attr", async () => {
    const el = await fixture(html`<sit-footer sitemapHref="test"></sit-footer>`);
    expect(el.shadowRoot?.querySelector("a[href='test']")?.textContent).to.contain("Sitemap");
  });
  it("faqHref prop forward to Ssitemap href attr", async () => {
    const el = await fixture(html`<sit-footer faqHref="test"></sit-footer>`);
    expect(el.shadowRoot?.querySelector("a[href='test']")?.textContent).to.contain("FAQ");
  });
});

describe("footer layout prop", () => {
  it("defaults to layout='default' with no sit-container-sidebar class", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer><p>content</p></sit-footer>`);
    expect(el.layout).to.equal("default");

    const footerTop = el.shadowRoot?.querySelector(".footer-top");
    const footerBottom = el.shadowRoot?.querySelector(".footer-bottom");
    expect(footerTop?.classList.contains("sit-container-sidebar")).to.be.false;
    expect(footerBottom?.classList.contains("sit-container-sidebar")).to.be.false;
  });

  it("adds sit-container-sidebar class to footer-top and footer-bottom when layout='sidebar'", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer layout="sidebar"><p>content</p></sit-footer>`);
    expect(el.layout).to.equal("sidebar");

    const footerTop = el.shadowRoot?.querySelector(".footer-top");
    const footerBottom = el.shadowRoot?.querySelector(".footer-bottom");
    expect(footerTop?.classList.contains("sit-container-sidebar")).to.be.true;
    expect(footerBottom?.classList.contains("sit-container-sidebar")).to.be.true;
  });

  it("reflects layout attribute to the host element", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer layout="sidebar"><p>content</p></sit-footer>`);
    expect(el.getAttribute("layout")).to.equal("sidebar");
  });

  it("removes sit-container-sidebar class when layout changes from sidebar to default", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer layout="sidebar"><p>content</p></sit-footer>`);
    el.layout = "default";
    await el.updateComplete;

    const footerTop = el.shadowRoot?.querySelector(".footer-top");
    const footerBottom = el.shadowRoot?.querySelector(".footer-bottom");
    expect(footerTop?.classList.contains("sit-container-sidebar")).to.be.false;
    expect(footerBottom?.classList.contains("sit-container-sidebar")).to.be.false;
  });
});

describe("footer tone prop", () => {
  it("defaults to tone='fixed-dark'", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer></sit-footer>`);
    expect(el.tone).to.equal("fixed-dark");
    expect(el.getAttribute("tone")).to.equal("fixed-dark");
  });

  it("reflects tone attribute to the host element", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer tone="neutral"></sit-footer>`);
    expect(el.getAttribute("tone")).to.equal("neutral");
  });

  it("renders mandatory links with tone='fixed-light' when tone='fixed-dark'", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer></sit-footer>`);
    const links = el.shadowRoot?.querySelectorAll<SitLink>("sit-link");
    links?.forEach(link => {
      expect(link.tone).to.equal("fixed-light");
    });
  });

  it("renders mandatory links with tone='neutral' when tone='neutral'", async () => {
    const el = await fixture<SitFooter>(html`<sit-footer tone="neutral"></sit-footer>`);
    const links = el.shadowRoot?.querySelectorAll<SitLink>("sit-link");
    links?.forEach(link => {
      expect(link.tone).to.equal("neutral");
    });
  });

  it("propagates tone to sit-footer-item children", async () => {
    const el = await fixture<SitFooter>(html`
      <sit-footer tone="neutral">
        <sit-footer-item slot="items">
          <div slot="title">Title</div>
          <sit-link><a href="#">Link</a></sit-link>
        </sit-footer-item>
      </sit-footer>
    `);
    const footerItem = el.querySelector<SitFooterItem>("sit-footer-item");
    expect(footerItem?.tone).to.equal("neutral");
  });

  it("footer-item sets link tone to neutral when its tone is neutral", async () => {
    const el = await fixture<SitFooterItem>(html`
      <sit-footer-item tone="neutral">
        <div slot="title">Title</div>
        <sit-link><a href="#">Link</a></sit-link>
      </sit-footer-item>
    `);
    const links = el.querySelectorAll<SitLink>("sit-link");
    links.forEach(l => {
      expect(l.tone).to.equal("neutral");
    });
  });
});

describe("SitFooterItem", () => {
  it("renders with default structure", async () => {
    const el = await fixture<SitFooterItem>(html` <sit-footer-item>
      <div slot="title">Application Guidelines</div>
      <sit-link><a href="/application-guidelines/lorem-ipsum-one/second-level-a/">hello world</a></sit-link>
      <sit-link><a href="/application-guidelines/lorem-ipsum-one/part-A/">Second Level B</a></sit-link>
      <sit-link><a href="/application-guidelines/lorem-ipsum-three/">Lorem Ipsum Three</a></sit-link>
    </sit-footer-item>`);
    const titleSlot = el.shadowRoot?.querySelector('slot[name="title"]');
    const defaultSlot = el.shadowRoot?.querySelector("slot:not([name])");

    expect(titleSlot).to.exist;
    expect(defaultSlot).to.exist;
  });
  it("slotted sit-link should have tone=fixed-light and size=sm attributes added", async () => {
    const el = await fixture<SitFooterItem>(html`<sit-footer-item>
      <div slot="title">Application Guidelines</div>
      <sit-link><a href="/application-guidelines/lorem-ipsum-one/second-level-a/">hello world</a></sit-link>
      <sit-link><a href="/application-guidelines/lorem-ipsum-one/part-A/">Second Level B</a></sit-link>
      <sit-link><a href="/application-guidelines/lorem-ipsum-three/">Lorem Ipsum Three</a></sit-link>
    </sit-footer-item>`);
    const links = el.querySelectorAll<SitLink>("sit-link");
    links.forEach(l => {
      expect(l.tone).to.equal("fixed-light");
      expect(l.size).to.equal("sm");
    });
  });
});
