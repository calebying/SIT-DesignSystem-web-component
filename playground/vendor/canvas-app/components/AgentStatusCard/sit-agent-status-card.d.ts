import { LitElement } from "lit";
export type AgentStatus = "running" | "monitoring" | "idle";
/**
 * @summary A composite AI-agent status card: icon + name + scope, a status
 * pill (pulsing dot for running/monitoring, plain for idle), a "current
 * task" line, a detail line, and ONE of three optional footers — a
 * progress bar + ETA (running), a last-scan note (monitoring), or an
 * activation-condition note (idle). Ported from the CET-Superagent
 * mockup's Agent Monitor cards (sit-superagent1-ui.html lines 899-967).
 *
 * NOTE: extends LitElement directly, not SitElement — see sit-stage-card
 * for the reasoning (SitElement is an internal, unresolvable-from-here
 * class in @sit-canvas/canvas-web-component).
 *
 * @slot icon - the agent's icon (defaults to a simple robot glyph if empty)
 *
 * @csspart card - the outer card container, for the "running" emphasis border
 */
export declare class SitAgentStatusCard extends LitElement {
  static styles: import("lit").CSSResult;
  /** Agent name (e.g. "Design Agent"). */
  agentName: string;
  /** Scope label under the name (e.g. "Stage 3", "Background"). */
  scope: string;
  /** Drives the status pill color/pulse and which footer renders. */
  status: AgentStatus;
  /** Status pill label text (e.g. "Running", "Monitoring", "Idle"). */
  statusLabel: string;
  /** Accent color for icon/status/progress — a --sit-* token reference. Defaults per status if unset. */
  accentColor: string;
  /** The bold "Current: ..." line. */
  current: string;
  /** The muted detail line under "Current". */
  detail: string;
  /** Progress percent (0-100) — only rendered when status is "running". */
  progressPercent: number;
  /** ETA text shown opposite the percent (e.g. "~18 min remaining"). */
  eta: string;
  /** Last-scan note — only rendered when status is "monitoring" (e.g. "✓ Last scan: 11:30 AM · No new signals"). */
  scanNote: string;
  /** Activation-condition note — only rendered when status is "idle" (e.g. "Activates after Gate C decision"). */
  activationNote: string;
  /**
   * Single source of truth for the status -> colour mapping. Both the icon
   * accent and the status pill derive from this one table, so they can't
   * drift apart (an earlier version had two separate switch/ternary blocks
   * that already disagreed: monitoring was blue in one and green in the
   * other).
   *
   * The icon accent and pill genuinely differ per the source mockup — the
   * Evidence Agent has a blue icon badge but a green "Monitoring" pill — so
   * they're distinct fields here rather than one shared colour.
   */
  private static _statusTheme;
  private get _theme();
  render(): import("lit-html").TemplateResult<1>;
}
export default SitAgentStatusCard;
