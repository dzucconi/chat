import { readingSpeed } from "../config";

export const estimate = (input: string, speed = readingSpeed) => {
  const words = input.split(/\W+/g).length;
  return (words / speed) * 60.0 * 1000.0;
};
