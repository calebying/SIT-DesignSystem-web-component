import { SitSidebar } from "./sgds-sidebar";
import { SitSidebarGroup } from "./sgds-sidebar-group";
import { SitSidebarItem } from "./sgds-sidebar-item";
import { SitSidebarSection } from "./sgds-sidebar-section";

customElements.define("sgds-sidebar", SitSidebar);
customElements.define("sgds-sidebar-item", SitSidebarItem);
customElements.define("sgds-sidebar-section", SitSidebarSection);
customElements.define("sgds-sidebar-group", SitSidebarGroup);

export type { SitSidebar } from "./sgds-sidebar";
export type { SitSidebarGroup } from "./sgds-sidebar-group";
export type { SitSidebarItem } from "./sgds-sidebar-item";
export type { SitSidebarSection } from "./sgds-sidebar-section";

declare global {
  interface HTMLElementTagNameMap {
    "sgds-sidebar": SitSidebar;
    "sgds-sidebar-item": SitSidebarItem;
    "sgds-sidebar-section": SitSidebarSection;
    "sgds-sidebar-group": SitSidebarGroup;
  }
}
