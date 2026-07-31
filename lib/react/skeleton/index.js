'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSkeleton } from '../components/Skeleton/sit-skeleton.js';
import { register } from '../utils/ce-registry.js';

register("sit-skeleton", SitSkeleton);
var index = createComponent({
    react: React,
    tagName: "sit-skeleton",
    elementClass: SitSkeleton,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
