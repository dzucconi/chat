export const maybe = (value: string, probability: number = 0.5) =>
  Math.random() > probability ? value : "";
