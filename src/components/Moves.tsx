import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import styled from 'styled-components';

export const Moves: ({
  history,
  jumpTo
}: {
  history: string[][];
  jumpTo: (move: number) => void;
}) => JSX.Element[] = ({ history, jumpTo }) => {
  return history.map((squares, move) => {
    let description;

    move > 0
      ? (description = 'Got to move #' + move)
      : (description = 'Got to game start');

    return (
      <li key={move}>
        <Box>
          {description}
          <StyledIcon onClick={() => jumpTo(move)} />
        </Box>
      </li>
    );
  });
};

const StyledIcon = styled(HiOutlineArrowCircleLeft)`
  cursor: pointer;
  width: 20px;
  height: auto;
  &:hover {
    color: ${(p) => p.theme.colors.pink};
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
`;
