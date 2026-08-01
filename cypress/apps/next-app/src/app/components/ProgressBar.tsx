'use client';

export const ProgressBar = () => {
  return (
    <sit-progress-bar
      label="50%"
      variant="secondary"
      value="50"
      aria-label="Loading in progress"
      suppressHydrationWarning
    ></sit-progress-bar>
  );
};
