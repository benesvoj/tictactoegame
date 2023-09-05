import { Board } from './components/Board';
import { Moves } from './components/Moves';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import useTicTacToe from './hooks/useTicTacToe';
import { FaHome } from 'react-icons/fa';
import { site } from './urls';

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
      textColor={'black'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <GameDiv>
        <GameHeader>
          <h1>Let's play Tic Tac Toe</h1>
        </GameHeader>
        <GameBody>
          <GameBoardDiv>
            <Board
              squares={game.currentSquares}
              winner={game.winner}
              xIsNext={game.xIsNext}
              handleClick={game.handleClick}
            />
          </GameBoardDiv>
          <GameInfoDiv>
            <ol>
              <Moves history={game.history} jumpTo={game.jumpTo} />
            </ol>
          </GameInfoDiv>
        </GameBody>
        <GameFooter>
          <ResetButton onClick={game.gameReset}>Reset Game</ResetButton>
        </GameFooter>
      </GameDiv>
      <DivFloatingContainer>
        <Link href={site.homeUrl}>
          <DivFloatingButton>
            <FaHome />
          </DivFloatingButton>
        </Link>
      </DivFloatingContainer>
    </Stack>
  );
};

const glowingButton = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const ResetButton = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingButton} 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

const GameFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  bottom: 0;
`;
const GameHeader = styled.div``;
const GameBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

const float = keyframes`
  0% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0 rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
}
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.black};
`;

const DivFloatingContainer = styled.div`
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 30px;
  right: 30px;
  z-index: 50;
`;

const DivFloatingButton = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.grey};
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transform: translatey(0px);
  animation: ${float} 6s ease-in-out infinite;

  &:hover {
    background: ${(p) => p.theme.colors.pink};
    color: ${(p) => p.theme.colors.white};
  }
`;

const GameDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(p) => p.theme.colors.grey};
  border-radius: 10px;
  padding: 40px;
  height: 400px;
  background: ${(p) => p.theme.colors.white};
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const GameBoardDiv = styled.div``;
const GameInfoDiv = styled.div`
  margin-left: 20px;
`;
