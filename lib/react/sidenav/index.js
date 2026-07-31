'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSidenav } from '../components/Sidenav/sit-sidenav.js';
import { register } from '../utils/ce-registry.js';

register("sit-sidenav", SitSidenav);
var index = createComponent({
    react: React,
    tagName: "sit-sidenav",
    elementClass: SitSidenav,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
