import { sample } from "../../sample";
import { maybe } from "../../maybe";
import { Memory } from "../types";

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
