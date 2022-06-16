import React, { FC, useState } from "react";
import styled from "styled-components";
import Square from "./components/Square";
import { IsNext, SquareState } from "./types";

const App: FC = (): JSX.Element => {
  const [state, setState] = useState<SquareState>({
    squares: Array(9).fill(null),
    isNext: true,
  });
  console.log(state);

  const handleClick = (i: number) => {
    const square = state.squares.slice();
    square[i] = state.isNext ? IsNext.x : IsNext.o;
    setState({
      squares: square,
      isNext: !state.isNext,
    });
  };

  const renderSquare = (i: number) => {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <Container>
      <h1>Tic Tac Toe</h1>
      <h2>순서 : {state.isNext ? IsNext.x : IsNext.o}</h2>
      <section>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </section>
      <section>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </section>
      <section>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </section>
    </Container>
  );
};

export default App;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  h1 {
    padding: 8px 15px;
    border-radius: 36px;
    background: black;
    color: white;
    font-size: 28px;
  }

  h2 {
    font-size: 20px;
    padding: 20px 0;
  }

  section {
    display: flex;
    padding: 0;
    text-align: center;
  }
`;
