import dfs from "./dfs";
import { Grid, Answer } from "../models/types";

export default function generateAnswer(grid: Grid): Answer {
  if (!grid || grid.length === 0) {
    return [];
  }

  const numRows = grid.length;
  const numColumns = grid[0].length;

  const tempGrid = grid.map((row) => [...row]);
  const visited = new Set<string>();

  let arrayOfBalloons: number[] = [];

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      if (tempGrid[i][j] === "B" && !visited.has(`${i},${j}`)) {
        const numberOfBalloons = dfs(tempGrid, i, j, visited);
        arrayOfBalloons.push(numberOfBalloons);
        // Push the num of balloons popped at once to the array
      }
    }
  }

  arrayOfBalloons.sort((a, b) => b - a);
  // Sorted array == Required order of pop

  return arrayOfBalloons;
}
