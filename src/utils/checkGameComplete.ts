export default function checkGameComplete(grid: string[][]): boolean {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "B") return false;
    }
  }
  return true;
}
