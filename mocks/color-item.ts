import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";

export class ColorItem extends LitElement {
  @property({ type: String }) token = "";
  @property({ type: String }) variable = "";
  @property({ type: String }) bgClass = "";
  @property({ type: String }) borderColorValue = "";
  @property({ type: String }) textClass = "";

  @state() private isCopied = false;

  static styles = css`
    :host {
      display: block;
    }
    .token-name {
      display: flex;
      justify-content: space-between;
    }
    .color-item {
      display: flex;
      flex-direction: column;
      gap: 8px; /* sit:gap-xs */
    }

    .color-box {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 96px; /* sit:min-h-24 */
      padding: 20px; /* sit:p-lg */
      border-radius: 6px; /* sit:rounded-md */
      border: 1px solid var(--sit-border-default, #dcdcdc);
      transition: opacity 200ms ease-in-out;
    }

    .copy-button {
      cursor: pointer;
      opacity: 0.6;
      background-color: transparent;
      border: none;
      padding: 0;
      transition: opacity 200ms ease-in-out;
    }

    .copy-button:hover {
      opacity: 1;
    }

    .copy-button sit-icon {
      width: 100%;
      height: 100%;
    }

    .token-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .token-name {
      font-size: 14px; /* text-1 */
      font-weight: 600; /* font-weight-semibold */
      word-break: break-word;
      color: var(--sit-color-default);
    }

    .token-variable {
      font-size: 12px; /* text-0 */
      color: var(--sit-color-subtle, #666);
    }
  `;

  private async copyToClipboard() {
    try {
      await navigator.clipboard.writeText(this.token);
      this.isCopied = true;

      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  }

  render() {
    const colorBoxStyle = this.borderColorValue
      ? `border: 4px solid var(${this.variable});`
      : `background-color: var(${this.variable});`;

    return html`
      <div class="color-item">
        <div class="color-box" style="${colorBoxStyle}"></div>
        <div class="token-info">
          <div class="token-name">
            ${this.token}
            <button class="copy-button" @click=${this.copyToClipboard} aria-label="Copy token to clipboard">
              <sit-icon name="${this.isCopied ? "check" : "files"}"></sit-icon>
            </button>
          </div>
          <div class="token-variable">${this.variable}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("color-item", ColorItem);
