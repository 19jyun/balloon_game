import { Grid } from "../models/types";

export default function checkGameComplete(grid: Grid): boolean {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "B") return false;
    }
  }
  return true; // Game completed if no balloons are left
}
