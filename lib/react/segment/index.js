'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSegment } from '../components/SegmentedControl/sit-segment.js';
import { register } from '../utils/ce-registry.js';

register("sit-segment", SitSegment);
var index = createComponent({
    react: React,
    tagName: "sit-segment",
    elementClass: SitSegment,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
