import dfs from "../utils/dfs";
import checkGameComplete from "../utils/checkGameComplete";
import { Grid, Answer } from "../models/types";

export default function popOnClick(
  rowIndex: number,
  columnIndex: number,
  grid: Grid,
  answer: Answer,
  setGrid: (grid: Grid) => void,
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
  setGrid(newGrid); // re-render to popped grid
}

function popConnectedBalloons(
  rowIndex: number,
  columnIndex: number,
  grid: Grid,
  answer: Answer,
  onGameOver: () => void,
  onGameComplete: () => void
) {
  const tempGrid = grid.map((row) => [...row]);
  const visited = new Set<string>();

  let tempPopped = 0;

  if (tempGrid[rowIndex][columnIndex] === "B") {
    tempPopped = dfs(tempGrid, rowIndex, columnIndex, visited);
    if (!checkLegitAnswer(answer, tempPopped)) {
      onGameOver(); // check if popped balloons are in correct order of answer
    }
    if (checkGameComplete(tempGrid)) {
      onGameComplete(); // check if all balloons are popped
    }
  }

  return tempGrid;
}

function checkLegitAnswer(answer: number[], poppedBalloons: number) {
  const elem = answer.shift(); // pop the first element of the array
  return elem === poppedBalloons;
}
