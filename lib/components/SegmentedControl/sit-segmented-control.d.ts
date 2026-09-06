import SitElement from "../../base/sit-element";
import SitSegment from "./sit-segment";
import type { ISitSegmentedControlChangeEventDetail } from "./types";
export type { ISitSegmentedControlChangeEventDetail };
/**
 * @summary A grouped single-choice control: a connected row of segments with
 * one active at a time. Reuses `<sit-radio-group>`'s ARIA/keyboard pattern
 * (role="radiogroup" + role="radio" children, roving tabindex, Arrow keys to
 * move selection, Space to select) applied to button-styled segments instead
 * of radio inputs.
 *
 * Unlike a native radio group, a segmented control always has exactly one
 * segment selected -- there's no valid "nothing selected" visual state for a
 * connected button row the way an unchecked radio group is valid. If `value`
 * doesn't match any segment (including being unset), the first non-disabled
 * segment is selected automatically once segments are known (on slotchange).
 *
 * @slot default - `<sit-segment>` children.
 *
 * @event sit-change - Emitted when the selected segment changes (click or keyboard).
 * @eventDetail {ISitSegmentedControlChangeEventDetail} sit-change
 */
export declare class SitSegmentedControl extends SitElement {
    static styles: import("lit").CSSResult[];
    /**@internal */
    static dependencies: {
        "sit-segment": typeof SitSegment;
    };
    /** The selected segment's value. */
    value: string;
    /** Disables every segment in the group. */
    disabled: boolean;
    /** Segment size. */
    size: "sm" | "md" | "lg";
    /** Accessible label for the group (there's no visible `<label>` element, so this is required for a11y). */
    ariaLabel: string;
    private _segments;
    private _handleSlotChange;
    private _syncSelection;
    private _disableChildSegments;
    private _selectSegment;
    private _handleClick;
    private _handleKeyDown;
    /**@internal */
    _handleDisabledChange(): void;
    render(): import("lit").TemplateResult<1>;
}
export default SitSegmentedControl;
