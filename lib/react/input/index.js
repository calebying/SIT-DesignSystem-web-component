'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitInput } from '../components/Input/sit-input.js';
import { register } from '../utils/ce-registry.js';

register("sit-input", SitInput);
var index = createComponent({
    react: React,
    tagName: "sit-input",
    elementClass: SitInput,
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
