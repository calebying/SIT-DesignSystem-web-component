'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitQuantityToggle } from '../components/QuantityToggle/sit-quantity-toggle.js';
import { register } from '../utils/ce-registry.js';

register("sit-quantity-toggle", SitQuantityToggle);
var index = createComponent({
    react: React,
    tagName: "sit-quantity-toggle",
    elementClass: SitQuantityToggle,
    events: {
        onSitChange: "sit-change",
        onSitInput: "sit-input"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
