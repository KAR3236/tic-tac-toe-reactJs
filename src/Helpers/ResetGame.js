import PropTypes from "prop-types";

export default function ResetGame({ setSquares, setXIsNext, winner }) {
  function resetGame() {
    setSquares(Array(9).fill(null));
    winner === "X" || winner === null ? setXIsNext(true) : setXIsNext(false);
  }

  return <button onClick={resetGame}>Reset Game</button>;
}

ResetGame.propTypes = {
  setSquares: PropTypes.any.isRequired,
  setXIsNext: PropTypes.any.isRequired,
  winner: PropTypes.any,
};
