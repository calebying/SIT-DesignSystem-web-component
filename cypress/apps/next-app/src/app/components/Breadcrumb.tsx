'use client';

export const Breadcrumb = () => {
  return (
    <sit-breadcrumb aria-label="breadcrumb" suppressHydrationWarning>
      <sit-breadcrumb-item suppressHydrationWarning><a href="https://www.google.com">first</a></sit-breadcrumb-item>
      <sit-breadcrumb-item suppressHydrationWarning><a href="https://www.google.com">second</a></sit-breadcrumb-item>
      <sit-breadcrumb-item suppressHydrationWarning><a href="https://www.google.com">third</a></sit-breadcrumb-item>
      <sit-breadcrumb-item suppressHydrationWarning><a href="https://www.google.com">fourth</a></sit-breadcrumb-item>
      <sit-breadcrumb-item suppressHydrationWarning><a href="https://www.google.com">fifth</a></sit-breadcrumb-item>
      <sit-breadcrumb-item suppressHydrationWarning><a href="https://www.google.com">sixth</a></sit-breadcrumb-item>
      <sit-breadcrumb-item suppressHydrationWarning>Last Item</sit-breadcrumb-item>
    </sit-breadcrumb>
  );
};
