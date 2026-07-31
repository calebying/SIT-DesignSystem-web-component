'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitFileUpload } from '../components/FileUpload/sit-file-upload.js';
import { register } from '../utils/ce-registry.js';

register("sit-file-upload", SitFileUpload);
var index = createComponent({
    react: React,
    tagName: "sit-file-upload",
    elementClass: SitFileUpload,
    events: {
        onSitFilesSelected: "sit-files-selected",
        onSitAddFiles: "sit-add-files",
        onSitRemoveFile: "sit-remove-file",
        onSitChange: "sit-change"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
