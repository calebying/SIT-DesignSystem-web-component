import SitTable from "./sit-table";
import { register } from "../../utils/ce-registry";
import SitTableHead from "./sit-table-head";
import SitTableRow from "./sit-table-row";
import SitTableCell from "./sit-table-cell";

register("sit-table", SitTable);
register("sit-table-head", SitTableHead);
register("sit-table-row", SitTableRow);
register("sit-table-cell", SitTableCell);

declare global {
  interface HTMLElementTagNameMap {
    "sit-table": SitTable;
    "sit-table-head": SitTableHead;
    "sit-table-row": SitTableRow;
    "sit-table-cell": SitTableCell;
  }
}
