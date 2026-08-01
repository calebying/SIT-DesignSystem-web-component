'use client';

export const Select = () => {
  return (
    <div>
      <sit-select label="Fruits" hintText="single select" name="select" placeholder="Select a fruit" value="1" suppressHydrationWarning>
        <sit-select-option value="1" suppressHydrationWarning>One</sit-select-option>
        <sit-select-option value="2" suppressHydrationWarning>Two</sit-select-option>
        <sit-select-option value="3" suppressHydrationWarning>Three</sit-select-option>
      </sit-select>
    </div>
  );
};
