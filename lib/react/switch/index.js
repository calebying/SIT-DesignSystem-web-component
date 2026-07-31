'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSwitch } from '../components/Switch/sit-switch.js';
import { register } from '../utils/ce-registry.js';

register("sit-switch", SitSwitch);
var index = createComponent({
    react: React,
    tagName: "sit-switch",
    elementClass: SitSwitch,
    events: {
        onSitChange: "sit-change"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
