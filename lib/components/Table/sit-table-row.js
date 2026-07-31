import { html } from 'lit';
import SitElement from '../../base/sit-element.js';
import css_248z from './table-row.js';

/**
 * @summary Table row organizes and groups table cells or header cells into a single horizontal line within the table.
 *
 * @slot default - Insert any table cell or header elements to be displayed as part of this row.
 */
class SitTableRow extends SitElement {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "row");
    }
    render() {
        return html `<slot class="table-row"></slot>`;
    }
}
SitTableRow.styles = [...SitElement.styles, css_248z];

export { SitTableRow, SitTableRow as default };
//# sourceMappingURL=sit-table-row.js.map
