export const Tab = () => {
  return (
    <>
      <sit-tab-group>
        <sit-tab slot="nav" panel="home">
          Home
        </sit-tab>
        <sit-tab slot="nav" panel="profile">
          Profile
        </sit-tab>
        <sit-tab slot="nav" panel="contact">
          Contact
        </sit-tab>
        <sit-tab-panel name="home">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </sit-tab-panel>
        <sit-tab-panel name="profile">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here',
        </sit-tab-panel>
        <sit-tab-panel name="contact">Contact information</sit-tab-panel>
      </sit-tab-group>
    </>
  );
};
