import SitElement from "../../base/sit-element";
/**
 * @summary Table head represents a table header cell that identifies a group of information within the table.
 *
 * @slot default - Place any elements inside to display as the header content.
 */
export declare class SitTableHead extends SitElement {
    static styles: import("lit").CSSResult[];
    private _headerBackground;
    connectedCallback(): void;
    _handleHeaderBackground(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitTableHead;
