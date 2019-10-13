export const maybe = (value: string, chance: number = 0.5) =>
  Math.random() > chance ? value : "";
