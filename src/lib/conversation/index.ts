import { humanize, generateStrokeTiming } from "humanization";

import { choose } from "./choose";
import * as models from "./models";
import { Author } from "../../types";
import { pauseMin, pauseMax } from "../../config";

export type Model = keyof typeof models;

interface Props {
  model: Model;
  author: Author;
}

export const speak = async ({ model, author }: Props) => {
  const input = await choose(models[model][author]).template();
  const humanized = humanize(input, { mistakes: models[model].MISTAKES });
  const output = humanized.toString();
  const characters = output.split("");

  const timing = characters
    .map((_char, index) => {
      return generateStrokeTiming({
        pauseMin,
        pauseMax,
        prevCharacter: characters[index - 1]
      });
    })
    .reduce((total, ms) => total + ms, 0);

  return { input, output, humanized, timing };
};

export { models };
