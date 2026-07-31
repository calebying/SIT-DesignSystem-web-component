import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import SitElement from '../../base/sit-element.js';
import { watch } from '../../utils/watch.js';
import css_248z from './footer-item.js';

/**
 * @summary The footer item component organizes links under a clear, descriptive title within the footer. It helps users easily navigate to related resources or information, ensuring clarity and accessibility.
 *
 * @slot default - The slot for the list of link items
 * @slot title - The slot for the title of the list of items
 *
 */
class SitFooterItem extends SitElement {
    constructor() {
        super(...arguments);
        /** Sets the color tone of the footer item. Inherited from the parent sit-footer. */
        this.tone = "fixed-dark";
    }
    /**@internal */
    _handleToneChange() {
        var _a;
        const defaultSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot:not([name])");
        defaultSlot === null || defaultSlot === void 0 ? void 0 : defaultSlot.assignedElements().forEach(el => {
            if (el.tagName === "SIT-LINK") {
                el.tone = this.tone === "neutral" ? "neutral" : "fixed-light";
            }
        });
    }
    _handleSlotChange(e) {
        const linkTone = this.tone === "neutral" ? "neutral" : "fixed-light";
        const assignedElements = e.target.assignedElements();
        assignedElements.forEach(el => {
            if (el.tagName === "SIT-LINK") {
                const sitLink = el;
                sitLink.tone = linkTone;
                sitLink.size = "sm";
            }
        });
    }
    render() {
        return html `
      <div class="footer-item">
        <slot name="title"></slot>
        <div class="links">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
    }
}
SitFooterItem.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: String, reflect: true })
], SitFooterItem.prototype, "tone", void 0);
__decorate([
    watch("tone", { waitUntilFirstUpdate: true })
], SitFooterItem.prototype, "_handleToneChange", null);

export { SitFooterItem, SitFooterItem as default };
//# sourceMappingURL=sit-footer-item.js.map
