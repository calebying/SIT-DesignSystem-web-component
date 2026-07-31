'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitAlert } from '../components/Alert/sit-alert.js';
import { register } from '../utils/ce-registry.js';

register("sit-alert", SitAlert);
var index = createComponent({
    react: React,
    tagName: "sit-alert",
    elementClass: SitAlert,
    events: {
        onSitShow: "sit-show",
        onSitHide: "sit-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
