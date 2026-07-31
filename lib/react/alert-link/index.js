'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitAlertLink } from '../components/Alert/sit-alert-link.js';
import { register } from '../utils/ce-registry.js';

register("sit-alert-link", SitAlertLink);
var index = createComponent({
    react: React,
    tagName: "sit-alert-link",
    elementClass: SitAlertLink,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
