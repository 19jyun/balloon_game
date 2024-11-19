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

  grid[row][column] = "P";
  visited.add(key);
  tempPopped++;

  tempPopped += dfs(grid, row - 1, column, visited);
  tempPopped += dfs(grid, row + 1, column, visited);
  tempPopped += dfs(grid, row, column - 1, visited);
  tempPopped += dfs(grid, row, column + 1, visited);

  return tempPopped;
}
