'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitBreadcrumb } from '../components/Breadcrumb/sit-breadcrumb.js';
import { register } from '../utils/ce-registry.js';

register("sit-breadcrumb", SitBreadcrumb);
var index = createComponent({
    react: React,
    tagName: "sit-breadcrumb",
    elementClass: SitBreadcrumb,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
