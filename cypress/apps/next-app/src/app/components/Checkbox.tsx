'use client';

export const Checkbox = () => {
  return (
    <sit-checkbox-group label="Select Your Preferences" hintText="Please choose one or more options:" suppressHydrationWarning>
      <sit-checkbox value="option1" suppressHydrationWarning>Option 1</sit-checkbox>
      <sit-checkbox indeterminate value="option2" suppressHydrationWarning>Option 2 indeterminate</sit-checkbox>
      <sit-checkbox disabled value="option3" suppressHydrationWarning>Option 3</sit-checkbox>
    </sit-checkbox-group>
  );
};
