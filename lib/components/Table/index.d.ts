import SitTable from "./sit-table";
import SitTableHead from "./sit-table-head";
import SitTableRow from "./sit-table-row";
import SitTableCell from "./sit-table-cell";
declare global {
    interface HTMLElementTagNameMap {
        "sit-table": SitTable;
        "sit-table-head": SitTableHead;
        "sit-table-row": SitTableRow;
        "sit-table-cell": SitTableCell;
    }
}
