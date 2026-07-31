'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitToast } from '../components/Toast/sit-toast.js';
import { register } from '../utils/ce-registry.js';

register("sit-toast", SitToast);
var index = createComponent({
    react: React,
    tagName: "sit-toast",
    elementClass: SitToast,
    events: {
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
