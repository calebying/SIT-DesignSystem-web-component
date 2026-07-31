import SitElement from "../base/sit-element";
/**
 *
 * @param name tagname of custom element
 * @returns boolean
 */
export declare function isRegistered(name: string): boolean;
export declare function register(name: string, constructor: typeof SitElement): void;
export declare function warnUnregisteredElements(name: string): boolean;
