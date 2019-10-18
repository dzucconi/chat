import { humanize, generateStrokeTiming } from "humanization";

import { choose } from "./choose";
import * as models from "./models";

export type Model = keyof typeof models;

export const speak = ({ model }: { model: Model }) => {
  const input = choose(models[model].MEMORY).template();
  const humanized = humanize(input, { mistakes: models[model].MISTAKES });
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
