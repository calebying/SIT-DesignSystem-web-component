'use client';

export const TableOfContents = () => {
  return (
    <sit-table-of-contents suppressHydrationWarning>
      <h2>Header</h2>
      <li slot="contents">
        <sit-link suppressHydrationWarning><a href="#">Link</a></sit-link>
      </li>
      <li slot="contents">
        <sit-link suppressHydrationWarning><a href="#">Link</a></sit-link>
      </li>
      <li slot="contents">
        <sit-link suppressHydrationWarning><a href="#">Link</a></sit-link>
      </li>
      <li slot="contents">
        <sit-link suppressHydrationWarning><a href="#">Link</a></sit-link>
      </li>
    </sit-table-of-contents>
  );
};
