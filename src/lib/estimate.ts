const SPEED = 200.0; // lower === slower

export const estimate = (input: string, speed = SPEED) => {
  const words = input.split(/\W+/g).length;
  return (words / speed) * 60.0 * 1000.0;
};
