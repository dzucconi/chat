export const sample = <T>(xs: T[]): T =>
  xs[Math.floor(Math.random() * xs.length)];
