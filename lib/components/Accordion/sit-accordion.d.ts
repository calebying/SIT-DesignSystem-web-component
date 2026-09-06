import SitElement from "../../base/sit-element";
import type SitAccordionItem from "./sit-accordion-item";
export type AccordionDensity = "default" | "compact" | "spacious";
export type AccordionVariant = "default" | "border";
/**
 * @summary A dropdown mechanism that allow users to either show or hide related content. `SitAccordion` is a wrapper to manage the behaviour for multiple `SitAccordionItems`
 * @slot default - slot for accordion-item
 *
 */
export declare class SitAccordion extends SitElement {
    static styles: import("lit").CSSResult[];
    /** Allows multiple accordion items to be opened at the same time */
    allowMultiple: boolean;
    /** The variant of accordion */
    variant: AccordionVariant;
    /** The density of accordion */
    density: AccordionDensity;
    /** @internal */
    private defaultNodes;
    /** @internal */
    get items(): SitAccordionItem[];
    private _handleSlotChange;
    private _onToggle;
    private _onKeyboardToggle;
    render(): import("lit").TemplateResult<1>;
}
export default SitAccordion;
