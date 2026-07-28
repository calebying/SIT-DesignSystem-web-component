import SitProgressBar from "@sit-canvas/canvas-web-component/react/progress-bar";

export const ProgressBar = () => {
  return (
    <SitProgressBar
      label="50%"
      variant="neutral"
      value="50"
      ariamin="0"
      ariamax="100"
      arialabel="Loading in progress"
    ></SitProgressBar>
  );
};
