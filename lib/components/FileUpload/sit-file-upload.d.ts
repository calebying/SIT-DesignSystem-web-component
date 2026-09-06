import { SitButton } from "../Button/sit-button";
import SitCloseButton from "../CloseButton/sit-close-button";
import FormControlElement from "../../base/form-control-element";
import SitIcon from "../Icon/sit-icon";
import SitSpinner from "../Spinner/sit-spinner";
import type { ISitFileUploadAddFilesEventDetail, ISitFileUploadChangeEventDetail, ISitFileUploadFilesSelectedEventDetail, ISitFileUploadRemoveFileEventDetail } from "./types";
export type { ISitFileUploadAddFilesEventDetail, ISitFileUploadChangeEventDetail, ISitFileUploadFilesSelectedEventDetail, ISitFileUploadRemoveFileEventDetail };
declare const SitFileUpload_base: (new (...args: any[]) => import("../../utils/validatorMixin").ToBeValidatedElementInterface) & typeof FormControlElement;
/**
 * @summary Allows users to upload files of various sizes and formats
 *
 * @slot default - Label for file upload button (used in default variant)
 *
 * @event sit-files-selected - (@deprecated) Deprecated since 3.19.0 in favour of sit-change. Emitted whenever the file set changes (files added or removed). Access the files with event.detail.
 * @eventDetail {ISitFileUploadFilesSelectedEventDetail} sit-files-selected
 * @event sit-add-files - Emitted when files are added to the upload. Access the files with event.detail
 * @eventDetail {ISitFileUploadAddFilesEventDetail} sit-add-files
 * @event sit-remove-file - Emitted when files are removed from the upload. Access the remaining files with event.detail
 * @eventDetail {ISitFileUploadRemoveFileEventDetail} sit-remove-file
 * @event sit-change - Emitted whenever the file set changes (files added or removed). Access the current files with event.detail
 * @eventDetail {ISitFileUploadChangeEventDetail} sit-change
 */
export declare class SitFileUpload extends SitFileUpload_base {
    static styles: import("lit").CSSResult[];
    /**@internal */
    static dependencies: {
        "sit-button": typeof SitButton;
        "sit-close-button": typeof SitCloseButton;
        "sit-icon": typeof SitIcon;
        "sit-spinner": typeof SitSpinner;
    };
    /** Allows multiple files to be listed for uploading */
    multiple: boolean;
    /** Specify the acceptable file type  */
    accept: string;
    /** Allows invalidFeedback, invalid and valid styles to be visible with the input */
    hasFeedback: boolean;
    /**Feedback text for error state when validated */
    invalidFeedback: string;
    /** Makes the input as a required field. */
    required: boolean;
    /** Variant of the file upload component: "default" or "drag-and-drop" */
    variant: "default" | "drag-and-drop";
    /** An accessible label for the file upload button. Defaults to "Choose files" if not set. */
    ariaLabel: string;
    /** Disables native and sit validation for the component. Use this when you want to do custom validation */
    noValidate: boolean;
    private selectedFiles;
    private exitingFile;
    private fileMetadata;
    protected _isTouched: boolean;
    /**
     * Flag to distinguish code-driven file changes from user-initiated ones.
     *
     * Set to `true` inside `_removeFileHandler` before it manually assigns
     * `inputElement.files` and dispatches a synthetic `change` event.
     * This tells `_handleChange` to:
     *  - Skip appending/combining files (avoid duplicating remaining files)
     *  - Skip emitting user-facing events (sit-add-files, sit-change)
     *  - Still run validation (so required-field checks update after removal)
     *
     * Reset to `false` immediately after the synthetic change event is processed.
     */
    private _isProgrammaticChange;
    /**
     * Checks for validity. Under the hood, HTMLFormElement's reportValidity method calls this method to check for component's validity state
     * Note that the native error popup is prevented for Canvas form components by default. Instead the validation message shows up in the feedback container of SitInput
     */
    reportValidity(): boolean;
    /**
     * Checks for validity without any native error popup message
     */
    checkValidity(): boolean;
    /**
     * Returns the ValidityState object
     */
    get validity(): ValidityState;
    /**
     * Returns the validation message based on the ValidityState
     */
    get validationMessage(): string;
    /**
     * Returns files selected for upload
     */
    get files(): File[];
    /**
     * Set the upload state of a file at the given index
     */
    setFileUploadState(index: number, state: "loading" | "success" | "error", error?: string): void;
    private _setFileList;
    private inputRef;
    private _dragZoneRef;
    private _dragCounter;
    private _isDialogOpen;
    private _handleClick;
    private _handleCancel;
    private _handleChange;
    private _restoreNativeInput;
    private _appendFiles;
    private _removeFileHandler;
    private _clearAllFiles;
    /**
     * fileupload requries a custom _mixinResetFormControl for clearing files
     */
    private _mixinResetFormControl;
    _handleDisabledChange(): void;
    protected _handleBlur(): void;
    _handleIsTouched(): void;
    protected _renderLabel(): import("lit").TemplateResult<1>;
    protected _renderHintText(): import("lit").TemplateResult<1>;
    protected _renderFeedback(): import("lit").TemplateResult<1>;
    private _handleDragEnter;
    private _handleDragOver;
    private _handleDragLeave;
    private _handleDrop;
    private _renderUploadZone;
    render(): import("lit").TemplateResult<1>;
}
export default SitFileUpload;
