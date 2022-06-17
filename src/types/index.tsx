export enum IsNext {
  x = "X",
  o = "O",
}

export interface SquareState {
  squares: Array<string>;
  isNext: boolean;
}
