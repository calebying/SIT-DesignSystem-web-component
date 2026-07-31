import SitElement from "../../base/sit-element";
import SitIcon from "../Icon/sit-icon";
/**
 * @summary A single step within an sit-stepper. Manages its own active, completed, and disabled states based on props set by the parent stepper.
 *
 * @slot default - Optional content displayed below the step header label
 */
export declare class SitStep extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
    };
    /** The header text for the step */
    stepHeader: string;
    /** Optional icon name to display instead of step number */
    iconName: string | undefined;
    /** Optional component reference associated with this step. Retrievable via `sit-stepper.getComponent()`. */
    component: unknown;
    /** Whether this step is clickable */
    clickable: boolean;
    /** Whether this step is currently active */
    active: boolean;
    /** Whether this step is currently disabled */
    disabled: boolean;
    /** Whether this step is completed */
    completed: boolean;
    /** @internal The index of this step within the stepper */
    stepIndex: number;
    /** @internal Orientation of parent stepper (horizontal or vertical) */
    orientation: "horizontal" | "vertical";
    /** @internal Whether this step is the first sit-step of its type in the slot */
    isFirstOfType: boolean;
    render(): import("lit-html").TemplateResult<1>;
    /**@internal */
    _handleClick(e?: PointerEvent): void;
    /**@internal */
    _handleKeyDown(event: KeyboardEvent): void;
}
export default SitStep;
