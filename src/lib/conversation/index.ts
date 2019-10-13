import { humanize, generateStrokeTiming } from "humanization";

import { sample } from "../sample";
import { MEMORY } from "./models/apologizer";

export const speak = () => {
  // TODO: Evaluate per-phrase probabilities
  const input = sample(MEMORY).template();
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
