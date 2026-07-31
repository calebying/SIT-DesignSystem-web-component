import { SitTab } from "./sit-tab";
import { SitTabGroup } from "./sit-tab-group";
import { SitTabPanel } from "./sit-tab-panel";
declare global {
    interface HTMLElementTagNameMap {
        "sit-tab": SitTab;
        "sit-tab-group": SitTabGroup;
        "sit-tab-panel": SitTabPanel;
    }
}
