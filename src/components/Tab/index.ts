import { SitTab } from "./sit-tab";
import { SitTabGroup } from "./sit-tab-group";
import { SitTabPanel } from "./sit-tab-panel";
import { register } from "../../utils/ce-registry";

register("sit-tab", SitTab);
register("sit-tab-group", SitTabGroup);
register("sit-tab-panel", SitTabPanel);

declare global {
  interface HTMLElementTagNameMap {
    "sit-tab": SitTab;
    "sit-tab-group": SitTabGroup;
    "sit-tab-panel": SitTabPanel;
  }
}
