import { sample } from "../../sample";
import { maybe } from "../../maybe";
import { Memory } from "../types";
import { MISTAKES } from "../../../config";

export const MEMORY: Memory = [
  { template: () => `${sample(["Everything is", "It’s"])} fine.`, chance: 1.0 },
  {
    template: () =>
      `${maybe(
        `${sample(["Seriously", "Really", "Truly"])}, `
      )}Everything is ${sample(["OK", "fine"])}.`,
    chance: 1.0
  },
  {
    template: () =>
      `${maybe(`${sample(["Seriously", "Really", "Truly"])}, `)}I forgive you.`,
    chance: 1.0
  },
  { template: () => "It’s alright.", chance: 1.0 },
  { template: () => `${maybe("Please,")} I absolve you.`, chance: 1.0 },
  {
    template: () => `${sample(["You are", "Everything is"])} forgiven.`,
    chance: 1.0
  },
  {
    template: () =>
      `${maybe(sample(["Seriously,", "Sincerely,"]))} We can move on.`,
    chance: 1.0
  },
  { template: () => "It’s time to move on.", chance: 1.0 },
  { template: () => "Please believe me.", chance: 1.0 },
  {
    template: () =>
      `I ${maybe("completely")} understand ${maybe(
        `and everything will be ${sample(["OK", "fine", "alright", "great"])}`
      )}.`,
    chance: 1.0
  },
  { template: () => `Hey, it’s OK. ${maybe("Really")}`, chance: 1.0 },
  { template: () => `No worries${sample([".", "!"])}`, chance: 1.0 },
  { template: () => `I let it go.`, chance: 1.0 },
  { template: () => `We all make mistakes.`, chance: 1.0 },
  { template: () => `It ${maybe("really")} wasn’t a big deal.`, chance: 1.0 },
  { template: () => `Don’t worry about it.`, chance: 1.0 },
  { template: () => `I know you didn’t mean it.`, chance: 1.0 },
  { template: () => `Water under the bridge.`, chance: 0.5 },
  { template: () => `Forgiven and forgotten.`, chance: 0.75 },
  { template: () => `Let bygones be bygones.`, chance: 0.75 },
  {
    template: () => `${maybe("I think")} enough time has passed.`,
    chance: 1.0
  },
  { template: () => `Just forget about it.`, chance: 1.0 },
  { template: () => `${maybe("I know.")} It was so long ago.`, chance: 1.0 },
  { template: () => `It’s ancient history.`, chance: 1.0 },
  { template: () => `I accept your apology.`, chance: 1.0 },
  { template: () => `I can’t imagine a world without you.`, chance: 0.25 }
];

export default {
  NAME: "Production",
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
