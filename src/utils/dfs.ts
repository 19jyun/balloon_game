import { Grid } from "../models/types";

export default function dfs(
  grid: Grid,
  row: number,
  column: number,
  visited: Set<string>
): number {
  const numRows = grid.length;
  const numCols = grid[0].length;
  let tempPopped = 0;

  const key = `${row},${column}`;
  if (
    row < 0 ||
    row >= numRows ||
    column < 0 ||
    column >= numCols ||
    grid[row][column] !== "B" ||
    visited.has(key)
  ) {
    return tempPopped; // Return if out of bounds
  }

  grid[row][column] = "P"; // Mark as popped
  visited.add(key);
  tempPopped++;

  tempPopped += dfs(grid, row - 1, column, visited);
  tempPopped += dfs(grid, row + 1, column, visited);
  tempPopped += dfs(grid, row, column - 1, visited);
  tempPopped += dfs(grid, row, column + 1, visited);

  return tempPopped;
}
