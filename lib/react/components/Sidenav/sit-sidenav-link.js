'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import SitElement from '../../base/sit-element.js';
import { watch } from '../../utils/watch.js';
import css_248z from './sidenav-link.js';

/**
 * @slot default - slot for label of anchor tag.
 */
class SitSidenavLink extends SitElement {
    constructor() {
        super(...arguments);
        /** when true, sets the active stylings of .nav-link */
        this.active = false;
        /** Disables the SitMainnavItem */
        this.disabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("aria-disabled", `${this.disabled}`);
    }
    _handleDisabled() {
        this.setAttribute("aria-disabled", `${this.disabled}`);
        this._anchor[0].setAttribute("aria-disabled", `${this.disabled}`);
        if (!this.disabled) {
            this._anchor[0].removeAttribute("tabindex");
        }
    }
    _handleSlotChange() {
        this._anchor[0].setAttribute("aria-disabled", `${this.disabled}`);
        /** If link is disabled, set tabindex of anchor to -1 */
        if (this.disabled) {
            this._anchor[0].setAttribute("tabindex", "-1");
            this._anchor[0].removeAttribute("href");
            this._anchor[0].setAttribute("role", "link");
        }
    }
    render() {
        return html ` <slot @slotchange=${this._handleSlotChange}></slot> `;
    }
}
SitSidenavLink.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: Boolean, reflect: true })
], SitSidenavLink.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitSidenavLink.prototype, "disabled", void 0);
__decorate([
    queryAssignedElements({ flatten: true })
], SitSidenavLink.prototype, "_anchor", void 0);
__decorate([
    watch("disabled", { waitUntilFirstUpdate: true })
], SitSidenavLink.prototype, "_handleDisabled", null);

export { SitSidenavLink, SitSidenavLink as default };
//# sourceMappingURL=sit-sidenav-link.js.map
