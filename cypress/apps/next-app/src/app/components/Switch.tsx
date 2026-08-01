'use client';

export const Switch = () => {
  return (
    <>
      <sit-switch suppressHydrationWarning>Switch</sit-switch>
      <sit-switch icon suppressHydrationWarning>Switch with icon</sit-switch>
      <sit-switch icon size="sm" suppressHydrationWarning>Switch with icon</sit-switch>
      <sit-switch icon size="lg" suppressHydrationWarning>Switch with icon</sit-switch>
      <sit-switch disabled suppressHydrationWarning>Switch</sit-switch>
      <sit-switch size="sm" suppressHydrationWarning>Switch</sit-switch>
      <sit-switch size="lg" suppressHydrationWarning>Switch</sit-switch>
      <sit-switch size="lg" suppressHydrationWarning>
        <span slot="leftLabel">Switch</span>
      </sit-switch>
    </>
  );
};
