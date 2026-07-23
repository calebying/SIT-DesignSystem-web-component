import { SitTab } from "./sgds-tab";
import { SitTabGroup } from "./sgds-tab-group";
import { SitTabPanel } from "./sgds-tab-panel";
import { register } from "../../utils/ce-registry";

register("sgds-tab", SitTab);
register("sgds-tab-group", SitTabGroup);
register("sgds-tab-panel", SitTabPanel);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-tab": SitTab;
    "sgds-tab-group": SitTabGroup;
    "sgds-tab-panel": SitTabPanel;
  }
}
