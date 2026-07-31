'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitCheckbox } from '../components/Checkbox/sit-checkbox.js';
import { register } from '../utils/ce-registry.js';

register("sit-checkbox", SitCheckbox);
var index = createComponent({
    react: React,
    tagName: "sit-checkbox",
    elementClass: SitCheckbox,
    events: {
        onSitChange: "sit-change",
        onSitBlur: "sit-blur",
        onSitFocus: "sit-focus",
        onSitCheck: "sit-check",
        onSitUncheck: "sit-uncheck",
        onSitInvalid: "sit-invalid",
        onSitValid: "sit-valid"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
