import { mistakes } from "humanization";
import { Memory } from "../types";

import { MISTAKES as _MISTAKES, entropy } from "../../../config";

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
  ..._MISTAKES,
  {
    apply: repeat,
    probability: 0.5 * entropy
  }
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
  NAME: "Credit",
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
