'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitButton } from '../components/Button/sit-button.js';
import { register } from '../utils/ce-registry.js';

register("sit-button", SitButton);
var index = createComponent({
    react: React,
    tagName: "sit-button",
    elementClass: SitButton,
    events: {
        onSitBlur: "sit-blur",
        onSitFocus: "sit-focus"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
