'use client';

export const Input = () => {
  return (
    <sit-input
      type="text"
      label="Label"
      hintText="This is a hint text"
      name="email"
      placeholder="Placeholder"
      suppressHydrationWarning
    ></sit-input>
  );
};
