import { mistakes } from "humanization";

import { Memory } from "../types";

const repeat: typeof mistakes.repeat = input =>
  mistakes.repeat(input, {
    ".": 1,
    "!": 1,
    "?": 1,
    o: 1,
    u: 1,
    e: 1,
    i: 1,
    y: 1
  });

export const MISTAKES = [
  { apply: mistakes.miss, probability: 0.033 },
  { apply: mistakes.omit, probability: 0.033 },
  { apply: mistakes.duplicate, probability: 0.001 },
  { apply: mistakes.toggleCase, probability: 0.033 },
  { apply: mistakes.capitalize, probability: 0.033 },
  {
    apply: repeat,
    probability: 0.5
  },
  { apply: mistakes.substitute, probability: 0.5 }
];

export const MEMORY: Memory = [
  { template: () => "Hey", chance: 1.0 },
  { template: () => "Hey", chance: 1.0 },
  { template: () => "Hi", chance: 1.0 },
  { template: () => "Hi", chance: 1.0 },
  { template: () => "Hello", chance: 1.0 },
  { template: () => "Yo", chance: 1.0 },
  { template: () => "Yo", chance: 1.0 },
  { template: () => "Yo", chance: 1.0 },
  { template: () => "Sup", chance: 1.0 },
  { template: () => "What’s up", chance: 1.0 },
  { template: () => "How’s it going", chance: 1.0 },
  { template: () => "What", chance: 1.0 }
];

export default {
  MISTAKES,
  MEMORY
};
