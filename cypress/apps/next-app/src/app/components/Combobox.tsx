'use client';

export const Combobox = () => {
  return (
    <div>
      <sit-combo-box label="Fruits" hintText="single select" name="combobox-single" placeholder="Select a fruit" suppressHydrationWarning>
        <sit-combo-box-option value="apple" suppressHydrationWarning>Apple</sit-combo-box-option>
        <sit-combo-box-option value="orange" suppressHydrationWarning>Orange</sit-combo-box-option>
        <sit-combo-box-option value="pear" suppressHydrationWarning>Pear</sit-combo-box-option>
      </sit-combo-box>
      <sit-combo-box label="Fruits" hintText="multi select" name="combobox-multi" placeholder="Select fruits" multiselect suppressHydrationWarning>
        <sit-combo-box-option value="apple" suppressHydrationWarning>Apple</sit-combo-box-option>
        <sit-combo-box-option value="orange" suppressHydrationWarning>Orange</sit-combo-box-option>
        <sit-combo-box-option value="pear" suppressHydrationWarning>Pear</sit-combo-box-option>
      </sit-combo-box>
    </div>
  );
};
