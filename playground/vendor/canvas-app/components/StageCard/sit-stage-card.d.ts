import { LitElement, type PropertyValues } from "lit";
/**
 * @summary A composite pipeline-stage card: stage number + title, status
 * indicator, a checklist of sub-tasks, an "output" callout, and a gate
 * decision button. Ported from the CET-Superagent mockup's ".stage-card"
 * pattern — no equivalent exists in SIT-DesignSystem-web-component's core
 * Card component (Card's slot API doesn't compose this shape cleanly).
 *
 * NOTE: extends LitElement directly, not SitElement — SitElement is an
 * internal base class in @sit-canvas/canvas-web-component (not exported
 * from its public root index.ts, and that package isn't published to the
 * public npm registry), so this component only re-implements the tiny
 * public-shaped surface it actually needs (a custom event emitter) rather
 * than depending on an unexported/unresolvable internal.
 *
 * Styles are an inline `css` tagged template (not a separate .css file)
 * so this component compiles under plain `tsc` with zero extra build
 * tooling — SIT-DesignSystem-web-component's `import x from "./x.css"`
 * convention relies on `rollup-plugin-postcss-lit`, which this
 * intentionally lightweight package does not include.
 *
 * @slot checklist - list items (rendered as <li>) for the task checklist
 * @slot output - content for the "OUTPUT" callout box
 *
 * @event sit-gate-decision - Emitted when the gate button is clicked.
 *   detail: { gate: string }
 */
export declare class SitStageCard extends LitElement {
  static styles: import("lit").CSSResult;
  /** Stage number shown in the circular badge (e.g. "1", "7"). */
  stageNumber: string;
  /** Stage title, shown in the colored header band. */
  stageTitle: string;
  /** Header band / accent color — any valid CSS color, typically a --sit-* token reference. */
  stageColor: string;
  /** Status of this stage — drives the status dot color and label text. */
  status: StageStatus;
  /** Human-readable status label (e.g. "Completed", "AI Working", "Not Started"). */
  statusLabel: string;
  /** Output callout label above the slotted content (e.g. "OUTPUT"). */
  outputLabel: string;
  /** Gate button label (e.g. "A · Accept / Hold / Reject"). Omit to hide the button. */
  gateLabel: string;
  /** Gate identifier passed through on the sit-gate-decision event detail. */
  gate: string;
  /** Disables the gate button (greyed out, non-clickable) — for stages not yet reachable. */
  gateDisabled: boolean;
  /** Reflects the mockup's non-hoverable "active/in-progress" ring state. */
  active: boolean;
  /** Reflects the mockup's dimmed "not yet reached" state. */
  inactive: boolean;
  private _statusColorVar;
  private _handleGateClick;
  /**
   * --stage-color must live on the HOST, not an inner wrapper: :host's
   * border-top-color reads it, and CSS custom properties only inherit
   * downward — setting it on a child would leave the host's 4px top accent
   * border falling back to SIT Red on every card. (This was a real bug
   * caught in review: all 7 stage cards rendered a red top border while
   * only their header bands picked up the stage color.)
   */
  protected willUpdate(changed: PropertyValues): void;
  render(): import("lit-html").TemplateResult<1>;
}

export type StageStatus = "completed" | "active" | "pending" | "not-started";
export default SitStageCard;
