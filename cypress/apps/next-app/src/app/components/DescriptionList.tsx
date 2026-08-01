'use client';

export const DescriptionList = () => {
  return (
    <sit-description-list-group suppressHydrationWarning>
      <span slot="description">Description</span>
      <sit-description-list suppressHydrationWarning>
        Label 1<span slot="data">Data Text Description List 1</span>
      </sit-description-list>
      <sit-description-list suppressHydrationWarning>
        Label 2<span slot="data">Data Text Description List 2</span>
      </sit-description-list>
    </sit-description-list-group>
  );
};
