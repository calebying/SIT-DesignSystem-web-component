import SitTable from "./sgds-table";
import { register } from "../../utils/ce-registry";
import SitTableHead from "./sgds-table-head";
import SitTableRow from "./sgds-table-row";
import SitTableCell from "./sgds-table-cell";

register("sgds-table", SitTable);
register("sgds-table-head", SitTableHead);
register("sgds-table-row", SitTableRow);
register("sgds-table-cell", SitTableCell);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-table": SitTable;
    "sgds-table-head": SitTableHead;
    "sgds-table-row": SitTableRow;
    "sgds-table-cell": SitTableCell;
  }
}
