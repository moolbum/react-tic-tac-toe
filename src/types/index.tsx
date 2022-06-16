export enum IsNext {
  x = "X",
  o = "O",
}

export interface SquareState {
  squares: Array<number | string>;
  isNext: boolean;
}
