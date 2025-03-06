import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = (newBoard) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div className="grid grid-cols-3 gap-2 w-40">
        {board.map((value, index) => (
          <button key={index} onClick={() => handleClick(index)} className="w-12 h-12 border text-2xl">
            {value}
          </button>
        ))}
      </div>
      {checkWinner(board) && <h3>Winner: {checkWinner(board)}</h3>}
    </div>
  );
}
