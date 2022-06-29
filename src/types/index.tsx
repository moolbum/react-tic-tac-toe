export enum IsNext {
  x = "X",
  o = "O",
}

export type Winner = string | void | null;

export interface SquareState {
  squares: Array<string>;
  isNext: boolean;
}

export interface History {
  state: SquareState;
}
