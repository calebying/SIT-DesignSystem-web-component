import { __decorate } from "tslib";
import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
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
export class SitAgentStatusCard extends LitElement {
    constructor() {
        super(...arguments);
        /** Agent name (e.g. "Design Agent"). */
        this.agentName = "";
        /** Scope label under the name (e.g. "Stage 3", "Background"). */
        this.scope = "";
        /** Drives the status pill color/pulse and which footer renders. */
        this.status = "idle";
        /** Status pill label text (e.g. "Running", "Monitoring", "Idle"). */
        this.statusLabel = "";
        /** Accent color for icon/status/progress — a --sit-* token reference. Defaults per status if unset. */
        this.accentColor = "";
        /** The bold "Current: ..." line. */
        this.current = "";
        /** The muted detail line under "Current". */
        this.detail = "";
        /** Progress percent (0-100) — only rendered when status is "running". */
        this.progressPercent = 0;
        /** ETA text shown opposite the percent (e.g. "~18 min remaining"). */
        this.eta = "";
        /** Last-scan note — only rendered when status is "monitoring" (e.g. "✓ Last scan: 11:30 AM · No new signals"). */
        this.scanNote = "";
        /** Activation-condition note — only rendered when status is "idle" (e.g. "Activates after Gate C decision"). */
        this.activationNote = "";
    }
    _defaults() {
        switch (this.status) {
            case "running":
                return { bg: "var(--sit-yellow-100)", color: "var(--sit-yellow-500)" };
            case "monitoring":
                return { bg: "var(--sit-blue-100)", color: "var(--sit-blue-500)" };
            default:
                return { bg: "var(--sit-gray-100)", color: "var(--sit-gray-500)" };
        }
    }
    _statusPillVars() {
        const { bg, color } = this.status === "running"
            ? { bg: "var(--sit-yellow-100)", color: "var(--sit-yellow-600)" }
            : this.status === "monitoring"
                ? { bg: "var(--sit-green-100)", color: "var(--sit-green-600)" }
                : { bg: "var(--sit-gray-50)", color: "var(--sit-gray-500)" };
        return `--status-bg: ${bg}; --status-color: ${color}`;
    }
    render() {
        const accent = this.accentColor || this._defaults().color;
        const accentBg = this._defaults().bg;
        const hostVars = `--accent-color: ${accent}; --accent-bg: ${accentBg}`;
        return html `
      <div class="card" part="card" style=${hostVars}>
        <div class="header-row">
          <div class="name-group">
            <span class="icon-badge">
              <slot name="icon">🤖</slot>
            </span>
            <div>
              <div class="agent-name">${this.agentName}</div>
              <div class="agent-scope">${this.scope}</div>
            </div>
          </div>
          <span class="status-pill" style=${this._statusPillVars()}>
            ${this.status !== "idle" ? html `<span class="status-dot pulse"></span>` : nothing}
            ${this.statusLabel}
          </span>
        </div>

        <div class="current-line"><strong>Current:</strong> ${this.current}</div>
        <div class="detail-line">${this.detail}</div>

        ${this.status === "running"
            ? html `
              <div class="progress-track">
                <div class="progress-fill" style="width: ${this.progressPercent}%"></div>
              </div>
              <div class="progress-labels">
                <span>${this.progressPercent}% complete</span>
                <span>${this.eta}</span>
              </div>
            `
            : nothing}
        ${this.status === "monitoring" ? html `<div class="scan-note">${this.scanNote}</div>` : nothing}
        ${this.status === "idle" ? html `<div class="activation-note">${this.activationNote}</div>` : nothing}
      </div>
    `;
    }
}
SitAgentStatusCard.styles = css `
    :host {
      display: block;
    }

    .card {
      background-color: var(--sit-surface-default);
      border: var(--sit-border-width-1) solid var(--sit-border-color-muted);
      border-radius: var(--sit-border-radius-lg);
      padding: var(--sit-component-padding-md);
    }

    :host([status="running"]) .card {
      border-width: var(--sit-border-width-2);
      border-color: var(--accent-color, var(--sit-yellow-200));
    }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--sit-component-gap-sm);
    }

    .name-group {
      display: flex;
      align-items: center;
      gap: var(--sit-component-gap-xs);
    }

    .icon-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sit-dimension-32);
      height: var(--sit-dimension-32);
      border-radius: var(--sit-border-radius-md);
      background-color: var(--accent-bg, var(--sit-gray-100));
      color: var(--accent-color, var(--sit-gray-500));
      flex-shrink: 0;
    }

    .agent-name {
      font-size: var(--sit-font-size-label-sm);
      font-weight: var(--sit-font-weight-bold);
      color: var(--sit-color-subtle);
    }

    .agent-scope {
      font-size: var(--sit-font-size-label-xs);
      color: var(--sit-color-muted);
    }

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: var(--sit-spacer-1);
      font-size: var(--sit-font-size-label-xs);
      font-weight: var(--sit-font-weight-semibold);
      padding: var(--sit-spacer-1) var(--sit-padding-xs);
      border-radius: var(--sit-border-radius-full);
      background-color: var(--status-bg, var(--sit-gray-50));
      color: var(--status-color, var(--sit-gray-500));
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: var(--sit-border-radius-full);
      background-color: var(--status-color, var(--sit-gray-400));
    }

    .status-dot.pulse {
      animation: sit-agent-pulse 2s infinite;
    }

    @keyframes sit-agent-pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }

    .current-line {
      font-size: var(--sit-font-size-label-xs);
      color: var(--sit-color-subtle);
      margin-bottom: var(--sit-spacer-1);
    }

    .detail-line {
      font-size: var(--sit-font-size-label-xs);
      color: var(--sit-color-muted);
      margin-bottom: var(--sit-component-gap-sm);
    }

    .progress-track {
      background-color: var(--sit-gray-100);
      border-radius: var(--sit-border-radius-full);
      height: 8px;
      margin-bottom: var(--sit-spacer-2);
      overflow: hidden;
    }

    .progress-fill {
      background-color: var(--accent-color, var(--sit-yellow-400));
      height: 100%;
      border-radius: var(--sit-border-radius-full);
    }

    .progress-labels {
      display: flex;
      justify-content: space-between;
      font-size: var(--sit-font-size-label-xs);
      color: var(--sit-color-muted);
    }

    .scan-note {
      font-size: var(--sit-font-size-label-xs);
      font-weight: var(--sit-font-weight-semibold);
      color: var(--sit-green-600);
    }

    .activation-note {
      font-size: var(--sit-font-size-label-xs);
      color: var(--sit-color-muted);
    }
  `;
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "agentName", void 0);
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "scope", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitAgentStatusCard.prototype, "status", void 0);
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "statusLabel", void 0);
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "accentColor", void 0);
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "current", void 0);
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "detail", void 0);
__decorate([
    property({ type: Number })
], SitAgentStatusCard.prototype, "progressPercent", void 0);
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "eta", void 0);
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "scanNote", void 0);
__decorate([
    property({ type: String })
], SitAgentStatusCard.prototype, "activationNote", void 0);
export default SitAgentStatusCard;
if (!customElements.get("sit-agent-status-card")) {
    customElements.define("sit-agent-status-card", SitAgentStatusCard);
}
//# sourceMappingURL=sit-agent-status-card.js.map