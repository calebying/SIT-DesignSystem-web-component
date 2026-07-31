'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitDescriptionList } from '../components/DescriptionList/sit-description-list.js';
import { register } from '../utils/ce-registry.js';

register("sit-description-list", SitDescriptionList);
var index = createComponent({
    react: React,
    tagName: "sit-description-list",
    elementClass: SitDescriptionList,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
