import { PropertyValueMap } from "lit";
import SitElement from "../../base/sit-element";
/**
 * @summary Tooltips display more information when users hover over, focus on, or interact with an element.
 * @slot default - The element to target the tooltip to.
 *
 * @event sit-show - Emitted event when show instance is called
 * @event sit-after-show - Emitted event when tooltip has been made visible to the user and CSS transitions have completed
 * @event sit-hide - Emitted event when hide instance is called
 * @event sit-after-hide - Emitted event when tooltip has hidden to the user and CSS transitions have completed
 *
 */
export declare class SitTooltip extends SitElement {
    static styles: import("lit").CSSResult[];
    /** Internal ref to the tooltip container */
    private _myTooltip;
    /** Internal ref to the actual tooltip bubble */
    private _tooltipBubble;
    /** The tooltip's content. Must be text */
    content: string;
    /** The placement of tooltip relative to its target */
    placement: "top" | "bottom" | "left" | "right";
    /** The method to invoke the tooltip. `hover focus` is the default value which allows tooltip to be triggered via mouse hover and keyboard focus. Add `tabindex=0` for HTMLelements that are not tabbable. */
    trigger: "click" | "hover" | "focus" | "hover focus";
    /** Is tooltip currently open */
    private open;
    private _tooltipTargetElements;
    private _cleanupAutoUpdate?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValueMap<this>): void;
    private _handleClickOutOfElement;
    private _handleSlotChange;
    private updateFloatingPosition;
    /** Show tooltip */
    show(): Promise<void>;
    /** Hide tooltip */
    hide(): void;
    /** Toggle tooltip */
    toggle(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitTooltip;
