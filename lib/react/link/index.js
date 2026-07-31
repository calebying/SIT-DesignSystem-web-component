'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitLink } from '../components/Link/sit-link.js';
import { register } from '../utils/ce-registry.js';

register("sit-link", SitLink);
var index = createComponent({
    react: React,
    tagName: "sit-link",
    elementClass: SitLink,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
