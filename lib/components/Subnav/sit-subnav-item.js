import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { watch } from '../../utils/watch.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './subnav-item.js';

/**
 * @slot default - slot for SitSubnavItem element.
 *
 *  */
class SitSubnavItem extends SitElement {
    constructor() {
        super(...arguments);
        /** when true, sets the active stylings of the navigation item */
        this.active = false;
        /** Disables the SitSubnavItem */
        this.disabled = false;
    }
    _handleDisabled() {
        this.setAttribute("aria-disabled", `${this.disabled}`);
    }
    _handleSlotChange(e) {
        const slot = e.target;
        const assignedElements = slot.assignedElements({ flatten: true });
        const anchorItems = assignedElements.filter(item => item.tagName.toLowerCase() === "a" || item.tagName.toLowerCase() === "sit-link");
        if (anchorItems.length > 1) {
            console.error("More than one anchor tag is added to sit-subnav-item");
            return;
        }
        if (anchorItems.length === 0) {
            const nodes = slot.assignedNodes({ flatten: true });
            nodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const hyperlink = document.createElement("a");
                    hyperlink.textContent = node.textContent;
                    node.parentNode.replaceChild(hyperlink, node);
                }
            });
        }
        if (anchorItems.length === 1) {
            const anchor = anchorItems[0];
            if (this.active) {
                anchor.setAttribute("aria-current", "true");
            }
            if (this.disabled) {
                anchor.setAttribute("href", "javascript:void(0)");
                anchor.setAttribute("tabindex", "-1");
            }
        }
    }
    render() {
        return html `<slot @slotchange=${this._handleSlotChange}></slot>`;
    }
}
SitSubnavItem.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: Boolean, reflect: true })
], SitSubnavItem.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitSubnavItem.prototype, "disabled", void 0);
__decorate([
    watch("disabled")
], SitSubnavItem.prototype, "_handleDisabled", null);

export { SitSubnavItem, SitSubnavItem as default };
//# sourceMappingURL=sit-subnav-item.js.map
