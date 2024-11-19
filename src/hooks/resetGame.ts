import { useCallback } from "react";
import generateGrid from "../utils/generateGrid";
import generateAnswer from "../utils/generateAnswer";
import { Grid, Answer } from "../models/types";

export default function resetGame(
  gridSize: number,
  setGrid: (grid: Grid) => void,
  setAnswer: (answer: Answer) => void
) {
  const newGame = useCallback(() => {
    const newGrid = generateGrid(gridSize);
    setGrid(newGrid);
    const newAnswer = generateAnswer(newGrid);
    setAnswer(newAnswer);
  }, [gridSize, setGrid, setAnswer]);

  return newGame;
}
