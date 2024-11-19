export default function generateGrid(gridSize: number): string[][] {
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(Math.random() > 0.5 ? "B" : ""); // 🎈 또는 빈 칸 생성
    }
    grid.push(row);
  }
  console.log(grid); // 디버깅용
  return grid;
}
