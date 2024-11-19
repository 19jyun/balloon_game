import generateGrid from "./generateGrid";
import generateAnswer from "./generateAnswer";

export default function handleGridSizeChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setGridSize: (size: number) => void,
  setGrid: (grid: string[][]) => void,
  setAnswer: (answer: number[]) => void
) {
  const newSize = parseInt(event.target.value, 10);
  setGridSize(newSize);

  const newGrid = generateGrid(newSize);
  setGrid(newGrid);

  const answers = generateAnswer(newGrid);
  setAnswer(answers);
}
