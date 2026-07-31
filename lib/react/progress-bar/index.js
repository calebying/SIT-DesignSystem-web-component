'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitProgressBar } from '../components/ProgressBar/sit-progress-bar.js';
import { register } from '../utils/ce-registry.js';

register("sit-progress-bar", SitProgressBar);
var index = createComponent({
    react: React,
    tagName: "sit-progress-bar",
    elementClass: SitProgressBar,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
