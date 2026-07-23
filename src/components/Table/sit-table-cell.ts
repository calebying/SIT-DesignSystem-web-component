import { html } from "lit";

import SitElement from "../../base/sit-element";
import tableCellStyle from "./table-cell.css";

/**
 * @summary Table cell is used for presenting individual data values, interactive elements, or custom content within a table row.
 *
 * @slot default - Insert any elements to be rendered as the cell’s content.
 */
export class SitTableCell extends SitElement {
  static styles = [...SitElement.styles, tableCellStyle];

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "cell");
  }

  render() {
    return html`<div class="table-cell"><slot></slot></div>`;
  }
}

export default SitTableCell;
