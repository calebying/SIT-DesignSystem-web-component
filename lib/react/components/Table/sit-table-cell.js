'use client';
import { html } from 'lit';
import SitElement from '../../base/sit-element.js';
import css_248z from './table-cell.js';

/**
 * @summary Table cell is used for presenting individual data values, interactive elements, or custom content within a table row.
 *
 * @slot default - Insert any elements to be rendered as the cell’s content.
 */
class SitTableCell extends SitElement {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "cell");
    }
    render() {
        return html `<div class="table-cell"><slot></slot></div>`;
    }
}
SitTableCell.styles = [...SitElement.styles, css_248z];

export { SitTableCell, SitTableCell as default };
//# sourceMappingURL=sit-table-cell.js.map
