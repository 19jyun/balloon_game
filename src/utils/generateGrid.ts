export default function generateGrid(gridSize: number): string[][] {
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(Math.random() > 0.5 ? "B" : "");
    }
    grid.push(row);
  }
  return grid;
}
