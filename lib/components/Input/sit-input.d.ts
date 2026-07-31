import FormControlElement from "../../base/form-control-element";
import type { SitFormControl } from "../../utils/formSubmitController";
import { SitSpinner } from "../Spinner/sit-spinner";
import SitIcon from "../Icon/sit-icon";
declare const SitInput_base: (new (...args: any[]) => import("../../utils/validatorMixin").ToBeValidatedElementInterface) & typeof FormControlElement;
/**
 * @summary Text inputs allow your users to enter letters, numbers and symbols on a single line.
 *
 * @slot icon - The slot for leading icon of text input
 * @slot trailing-icon - The slot for trailing icon of text input. When present, it overrides valid icon and loading spinner rendered when valid prop or loading prop are true
 * @slot action - The slot for call to action of the text input. It is recommended to use sit-icon-button within this slot
 * @event sit-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sit-input - Emitted when the control receives input and its value changes.
 * @event sit-focus - Emitted when input is in focus.
 * @event sit-blur - Emitted when input is not in focus.
 * @event sit-invalid - Emitted when input is invalid
 * @event sit-valid - Emitted when input is valid
 *
 */
export declare class SitInput extends SitInput_base implements SitFormControl {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-spinner": typeof SitSpinner;
        "sit-icon": typeof SitIcon;
    };
    type: "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "datetime-local";
    /** The prefix of the input */
    prefix: string;
    /** The suffix of the input */
    suffix: string;
    /** Sets the minimum length of the input */
    minlength: number;
    /** Sets the maximum length of the input */
    maxlength: number;
    /** The input's minimum value. Only applies number input types. */
    min: number;
    /** The input's maximum value. Only applies number input types. */
    max: number;
    /** The input's placeholder text. */
    placeholder: string;
    /** A pattern to validate input against. */
    pattern: string;
    /** Autofocus the input */
    autofocus: boolean;
    /** Makes the input readonly. */
    readonly: boolean;
    /** Controlling of autocomplete behaviour */
    autocomplete: string;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to number input types.
     */
    step: number | "any";
    /** Allows invalidFeedback, invalid and valid styles to be visible with the input */
    hasFeedback: "style" | "text" | "both";
    /**Feedback text for error state when validated */
    invalidFeedback: string;
    /**Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
    defaultValue: string;
    /** Marks the component as valid. */
    valid: boolean;
    /** Marks the component as loading. */
    loading: boolean;
    /** Makes the input a required field. */
    required: boolean;
    /** Disables native and sit validation for the input. */
    noValidate: boolean;
    /**The input's value attribute. */
    value: string;
    protected _isTouched: boolean;
    private _showPassword;
    /** Sets focus on the input. */
    focus(options?: FocusOptions): void;
    /** Sets blur on the input. */
    blur(): void;
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
     * Checks for validity without any native error popup message
     */
    setValidity(flags?: ValidityStateFlags, message?: string, anchor?: HTMLElement): void;
    /**
     * Returns the ValidityState object
     */
    get validity(): ValidityState;
    /**
     * Returns the validation message based on the ValidityState
     */
    get validationMessage(): string;
    protected _handleFocus(): void;
    protected _handleBlur(): void;
    private _handleClick;
    protected _handleChange(e: Event): void;
    protected _handleInputChange(e: Event): void;
    /** @internal */
    _handleIsTouched(): void;
    _handleDisabledChange(): void;
    protected _renderInput(): import("lit-html").TemplateResult;
    protected _renderPasswordToggle(): import("lit-html").TemplateResult;
    protected _inputType(): "number" | "text" | "email" | "password" | "search" | "tel" | "time" | "url" | "datetime-local";
    protected _renderFeedback(): import("lit-html").TemplateResult;
    protected _renderLabel(): import("lit-html").TemplateResult;
    protected _renderHintText(): import("lit-html").TemplateResult;
    render(): import("lit-html").TemplateResult;
}
export default SitInput;
