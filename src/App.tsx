import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Label from "./components/Label";
import Square from "./components/Square";
import { IsNext, SquareState, Winner } from "./types";

const App: FC = (): JSX.Element => {
  const [winner, setWinner] = useState<Winner>(null);
  const [history, setHistory] = useState<any>([]);
  const [state, setState] = useState<SquareState>({
    squares: Array(9).fill(null),
    isNext: true,
  });

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
    setHistory([...history, { state }]);
  };

  const handleResetClick = (): void => {
    setState({
      squares: Array(9).fill(null),
      isNext: true,
    });
    setHistory([]);
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

  const handleHistoryClick = (state: any) => {
    console.log(state);
    setState({
      squares: state.squares,
      isNext: state.isNext,
    });
  };

  useEffect(() => {
    setWinner(calculate(state.squares));
  }, [state.squares]);

  return (
    <Container>
      <Label radius="round" background="black" fontColor="white">
        Tic Tac Toe
      </Label>

      {winner ? (
        <Section>
          <h2>winner : {winner}</h2>
          <Button onClick={handleResetClick}>Reset</Button>
        </Section>
      ) : (
        <Section>
          <h2>순서 : {state.isNext ? IsNext.x : IsNext.o}</h2>
          <Button onClick={handleResetClick}>Reset</Button>
        </Section>
      )}

      <Game>
        <Board>
          <article>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </article>
          <article>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </article>
          <article>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </article>
        </Board>

        <Ul>
          {history.map(({ state }: any, idx: any) => {
            return (
              <li key={idx}>
                <button onClick={() => handleHistoryClick(state)}>
                  {idx + 1} 번째
                </button>
              </li>
            );
          })}
        </Ul>
      </Game>
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
`;

const Game = styled.section`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const Board = styled.section`
  article {
    display: flex;
    padding: 0;
    text-align: center;
  }
`;

const Section = styled.section`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  height: 35px;
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
  background: black;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const Ul = styled.ul`
  button {
    padding: 5px 10px;
    margin: 2px 0;
    border-radius: 4px;
    border: none;
    background: #eeeeee;
    cursor: pointer;
  }
`;
