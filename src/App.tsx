import React, { FC, useState } from "react";

import styled from "styled-components";
import Square from "./components/Square";

const App: FC = (): JSX.Element => {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });
  console.log(state);

  const handleClick = (i: number) => {
    const square = state.squares.slice();
    square[i] = state.xIsNext ? "x" : "o";
    setState({
      squares: square,
      xIsNext: !state.xIsNext,
    });
  };

  const renderSquare = (i: number) => {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <Main>
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </Main>
  );
};

export default App;

const Main = styled.main``;
