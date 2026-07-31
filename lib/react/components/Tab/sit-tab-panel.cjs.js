'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var sitElement = require('../../base/sit-element.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var tabPanel = require('./tab-panel.cjs.js');

let id = 0;
/**
 * @summary Tab panels are used inside tab groups to display tabbed content.
 * @slot - The tab panel's content.
 *
 */
class SitTabPanel extends sitElement["default"] {
    constructor() {
        super(...arguments);
        this.attrId = ++id;
        this.componentId = `sit-tab-panel-${this.attrId}`;
        /** The tab panel's name. */
        this.name = "";
        /** When true, the tab panel will be shown. When used with tab-group, this property is already being managed */
        this.active = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id = this.id.length > 0 ? this.id : this.componentId;
        this.setAttribute("role", "tabpanel");
    }
    _handleActiveChange() {
        this.setAttribute("aria-hidden", this.active ? "false" : "true");
        this.inert = !this.active;
    }
    render() {
        return lit.html `
      <slot
        class=${classMap_js.classMap({
            "tab-panel": true,
            "tab-panel--active": this.active
        })}
      ></slot>
    `;
    }
}
SitTabPanel.styles = [...sitElement["default"].styles, tabPanel["default"]];
tslib.__decorate([
    decorators_js.property({ reflect: true })
], SitTabPanel.prototype, "name", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitTabPanel.prototype, "active", void 0);
tslib.__decorate([
    watch.watch("active")
], SitTabPanel.prototype, "_handleActiveChange", null);

exports.SitTabPanel = SitTabPanel;
exports["default"] = SitTabPanel;
//# sourceMappingURL=sit-tab-panel.cjs.js.map
