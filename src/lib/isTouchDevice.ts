export const isTouchDevice = (): boolean =>
  "ontouchstart" in window || "onmsgesturechange" in window;
