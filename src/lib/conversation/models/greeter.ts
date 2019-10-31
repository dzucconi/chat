import { mistakes } from "humanization";

import { maybeContract } from "../contract";
import { sample } from "../../sample";
import { maybe } from "../../maybe";
import { timeOfDay } from "../timeOfDay";
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
  {
    template: () => `${maybe("Hey,")} ${maybeContract("What is")} up`,
    chance: 1.0
  },
  {
    template: () => `${maybe("Hey,")} ${maybeContract("How is")} it going`,
    chance: 1.0
  },
  { template: () => "What", chance: 1.0 },
  {
    template: () =>
      `${sample(["What are you", "Whatcha"])} ${sample(["up to", "doing"])}?`,
    chance: 1.0
  },
  { template: () => "How are you doing?", chance: 1.0 },
  { template: () => "Heya", chance: 1.0 },
  { template: () => "Hey?", chance: 1.0 },
  { template: () => `${maybeContract("How is")} everything?`, chance: 1.0 },
  { template: () => `How are things?`, chance: 1.0 },
  {
    template: () =>
      `Good ${timeOfDay({
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening"
      })}${maybe("!")}`,
    chance: 1.0
  }
];

export default {
  NAME: "Credit (for Borna)",
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
