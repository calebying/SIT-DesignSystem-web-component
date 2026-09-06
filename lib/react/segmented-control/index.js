'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSegmentedControl } from '../components/SegmentedControl/sit-segmented-control.js';
import { register } from '../utils/ce-registry.js';

register("sit-segmented-control", SitSegmentedControl);
var index = createComponent({
    react: React,
    tagName: "sit-segmented-control",
    elementClass: SitSegmentedControl,
    events: {
        onSitChange: "sit-change"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
