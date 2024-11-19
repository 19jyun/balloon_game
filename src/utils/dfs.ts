export default function dfs(
  grid: string[][],
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
    return tempPopped;
  }

  grid[row][column] = ""; // Mark balloon as popped
  visited.add(key);
  tempPopped++;

  tempPopped += dfs(grid, row - 1, column, visited); // Up
  tempPopped += dfs(grid, row + 1, column, visited); // Down
  tempPopped += dfs(grid, row, column - 1, visited); // Left
  tempPopped += dfs(grid, row, column + 1, visited); // Right

  return tempPopped;
}
