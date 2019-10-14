import { Phrase } from "./types";
import { sample } from "../sample";

export const apply = (memory: Phrase[], chance: number): Phrase => {
  return sample(memory.filter(phrase => phrase.chance > chance));
};

export const choose = (memories: Phrase[]) => {
  const coin = Math.random();
  return apply(memories, coin);
};
