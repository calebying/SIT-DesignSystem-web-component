'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var staticHtml_js = require('lit/static-html.js');
var sitElement = require('../../base/sit-element.cjs.js');
var toastContainer = require('./toast-container.cjs.js');

/**
 * @summary ToastContainer is the container component to position `sit-toast` in screen. When there is multiple toasts in the container, the toast components are stacked vertically.
 *
 * @slot default - The slot for `sit-toast` elements
 *
 */
class SitToastContainer extends sitElement["default"] {
    render() {
        return staticHtml_js.html `
      <div
        class=${classMap_js.classMap({
            "toast-container": true,
            [this.position]: this.position
        })}
      >
        <slot></slot>
      </div>
    `;
    }
}
SitToastContainer.styles = [toastContainer["default"]];
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitToastContainer.prototype, "position", void 0);

exports.SitToastContainer = SitToastContainer;
exports["default"] = SitToastContainer;
//# sourceMappingURL=sit-toast-container.cjs.js.map
