'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSidenavLink } from '../components/Sidenav/sit-sidenav-link.js';
import { register } from '../utils/ce-registry.js';

register("sit-sidenav-link", SitSidenavLink);
var index = createComponent({
    react: React,
    tagName: "sit-sidenav-link",
    elementClass: SitSidenavLink,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
