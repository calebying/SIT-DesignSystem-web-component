'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var staticHtml_js = require('lit/static-html.js');
var sitElement = require('../../base/sit-element.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var sitCloseButton = require('../CloseButton/sit-close-button.cjs.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');
var alert = require('./alert.cjs.js');

/**
 * @summary Alerts provide short, timely, and relevant information for your users. It can be a simple text message or customised HTML content with paragraphs, headings and links.
 *
 * @slot default - The alert's main content.
 * @slot icon - An icon to show in the alert. Pass in sit-icon size="md" elements.
 * @slot action - An action button or link to show in the alert.
 *
 * @event sit-show - Emitted when the alert appears.
 * @event sit-hide - Emitted after the alert closes.
 *
 */
class SitAlert extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Controls the appearance of the alert  */
        this.show = false;
        /** Enables a close button that allows the user to dismiss the alert. */
        this.dismissible = false;
        /** The alert's theme variant. */
        this.variant = "info";
        /** Controls the alert visual between a lighter outline and a solid darker variant. */
        this.outlined = false;
        /** The title of the alert. Only text is allowed */
        this.title = "";
    }
    /** Closes the alert  */
    close() {
        this.show = false;
    }
    /**@internal */
    _handleShowChange() {
        this.show ? this.emit("sit-show") : this.emit("sit-hide");
    }
    render() {
        return (this.dismissible && this.show) || !this.dismissible
            ? staticHtml_js.html `
          <div
            class="${classMap_js.classMap({
                alert: true,
                show: this.show,
                [`alert-dismissible`]: this.dismissible,
                outlined: this.outlined
            })}"
            role="alert"
            aria-hidden=${this.show ? "false" : "true"}
          >
            <slot name="icon" class=${classMap_js.classMap({ "alert-icon__outlined": this.outlined })}></slot>
            <div class="alert-content">
              <div class="alert-content__upper">
                ${this.title ? staticHtml_js.html `<div class="alert-title">${this.title}</div>` : lit.nothing}
                <slot class="alert-content__description"></slot>
              </div>
              <slot class="alert-content__action" name="action"></slot>
            </div>
            ${this.dismissible
                ? staticHtml_js.html `<sit-close-button
                  aria-label="close the alert"
                  @click=${this.close}
                  tone=${this.outlined || this.variant === "warning" ? "fixed-dark" : "fixed-light"}
                ></sit-close-button>`
                : lit.nothing}
          </div>
        `
            : lit.nothing;
    }
}
SitAlert.styles = [...sitElement["default"].styles, alert["default"]];
/**@internal */
SitAlert.dependencies = {
    "sit-close-button": sitCloseButton.SitCloseButton,
    "sit-icon": sitIcon.SitIcon
};
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitAlert.prototype, "show", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitAlert.prototype, "dismissible", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitAlert.prototype, "variant", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitAlert.prototype, "outlined", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitAlert.prototype, "title", void 0);
tslib.__decorate([
    watch.watch("show")
], SitAlert.prototype, "_handleShowChange", null);

exports.SitAlert = SitAlert;
exports["default"] = SitAlert;
//# sourceMappingURL=sit-alert.cjs.js.map
