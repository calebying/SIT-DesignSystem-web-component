'use client';

export const Toast = () => {
  return (
    <sit-toast-container position="bottom-start" suppressHydrationWarning>
      <sit-toast show dismissible variant="warning" suppressHydrationWarning>
        <sit-icon slot="icon" name="exclamation-triangle-fill" suppressHydrationWarning></sit-icon>
        <sit-link slot="action" href="#" target="_blank" suppressHydrationWarning>Action</sit-link>
        This is a toast notification
      </sit-toast>
    </sit-toast-container>
  );
};
