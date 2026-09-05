import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import SitElement from "../../base/sit-element";
import segmentStyle from "./segment.css";

/**
 * @summary A single segment (option) inside a `<sit-segmented-control>`. Not
 * useful outside that context -- its selected/roving-tabindex state is owned
 * and driven entirely by the parent group, the same way `<sit-radio>` is
 * driven by `<sit-radio-group>`.
 *
 * The roving tab stop is the currently *selected* segment (`tabindex="0"` on
 * its internal button when `selected`, `"-1"` otherwise) -- the same rule
 * `<sit-radio-group>` applies to its own `<sit-radio>` children.
 *
 * @slot default - The segment's label content (text and/or an icon).
 */
export class SitSegment extends SitElement {
  static styles = [...SitElement.styles, segmentStyle];

  /** This segment's value, compared against the group's `value`. */
  @property({ type: String, reflect: true }) value = "";

  /** Whether this segment is the selected one. Set by the parent group -- don't set this directly. */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Disables this individual segment. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**@internal */
  @query("button") private _button: HTMLButtonElement;

  /** Sets focus on this segment's internal button. Called by the parent group after a roving-tabindex keyboard move. */
  public focus(options?: FocusOptions) {
    this._button?.focus(options);
  }

  /** Removes focus from this segment's internal button. */
  public blur() {
    this._button?.blur();
  }

  render() {
    return html`
      <button
        type="button"
        class=${classMap({ segment: true, selected: this.selected })}
        role="radio"
        aria-checked=${this.selected ? "true" : "false"}
        ?disabled=${this.disabled}
        tabindex=${this.selected ? "0" : "-1"}
      >
        <slot></slot>
      </button>
    `;
  }
}

export default SitSegment;
