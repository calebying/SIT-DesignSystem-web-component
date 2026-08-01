'use client';

import { useEffect } from 'react';

const CanvasLibraryLoader = ({ nonce }: { nonce?: string }) => {
  useEffect(() => {
    (async () => {
      await import('@webcomponents/scoped-custom-element-registry');
      await import('@sit-canvas/canvas-web-component');
    })();
  }, []);

  return null;
};

export default CanvasLibraryLoader;
