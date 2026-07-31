'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var sitElement = require('../../base/sit-element.cjs.js');
var tableHead = require('./table-head.cjs.js');
var context = require('@lit/context');
var tableContext = require('./table-context.cjs.js');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var watch = require('../../utils/watch.cjs.js');

/**
 * @summary Table head represents a table header cell that identifies a group of information within the table.
 *
 * @slot default - Place any elements inside to display as the header content.
 */
class SitTableHead extends sitElement["default"] {
    constructor() {
        super(...arguments);
        this._headerBackground = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "columnheader");
    }
    _handleHeaderBackground() {
        if (this._headerBackground)
            this.setAttribute("headerBackground", "true");
        else
            this.removeAttribute("headerBackground");
    }
    render() {
        return lit.html `<div
      class=${classMap_js.classMap({
            "table-head": true,
            "header-background": this._headerBackground
        })}
    >
      <slot></slot>
    </div>`;
    }
}
SitTableHead.styles = [...sitElement["default"].styles, tableHead["default"]];
tslib.__decorate([
    context.consume({ context: tableContext.TableHeaderBackgroundContext, subscribe: true }),
    decorators_js.state()
], SitTableHead.prototype, "_headerBackground", void 0);
tslib.__decorate([
    watch.watch("_headerBackground")
], SitTableHead.prototype, "_handleHeaderBackground", null);

exports.SitTableHead = SitTableHead;
exports["default"] = SitTableHead;
//# sourceMappingURL=sit-table-head.cjs.js.map
