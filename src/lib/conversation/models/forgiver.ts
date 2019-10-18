import { mistakes } from "humanization";

import { sample } from "../../sample";
import { maybe } from "../../maybe";
import { Memory } from "../types";

export const MISTAKES = [
  { apply: mistakes.miss, probability: 0.033 },
  { apply: mistakes.omit, probability: 0.033 },
  { apply: mistakes.duplicate, probability: 0.001 },
  { apply: mistakes.toggleCase, probability: 0.033 },
  { apply: mistakes.capitalize, probability: 0.033 },
  { apply: mistakes.repeat, probability: 1 },
  { apply: mistakes.substitute, probability: 0.5 }
];

export const MEMORY: Memory = [
  { template: () => "It’s fine", chance: 1.0 },
  {
    template: () =>
      `${maybe(
        `${sample(["Seriously", "Really", "Truly"])}, `
      )}Everything is ${sample(["OK", "fine"])}`,
    chance: 1.0
  },
  {
    template: () =>
      `${maybe(`${sample(["Seriously", "Really", "Truly"])}, `)}I forgive you`,
    chance: 1.0
  },
  { template: () => "It’s alright", chance: 1.0 },
  { template: () => "I absolve you", chance: 1.0 },
  {
    template: () => `${sample(["You are", "Everything is"])} forgiven`,
    chance: 1.0
  }
];

export default {
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
