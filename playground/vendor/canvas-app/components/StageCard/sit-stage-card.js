import { __decorate } from "tslib";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
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
export class SitStageCard extends LitElement {
    constructor() {
        super(...arguments);
        /** Stage number shown in the circular badge (e.g. "1", "7"). */
        this.stageNumber = "";
        /** Stage title, shown in the colored header band. */
        this.stageTitle = "";
        /** Header band / accent color — any valid CSS color, typically a --sit-* token reference. */
        this.stageColor = "";
        /** Status of this stage — drives the status dot color and label text. */
        this.status = "not-started";
        /** Human-readable status label (e.g. "Completed", "AI Working", "Not Started"). */
        this.statusLabel = "";
        /** Output callout label above the slotted content (e.g. "OUTPUT"). */
        this.outputLabel = "OUTPUT";
        /** Gate button label (e.g. "A · Accept / Hold / Reject"). Omit to hide the button. */
        this.gateLabel = "";
        /** Gate identifier passed through on the sit-gate-decision event detail. */
        this.gate = "";
        /** Disables the gate button (greyed out, non-clickable) — for stages not yet reachable. */
        this.gateDisabled = false;
        /** Reflects the mockup's non-hoverable "active/in-progress" ring state. */
        this.active = false;
        /** Reflects the mockup's dimmed "not yet reached" state. */
        this.inactive = false;
    }
    _statusColorVar() {
        switch (this.status) {
            case "completed":
                return "var(--sit-green-400)";
            case "active":
                return "var(--sit-yellow-400)";
            case "pending":
                return "var(--sit-yellow-500)";
            default:
                return "var(--sit-gray-400)";
        }
    }
    _handleGateClick(e) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("sit-gate-decision", {
            detail: { gate: this.gate },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        const hostStyle = this.stageColor ? `--stage-color: ${this.stageColor}` : "";
        return html `
      <div style=${hostStyle}>
        <div class="stage-header">
          <span class="stage-number">${this.stageNumber}</span>
          <span class="stage-title">${this.stageTitle}</span>
        </div>
        <div class="stage-body">
          <div class="status-row">
            <span class="status-dot" style="--status-color: ${this._statusColorVar()}"></span>
            <span class="status-label" style="--status-color: ${this._statusColorVar()}">${this.statusLabel}</span>
          </div>
          <ul class="checklist">
            <slot name="checklist"></slot>
          </ul>
          <div class="output-box">
            <div class="output-label">${this.outputLabel}</div>
            <div class="output-value"><slot name="output"></slot></div>
          </div>
          ${this.gateLabel
            ? html `<button
                class="gate-button"
                ?disabled=${this.gateDisabled}
                @click=${this._handleGateClick}
              >
                ${this.gateLabel}
              </button>`
            : ""}
        </div>
      </div>
    `;
    }
}
SitStageCard.styles = css `
    :host {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: var(--sit-surface-default);
      border: var(--sit-border-width-1) solid var(--sit-border-color-muted);
      border-radius: var(--sit-border-radius-lg);
      border-top-width: 4px;
      border-top-color: var(--stage-color, var(--sit-product-primary-600));
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    :host(:hover) {
      transform: translateY(-3px);
      box-shadow: var(--sit-elevation-surface-3);
    }

    :host([active]) {
      border-width: var(--sit-border-width-2);
      box-shadow: var(--sit-elevation-surface-2);
    }

    :host([inactive]) {
      opacity: var(--sit-opacity-60);
    }

    .stage-header {
      display: flex;
      align-items: center;
      gap: var(--sit-component-gap-xs);
      padding: var(--sit-component-padding-sm);
      background-color: var(--stage-color, var(--sit-product-primary-600));
      color: var(--sit-color-fixed-light);
    }

    .stage-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sit-dimension-24);
      height: var(--sit-dimension-24);
      border-radius: var(--sit-border-radius-full);
      background-color: var(--sit-bg-fixed-light);
      color: var(--stage-color, var(--sit-product-primary-600));
      font-weight: var(--sit-font-weight-bold);
      font-size: var(--sit-font-size-label-xs);
      flex-shrink: 0;
    }

    .stage-title {
      font-weight: var(--sit-font-weight-bold);
      font-size: var(--sit-font-size-label-xs);
      line-height: var(--sit-line-height-xs);
    }

    .stage-body {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: var(--sit-component-padding-sm);
    }

    .status-row {
      display: flex;
      align-items: center;
      gap: var(--sit-component-gap-xs);
      margin-bottom: var(--sit-component-gap-sm);
    }

    .status-dot {
      width: var(--sit-dimension-8);
      height: var(--sit-dimension-8);
      border-radius: var(--sit-border-radius-full);
      background-color: var(--status-color, var(--sit-green-400));
      flex-shrink: 0;
    }

    .status-label {
      font-size: var(--sit-font-size-label-xs);
      font-weight: var(--sit-font-weight-semibold);
      color: var(--status-color, var(--sit-green-600));
    }

    .checklist {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--sit-spacer-2);
      flex: 1;
      font-size: var(--sit-font-size-label-xs);
      color: var(--sit-color-subtle);
    }

    .checklist li {
      display: flex;
      gap: var(--sit-spacer-2);
    }

    .output-box {
      margin-top: var(--sit-component-gap-sm);
      background-color: var(--sit-bg-alternate);
      border-radius: var(--sit-border-radius-md);
      padding: var(--sit-spacer-3);
    }

    .output-label {
      font-size: var(--sit-font-size-label-xs);
      color: var(--sit-color-muted);
      margin-bottom: 2px;
    }

    .output-value {
      font-size: var(--sit-font-size-label-xs);
      font-weight: var(--sit-font-weight-semibold);
      color: var(--sit-color-subtle);
    }

    .gate-button {
      margin-top: var(--sit-component-gap-sm);
      width: 100%;
      border: none;
      border-radius: var(--sit-border-radius-md);
      padding: var(--sit-spacer-2) 0;
      background-color: var(--stage-color, var(--sit-product-primary-600));
      color: var(--sit-color-fixed-light);
      font-size: var(--sit-font-size-label-xs);
      font-weight: var(--sit-font-weight-semibold);
      font-family: inherit;
      cursor: pointer;
    }

    .gate-button:focus-visible {
      outline: var(--sit-outline-focus);
      outline-offset: var(--sit-outline-offset-focus);
    }

    .gate-button:disabled {
      background-color: var(--sit-gray-200);
      color: var(--sit-color-muted);
      cursor: not-allowed;
    }
  `;
__decorate([
    property({ type: String })
], SitStageCard.prototype, "stageNumber", void 0);
__decorate([
    property({ type: String })
], SitStageCard.prototype, "stageTitle", void 0);
__decorate([
    property({ type: String })
], SitStageCard.prototype, "stageColor", void 0);
__decorate([
    property({ type: String })
], SitStageCard.prototype, "status", void 0);
__decorate([
    property({ type: String })
], SitStageCard.prototype, "statusLabel", void 0);
__decorate([
    property({ type: String })
], SitStageCard.prototype, "outputLabel", void 0);
__decorate([
    property({ type: String })
], SitStageCard.prototype, "gateLabel", void 0);
__decorate([
    property({ type: String })
], SitStageCard.prototype, "gate", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitStageCard.prototype, "gateDisabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitStageCard.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitStageCard.prototype, "inactive", void 0);
export default SitStageCard;
if (!customElements.get("sit-stage-card")) {
    customElements.define("sit-stage-card", SitStageCard);
}
//# sourceMappingURL=sit-stage-card.js.map