import { Board } from './components/Board';
// import { Moves } from "./components/Moves";
import { Stack } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import useTicTacToe from './hooks/useTicTacToe';

// improvements
// For the current move only, show “You are at move #…” instead of a button.
//   Rewrite Board to use two loops to make the squares instead of hardcoding them.
//   Add a toggle button that lets you sort the moves in either ascending or descending order.
//   When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
// Display the location for each move in the format (row, col) in the move history list.

export const App = () => {
  const game = useTicTacToe();

  return (
    <Stack
      w={'100%'}
      h={'100vh'}
      bgColor={'white'}
      textColor={'black'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <GameDiv>
        <GameBoardDiv>
          <Board
            squares={game.currentSquares}
            winner={game.winner}
            xIsNext={game.xIsNext}
            handleClick={game.handleClick}
          />
        </GameBoardDiv>
        <GameInfoDiv>
          <ol>{/* <Moves history={game.history} jumpTo={game.jumpTo} /> */}</ol>
        </GameInfoDiv>
      </GameDiv>
    </Stack>
  );
};

const GameDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const GameBoardDiv = styled.div``;
const GameInfoDiv = styled.div`
  margin-left: 20px;
`;
