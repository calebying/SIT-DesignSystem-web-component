import SitElement from "../../base/sit-element";
/**
 * @summary Radio allows the user to select one option from a set while seeing all available options.
 *
 * @slot default - The label of the radio input
 *
 * @event sit-focus - Emitted when the control gains focus.
 * @event sit-blur - Emitted when the control loses focus.
 */
export declare class SitRadio extends SitElement {
    static styles: import("lit").CSSResult[];
    /**
     * Draws the radio in a checked state. When used with SitRadioGroup, the value prop of SitRadioGroup overrides the checked prop
     */
    checked: boolean;
    /** The radio's value attribute. */
    value: string;
    /** Disables the radio. */
    disabled: boolean;
    /** Marks the radio input as invalid. Replace the pseudo :invalid selector for absent in custom elements */
    invalid: boolean;
    /** Automatically focuses the radio input when it becomes checked. */
    autofocus: boolean;
    private input;
    private radioId;
    connectedCallback(): void;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private addEventListeners;
    private setInitialAttributes;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitRadio;
