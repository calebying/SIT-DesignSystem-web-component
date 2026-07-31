'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitModal } from '../components/Modal/sit-modal.js';
import { register } from '../utils/ce-registry.js';

register("sit-modal", SitModal);
var index = createComponent({
    react: React,
    tagName: "sit-modal",
    elementClass: SitModal,
    events: {
        onSitClose: "sit-close",
        onSitShow: "sit-show",
        onSitHide: "sit-hide",
        onSitAfterShow: "sit-after-show",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
