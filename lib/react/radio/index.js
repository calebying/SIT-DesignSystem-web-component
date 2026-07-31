'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitRadio } from '../components/Radio/sit-radio.js';
import { register } from '../utils/ce-registry.js';

register("sit-radio", SitRadio);
var index = createComponent({
    react: React,
    tagName: "sit-radio",
    elementClass: SitRadio,
    events: {
        onSitFocus: "sit-focus",
        onSitBlur: "sit-blur"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
