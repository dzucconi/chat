export type Phrase = {
  template(): string | Promise<string>;
  chance: number;
};

export type Memory = Phrase[];
