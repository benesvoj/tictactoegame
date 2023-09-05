import { useState } from 'react';

interface ReturnValue {
  handleClick: (index: number) => void;
  winner: string | null;
  turn?: string;
  xIsNext: boolean;
  currentSquares: string[];
  history: string[][];
  jumpTo: (nextMove: number) => void;
  gameReset: () => void;
}
export default (): ReturnValue => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handleClick = (index: number): void => {
    if (currentSquares[index] || calculateWinner(currentSquares)) return;

    const nextSquares = currentSquares.slice();
    xIsNext ? (nextSquares[index] = 'X') : (nextSquares[index] = 'O');

    handlePlay(nextSquares);
  };

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
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

  const winner = calculateWinner(currentSquares);

  const handlePlay = (nextSquares: string[]): void => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const gameReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  return {
    handleClick,
    winner,
    xIsNext,
    currentSquares,
    history,
    jumpTo,
    gameReset
  };
};
