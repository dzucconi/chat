import { sample } from "../../sample";
import { maybe } from "../../maybe";
import { Memory } from "../types";
import { MISTAKES } from "../../../config";
import { maybeContract } from "../contract";

export const MEMORY: Memory = [
  { template: () => "Excuse me", chance: 1.0 },
  { template: () => "Ever so sorry.", chance: 1.0 },
  {
    template: () =>
      `How ${sample(["stupid", "careless", "thoughtless"])} of me.`,
    chance: 1.0
  },
  { template: () => "I apologize.", chance: 1.0 },
  { template: () => `I had that ${maybe("so")} wrong.`, chance: 1.0 },
  {
    template: () =>
      `I hope ${maybe("that")} ${maybe("maybe")} you can forgive me.`,
    chance: 1.0
  },
  { template: () => "I owe you an apology.", chance: 1.0 },
  { template: () => "I sincerely apologize.", chance: 1.0 },
  { template: () => "I take full responsibility.", chance: 1.0 },
  { template: () => "I want to apologize.", chance: 1.0 },
  {
    template: () =>
      `I wanted to tell you ${maybeContract("I am")} ${maybe("so")} sorry.`,
    chance: 1.0
  },
  { template: () => `I was wrong${maybe(" about that")}.`, chance: 1.0 },
  {
    template: () =>
      `${maybeContract("I would")} like to apologize${maybe(
        " for everything"
      )}.`,
    chance: 1.0
  },
  {
    template: () =>
      `${maybeContract(
        "I would"
      )} like to apologize for how I reacted yesterday.`,
    chance: 1.0
  },
  {
    template: () =>
      `${maybeContract("I am")} ${maybe("so")} ${maybe("so")} ${sample([
        "very",
        "terribly",
        "extremely",
        "immensely",
        "acutely",
        "truly",
        `fucking`
      ])} sorry${sample([".", ".", ".", "!", "..."])}`,
    chance: 1.0
  },
  { template: () => `My ${maybe("sincerest")} apologies.`, chance: 1.0 },
  { template: () => "My fault", chance: 1.0 },
  { template: () => "My mistake.", chance: 1.0 },
  {
    template: () =>
      `Oh my ${sample(["goodness", "god", "christ"])}! ${maybeContract(
        "I am"
      )} ${maybe("so")} sorry.`,
    chance: 1.0
  },
  { template: () => "Oh, my bad.", chance: 1.0 },
  { template: () => `Pardon ${maybe("me")}`, chance: 1.0 },
  {
    template: () => `Please accept my ${maybe("sincerest")} apologies.`,
    chance: 1.0
  },
  {
    template: () => `Please ${maybeContract("do not")} be mad at me.`,
    chance: 1.0
  },
  {
    template: () => `Please excuse ${sample(["my ignorance", "me"])}`,
    chance: 1.0
  },
  { template: () => "Sorry about that.", chance: 1.0 },
  {
    template: () => "Sorry, my apologies. I had that wrong.",
    chance: 1.0
  },
  {
    template: () =>
      `${maybe(
        sample(["No", "No no", "No no no"])
      )}, Sorry. It was all my fault.`,
    chance: 1.0
  },
  { template: () => "That was wrong of me.", chance: 1.0 },
  { template: () => `${maybeContract("That is")} my fault.`, chance: 1.0 },
  {
    template: () =>
      `${sample(["woops", "shit", "fuck"])}! ${maybe("so")} ${maybe(
        "so"
      )} sorry!`,
    chance: 1.0
  },
  { template: () => "I beg your pardon", chance: 1.0 },
  { template: () => "My bad", chance: 1.0 },
  { template: () => "Excuse me for interrupting.", chance: 1.0 },
  {
    template: () =>
      `${maybe("I was wrong.")} Can you ${maybe("ever")} forgive me?`,
    chance: 1.0
  },
  { template: () => `Pardon me${maybe(" for being so rude.")}`, chance: 1.0 },
  { template: () => "I crave pardon", chance: 1.0 },
  {
    template: () =>
      `I know ${maybeContract("I have")} ${maybe("truly")} hurt you.`,
    chance: 1.0
  },
  {
    template: () =>
      `I know you ${sample([
        maybeContract("are not"),
        "might not be"
      ])} ready to forgive me.`,
    chance: 1.0
  },
  { template: () => `${maybe(maybeContract("I am"))} Sorry.`, chance: 1.0 },
  {
    template: () => `I ${maybe("just")} ${maybeContract("do not")} know.`,
    chance: 1.0
  },
  {
    template: () =>
      `I ${maybeContract("did not")} mean to ${sample([
        "cause you",
        "have caused"
      ])} pain.`,
    chance: 1.0
  },
  {
    template: () => `It ${maybeContract("will not")} happen again.`,
    chance: 1.0
  },
  { template: () => "I just forgot.", chance: 1.0 },
  {
    template: () =>
      `${maybeContract("I will")} try harder ${sample([
        ".",
        " in the future."
      ])}`,
    chance: 1.0
  },
  {
    template: () => `I ${maybe("just")} ${maybeContract("was not")} thinking.`,
    chance: 1.0
  }
];

export default {
  NAME: "Consumption",
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
