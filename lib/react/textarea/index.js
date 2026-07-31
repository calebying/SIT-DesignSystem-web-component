'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTextarea } from '../components/Textarea/sit-textarea.js';
import { register } from '../utils/ce-registry.js';

register("sit-textarea", SitTextarea);
var index = createComponent({
    react: React,
    tagName: "sit-textarea",
    elementClass: SitTextarea,
    events: {
        onSitChange: "sit-change",
        onSitInput: "sit-input",
        onSitFocus: "sit-focus",
        onSitBlur: "sit-blur",
        onSitInvalid: "sit-invalid",
        onSitValid: "sit-valid"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
