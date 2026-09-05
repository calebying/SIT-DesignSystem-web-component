import { html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";
import SitElement from "../../base/sit-element";
import { watch } from "../../utils/watch";
import SitSegment from "./sit-segment";
import segmentedControlStyle from "./segmented-control.css";
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
export class SitSegmentedControl extends SitElement {
  static styles = [...SitElement.styles, segmentedControlStyle];

  /**@internal */
  static dependencies = {
    "sit-segment": SitSegment
  };

  /** The selected segment's value. */
  @property({ type: String, reflect: true }) value = "";

  /** Disables every segment in the group. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Segment size. */
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" = "md";

  /** Accessible label for the group (there's no visible `<label>` element, so this is required for a11y). */
  @property({ type: String }) ariaLabel: string;

  @queryAssignedElements()
  private _segments!: Array<SitSegment>;

  private _handleSlotChange() {
    this._disableChildSegments();
    this._syncSelection();

    const segments = this._segments;
    if (segments.length > 0 && !segments.some(s => s.selected)) {
      const firstEnabled = segments.find(s => !s.disabled) ?? segments[0];
      this.value = firstEnabled.value;
      this._syncSelection();
    }
  }

  private _syncSelection() {
    this._segments.forEach(segment => {
      segment.selected = segment.value === this.value;
    });
  }

  private _disableChildSegments() {
    if (this.disabled) {
      this._segments.forEach(segment => (segment.disabled = true));
    }
  }

  private _selectSegment(segment: SitSegment, { moveFocus = false }: { moveFocus?: boolean } = {}) {
    if (segment.disabled || segment.value === this.value) return;

    this.value = segment.value;
    this._syncSelection();
    this.emit<ISitSegmentedControlChangeEventDetail>("sit-change", { detail: { value: this.value } });

    if (moveFocus) segment.focus();
  }

  private _handleClick(event: MouseEvent) {
    const target = (event.target as HTMLElement).closest("sit-segment") as SitSegment | null;
    if (!target) return;
    this._selectSegment(target);
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }

    const segments = this._segments.filter(segment => !segment.disabled);
    if (segments.length === 0) return;

    const current = segments.find(segment => segment.selected) ?? segments[0];

    if (event.key === " ") {
      event.preventDefault();
      this._selectSegment(current, { moveFocus: true });
      return;
    }

    const incr = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    let index = segments.indexOf(current) + incr;
    if (index < 0) index = segments.length - 1;
    if (index > segments.length - 1) index = 0;

    event.preventDefault();
    this._selectSegment(segments[index], { moveFocus: true });
  }

  /**@internal */
  @watch("disabled", { waitUntilFirstUpdate: true })
  _handleDisabledChange() {
    this._disableChildSegments();
  }

  render() {
    return html`
      <div
        class="segmented-control"
        role="radiogroup"
        aria-label=${this.ariaLabel}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `;
  }
}

export default SitSegmentedControl;
