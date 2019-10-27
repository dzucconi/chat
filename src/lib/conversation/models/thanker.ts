import { Memory } from "../types";
import { MISTAKES } from "../../../config";

export const MEMORY: Memory = [
  { template: () => "Thanks", chance: 1.0 },
  { template: () => "Thank you", chance: 1.0 },
  { template: () => "No, thank you", chance: 1.0 },
  { template: () => "Thank you so much", chance: 1.0 },
  { template: () => "Seriously, thank you so much", chance: 1.0 },
  { template: () => "OK, but thanks", chance: 1.0 },
  { template: () => "No no, thank you", chance: 1.0 },
  { template: () => "Thanks again", chance: 1.0 },
  { template: () => "I am eternally in your debt", chance: 1.0 },
  { template: () => "I am so very grateful", chance: 1.0 }
];

export default {
  NAME: "Debt",
  MISTAKES,
  ME: MEMORY,
  THEM: MEMORY
};
