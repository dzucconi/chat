import { sample } from "../../sample";
import { maybe } from "../../maybe";
import { maybeContract } from "../contract";
import { Memory } from "../types";
import { MISTAKES } from "../../../config";

export const MEMORY: Memory = [
  { template: () => "Thanks.", chance: 1.0 },
  { template: () => "Thank you.", chance: 1.0 },
  { template: () => "No, thank you.", chance: 1.0 },
  { template: () => "Thank you so much.", chance: 1.0 },
  { template: () => "Seriously, thank you so much.", chance: 1.0 },
  { template: () => "OK, but thanks.", chance: 1.0 },
  { template: () => "No no, thank you.", chance: 1.0 },
  { template: () => "Thanks again.", chance: 1.0 },
  {
    template: () => `${maybeContract("I am")} eternally in your debt.`,
    chance: 1.0
  },
  {
    template: () => `${maybeContract("I am")} so ${maybe("very")} grateful.`,
    chance: 1.0
  },
  { template: () => `I ${maybe("really")} appreciate it.`, chance: 1.0 },
  {
    template: () => `Thanks a ${sample(["bunch", "million", "ton", "lot"])}.`,
    chance: 1.0
  },
  { template: () => "I owe you one.", chance: 1.0 },
  { template: () => `You are ${sample(["so", "too"])} kind.`, chance: 1.0 },
  {
    template: () => `${sample(["Thanks", "Thank you"])} for everything.`,
    chance: 1.0
  },
  { template: () => `Accept my endless gratitude.`, chance: 1.0 },
  { template: () => `All ${maybe("of")} my love.`, chance: 1.0 },
  {
    template: () => `I ${maybeContract("do not")} know what to say.`,
    chance: 1.0
  },
  { template: () => `What would I do without you?`, chance: 1.0 },
  {
    template: () =>
      `Words cannot describe how ${sample([
        "thankful",
        "grateful",
        "appreciative",
        "indebted",
        "pleased"
      ])} I am.`,
    chance: 1.0
  },
  {
    template: () =>
      `My gratitude ${sample(["knows no bounds", "is boundless"])}.`,
    chance: 0.9
  },
  { template: () => "Thank you truly.", chance: 1.0 }
];

export default {
  NAME: "Debt",
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
