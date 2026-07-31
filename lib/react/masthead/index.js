'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitMasthead } from '../components/Masthead/sit-masthead.js';
import { register } from '../utils/ce-registry.js';

register("sit-masthead", SitMasthead);
var index = createComponent({
    react: React,
    tagName: "sit-masthead",
    elementClass: SitMasthead,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
