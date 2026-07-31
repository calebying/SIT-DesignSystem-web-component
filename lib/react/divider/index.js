'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitDivider } from '../components/Divider/sit-divider.js';
import { register } from '../utils/ce-registry.js';

register("sit-divider", SitDivider);
var index = createComponent({
    react: React,
    tagName: "sit-divider",
    elementClass: SitDivider,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
