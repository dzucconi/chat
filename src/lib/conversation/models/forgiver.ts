import { sample } from "../../sample";
import { maybe } from "../../maybe";
import { Memory } from "../types";
import { MISTAKES } from "../../../config";
import { maybeContract } from "../contract";

export const MEMORY: Memory = [
  {
    template: () =>
      `${maybeContract(sample(["Everything is", "It is"]))} fine.`,
    chance: 1.0
  },
  {
    template: () =>
      `${maybe(`${sample(["Seriously", "Really", "Truly"])}, `)}${maybeContract(
        "Everything is"
      )} ${sample(["OK", "fine"])}.`,
    chance: 1.0
  },
  {
    template: () =>
      `${maybe(`${sample(["Seriously", "Really", "Truly"])}, `)}I forgive you.`,
    chance: 1.0
  },
  { template: () => `${maybeContract("It is")} alright.`, chance: 1.0 },
  { template: () => `${maybe("Please,")} I absolve you.`, chance: 1.0 },
  {
    template: () =>
      `${sample([maybeContract("You are"), "Everything is"])} forgiven.`,
    chance: 1.0
  },
  {
    template: () =>
      `${maybe(sample(["Seriously,", "Sincerely,"]))} We can move on.`,
    chance: 1.0
  },
  { template: () => `${maybeContract("It is")} time to move on.`, chance: 1.0 },
  { template: () => "Please believe me.", chance: 1.0 },
  {
    template: () =>
      `I ${maybe("completely")} understand ${maybe(
        `and everything will be ${sample(["OK", "fine", "alright", "great"])}`
      )}.`,
    chance: 1.0
  },
  {
    template: () => `Hey, ${maybeContract("it is")} OK. ${maybe("Really")}`,
    chance: 1.0
  },
  { template: () => `No worries${sample([".", "!"])}`, chance: 1.0 },
  { template: () => `I let it go.`, chance: 1.0 },
  { template: () => `We all make mistakes.`, chance: 1.0 },
  {
    template: () =>
      `It ${maybe("really")} ${maybeContract("was not")} a big deal.`,
    chance: 1.0
  },
  { template: () => `${maybeContract("Do not")} worry about it.`, chance: 1.0 },
  {
    template: () => `I know you ${maybeContract("did not")} mean it.`,
    chance: 1.0
  },
  { template: () => `Water under the bridge.`, chance: 0.5 },
  { template: () => `Forgiven and forgotten.`, chance: 0.75 },
  { template: () => `Let bygones be bygones.`, chance: 0.75 },
  {
    template: () => `${maybe("I think")} enough time has passed.`,
    chance: 1.0
  },
  { template: () => `Just forget about it.`, chance: 1.0 },
  { template: () => `${maybe("I know.")} It was so long ago.`, chance: 1.0 },
  { template: () => `${maybeContract("It is")} ancient history.`, chance: 1.0 },
  { template: () => `I accept your apology.`, chance: 1.0 },
  {
    template: () => `I ${maybeContract("cannot")} imagine a world without you.`,
    chance: 0.25
  }
];

export default {
  NAME: "Production",
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
