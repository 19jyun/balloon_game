import generateGrid from "../utils/generateGrid";
import generateAnswer from "../utils/generateAnswer";
import { Grid, Answer } from "../models/types";

export default function handleGridSizeChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setGridSize: (size: number) => void,
  setGrid: (grid: Grid) => void,
  setAnswer: (answer: Answer) => void
) {
  const newSize = parseInt(event.target.value, 10);
  setGridSize(newSize);

  const newGrid = generateGrid(newSize);
  setGrid(newGrid);

  const answers = generateAnswer(newGrid);
  setAnswer(answers);
}
