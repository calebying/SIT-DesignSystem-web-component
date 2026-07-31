import { OptionElement } from "../../base/option-element";
import SitIcon from "../Icon/sit-icon";
/**
 * @summary SelectOption is the option of the Select
 *
 * @slot default - The label of the option
 */
export declare class SitSelectOption extends OptionElement {
    /** @internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
    };
    protected _renderItemContent: () => import("lit-html").TemplateResult<1>;
}
export default SitSelectOption;
