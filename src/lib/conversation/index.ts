import { humanize, generateStrokeTiming } from "humanization";

import { sample } from "../sample";

// TODO: Each phrase should be an object with probabilities
// TODO: Each phrase should have a prefix/postfix or some other templated form
export const bank = [
  "Excuse me",
  "Ever so sorry.",
  "How stupid / careless / thoughtless of me.",
  "I apologize.",
  "I had that wrong.",
  "I hope you can forgive me.",
  "I owe you an apology.",
  "I sincerely apologize.",
  "I take full responsibility.",
  "I want to apologize.",
  "I wanted to tell you I’m sorry.",
  "I was wrong on that.",
  "I’d like to apologize.",
  "I’d like to apologize for how I reacted yesterday.",
  "I’m (so/very/terribly) sorry.",
  "My apologies.",
  "My fault, bro",
  "My mistake.",
  "Oh my goodness! I’m so sorry.",
  "Oh, my bad.",
  "Pardon (me)",
  "Please accept our (sincerest) apologies.",
  "Please don’t be mad at me.",
  "Please excuse my (ignorance)",
  "Sorry about that.",
  "Sorry, my apologies. I had that wrong.",
  "Sorry. It was all my fault.",
  "That was wrong of me.",
  "That’s my fault.",
  "Whoops! Sorry!",
  "I beg your pardon",
  "My bad",
  "Excuse me for interrupting.",
  "I was wrong. Can you forgive me?",
  "Pardon me for being so rude."
];

export const speak = () => {
  const input = sample(bank);
  const humanized = humanize(input);
  const output = humanized.toString();
  const characters = output.split("");

  const timing = characters
    .map((_char, index) => {
      return generateStrokeTiming({
        prevCharacter: characters[index - 1]
      });
    })
    .reduce((total, ms) => total + ms, 0);

  return { input, output, humanized, timing };
};
