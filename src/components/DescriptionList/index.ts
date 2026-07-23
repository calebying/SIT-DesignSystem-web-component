import SitDescriptionListGroup from "./sgds-description-list-group";
import { SitDescriptionList } from "./sgds-description-list";
import { register } from "../../utils/ce-registry";

register("sgds-description-list", SitDescriptionList);
register("sgds-description-list-group", SitDescriptionListGroup);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-description-list": SitDescriptionList;
    "sgds-description-list-group": SitDescriptionListGroup;
  }
}
