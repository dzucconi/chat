import parameters from "queryparams";
import { mistakes } from "humanization";

import { Model } from "./lib/conversation";

const DEFAULT_VIEWPORT_WIDTH = 320;
const DEFAULT_MESSAGE_HEIGHT = 45;

export const {
  autoPlay,
  amount,
  maxMessagesLength,
  model,
  index,
  pauseMin,
  pauseMax,
  cognitionPause,
  readingSpeed,
  entropy,
  mute,
  forceEnable
}: {
  autoPlay: boolean;
  amount: number;
  maxMessagesLength: number;
  model: Model;
  index: boolean;
  pauseMin: number;
  pauseMax: number;
  cognitionPause: number;
  readingSpeed: number;
  entropy: number;
  mute: false;
  forceEnable: boolean;
} = parameters({
  autoPlay: true,
  amount:
    Math.floor(document.documentElement.clientWidth / DEFAULT_VIEWPORT_WIDTH) ||
    1,
  maxMessagesLength:
    Math.floor(
      document.documentElement.clientHeight / DEFAULT_MESSAGE_HEIGHT
    ) || 20,
  model: "apologizer",
  index: false,
  pauseMin: 15,
  pauseMax: 250,
  cognitionPause: 250,
  readingSpeed: 200.0,
  entropy: 1,
  mute: false,
  forceEnable: false
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
