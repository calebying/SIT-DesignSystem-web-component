import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SitLink } from '../Link/sit-link.js';
import SitElement from '../../base/sit-element.js';
import { HasSlotController } from '../../utils/slot.js';
import { watch } from '../../utils/watch.js';
import css_248z$1 from './footer.js';
import css_248z from '../../css/grid.js';

/**
 * @summary The footer contains supporting information for your service at the bottom of your website. All .gov.sg digital services shall contain a Global Footer Bar across all pages. The Global Footer Bar should include the name of the digital service, contact information, a privacy statement and the terms of use.
 *
 * @slot default - The slot for footer content. Use this slot if you want full control over the layout or styling. When provided, it replaces the `items` slot layout.
 * @slot title - The slot for title
 * @slot description - The slot for description
 * @slot items - the slot for the list of footer items, styled automatically with `.footer-items`. For custom layouts or styles, use the `default` slot instead.
 */
class SitFooter extends SitElement {
    constructor() {
        super(...arguments);
        /** Sets copyrightLiner of SitFooter */
        this.copyrightLiner = "Government of Singapore";
        /**	href link for contacts */
        this.contactHref = "#";
        /**	href link for feedback */
        this.feedbackHref = "#";
        /**	href link for faq (optional) */
        this.faqHref = "";
        /**	href link for sitemap (optional) */
        this.sitemapHref = "";
        /**	href link for privacy statement */
        this.privacyHref = "#";
        /**	href link for terms of use */
        this.termsOfUseHref = "#";
        /** Sets the layout context of the footer. Use "sidebar" when the footer is alongside a collapsible or persistent sidebar. Overlay sidebars should use "default". */
        this.layout = "default";
        /** Sets the color tone of the footer. Use "neutral" for light backgrounds (e.g. sidebar layouts). */
        this.tone = "fixed-dark";
        /** Used only for SSR to indicate the presence of the `default` slot. */
        this.hasDefaultSlot = false;
        /** Used only for SSR to indicate the presence of the `title` slot. */
        this.hasTitleSlot = false;
        /** Used only for SSR to indicate the presence of the `description` slot. */
        this.hasDescriptionSlot = false;
        /** Used only for SSR to indicate the presence of the `items` slot. */
        this.hasItemsSlot = false;
        this.hasSlotController = new HasSlotController(this, "[default]", "title", "description", "items");
    }
    _handleItemsSlotChange(e) {
        const assignedElements = e.target.assignedElements();
        assignedElements.forEach(el => {
            el.tone = this.tone;
        });
    }
    _handleToneChange() {
        var _a;
        const itemsSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="items"]');
        itemsSlot === null || itemsSlot === void 0 ? void 0 : itemsSlot.assignedElements().forEach(el => {
            el.tone = this.tone;
        });
    }
    updated() {
        if (!this.hasDefaultSlot)
            this.hasDefaultSlot = this.hasSlotController.test("[default]");
        if (!this.hasTitleSlot)
            this.hasTitleSlot = this.hasSlotController.test("title");
        if (!this.hasDescriptionSlot)
            this.hasDescriptionSlot = this.hasSlotController.test("description");
        if (!this.hasItemsSlot)
            this.hasItemsSlot = this.hasSlotController.test("items");
    }
    get _linkTone() {
        return this.tone === "neutral" ? "neutral" : "fixed-light";
    }
    render() {
        return html `
      <footer class="footer">
        <section
          class="${classMap({
            "footer-top": this.hasDefaultSlot || this.hasTitleSlot || this.hasDescriptionSlot || this.hasItemsSlot,
            "has-content": this.hasDefaultSlot || this.hasItemsSlot,
            "sit-container": this.layout === "default",
            "sit-container-sidebar": this.layout === "sidebar"
        })}"
        >
          <div class="footer-header">
            <slot name="title"></slot>
            <slot name="description"></slot>
          </div>
          <div>
            ${this.hasDefaultSlot
            ? html `<slot></slot>`
            : html `
                  <div class="footer-items">
                    <slot name="items" @slotchange=${this._handleItemsSlotChange}></slot>
                  </div>
                `}
          </div>
        </section>
        <section
          class="${classMap({
            "footer-bottom": true,
            "sit-container": this.layout === "default",
            "sit-container-sidebar": this.layout === "sidebar"
        })}"
        >
          <div class="footer-mandatory-links">
            <ul>
              <li>
                <sit-link size="sm" tone=${this._linkTone}><a href=${this.contactHref}>Contact</a></sit-link>
              </li>
              <li>
                <sit-link size="sm" tone=${this._linkTone}><a href=${this.feedbackHref}>Feedback</a></sit-link>
              </li>
              ${this.faqHref
            ? html `<li>
                    <sit-link size="sm" tone=${this._linkTone}><a href=${this.faqHref}>FAQ</a></sit-link>
                  </li>`
            : nothing}
              ${this.sitemapHref
            ? html `<li>
                    <sit-link size="sm" tone=${this._linkTone}><a href=${this.sitemapHref}>Sitemap</a></sit-link>
                  </li>`
            : nothing}
              <li>
                <sit-link size="sm" tone=${this._linkTone}>
                  <a href="https://tech.gov.sg/report_vulnerability" target="_blank" rel="noopener noreferrer">
                    Report Vulnerability
                  </a>
                </sit-link>
              </li>
              <li>
                <sit-link size="sm" tone=${this._linkTone}><a href=${this.privacyHref}>Privacy Statement</a></sit-link>
              </li>
              <li>
                <sit-link size="sm" tone=${this._linkTone}><a href=${this.termsOfUseHref}>Terms of use</a></sit-link>
              </li>
            </ul>
            <div class="footer-copyrights">© ${new Date().getFullYear()}, ${this.copyrightLiner}</div>
          </div>
        </section>
      </footer>
    `;
    }
}
SitFooter.styles = [...SitElement.styles, css_248z, css_248z$1];
/** @internal */
SitFooter.dependencies = {
    "sit-link": SitLink
};
__decorate([
    property({ type: String })
], SitFooter.prototype, "copyrightLiner", void 0);
__decorate([
    property({ type: String })
], SitFooter.prototype, "contactHref", void 0);
__decorate([
    property({ type: String })
], SitFooter.prototype, "feedbackHref", void 0);
__decorate([
    property({ type: String })
], SitFooter.prototype, "faqHref", void 0);
__decorate([
    property({ type: String })
], SitFooter.prototype, "sitemapHref", void 0);
__decorate([
    property({ type: String })
], SitFooter.prototype, "privacyHref", void 0);
__decorate([
    property({ type: String })
], SitFooter.prototype, "termsOfUseHref", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitFooter.prototype, "layout", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitFooter.prototype, "tone", void 0);
__decorate([
    property({ type: Boolean })
], SitFooter.prototype, "hasDefaultSlot", void 0);
__decorate([
    property({ type: Boolean })
], SitFooter.prototype, "hasTitleSlot", void 0);
__decorate([
    property({ type: Boolean })
], SitFooter.prototype, "hasDescriptionSlot", void 0);
__decorate([
    property({ type: Boolean })
], SitFooter.prototype, "hasItemsSlot", void 0);
__decorate([
    watch("tone", { waitUntilFirstUpdate: true })
], SitFooter.prototype, "_handleToneChange", null);

export { SitFooter, SitFooter as default };
//# sourceMappingURL=sit-footer.js.map
