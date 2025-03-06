import { useState } from "react";

export default function SudokuSolver() {
  const [grid, setGrid] = useState([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
  ]);

  const solveSudoku = () => {
    // Simple mock function for solving Sudoku
    setGrid(grid.map(row => row.map(num => (num === 0 ? Math.floor(Math.random() * 9) + 1 : num))));
  };

  return (
    <div>
      <table border="1">
        {grid.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="p-2 w-10 h-10 text-center">{cell}</td>
            ))}
          </tr>
        ))}
      </table>
      <button onClick={solveSudoku}>Solve</button>
    </div>
  );
}
