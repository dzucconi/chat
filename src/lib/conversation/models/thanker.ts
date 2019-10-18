import { mistakes } from "humanization";

import { Memory } from "../types";

export const MISTAKES = [
  { apply: mistakes.miss, probability: 0.033 },
  { apply: mistakes.omit, probability: 0.033 },
  { apply: mistakes.duplicate, probability: 0.001 },
  { apply: mistakes.toggleCase, probability: 0.033 },
  { apply: mistakes.capitalize, probability: 0.033 },
  { apply: mistakes.repeat, probability: 1 },
  { apply: mistakes.substitute, probability: 0.5 }
];

export const MEMORY: Memory = [
  { template: () => "Thanks", chance: 1.0 },
  { template: () => "Thank you", chance: 1.0 },
  { template: () => "No, thank you", chance: 1.0 },
  { template: () => "Thank you so much", chance: 1.0 },
  { template: () => "Seriously, thank you so much", chance: 1.0 },
  { template: () => "OK, but thanks", chance: 1.0 },
  { template: () => "No no, thank you", chance: 1.0 },
  { template: () => "Thanks again", chance: 1.0 }
];

export default {
  MISTAKES,
  MEMORY
};
