'use client';

export const Radio = () => {
  return (
    <sit-radio-group suppressHydrationWarning>
      <span slot="label">Select an option</span>
      <sit-radio suppressHydrationWarning>Option 1</sit-radio>
      <sit-radio value="2" suppressHydrationWarning>Option 2</sit-radio>
      <sit-radio value="3" suppressHydrationWarning>Option 3</sit-radio>
    </sit-radio-group>
  );
};
