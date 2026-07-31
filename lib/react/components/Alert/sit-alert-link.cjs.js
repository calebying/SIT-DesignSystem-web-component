'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var decorators_js = require('lit/decorators.js');
var ifDefined_js = require('lit/directives/if-defined.js');
var staticHtml_js = require('lit/static-html.js');
var sitElement = require('../../base/sit-element.cjs.js');
var alertLink = require('./alert-link.cjs.js');
var anchor = require('../../styles/anchor.cjs.js');

/**
 * @deprecated From v3.21.0, use a native `<a>` element directly inside `<sit-alert>` instead. The alert component now styles slotted anchor tags automatically.
 * @summary Alert link are used within the alert's message that is passed into the default slot of `<sit-alert>`
 *
 * @slot default - The text content of the anchor element
 */
class SitAlertLink extends sitElement["default"] {
    render() {
        return staticHtml_js.html `
      <a class="alert-link" href=${ifDefined_js.ifDefined(this.href)} target=${ifDefined_js.ifDefined(this.target)} tabindex="0"><slot></slot></a>
    `;
    }
}
SitAlertLink.styles = [...sitElement["default"].styles, anchor["default"], alertLink["default"]];
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitAlertLink.prototype, "href", void 0);
tslib.__decorate([
    decorators_js.property()
], SitAlertLink.prototype, "target", void 0);

exports.SitAlertLink = SitAlertLink;
exports["default"] = SitAlertLink;
//# sourceMappingURL=sit-alert-link.cjs.js.map
