'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var sitElement = require('../../base/sit-element.cjs.js');
var closeButton = require('./close-button.cjs.js');
var ceRegistry = require('../../utils/ce-registry.cjs.js');

/**
 * @summary Close button for closing actions. Used in Modal, Drawer, Alert and Toast.
 *
 */
class SitCloseButton extends sitElement["default"] {
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
        ceRegistry.warnUnregisteredElements("sit-icon");
    }
    render() {
        return lit.html `
      <button class="btn-close" aria-label="Close button" ?disabled=${this.disabled} @click=${this._handleClick}>
        <sit-icon name="cross" size="sm"></sit-icon>
      </button>
    `;
    }
}
SitCloseButton.styles = [...sitElement["default"].styles, closeButton["default"]];
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitCloseButton.prototype, "size", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitCloseButton.prototype, "tone", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitCloseButton.prototype, "disabled", void 0);

exports.SitCloseButton = SitCloseButton;
exports["default"] = SitCloseButton;
//# sourceMappingURL=sit-close-button.cjs.js.map
