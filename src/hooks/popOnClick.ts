import dfs from "../utils/dfs";
import checkGameComplete from "../utils/checkGameComplete";

export default function popOnClick(
  rowIndex: number,
  columnIndex: number,
  grid: string[][],
  answer: number[],
  setGrid: (grid: string[][]) => void,
  setAnswer: (answer: number[]) => void,
  onGameOver: () => void,
  onGameComplete: () => void
) {
  const newGrid = popConnectedBalloons(
    rowIndex,
    columnIndex,
    grid,
    answer,
    onGameOver,
    onGameComplete
  );
  setGrid(newGrid);
}

function popConnectedBalloons(
  rowIndex: number,
  columnIndex: number,
  grid: string[][],
  answer: number[],
  onGameOver: () => void,
  onGameComplete: () => void
) {
  const tempGrid = grid.map((row) => [...row]);
  const visited = new Set<string>();

  let tempPopped = 0;

  if (tempGrid[rowIndex][columnIndex] === "B") {
    tempPopped = dfs(tempGrid, rowIndex, columnIndex, visited);
    if (!checkLegitAnswer(answer, tempPopped)) {
      onGameOver();
    }
    if (checkGameComplete(tempGrid)) {
      onGameComplete();
    }
  }

  return tempGrid;
}

function checkLegitAnswer(answer: number[], poppedBalloons: number) {
  const elem = answer.shift();
  return elem === poppedBalloons;
}
