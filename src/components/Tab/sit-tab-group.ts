import { html, PropertyValues } from "lit";
import { property, query, queryAssignedElements } from "lit/decorators.js";
import SitElement from "../../base/sit-element";
import { SitTab } from "./sit-tab";
import { SitTabPanel } from "./sit-tab-panel";
import tabGroupStyle from "./tab-group.css";
/**
 * @summary Tab Group organizes content into a container with the syncing of tab and their corresponding panels.
 * Each tab must be slotted into the nav slot and its `panel` must refer to a tab panel of the same name.
 *
 * @slot default - The slot for `sit-tab-panel`
 * @slot nav - The slot for `sit-tab`
 *
 * @event sit-tab-show - Emitted when a tab and its panels are shown. `event.detail.name` contains the active tab's panel name.
 * @event sit-tab-hide - Emitted when a tab and its panels are hidden. `event.detail.name` contains the hidden tab's panel name.
 *
 */
export class SitTabGroup extends SitElement {
  static styles = [...SitElement.styles, tabGroupStyle];

  @query(".tab-group") private _tabGroup: HTMLElement;

  @query(".tab-group__body") private _body: HTMLSlotElement;

  @query(".tab-group__nav") private _nav: HTMLElement;

  private _activeTab?: SitTab;

  private _mutationObserver: MutationObserver;

  private _resizeObserver: ResizeObserver;

  private _tabs: SitTab[] = [];

  private _panels: SitTabPanel[] = [];
  /** The variant of tabs. Controls the visual styles of all `sit-tabs` in its slot. It also sets the variant atttribute of `sit-tab` */
  @property({ type: String, reflect: true }) variant: "underlined" | "solid" = "underlined";
  /** The orientation of tabs. Controls the orientation of all `sit-tabs` in its slot. It also sets the orientation attribute of `sit-tab` */
  @property({ type: String, reflect: true }) orientation: "horizontal" | "vertical" = "horizontal";
  /** The density of tabs. Controls the density of all `sit-tabs` in its slot. It also sets the density attribute of `sit-tab` */
  @property({ type: String, reflect: true }) density: "compact" | "default" = "default";

  connectedCallback() {
    const whenAllDefined = Promise.all([
      customElements.whenDefined("sit-tab"),
      customElements.whenDefined("sit-tab-panel")
    ]);
    super.connectedCallback();
    this._resizeObserver = new ResizeObserver(() => {
      return;
    });

    this._mutationObserver = new MutationObserver(mutations => {
      // Update aria labels when the DOM changes
      if (mutations.some(m => !["aria-labelledby", "aria-controls"].includes(m.attributeName))) {
        setTimeout(() => this._setAriaLabels());
      }

      // Sync tabs when disabled states change
      if (mutations.some(m => m.attributeName === "disabled")) {
        this._syncTabsAndPanels();
      }
    });

    this.updateComplete.then(() => {
      this._syncTabsAndPanels();
      this._mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this._resizeObserver.observe(this._nav);
      whenAllDefined.then(() => {
        // Set initial tab state when the tabs first become visible
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
          if (entries[0].intersectionRatio > 0) {
            this._setAriaLabels();
            // this.setTabVariant();
            this._setActiveTab(this._getActiveTab() ?? this._tabs[0], { emitEvents: false });
            observer.unobserve(entries[0].target);
          }
        });
        intersectionObserver.observe(this._tabGroup);
      });
    });
  }

  disconnectedCallback() {
    this._mutationObserver.disconnect();
    this._resizeObserver.unobserve(this._nav);
  }

  /** Shows the specified tab panel. */
  public show(panel: string) {
    const tab = this._tabs.find(el => el.panel === panel);

    if (tab) {
      this._setActiveTab(tab);
    }
  }
  private _getAllTabs(options: { includeDisabled: boolean } = { includeDisabled: true }) {
    const slot = this.shadowRoot.querySelector<HTMLSlotElement>('slot[name="nav"]');

    return [...(slot.assignedElements() as SitTab[])].filter(el => {
      return options.includeDisabled
        ? el.tagName.toLowerCase() === "sit-tab"
        : el.tagName.toLowerCase() === "sit-tab" && !el.disabled;
    });
  }
  private _getAllPanels() {
    return [...this._body.assignedElements()].filter(el => el.tagName.toLowerCase() === "sit-tab-panel") as [
      SitTabPanel
    ];
  }
  private _getActiveTab() {
    return this._tabs.find(el => el.active);
  }
  private _handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest("sit-tab") as SitTab;
    const tabGroup = tab?.closest("sit-tab-group");

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    if (tab !== null) {
      this._setActiveTab(tab);
    }
  }
  private _handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest("sit-tab") as SitTab;
    const tabGroup = tab?.closest("sit-tab-group");

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    // Activate a tab
    if (["Enter", " "].includes(event.key)) {
      if (tab !== null) {
        this._setActiveTab(tab);
        event.preventDefault();
      }
    }

    // Move focus left or right
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const activeEl = this._tabs.find(t => t.matches(":focus"));

      if (activeEl?.tagName.toLowerCase() === "sit-tab") {
        let index = this._tabs.indexOf(activeEl);

        if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = this._tabs.length - 1;
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          index--;
        } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          index++;
        }

        if (index < 0) {
          index = this._tabs.length - 1;
        }

        if (index > this._tabs.length - 1) {
          index = 0;
        }

        this._tabs[index].focus({ preventScroll: true });

        this._setActiveTab(this._tabs[index] /** , { scrollBehavior: "smooth" }*/);

        event.preventDefault();
      }
    }
  }
  private _setActiveTab(tab: SitTab, options?: { emitEvents?: boolean }) {
    options = {
      emitEvents: true,
      ...options
    };

    if (tab !== this._activeTab && !tab.disabled) {
      const previousTab = this._activeTab;
      this._activeTab = tab;

      // Sync active tab and panel
      this._tabs.forEach(el => {
        el.active = el === this._activeTab ? true : false;
      });

      this._panels.map(el => (el.active = el.name === this._activeTab?.panel));

      // Emit events
      if (options.emitEvents) {
        if (previousTab) {
          this.emit("sit-tab-hide", { detail: { name: previousTab.panel } });
        }

        this.emit("sit-tab-show", { detail: { name: this._activeTab.panel } });
      }
    }
  }
  private _setAriaLabels() {
    // Link each tab with its corresponding panel
    this._tabs.forEach(tab => {
      const panel = this._panels.find(el => el.name === tab.panel);
      if (panel) {
        tab.setAttribute("aria-controls", panel.getAttribute("id"));
        panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
      }
    });
  }

  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  private _syncTabsAndPanels() {
    this._tabs = this._getAllTabs({ includeDisabled: false });
    this._panels = this._getAllPanels();
  }

  @queryAssignedElements({ slot: "nav", flatten: true })
  private _navSlot: SitTab[];

  private _updateTabsAttribute(name: string) {
    if (!this._navSlot) return;
    const tabs = this._navSlot;
    tabs.forEach(tab => {
      tab.setAttribute(name, this[name]);
    });
  }

  private _handleSlotChange() {
    this._updateTabsAttribute("variant");
    this._updateTabsAttribute("orientation");
    this._updateTabsAttribute("density");
    this._syncTabsAndPanels();
  }

  protected willUpdate(_changedProperties: PropertyValues): void {
    // similar to @watch
    if (_changedProperties.has("variant")) {
      this._updateTabsAttribute("variant");
    }
    if (_changedProperties.has("orientation")) {
      this._updateTabsAttribute("orientation");
    }
    if (_changedProperties.has("density")) {
      this._updateTabsAttribute("density");
    }
  }

  render() {
    return html`
      <div class="tab-group" @click=${this._handleClick} @keydown=${this._handleKeyDown}>
        <div class="tab-group__nav" role="tablist">
          <slot name="nav" @slotchange=${this._handleSlotChange}></slot>
        </div>

        <div class="tab-group__content">
          <slot class="tab-group__body" @slotchange=${this._syncTabsAndPanels}></slot>
        </div>
      </div>
    `;
  }
}

export default SitTabGroup;
