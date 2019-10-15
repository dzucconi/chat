import { humanize, generateStrokeTiming, mistakes } from "humanization";

import { choose } from "./choose";
import * as models from "./models";

export type Model = keyof typeof models;

export const MISTAKES = [
  { apply: mistakes.miss, probability: 0.033 },
  { apply: mistakes.omit, probability: 0.033 },
  { apply: mistakes.duplicate, probability: 0.001 },
  { apply: mistakes.toggleCase, probability: 0.033 },
  { apply: mistakes.capitalize, probability: 0.033 },
  { apply: mistakes.repeat, probability: 1 },
  { apply: mistakes.substitute, probability: 0.5 }
];

export const speak = ({ model }: { model: Model }) => {
  const input = choose(models[model]).template();
  const humanized = humanize(input, { mistakes: MISTAKES });
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

export { models };
