'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitIconButton } from '../components/IconButton/sit-icon-button.js';
import { register } from '../utils/ce-registry.js';

register("sit-icon-button", SitIconButton);
var index = createComponent({
    react: React,
    tagName: "sit-icon-button",
    elementClass: SitIconButton,
    events: {
        onSitBlur: "sit-blur",
        onSitFocus: "sit-focus"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
