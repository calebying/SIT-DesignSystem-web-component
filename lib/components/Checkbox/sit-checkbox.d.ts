import SitIcon from "../Icon/sit-icon";
import FormControlElement from "../../base/form-control-element";
import { SitFormControl } from "../../utils/formSubmitController";
declare const SitCheckbox_base: (new (...args: any[]) => import("../../utils/validatorMixin").ToBeValidatedElementInterface) & typeof FormControlElement;
/**
 * @summary Checkbox component is used when you require users to select multiple items from a list.
 *
 * @slot default - The label of checkbox.
 *
 * @event sit-change - Emitted when the checked state changes.
 * @event sit-blur - Emitted when input is not in focus.
 * @event sit-focus - Emitted when input is in focus.
 * @event sit-check - Emitted when checkbox is checked
 * @event sit-uncheck - Emitted when checkbox is unchecked
 * @event sit-invalid - Emitted when the checkbox's invalid state is set to true.
 * @event sit-valid - Emitted when the checkbox's invalid state is set to false.
 */
export declare class SitCheckbox extends SitCheckbox_base implements SitFormControl {
    static styles: import("lit").CSSResult[];
    /**@internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
    };
    /** Value of the HTML form control. Primarily used to differentiate a list of related checkboxes that have the same name. */
    value: string;
    /** Draws the checkbox in a checked state. */
    checked: boolean;
    /** Allows invalidFeedback, invalid and valid styles to be visible with the input */
    hasFeedback: "style" | "text" | "both";
    /** @internal Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
    defaultChecked: boolean;
    /** Marks the checkbox input as indeterminate , with indeterminate logo  */
    indeterminate: boolean;
    /** Makes the checkbox a required field. */
    required: boolean;
    /** Disables native and sit validation for the checkbox. */
    noValidate: boolean;
    /**Feedback text for error state when validated */
    invalidFeedback: string;
    private _isTouched;
    /** Simulates a click on the checkbox. */
    click(): void;
    /** Sets focus on the checkbox. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the checkbox. */
    blur(): void;
    private _handleChange;
    private _handleKeyDown;
    private _handleBlur;
    private _handleFocus;
    private _handleInvalid;
    /** @internal */
    _handleDisabledChange(): void;
    _handleIsTouched(): void;
    private _mixinResetFormControl;
    /**
     * Checks for validity. Under the hood, HTMLFormElement's reportValidity method calls this method to check for component's validity state
     * Note that the native error popup is prevented for Canvas form components by default. Instead the validation message shows up in the feedback container of SitInput
     */
    reportValidity(): boolean;
    /**
     * Checks for validity without any native error popup message
     */
    checkValidity(): boolean;
    /**
     * Returns the ValidityState object
     */
    get validity(): ValidityState;
    /**
     * Returns the validation message based on the ValidityState
     */
    get validationMessage(): string;
    firstUpdated(_changedProperties: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleHostClick;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitCheckbox;
