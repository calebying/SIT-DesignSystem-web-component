import SitElement from "../../base/sit-element";
/**
 * @summary Table row organizes and groups table cells or header cells into a single horizontal line within the table.
 *
 * @slot default - Insert any table cell or header elements to be displayed as part of this row.
 */
export declare class SitTableRow extends SitElement {
    static styles: import("lit").CSSResult[];
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export default SitTableRow;
