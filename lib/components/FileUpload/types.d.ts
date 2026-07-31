export type ISitFileUploadAddFilesEventDetail = FileList;
export type ISitFileUploadChangeEventDetail = FileList;
export type ISitFileUploadFilesSelectedEventDetail = FileList;
export interface ISitFileUploadRemoveFileEventDetail {
    file: File;
    files: FileList;
}
