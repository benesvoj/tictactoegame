export const Moves: ({
  history,
  jumpTo,
}: {
  history: string[][];
  jumpTo: (move: number) => void;
}) => JSX.Element[] = ({ history, jumpTo }) => {
  return history.map((squares, move) => {
    let description;

    move > 0
      ? (description = "Got to move#" + move)
      : (description = "Got to game start");

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
};
