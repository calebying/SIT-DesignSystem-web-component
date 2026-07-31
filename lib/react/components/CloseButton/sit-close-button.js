'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './close-button.js';
import { warnUnregisteredElements } from '../../utils/ce-registry.js';

/**
 * @summary Close button for closing actions. Used in Modal, Drawer, Alert and Toast.
 *
 */
class SitCloseButton extends SitElement {
    constructor() {
        super(...arguments);
        /** Specifies a large or small button */
        this.size = "md";
        /** The tone of the close button */
        this.tone = "default";
        /** Disables the close button, preventing click events */
        this.disabled = false;
        this._clickHandler = () => {
            return;
        };
    }
    _handleClick(e) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.removeEventListener("click", this._clickHandler);
        this.addEventListener("click", this._clickHandler);
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        /** Cannot register sit-icon as dependency due to some circular dependencies, so we check and warn instead */
        warnUnregisteredElements("sit-icon");
    }
    render() {
        return html `
      <button class="btn-close" aria-label="Close button" ?disabled=${this.disabled} @click=${this._handleClick}>
        <sit-icon name="cross" size="sm"></sit-icon>
      </button>
    `;
    }
}
SitCloseButton.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: String, reflect: true })
], SitCloseButton.prototype, "size", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitCloseButton.prototype, "tone", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitCloseButton.prototype, "disabled", void 0);

export { SitCloseButton, SitCloseButton as default };
//# sourceMappingURL=sit-close-button.js.map
