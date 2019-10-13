import { sample } from "../../sample";
import { maybe } from "../../maybe";

export const MEMORY = [
  { template: () => "Excuse me", chance: 1.0 },
  { template: () => "Ever so sorry.", chance: 1.0 },
  {
    template: () =>
      `How ${sample(["stupid", "careless", "thoughtless"])} of me.`,
    chance: 1.0
  },
  { template: () => "I apologize.", chance: 1.0 },
  { template: () => "I had that wrong.", chance: 1.0 },
  { template: () => "I hope you can forgive me.", chance: 1.0 },
  { template: () => "I owe you an apology.", chance: 1.0 },
  { template: () => "I sincerely apologize.", chance: 1.0 },
  { template: () => "I take full responsibility.", chance: 1.0 },
  { template: () => "I want to apologize.", chance: 1.0 },
  { template: () => "I wanted to tell you I’m sorry.", chance: 1.0 },
  { template: () => "I was wrong on that.", chance: 1.0 },
  { template: () => "I’d like to apologize.", chance: 1.0 },
  {
    template: () => "I’d like to apologize for how I reacted yesterday.",
    chance: 1.0
  },
  {
    template: () => `I’m ${sample(["so", "very", "terribly"])} sorry.`,
    chance: 1.0
  },
  { template: () => "My apologies.", chance: 1.0 },
  { template: () => "My fault, bro", chance: 1.0 },
  { template: () => "My mistake.", chance: 1.0 },
  {
    template: () =>
      `Oh my ${sample(["goodness", "god", "christ"])}! I’m so sorry.`,
    chance: 1.0
  },
  { template: () => "Oh, my bad.", chance: 1.0 },
  { template: () => `Pardon ${maybe("me")}`, chance: 1.0 },
  {
    template: () => `Please accept our ${maybe("sincerest")} apologies.`,
    chance: 1.0
  },
  { template: () => "Please don’t be mad at me.", chance: 1.0 },
  { template: () => "Please excuse my ignorance", chance: 1.0 },
  { template: () => "Sorry about that.", chance: 1.0 },
  { template: () => "Sorry, my apologies. I had that wrong.", chance: 1.0 },
  { template: () => "Sorry. It was all my fault.", chance: 1.0 },
  { template: () => "That was wrong of me.", chance: 1.0 },
  { template: () => "That’s my fault.", chance: 1.0 },
  {
    template: () =>
      `${sample(["woops", "shit", "fuck"])}! ${maybe("so")} Sorry!`,
    chance: 1.0
  },
  { template: () => "I beg your pardon", chance: 1.0 },
  { template: () => "My bad", chance: 1.0 },
  { template: () => "Excuse me for interrupting.", chance: 1.0 },
  { template: () => "I was wrong. Can you forgive me?", chance: 1.0 },
  { template: () => "Pardon me for being so rude.", chance: 1.0 }
];
