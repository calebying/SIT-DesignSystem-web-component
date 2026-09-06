import SitElement from "../../base/sit-element";
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
export declare class SitSegment extends SitElement {
    static styles: import("lit").CSSResult[];
    /** This segment's value, compared against the group's `value`. */
    value: string;
    /** Whether this segment is the selected one. Set by the parent group -- don't set this directly. */
    selected: boolean;
    /** Disables this individual segment. */
    disabled: boolean;
    /**@internal */
    private _button;
    /** Sets focus on this segment's internal button. Called by the parent group after a roving-tabindex keyboard move. */
    focus(options?: FocusOptions): void;
    /** Removes focus from this segment's internal button. */
    blur(): void;
    render(): import("lit").TemplateResult<1>;
}
export default SitSegment;
