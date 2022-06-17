import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Square from "./components/Square";
import { IsNext, SquareState, Winner } from "./types";

const App: FC = (): JSX.Element => {
  const [winner, setWinner] = useState<Winner>(null);
  const [history, setHistory] = useState<any>();
  const [state, setState] = useState<SquareState>({
    squares: Array(9).fill(null),
    isNext: true,
  });

  const getHistoryState = (square: any) => {
    const array = square;
    const historyState = [array, ...array];
    setHistory(historyState);
    console.log(history);
  };

  const handleClick = (i: number) => {
    const square = state.squares.slice();
    if (calculate(square) || square[i]) {
      return;
    }
    square[i] = state.isNext ? IsNext.x : IsNext.o;
    setState({
      squares: square,
      isNext: !state.isNext,
    });
    getHistoryState(square);
  };

  const handleResetClick = (): void => {
    setState({
      squares: Array(9).fill(null),
      isNext: true,
    });
  };

  const renderSquare = (i: number) => {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
  };

  const calculate = (squares: Array<string>) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  useEffect(() => {
    setWinner(calculate(state.squares));
  }, [state.squares]);

  return (
    <Container>
      <h1>Tic Tac Toe</h1>

      {winner ? (
        <Section>
          <h2>winner : {winner}</h2>
          <button onClick={handleResetClick}>Reset</button>
        </Section>
      ) : (
        <h2>순서 : {state.isNext ? IsNext.x : IsNext.o}</h2>
      )}

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

const Section = styled.section`
  width: 220px;
  justify-content: space-between;
  align-items: center;

  button {
    height: 35px;
    padding: 5px 20px;
    border-radius: 20px;
    border: none;
    background: black;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
`;
