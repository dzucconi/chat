import parameters from "queryparams";
import { mistakes } from "humanization";

import { Model } from "./lib/conversation";

const DEFAULT_VIEWPORT_WIDTH = 320;

export const {
  autoPlay,
  amount,
  model,
  index,
  pauseMin,
  pauseMax,
  cognitionPause,
  readingSpeed,
  entropy
}: {
  autoPlay: boolean;
  amount: number;
  model: Model;
  index: boolean;
  pauseMin: number;
  pauseMax: number;
  cognitionPause: number;
  readingSpeed: number;
  entropy: number;
} = parameters({
  autoPlay: true,
  amount:
    Math.floor(document.documentElement.clientWidth / DEFAULT_VIEWPORT_WIDTH) ||
    1,
  model: "apologizer",
  index: false,
  pauseMin: 15,
  pauseMax: 250,
  cognitionPause: 250,
  readingSpeed: 200.0,
  entropy: 1
});

export const MISTAKES = [
  { apply: mistakes.miss, probability: 0.033 * entropy },
  { apply: mistakes.omit, probability: 0.033 * entropy },
  { apply: mistakes.duplicate, probability: 0.001 * entropy },
  { apply: mistakes.toggleCase, probability: 0.033 * entropy },
  { apply: mistakes.capitalize, probability: 0.033 * entropy },
  { apply: mistakes.repeat, probability: 1 * entropy },
  { apply: mistakes.substitute, probability: 0.5 * entropy }
];
