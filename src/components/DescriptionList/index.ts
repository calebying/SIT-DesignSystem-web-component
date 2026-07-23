import SitDescriptionListGroup from "./sit-description-list-group";
import { SitDescriptionList } from "./sit-description-list";
import { register } from "../../utils/ce-registry";

register("sit-description-list", SitDescriptionList);
register("sit-description-list-group", SitDescriptionListGroup);

declare global {
  interface HTMLElementTagNameMap {
    "sit-description-list": SitDescriptionList;
    "sit-description-list-group": SitDescriptionListGroup;
  }
}
