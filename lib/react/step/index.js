'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitStep } from '../components/Stepper/sit-step.js';
import { register } from '../utils/ce-registry.js';

register("sit-step", SitStep);
var index = createComponent({
    react: React,
    tagName: "sit-step",
    elementClass: SitStep,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
