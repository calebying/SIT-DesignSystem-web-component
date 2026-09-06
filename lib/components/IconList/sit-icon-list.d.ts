import SitElement from "../../base/sit-element";
/**
 * @summary A IconList can be used to display content related to the same topic. Each list item begins an icon.
 *
 * @slot default - The list items of IconList. Each list items should have aria attribute role="listitem" added
 */
export declare class SitIconList extends SitElement {
    static styles: import("lit").CSSResult[];
    /** Sets the aria-role of the sit-icon-list */
    role: string;
    /** The size of icon list. Changes the font-size the list items */
    size: "sm" | "md" | "lg";
    render(): import("lit").TemplateResult<1>;
}
export default SitIconList;
