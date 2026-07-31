import { __decorate } from 'tslib';
import { html } from 'lit';
import SitElement from '../../base/sit-element.js';
import css_248z from './table-head.js';
import { consume } from '@lit/context';
import { TableHeaderBackgroundContext } from './table-context.js';
import { state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../utils/watch.js';

/**
 * @summary Table head represents a table header cell that identifies a group of information within the table.
 *
 * @slot default - Place any elements inside to display as the header content.
 */
class SitTableHead extends SitElement {
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
        return html `<div
      class=${classMap({
            "table-head": true,
            "header-background": this._headerBackground
        })}
    >
      <slot></slot>
    </div>`;
    }
}
SitTableHead.styles = [...SitElement.styles, css_248z];
__decorate([
    consume({ context: TableHeaderBackgroundContext, subscribe: true }),
    state()
], SitTableHead.prototype, "_headerBackground", void 0);
__decorate([
    watch("_headerBackground")
], SitTableHead.prototype, "_handleHeaderBackground", null);

export { SitTableHead, SitTableHead as default };
//# sourceMappingURL=sit-table-head.js.map
