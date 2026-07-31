'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitCloseButton } from '../components/CloseButton/sit-close-button.js';
import { register } from '../utils/ce-registry.js';

register("sit-close-button", SitCloseButton);
var index = createComponent({
    react: React,
    tagName: "sit-close-button",
    elementClass: SitCloseButton,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
