'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { repeat } from 'lit/directives/repeat.js';
import { SitButton } from '../Button/sit-button.js';
import { SitCloseButton } from '../CloseButton/sit-close-button.js';
import css_248z from './file-upload.js';
import FormControlElement from '../../base/form-control-element.js';
import { formatFileSize } from '../../utils/file.js';
import { SitFormValidatorMixin } from '../../utils/validatorMixin.js';
import { watch } from '../../utils/watch.js';
import { SitIcon } from '../Icon/sit-icon.js';
import { SitSpinner } from '../Spinner/sit-spinner.js';

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
class SitFileUpload extends SitFormValidatorMixin(FormControlElement) {
    constructor() {
        super(...arguments);
        /** Allows multiple files to be listed for uploading */
        this.multiple = false;
        /** Specify the acceptable file type  */
        this.accept = "";
        /** Allows invalidFeedback, invalid and valid styles to be visible with the input */
        this.hasFeedback = false;
        /** Makes the input as a required field. */
        this.required = false;
        /** Variant of the file upload component: "default" or "drag-and-drop" */
        this.variant = "default";
        /** An accessible label for the file upload button. Defaults to "Choose files" if not set. */
        this.ariaLabel = "Choose files";
        /** Disables native and sit validation for the component. Use this when you want to do custom validation */
        this.noValidate = false;
        this.selectedFiles = [];
        this.exitingFile = null;
        this.fileMetadata = new Map();
        this._isTouched = false;
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
        this._isProgrammaticChange = false;
        this.inputRef = createRef();
        this._dragZoneRef = createRef();
        this._dragCounter = 0;
        this._isDialogOpen = false;
    }
    /**
     * Checks for validity. Under the hood, HTMLFormElement's reportValidity method calls this method to check for component's validity state
     * Note that the native error popup is prevented for Canvas form components by default. Instead the validation message shows up in the feedback container of SitInput
     */
    reportValidity() {
        return this._mixinReportValidity();
    }
    /**
     * Checks for validity without any native error popup message
     */
    checkValidity() {
        return this._mixinCheckValidity();
    }
    /**
     * Returns the ValidityState object
     */
    get validity() {
        return this._mixinGetValidity();
    }
    /**
     * Returns the validation message based on the ValidityState
     */
    get validationMessage() {
        return this._mixinGetValidationMessage();
    }
    /**
     * Returns files selected for upload
     */
    get files() {
        return this.selectedFiles;
    }
    /**
     * Set the upload state of a file at the given index
     */
    setFileUploadState(index, state, error) {
        const file = this.selectedFiles[index];
        if (file) {
            this.fileMetadata.set(file, {
                uploading: state === "loading",
                error: error
            });
            this.requestUpdate();
        }
    }
    _setFileList(files, previousCount = 0, deletedFile) {
        // Always emit sit-change event (fires on any file set change)
        this.emit("sit-change", { detail: files });
        // Always emit sit-files-selected for backwards compatibility (deprecated)
        this.emit("sit-files-selected", { detail: files });
        // Emit sit-add-files when files are ADDED (count increased or file set changed while maintaining same count)
        if (files.length > previousCount) {
            // Extract only the new files (those added after previousCount)
            const allFilesArray = Array.from(files);
            const newFilesArray = allFilesArray.slice(previousCount);
            // Create a FileList containing only new files using DataTransfer
            const dt = new DataTransfer();
            newFilesArray.forEach(file => dt.items.add(file));
            this.emit("sit-add-files", { detail: dt.files });
        }
        else if (files.length === previousCount && previousCount > 0 && !deletedFile) {
            // Handle single-file replacement case (e.g., when multiple=false and user selects a different file)
            // In this case, all files are "new" (different from before)
            const dt = new DataTransfer();
            Array.from(files).forEach(file => dt.items.add(file));
            this.emit("sit-add-files", { detail: dt.files });
        }
        // Emit sit-remove-file when files are REMOVED (count decreased)
        if (files.length < previousCount && deletedFile) {
            this.emit("sit-remove-file", { detail: { file: deletedFile, files } });
        }
    }
    _handleClick(event) {
        event.preventDefault();
        if (!this.disabled) {
            this._isDialogOpen = true;
            // Get a reference to the input element using the inputRef
            const inputElement = this.inputRef.value;
            // Do something with the input element
            inputElement === null || inputElement === void 0 ? void 0 : inputElement.click();
        }
    }
    _handleCancel() {
        this._isDialogOpen = false;
        this._isTouched = true;
        if (this._mixinShouldSkipSitValidation())
            return;
        this.setInvalid(!this._mixinCheckValidity());
    }
    _handleChange(event) {
        this._isDialogOpen = false;
        const inputElement = event.target;
        const files = inputElement.files;
        const previousCount = this.selectedFiles.length;
        const isUserCancel = files.length === 0 && !this._isProgrammaticChange;
        const isUserSelection = files.length > 0 && !this._isProgrammaticChange;
        const shouldAppendFiles = isUserSelection && this.multiple && this.selectedFiles.length > 0;
        // --- 1. Sync selectedFiles with native input ---
        if (isUserCancel && this.selectedFiles.length > 0) {
            this._restoreNativeInput(inputElement);
        }
        else if (shouldAppendFiles) {
            this._appendFiles(inputElement, files);
        }
        else if (files.length > 0) {
            this.selectedFiles = Array.from(files);
        }
        // --- 2. Emit events (only on user-initiated selection) ---
        if (isUserSelection) {
            this._setFileList(inputElement.files, previousCount);
        }
        // --- 3. Run validation ---
        if (!isUserCancel || this._isTouched) {
            super._mixinHandleChange(event);
        }
    }
    _restoreNativeInput(inputElement) {
        const fileBuffer = new DataTransfer();
        this.selectedFiles.forEach(file => fileBuffer.items.add(file));
        inputElement.files = fileBuffer.files;
    }
    _appendFiles(inputElement, files) {
        const combined = [...this.selectedFiles, ...Array.from(files)];
        this.selectedFiles = combined;
        const fileBuffer = new DataTransfer();
        combined.forEach(file => fileBuffer.items.add(file));
        inputElement.files = fileBuffer.files;
    }
    _removeFileHandler(index) {
        // Mark the file as exiting to trigger the animation (store the actual File object)
        const deletedFile = this.selectedFiles[index];
        this.exitingFile = deletedFile;
        this.requestUpdate();
        // Wait for animation to complete before removing the file
        setTimeout(() => {
            const inputElement = this.inputRef.value;
            if (!inputElement)
                return;
            const previousCount = this.selectedFiles.length; // Track count before removal
            const fileBuffer = new DataTransfer();
            this.selectedFiles.forEach((file, i) => {
                if (index !== i)
                    fileBuffer.items.add(file);
            });
            // Mark as programmatic change to prevent file combining in _handleChange
            this._isProgrammaticChange = true;
            // Assign buffer to file input
            inputElement.files = fileBuffer.files;
            // Re-populate selected files to the lists, passing the deleted file
            this._setFileList(fileBuffer.files, previousCount, deletedFile);
            this.selectedFiles = Array.from(fileBuffer.files);
            // Clear exiting file after removal
            this.exitingFile = null;
            this.requestUpdate();
            // Dispatch change event to trigger validation
            inputElement.dispatchEvent(new Event("change", { bubbles: true }));
            // Reset flag after change event is processed
            this._isProgrammaticChange = false;
        }, 300); // Motion token for standard duration
    }
    _clearAllFiles() {
        const inputElement = this.inputRef.value;
        const previousCount = this.selectedFiles.length;
        const fileBuffer = new DataTransfer();
        if (inputElement) {
            inputElement.files = fileBuffer.files;
        }
        this._setFileList(fileBuffer.files, previousCount);
        this.selectedFiles = Array.from(fileBuffer.files);
    }
    /**
     * fileupload requries a custom _mixinResetFormControl for clearing files
     */
    _mixinResetFormControl() {
        this._clearAllFiles();
        this._mixinResetValidity(this.input);
    }
    _handleDisabledChange() {
        // Disabled form controls are always valid, so we need to recheck validity when the state changes
        this.setInvalid(false);
    }
    _handleBlur() {
        const sitBlur = this.emit("sit-blur", { cancelable: true });
        if (this._mixinShouldSkipSitValidation())
            return;
        if (sitBlur.defaultPrevented)
            return;
        if (this._isDialogOpen)
            return;
        this.setInvalid(!this._mixinCheckValidity());
        this._isTouched = true;
    }
    _handleIsTouched() {
        if (this._mixinShouldSkipSitValidation())
            return;
        if (this._isTouched) {
            this.setInvalid(!this._mixinCheckValidity());
        }
    }
    _renderLabel() {
        const labelTemplate = html ` <label id=${this._labelId} class="form-label"> ${this.label} </label> `;
        return this.label && labelTemplate;
    }
    _renderHintText() {
        const hintTextTemplate = html ` <div id="${this._controlId}Help" class="form-text">${this.hintText}</div> `;
        return this.hintText && hintTextTemplate;
    }
    _renderFeedback() {
        return html `
      <div class="invalid-feedback-container">
        <sit-icon name="exclamation-circle-fill" size="md"></sit-icon>
        <div id="${this._controlId}-invalid" class="invalid-feedback">
          ${this.invalidFeedback ? this.invalidFeedback : this.input.validationMessage}
        </div>
      </div>
    `;
    }
    _handleDragEnter(e) {
        var _a;
        e.preventDefault();
        this._dragCounter++;
        if (this._dragCounter === 1) {
            (_a = this._dragZoneRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }
    _handleDragOver(e) {
        e.preventDefault();
        if (e.dataTransfer) {
            e.dataTransfer.dropEffect = "copy";
        }
    }
    _handleDragLeave(e) {
        var _a;
        this._dragCounter--;
        if (this._dragCounter === 0) {
            (_a = this._dragZoneRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        }
    }
    _handleDrop(e) {
        var _a;
        e.preventDefault();
        this._dragCounter = 0;
        (_a = this._dragZoneRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        if (this.disabled || !e.dataTransfer) {
            return;
        }
        let files = Array.from(e.dataTransfer.files);
        // Apply multiple constraint
        if (!this.multiple && files.length > 1) {
            files = files.slice(0, 1);
        }
        // Set only the new files on the input, then let _handleChange
        // handle combining, event emission, and validation
        const fileBuffer = new DataTransfer();
        files.forEach(file => fileBuffer.items.add(file));
        const inputElement = this.inputRef.value;
        if (inputElement) {
            inputElement.files = fileBuffer.files;
            inputElement.dispatchEvent(new Event("change", { bubbles: true }));
        }
    }
    _renderUploadZone() {
        if (this.variant === "drag-and-drop") {
            return html `
        <div
          class="drag-drop-zone"
          tabindex="-1"
          ${ref(this._dragZoneRef)}
          @dragenter=${this._handleDragEnter}
          @dragover=${this._handleDragOver}
          @dragleave=${this._handleDragLeave}
          @drop=${this._handleDrop}
          @blur=${this._handleBlur}
        >
          <sit-icon name="upload" size="lg"></sit-icon>
          <div class="drag-drop-text">Drag and drop files here</div>
          <sit-button
            size="sm"
            variant="outline"
            tone="brand"
            ?disabled=${this.disabled}
            @click=${this._handleClick}
            ariaLabel=${this.ariaLabel}
          >
            <slot>Choose files</slot>
          </sit-button>
        </div>
      `;
        }
        return html `
      <sit-button
        variant="outline"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @sit-blur=${this._handleBlur}
        ariaLabel=${this.ariaLabel}
      >
        <slot>Choose files</slot>
        <sit-icon slot="rightIcon" name="upload"></sit-icon>
      </sit-button>
    `;
    }
    render() {
        const getCheckedIcon = (metadata) => {
            const iconClass = this.invalid || (metadata === null || metadata === void 0 ? void 0 : metadata.error) ? "invalid" : "valid";
            return html `<sit-icon name="check-circle-fill" class="${iconClass}"></sit-icon>`;
        };
        const listItems = repeat(this.selectedFiles, file => file, // Use File object as stable key
        (file, index) => {
            const metadata = this.fileMetadata.get(file);
            return html `
          <li class="file-upload-list-item-container ${this.exitingFile === file ? "file-upload-exit" : ""}">
            <div class="file-upload-list-item ${(metadata === null || metadata === void 0 ? void 0 : metadata.error) ? "file-upload-error" : ""}">
              ${(metadata === null || metadata === void 0 ? void 0 : metadata.uploading) ? html `<sit-spinner size="sm"></sit-spinner>` : getCheckedIcon(metadata)}
              <span class="filename">${file.name}</span>
              <span class="filesize">${formatFileSize(file.size)}</span>
              <sit-close-button
                aria-label="remove the file"
                ?disabled=${metadata === null || metadata === void 0 ? void 0 : metadata.uploading}
                @click=${() => this._removeFileHandler(index)}
              ></sit-close-button>
            </div>
            ${(metadata === null || metadata === void 0 ? void 0 : metadata.error)
                ? html `
                  <div class="invalid-feedback-container">
                    <sit-icon name="exclamation-circle-fill" size="md"></sit-icon>
                    <div class="invalid-feedback">${metadata.error}</div>
                  </div>
                `
                : ""}
          </li>
        `;
        });
        return html `
      <input
        ${ref(this.inputRef)}
        type="file"
        @change=${this._handleChange}
        @cancel=${this._handleCancel}
        ?multiple=${this.multiple}
        accept=${this.accept}
        id=${this._controlId}
        ?required=${this.required && !this.noValidate}
        ?disabled=${this.disabled}
      />
      <div class="file-upload-container">
        ${this._renderLabel()} ${this._renderUploadZone()}
        ${this.hasFeedback && this.invalid ? this._renderFeedback() : this._renderHintText()}
      </div>
      <ul class="file-upload-list ${this.selectedFiles.length > 0 ? "has-files" : ""}">
        ${listItems}
      </ul>
    `;
    }
}
SitFileUpload.styles = [...FormControlElement.styles, css_248z];
/**@internal */
SitFileUpload.dependencies = {
    "sit-button": SitButton,
    "sit-close-button": SitCloseButton,
    "sit-icon": SitIcon,
    "sit-spinner": SitSpinner
};
__decorate([
    property({ type: Boolean, reflect: true })
], SitFileUpload.prototype, "multiple", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitFileUpload.prototype, "accept", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitFileUpload.prototype, "hasFeedback", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitFileUpload.prototype, "invalidFeedback", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitFileUpload.prototype, "required", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitFileUpload.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], SitFileUpload.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitFileUpload.prototype, "noValidate", void 0);
__decorate([
    state()
], SitFileUpload.prototype, "selectedFiles", void 0);
__decorate([
    state()
], SitFileUpload.prototype, "exitingFile", void 0);
__decorate([
    state()
], SitFileUpload.prototype, "fileMetadata", void 0);
__decorate([
    state()
], SitFileUpload.prototype, "_isTouched", void 0);
__decorate([
    watch("disabled", { waitUntilFirstUpdate: true })
], SitFileUpload.prototype, "_handleDisabledChange", null);
__decorate([
    watch("_isTouched", { waitUntilFirstUpdate: true })
], SitFileUpload.prototype, "_handleIsTouched", null);

export { SitFileUpload, SitFileUpload as default };
//# sourceMappingURL=sit-file-upload.js.map
