import { SitSegmentedControl } from "./sit-segmented-control";
import { SitSegment } from "./sit-segment";
import { register } from "../../utils/ce-registry";

register("sit-segmented-control", SitSegmentedControl);
register("sit-segment", SitSegment);

declare global {
  interface HTMLElementTagNameMap {
    "sit-segmented-control": SitSegmentedControl;
    "sit-segment": SitSegment;
  }
}
