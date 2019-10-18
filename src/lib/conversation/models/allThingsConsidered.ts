import { Memory } from "../types";

export const MISTAKES = [];

export const MY_MEMORY: Memory = [
  {
    template: async () => {
      const response = await fetch("http://dictionary.pink/verse?n=1");
      const [verse] = await response.json();
      return `${verse}?`;
    },
    chance: 1.0
  }
];

export const THEIR_MEMORY: Memory = [
  {
    template: async () => {
      const response = await fetch("http://dictionary.red/verse?n=1");
      const [verse] = await response.json();
      return `${verse}.`;
    },
    chance: 1.0
  }
];

export default {
  MISTAKES,
  ME: MY_MEMORY,
  THEM: THEIR_MEMORY
};
