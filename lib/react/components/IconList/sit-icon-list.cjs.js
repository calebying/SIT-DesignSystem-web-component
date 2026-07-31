'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var sitElement = require('../../base/sit-element.cjs.js');
var iconList = require('./icon-list.cjs.js');

/**
 * @summary A IconList can be used to display content related to the same topic. Each list item begins an icon.
 *
 * @slot default - The list items of IconList. Each list items should have aria attribute role="listitem" added
 */
class SitIconList extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Sets the aria-role of the sit-icon-list */
        this.role = "list";
        /** The size of icon list. Changes the font-size the list items */
        this.size = "md";
    }
    render() {
        return lit.html `
      <div class=${classMap_js.classMap({ [this.size]: this.size })}>
        <slot></slot>
      </div>
    `;
    }
}
SitIconList.styles = [...sitElement["default"].styles, iconList["default"]];
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitIconList.prototype, "role", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitIconList.prototype, "size", void 0);

exports.SitIconList = SitIconList;
exports["default"] = SitIconList;
//# sourceMappingURL=sit-icon-list.cjs.js.map
