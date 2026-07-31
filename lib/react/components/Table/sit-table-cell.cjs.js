'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lit = require('lit');
var sitElement = require('../../base/sit-element.cjs.js');
var tableCell = require('./table-cell.cjs.js');

/**
 * @summary Table cell is used for presenting individual data values, interactive elements, or custom content within a table row.
 *
 * @slot default - Insert any elements to be rendered as the cell’s content.
 */
class SitTableCell extends sitElement["default"] {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "cell");
    }
    render() {
        return lit.html `<div class="table-cell"><slot></slot></div>`;
    }
}
SitTableCell.styles = [...sitElement["default"].styles, tableCell["default"]];

exports.SitTableCell = SitTableCell;
exports["default"] = SitTableCell;
//# sourceMappingURL=sit-table-cell.cjs.js.map
