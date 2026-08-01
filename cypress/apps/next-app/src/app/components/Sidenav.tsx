'use client';

export const Sidenav = () => {
  return (
    <sit-sidenav className="mt-3" id="test-id" suppressHydrationWarning>
      <sit-sidenav-item suppressHydrationWarning>
        <sit-icon name="placeholder" slot="icon" suppressHydrationWarning></sit-icon>
        <span slot="title">Title</span>
        <sit-sidenav-link disabled suppressHydrationWarning>
          <a href="#"> disabled-test</a>
        </sit-sidenav-link>
        <sit-sidenav-link active suppressHydrationWarning>
          <a href="#"> first-test</a>
        </sit-sidenav-link>
        <sit-sidenav-item suppressHydrationWarning>
          <span slot="title">Title level 2 very long so just wrap</span>
          <sit-sidenav-link suppressHydrationWarning>
            <a href="#"> first-test</a>
          </sit-sidenav-link>
          <sit-sidenav-link suppressHydrationWarning>
            <a href="#"> first-test</a>
          </sit-sidenav-link>
        </sit-sidenav-item>
      </sit-sidenav-item>
      <sit-sidenav-item disabled suppressHydrationWarning>
        <sit-icon slot="icon" name="placeholder" suppressHydrationWarning></sit-icon>
        <span slot="title">Title</span>
        <sit-sidenav-link suppressHydrationWarning>
          <a href="#"> first-test</a>
        </sit-sidenav-link>
        <sit-sidenav-link suppressHydrationWarning>
          <a href="#"> first-test</a>
        </sit-sidenav-link>
      </sit-sidenav-item>
      <sit-sidenav-item active suppressHydrationWarning>
        <a href="#">
          {" "}
          <sit-icon slot="icon" name="placeholder" suppressHydrationWarning></sit-icon>anchor
        </a>
      </sit-sidenav-item>
      <sit-sidenav-item suppressHydrationWarning>
        <a href="https://www.google.com">
          <sit-icon slot="icon" name="placeholder" suppressHydrationWarning></sit-icon> Google
        </a>
      </sit-sidenav-item>
    </sit-sidenav>
  );
};
