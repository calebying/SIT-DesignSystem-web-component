import SitElement from "../../base/sit-element";
/**
 * @summary All .gov.sg digital services shall adopt The Official Government Banner for every page in the digital service and be placed at the top of the page.
 */
export declare class SitMasthead extends SitElement {
    static styles: import("lit").CSSResult[];
    /** When true, removes max-width constraint to allow content to stretch full screen width */
    fluid: boolean;
    /** @internal */
    toggleVisibility: boolean;
    /** @internal */
    private _handleKeydown;
    /** @internal */
    private _toggleVisibility;
    render(): import("lit").TemplateResult<1>;
}
export default SitMasthead;
