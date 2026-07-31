import SitElement from "../../base/sit-element";
import SitButton from "../Button/sit-button";
import SitIconButton from "../IconButton/sit-icon-button";
import { ViewEnum } from "./types";
import SitIcon from "../Icon/sit-icon";
export declare class DatepickerHeader extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
        "sit-icon-button": typeof SitIconButton;
        "sit-button": typeof SitButton;
    };
    /** @internal */
    displayDate: Date;
    /** @internal */
    focusedDate: Date;
    /** @internal */
    selectedDate: Date[];
    /** @internal */
    view: ViewEnum;
    /** @internal */
    focusedTabIndex: number;
    _handleFocusedTabIndexChange(): void;
    private _changeView;
    renderHeader(displayDate?: Date, view?: ViewEnum): string | number;
    private _renderHeaderTemplate;
    /** @internal */
    private handleClickPrevious;
    /** @internal */
    private _handleClickNext;
    private _removeCaret;
    private _ariaLabelForNextBtn;
    private _ariaLabelForPrevBtn;
    private _ariaLabelForHeaderBtn;
    render(): import("lit-html").TemplateResult<1>;
}
export default DatepickerHeader;
export declare const MONTH_LABELS: string[];
