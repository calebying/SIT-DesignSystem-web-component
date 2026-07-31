'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitToastContainer } from '../components/Toast/sit-toast-container.js';
import { register } from '../utils/ce-registry.js';

register("sit-toast-container", SitToastContainer);
var index = createComponent({
    react: React,
    tagName: "sit-toast-container",
    elementClass: SitToastContainer,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
