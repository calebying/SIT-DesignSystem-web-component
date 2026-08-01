'use client';

export const Footer = () => {
  return (
    <sit-footer suppressHydrationWarning>
      <a slot="social-media" href="https://www.facebook.com">
        <sit-icon name="facebook" suppressHydrationWarning></sit-icon>
      </a>
      <a slot="social-media" href="https://www.instagram.com">
        <sit-icon name="instagram" suppressHydrationWarning></sit-icon>
      </a>
      <a slot="social-media" href="https://www.linkedin.com">
        <sit-icon name="linkedin" suppressHydrationWarning></sit-icon>
      </a>
      <a slot="social-media" href="https://www.x.com">
        <sit-icon name="twitter-x" suppressHydrationWarning></sit-icon>
      </a>
      <a slot="social-media" href="https://www.youtube.com">
        <sit-icon name="youtube" suppressHydrationWarning></sit-icon>
      </a>
    </sit-footer>
  );
};
