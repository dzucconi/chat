export type Phrase = {
  template(): string;
  chance: number;
};

export type Memory = Phrase[];
