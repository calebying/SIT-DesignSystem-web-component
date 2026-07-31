'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sitElement = require('../../base/sit-element.cjs.js');
var lit = require('lit');
var tableOfContents = require('./table-of-contents.cjs.js');

/**
 *
 * @summary Tables of contents provide a page overview and direct access to specific sections.
 *
 * @slot default - The slot for the header
 * @slot contents - The slot for the contents
 */
class SitTableOfContents extends sitElement["default"] {
    render() {
        return lit.html `<div class="container">
      <slot></slot>
      <ul class="contents">
        <slot name="contents"></slot>
      </ul>
    </div> `;
    }
}
SitTableOfContents.styles = [...sitElement["default"].styles, tableOfContents["default"]];

exports.SitTableOfContents = SitTableOfContents;
exports["default"] = SitTableOfContents;
//# sourceMappingURL=sit-table-of-contents.cjs.js.map
