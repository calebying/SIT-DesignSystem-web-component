import SitDescriptionListGroup from "./sit-description-list-group";
import { SitDescriptionList } from "./sit-description-list";
declare global {
    interface HTMLElementTagNameMap {
        "sit-description-list": SitDescriptionList;
        "sit-description-list-group": SitDescriptionListGroup;
    }
}
