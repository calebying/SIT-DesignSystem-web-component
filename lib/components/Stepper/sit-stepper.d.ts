import SitElement from "../../base/sit-element";
import SitIcon from "../Icon/sit-icon";
import { IStepMetaData } from "./types";
export type { IStepMetaData };
/**
 * @summary Steppers are used to inform users which step they are at in a form or a process
 *
 * @event sit-next-step - Emitted right before the next step is reached. Event is fired when nextStep method is called.
 * @event sit-previous-step - Emitted right before the previous step is reached. Event is fired when previousStep method is called.
 * @event sit-last-step - Emitted right before the last step is reached. Event is fired when lastStep method is called.
 * @event sit-first-step - Emitted right before the first step is reached. Event is fired when firstStep method is called.
 * @event sit-arrived - Emitted right after the activeStep has updated its state, when upcoming step has arrived. Call `getComponent()` on the stepper to get the current step's component.
 * @event sit-reset - Emitted right before the step is reset to its defaultActiveStep. Event is fired when reset method is called.
 * @slot default - slot for sit-step children
 *
 */
export declare class SitStepper extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
    };
    /** The metadata of stepper, type `IStepMetaData`. Deprecated: use sit-step child components instead.
     * @deprecated Use sit-step child components instead of the steps property
     */
    steps: IStepMetaData[];
    /** The current state of active step. Defaults to 0 */
    activeStep: number;
    /** The orientation of stepper. By default, the stepper is of horizontal orientation */
    orientation: StepperOrientation;
    /** When true, the stepper's steps will be clickable */
    clickable: boolean;
    /** When true, the stepper's steps can only be clicked in a linear manner */
    linear: boolean;
    /** @internal Gets or sets the default activeStep used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
    defaultActiveStep: number;
    /** @internal */
    private _slotNodes;
    /** @internal */
    private _items;
    private _totalSteps;
    /** @internal Bound i-sit-click handler for proper event listener removal */
    private _boundHandleItemClick;
    /**
     * Indicates the presence of the default slot.
     * Used to switch between slotted sit-step children and the legacy steps property.
     * @type {boolean}
     * @internal
     * @default false
     */
    hasDefaultSlot: boolean;
    private readonly hasSlotController;
    connectedCallback(): void;
    /** @internal */
    private _handleSlotChange;
    updated(): void;
    /** @internal Updates step item properties based on active step and clickable state */
    private _updateStepItems;
    /** Returns the component associated with the given step index. Defaults to the current activeStep if no argument is provided. */
    getComponent(step?: number): unknown;
    /** Moves the active step forward one step */
    nextStep(): void;
    /** Moves the active step back one step */
    previousStep(): void;
    /** Changes the active step to the last step */
    lastStep(): void;
    /** Changes active step to the first step */
    firstStep(): void;
    /** Resets the Stepper to its initial active step state */
    reset(): void;
    /**@internal */
    _onStepperItemClick(index: number): void;
    /**@internal */
    _handleActiveStepChange(): void;
    /**@internal */
    _handleClickableChange(): void;
    /**@internal */
    _handleOrientationChange(): void;
    /**@internal */
    _handleKeyDown(event: KeyboardEvent, index: number): void;
    /**@internal */
    _handleStepClick(e: Event): void;
    render(): import("lit").TemplateResult<1>;
}
export type StepperOrientation = "horizontal" | "vertical";
export default SitStepper;
