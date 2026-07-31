'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitStepper } from '../components/Stepper/sit-stepper.js';
import { register } from '../utils/ce-registry.js';

register("sit-stepper", SitStepper);
var index = createComponent({
    react: React,
    tagName: "sit-stepper",
    elementClass: SitStepper,
    events: {
        onSitNextStep: "sit-next-step",
        onSitPreviousStep: "sit-previous-step",
        onSitLastStep: "sit-last-step",
        onSitFirstStep: "sit-first-step",
        onSitArrived: "sit-arrived",
        onSitReset: "sit-reset"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
