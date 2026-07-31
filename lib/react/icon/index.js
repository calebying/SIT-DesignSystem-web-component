'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitIcon } from '../components/Icon/sit-icon.js';
import { register } from '../utils/ce-registry.js';

register("sit-icon", SitIcon);
var index = createComponent({
    react: React,
    tagName: "sit-icon",
    elementClass: SitIcon,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
