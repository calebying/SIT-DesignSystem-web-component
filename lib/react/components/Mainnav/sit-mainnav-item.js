'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { watch } from '../../utils/watch.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './mainnav-item.js';

/**
 * @slot default - slot for SitMainnavItem element.
 *
 *  */
class SitMainnavItem extends SitElement {
    constructor() {
        super(...arguments);
        /** when true, sets the active stylings of the navigation item */
        this.active = false;
        /** Disables the SitMainnavItem */
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
            console.error("More than one anchor tag is added to sit-mainnav-item");
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
                return;
            }
            anchor.addEventListener("click", (e) => {
                const target = e.target;
                const mainnav = target.closest("sit-mainnav");
                mainnav.hide();
            });
        }
    }
    render() {
        return html `<slot @slotchange=${this._handleSlotChange}></slot>`;
    }
}
SitMainnavItem.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: Boolean, reflect: true })
], SitMainnavItem.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitMainnavItem.prototype, "disabled", void 0);
__decorate([
    watch("disabled")
], SitMainnavItem.prototype, "_handleDisabled", null);

export { SitMainnavItem, SitMainnavItem as default };
//# sourceMappingURL=sit-mainnav-item.js.map
