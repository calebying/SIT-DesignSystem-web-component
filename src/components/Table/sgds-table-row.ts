import { html } from "lit";
import SitElement from "../../base/sgds-element";
import tableRowStyle from "./table-row.css";

/**
 * @summary Table row organizes and groups table cells or header cells into a single horizontal line within the table.
 *
 * @slot default - Insert any table cell or header elements to be displayed as part of this row.
 */
export class SitTableRow extends SitElement {
  static styles = [...SitElement.styles, tableRowStyle];

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "row");
  }

  render() {
    return html`<slot class="table-row"></slot>`;
  }
}

export default SitTableRow;
