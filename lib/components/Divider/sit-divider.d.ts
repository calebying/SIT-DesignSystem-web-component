import SitElement from "../../base/sit-element";
/**
 * @summary A divider is a thin line that groups content in lists and layouts. They bring clarity to a layout by grouping and dividing content in close proximity.
 */
export declare class SitDivider extends SitElement {
    static styles: import("lit").CSSResult[];
    /** Sets the orientation of divider to vertical. Defaults to horizontal */
    orientation: "horizontal" | "vertical";
    /** Sets the orientation of divider to vertical. Defaults to false */
    thickness: "thin" | "thick" | "thicker";
    connectedCallback(): void;
}
export default SitDivider;
