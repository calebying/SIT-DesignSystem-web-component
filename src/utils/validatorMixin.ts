import { LitElement, PropertyValueMap } from "lit";
import { queryAsync } from "lit/decorators.js";
import { SitInput } from "../components";
import { InputValidationController } from "./inputValidationController";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

/**
 * @summary The FormValidationMixin used by the form components
 * @param superClass
 * @returns
 */
export const SitFormValidatorMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class ToBeValidatedElement extends superClass {
    static formAssociated = true;
    inputValidationController: InputValidationController;
    input: HTMLInputElement | SitInput | HTMLTextAreaElement;
    private _isTouched = false;
    private _internals: ElementInternals;
    @queryAsync("sit-input") sitInput: Promise<SitInput>;
    @queryAsync("sit-datepicker-input") sitDatepickerInput: Promise<SitInput>;

    // TypeScript requires mixin constructors to have rest parameter of type any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this._internals = this.attachInternals();
    }

    connectedCallback(): void {
      super.connectedCallback();

      /** Idempotency guarantee — always create so reset can clear validity even with noValidate */
      this.inputValidationController ??= new InputValidationController(this);
    }
    async firstUpdated(changedProperties: PropertyValueMap<this>) {
      super.firstUpdated(changedProperties);

      /* Either input or sit-input. For example, quantity-toggle uses sit-input */
      this.input =
        this.shadowRoot.querySelector("input") ||
        (await this.sitInput) ||
        this.shadowRoot.querySelector("textarea") ||
        (await this.sitDatepickerInput);

      this._mixinSetFormValue();

      if (this._mixinShouldSkipSitValidation()) return;

      this._mixinValidate(this.input);
    }

    /**
     * Native lifecycle of Form-Associated Custom Element Callbacks
     */
    formResetCallback() {
      if (this._mixinResetFormControl) {
        this._mixinResetFormControl();
      } else {
        this.value = this.defaultValue;
        this._mixinResetValidity(this.input);
      }
      this._mixinSetFormValue();
    }
    /**
     *
     * Methods use by classes using this mixin
     */

    /**
     * OnChange of form component
     * 1. Make value of control accessible via FormData
     * 2. Run change handler
     */
    _mixinHandleChange(e: Event): void {
      this._mixinSetFormValue();
      if (this._mixinShouldSkipSitValidation()) return;
      this.inputValidationController.handleChange(e);
    }
    /**
     * OnChange of form component
     * 1. Make value of control accessible via FormData
     * 2. Run input handler
     */
    _mixinHandleInputChange(e: Event): void {
      this._mixinSetFormValue();
      if (this._mixinShouldSkipSitValidation()) return;
      this.inputValidationController.handleInput(e);
    }
    /**
     * During form resetting,
     * 1. ValidityState is reset (always, regardless of noValidate)
     * 2. invalid reactive prop is updated after the reset (always)
     * 3. Reset touched state to false for a pristine form (always)
     * 4. Revalidates the ValidityState (but do not update invalid prop)
     * to prepare for the next validity check (skipped when noValidate)
     */
    _mixinResetValidity(input: HTMLInputElement | SitInput | HTMLTextAreaElement) {
      this.inputValidationController.resetValidity();
      this.inputValidationController.updateInvalidState();
      this._isTouched ? (this._isTouched = false) : null;
      if (this._mixinShouldSkipSitValidation()) return;
      this.inputValidationController.validateInput(input);
    }

    _mixinValidate(input: HTMLInputElement | SitInput | HTMLTextAreaElement) {
      if (this._mixinShouldSkipSitValidation()) return;
      this.inputValidationController.validateInput(input);
    }
    _mixinSetFormValue() {
      const value = this.value as string | FormData | File;
      this._internals.setFormValue(value);
    }
    _mixinCheckValidity(): boolean {
      if (this._mixinShouldSkipSitValidation()) return true;
      return this.inputValidationController.checkValidity();
    }
    _mixinReportValidity(): boolean {
      if (this._mixinShouldSkipSitValidation()) return true;
      return this.inputValidationController.reportValidity();
    }
    _mixinGetValidity(): ValidityState {
      return this._internals.validity;
    }
    _mixinGetValidationMessage(): string {
      return this._internals.validationMessage;
    }
    _mixinSetValidity(flags?: ValidityStateFlags, message?: string, anchor?: HTMLElement): void {
      if (this._mixinShouldSkipSitValidation()) return;
      return this.inputValidationController.setValidity(flags, message, anchor);
    }
    // Only check for noValidate prop
    _mixinShouldSkipSitValidation() {
      const form = this.closest("form");

      return form?.noValidate || this.noValidate;
    }

    /** DECLARED INSTANCE METHODS AND PROPERTIES*/

    /**
     * Resets a form control to its initial state
     */
    declare _mixinResetFormControl: () => void;
    declare value: string;
    declare defaultValue: string;
    declare defaultChecked: boolean;
    declare noValidate: boolean;
  }

  return ToBeValidatedElement as Constructor<ToBeValidatedElementInterface> & T;
};

export declare class ToBeValidatedElementInterface {
  inputValidationController: InputValidationController;
  input: HTMLInputElement;
  _mixinHandleChange(e: Event): void;
  _mixinHandleInputChange(e: Event): void;
  _mixinResetValidity(input: HTMLInputElement | SitInput): void;
  _mixinValidate(input: HTMLInputElement | SitInput): void;
  _mixinSetFormValue(): void;
  _mixinCheckValidity(): boolean;
  _mixinReportValidity(): boolean;
  _mixinSetValidity(flags?: ValidityStateFlags, message?: string, anchor?: HTMLElement): void;
  _mixinGetValidity(): ValidityState;
  _mixinGetValidationMessage(): string;
  _mixinShouldSkipSitValidation(): boolean;
}
