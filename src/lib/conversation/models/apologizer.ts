import { sample } from "../../sample";
import { maybe } from "../../maybe";
import { Memory } from "../types";
import { MISTAKES } from "../../../config";

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
    template: () => `I wanted to tell you I’m ${maybe("so")} sorry.`,
    chance: 1.0
  },
  { template: () => `I was wrong${maybe(" about that")}.`, chance: 1.0 },
  {
    template: () => `I’d like to apologize${maybe(" for everything")}.`,
    chance: 1.0
  },
  {
    template: () => "I’d like to apologize for how I reacted yesterday.",
    chance: 1.0
  },
  {
    template: () =>
      `I’m ${sample([
        "so",
        "very",
        "terribly",
        "extremely",
        "immensely",
        "acutely",
        "truly"
      ])} sorry.`,
    chance: 1.0
  },
  { template: () => "My apologies.", chance: 1.0 },
  { template: () => "My fault", chance: 1.0 },
  { template: () => "My mistake.", chance: 1.0 },
  {
    template: () =>
      `Oh my ${sample(["goodness", "god", "christ"])}! I’m ${maybe(
        "so"
      )} sorry.`,
    chance: 1.0
  },
  { template: () => "Oh, my bad.", chance: 1.0 },
  { template: () => `Pardon ${maybe("me")}`, chance: 1.0 },
  {
    template: () => `Please accept our ${maybe("sincerest")} apologies.`,
    chance: 1.0
  },
  { template: () => "Please don’t be mad at me.", chance: 1.0 },
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
  { template: () => `That’s my fault.`, chance: 1.0 },
  {
    template: () =>
      `${sample(["woops", "shit", "fuck"])}! ${maybe("so")} sorry!`,
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
  { template: () => `I know I’ve ${maybe("truly")} hurt you.`, chance: 1.0 },
  {
    template: () =>
      `I know you ${sample(["aren’t", "might not be"])} ready to forgive me.`,
    chance: 1.0
  },
  { template: () => `${maybe(sample(["I am", "I’m"]))} Sorry.`, chance: 1.0 },
  { template: () => `I ${maybe("just")} don’t know.`, chance: 1.0 },
  {
    template: () =>
      `I didn’t mean to ${sample(["cause you", "have caused"])} pain.`,
    chance: 1.0
  },
  { template: () => "It won’t happen again.", chance: 1.0 },
  { template: () => "I just forgot.", chance: 1.0 },
  {
    template: () => `I’ll try harder ${sample([".", " in the future."])}`,
    chance: 1.0
  },
  { template: () => `I ${maybe("just")} wasn’t thinking.`, chance: 1.0 }
];

export default {
  NAME: "Consumption",
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
