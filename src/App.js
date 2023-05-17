import { useEffect, useState } from "react";
import "./styles.css";

const chooseRandomPlayer = () => Math.floor(Math.random() * 2);

const playerIndex = ["X", "O"];

const DIMENSION = 3;

const INITIAL_BOARD = [null, null, null, null, null, null, null, null, null];

function App() {
  const [gameBegun, setGameBegun] = useState(false);
  const [player, setPlayer] = useState(chooseRandomPlayer());
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(INITIAL_BOARD);

  useEffect(() => {
    checkWinner();
  }, [board]);

  const reset = () => {
    setBoard(INITIAL_BOARD);
    setWinner(null);
    setPlayer(chooseRandomPlayer());
  };

  const checkWinner = () => {
    if (board[0] === board[1] && board[1] === board[2]) setWinner(board[0]);
    if (board[3] === board[4] && board[4] === board[5]) setWinner(board[3]);
    if (board[6] === board[7] && board[7] === board[8]) setWinner(board[6]);

    if (board[0] === board[3] && board[3] === board[6]) setWinner(board[0]);
    if (board[1] === board[4] && board[4] === board[7]) setWinner(board[1]);
    if (board[2] === board[5] && board[5] === board[8]) setWinner(board[2]);

    if (board[0] === board[4] && board[4] === board[8]) setWinner(board[0]);
    if (board[2] === board[4] && board[4] === board[6]) setWinner(board[2]);
    return null;
  };

  const handleRowClick = (cellIndex) => {
    if (winner === null) {
      setBoard((currentBoard) => {
        const currentBoardCopy = [...currentBoard];
        currentBoardCopy[cellIndex] = player;
        return currentBoardCopy;
      });
      setPlayer((currentPlayer) => {
        if (currentPlayer === 1) return 0;
        return 1;
      });
    }
  };

  return (
    <div className="App">
      <div className="game">
        {!gameBegun ? (
          <button className="buttonReset" onClick={() => setGameBegun(true)}>
            PLAY
          </button>
        ) : (
          <>
            <div className="info">
              <h1>TRES EN RAYA</h1>
              <h3>Turn of {playerIndex[player]}</h3>
            </div>
            <div className="grid">
              <div className="column">
                <div className="row" onClick={() => handleRowClick(0)}>
                  {playerIndex[board[0]]}
                </div>
                <div className="row" onClick={() => handleRowClick(1)}>
                  {playerIndex[board[1]]}
                </div>
                <div className="row" onClick={() => handleRowClick(2)}>
                  {playerIndex[board[2]]}
                </div>
              </div>
              <div className="column">
                <div className="row" onClick={() => handleRowClick(3)}>
                  {playerIndex[board[3]]}
                </div>
                <div className="row" onClick={() => handleRowClick(4)}>
                  {playerIndex[board[4]]}
                </div>
                <div className="row" onClick={() => handleRowClick(5)}>
                  {playerIndex[board[5]]}
                </div>
              </div>
              <div className="column">
                <div className="row" onClick={() => handleRowClick(6)}>
                  {playerIndex[board[6]]}
                </div>
                <div className="row" onClick={() => handleRowClick(7)}>
                  {playerIndex[board[7]]}
                </div>
                <div className="row" onClick={() => handleRowClick(8)}>
                  {playerIndex[board[8]]}
                </div>
              </div>
            </div>
            {winner !== null && (
              <div className="WinLoseDraw">
                <h1>{playerIndex[winner]}</h1>
                <h2>¡Wins!</h2>
                <button className="buttonReset" onClick={reset}>
                  RESET
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
