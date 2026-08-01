'use client';

export const Textarea = () => {
  return (
    <sit-textarea
      label="Label"
      name="textarea"
      rows="4"
      placeholder="Placeholder"
      maxlength="100"
      resize="vertical"
      suppressHydrationWarning
    ></sit-textarea>
  );
};
