import { nothing } from "lit";
import type { TemplateResult } from "lit";
import SitElement from "../../base/sit-element";
/**
 * @summary Icons offer a form of visual shorthand that we are all familiar with. They can label, inform and aid navigation quickly and effectively in minimal space. Icons must first and foremost communicate meaning. By default, the icon component renders icons from `SitIcon` library set
 */
export declare class SitIcon extends SitElement {
    static styles: import("lit").CSSResult[];
    /** The name of the icon from sit icon library */
    name: string;
    /** Specifies a small, medium or large icon, the size is medium by default. */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2-xl" | "3-xl";
    /** An accessible label for the icon. When set, the SVG is treated as informative. When omitted, the SVG is marked as decorative with aria-hidden="true". */
    ariaLabel: string;
    private _icon;
    willUpdate(changedProperties: Map<string, unknown>): void;
    private _loadIcon;
    updated(): void;
    render(): TemplateResult | typeof nothing;
}
export default SitIcon;
