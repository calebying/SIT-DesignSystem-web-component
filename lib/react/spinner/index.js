'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSpinner } from '../components/Spinner/sit-spinner.js';
import { register } from '../utils/ce-registry.js';

register("sit-spinner", SitSpinner);
var index = createComponent({
    react: React,
    tagName: "sit-spinner",
    elementClass: SitSpinner,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
