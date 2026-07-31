import { SitSidebar } from "./sit-sidebar";
import { SitSidebarGroup } from "./sit-sidebar-group";
import { SitSidebarItem } from "./sit-sidebar-item";
import { SitSidebarSection } from "./sit-sidebar-section";
export type { SitSidebar } from "./sit-sidebar";
export type { SitSidebarGroup } from "./sit-sidebar-group";
export type { SitSidebarItem } from "./sit-sidebar-item";
export type { SitSidebarSection } from "./sit-sidebar-section";
declare global {
    interface HTMLElementTagNameMap {
        "sit-sidebar": SitSidebar;
        "sit-sidebar-item": SitSidebarItem;
        "sit-sidebar-section": SitSidebarSection;
        "sit-sidebar-group": SitSidebarGroup;
    }
}
