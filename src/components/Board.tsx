import { Square } from './Square';
import styled from 'styled-components';

interface BoardProps {
  squares: string[];
  handleClick(index: number): void;
  winner: string | null;
  xIsNext: boolean;
}

export const Board = (props: BoardProps) => {
  const { squares, handleClick, winner, xIsNext } = props;

  let status;
  winner
    ? (status = <WinnerDiv>{'Winner: ' + winner}</WinnerDiv>)
    : (status = 'Next player: ' + (xIsNext ? 'X' : 'O'));

  return (
    <>
      <StatusDiv>{status}</StatusDiv>
      <BoardDiv>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            index={index}
            onSquareClick={handleClick}
          />
        ))}
      </BoardDiv>
    </>
  );
};

const WinnerDiv = styled.div`
  color: #ff0000;
`;

const StatusDiv = styled.div`
  margin-bottom: 10px;
`;
const BoardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
`;
