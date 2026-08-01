'use client';

import { useState } from "react";

export const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <sit-button onClick={() => setOpen(true)} suppressHydrationWarning>Open Modal</sit-button>
      <sit-modal open={open ? "" : undefined} suppressHydrationWarning>
        <h2 slot="title">Modal title</h2>
        <p slot="description">Modal description</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum est vitae erat molestie blandit.
          Pellentesque at nunc at mi auctor imperdiet eu at leo. Integer aliquam, turpis vel ultricies ornare, sem massa
          commodo velit, pretium dictum quam nibh et ex. Suspendisse eu dignissim libero. Donec aliquam, lacus eu
          pellentesque interdum, arcu nisl blandit turpis, at tincidunt purus orci ut dolor.
        </p>
        <sit-button slot="footer" variant="link" className="close-modal" onClick={() => setOpen(false)} suppressHydrationWarning>
          Close
        </sit-button>
        <sit-button slot="footer" variant="primary" type="submit" form="formA" suppressHydrationWarning>
          Submit
        </sit-button>
      </sit-modal>
    </>
  );
};
