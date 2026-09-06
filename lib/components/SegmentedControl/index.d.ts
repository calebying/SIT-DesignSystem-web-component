import { SitSegmentedControl } from "./sit-segmented-control";
import { SitSegment } from "./sit-segment";
declare global {
    interface HTMLElementTagNameMap {
        "sit-segmented-control": SitSegmentedControl;
        "sit-segment": SitSegment;
    }
}
