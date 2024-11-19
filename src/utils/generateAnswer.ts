import dfs from "./dfs";

export default function generateAnswer(grid: string[][]): number[] {
  if (!grid || grid.length === 0) {
    console.log("Grid is empty. Returning an empty array.");
    return [];
  }

  const numRows = grid.length;
  const numColumns = grid[0].length;

  const tempGrid = grid.map((row) => [...row]); // Create a copy to avoid modifying the original grid
  const visited = new Set<string>();

  let arrayOfBalloons: number[] = [];

  console.log("Starting to generate answer...");
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      if (tempGrid[i][j] === "B" && !visited.has(`${i},${j}`)) {
        console.log(`New group detected starting at (${i}, ${j}).`);
        const numberOfBalloons = dfs(tempGrid, i, j, visited);
        console.log(
          `Group starting at (${i}, ${j}) has size ${numberOfBalloons}.`
        );
        arrayOfBalloons.push(numberOfBalloons);
      }
    }
  }

  arrayOfBalloons.sort((a, b) => b - a);
  console.log("Sorted balloon groups by size:", arrayOfBalloons);

  return arrayOfBalloons;
}