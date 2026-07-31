import { LitElement } from "lit";
import { SitInput } from "../components";
import { InputValidationController } from "./inputValidationController";
type Constructor<T> = new (...args: any[]) => T;
/**
 * @summary The FormValidationMixin used by the form components
 * @param superClass
 * @returns
 */
export declare const SitFormValidatorMixin: <T extends Constructor<LitElement>>(superClass: T) => Constructor<ToBeValidatedElementInterface> & T;
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
export {};
