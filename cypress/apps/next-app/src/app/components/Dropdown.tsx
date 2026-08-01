'use client';

export const Dropdown = () => {
  return (
    <div>
      <sit-dropdown drop="down" menuVariant="default" suppressHydrationWarning>
        <sit-button slot="toggler" suppressHydrationWarning>Dropdown</sit-button>
        <sit-dropdown-item suppressHydrationWarning>item #1 (argsTable controlled)</sit-dropdown-item>
        <sit-dropdown-item suppressHydrationWarning>item #2</sit-dropdown-item>
        <sit-dropdown-item disabled suppressHydrationWarning>item #3</sit-dropdown-item>
      </sit-dropdown>
    </div>
  );
};
