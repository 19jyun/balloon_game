import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Overlay from './components/Overlay';
import Input from './components/Input';
import generateGrid from './utils/generateGrid';
import generateAnswer from './utils/generateAnswer';
import popOnClick from './hooks/popOnClick';
import handleGridSizeChange from './hooks/handleGridSizeChange';
import manageOverlay from "./hooks/manageOverlay";
import resetGame from "./hooks/resetGame";
import { Grid as GridType, Answer as AnswerType } from "./models/types";

const App: React.FC = () => {
  const [gridSize, setGridSize] = useState(5);
  const [grid, setGrid] = useState<GridType>([]);
  const [answer, setAnswer] = useState<AnswerType>([]);
  const [showFail, setShowFail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const ResetGame = resetGame(gridSize, setGrid, setAnswer);

  const {
    openFailOverlay,
    closeFailOverlay,
    openSuccessOverlay,
    closeSuccessOverlay,
  } = manageOverlay(setShowFail, setShowSuccess, ResetGame);

  useEffect(() => {
    const newGrid = generateGrid(gridSize);
    setGrid(newGrid); 
  }, [gridSize]);

  useEffect(() => {
    if (grid.length > 0) {
      const generatedAnswer = generateAnswer(grid); 
      setAnswer(generatedAnswer);
    }
  }, [grid]);

return (
  <div>
    <div className="center-container">
      <h1>Balloon Game</h1>
      <Input
        gridSize={gridSize}
        onChange={(e) =>
          handleGridSizeChange(e, setGridSize, setGrid, setAnswer)
        }
      />
    </div>

    <Grid
      grid={grid}
      onCellClick={(rowIndex, columnIndex) =>
        popOnClick(
          rowIndex,
          columnIndex,
          grid,
          answer,
          setGrid,
          openFailOverlay,
          openSuccessOverlay
        )
      }
    />

    <Overlay
      isVisible={showFail}
      message="Game Over"
      onClose={closeFailOverlay}
    />

    <Overlay
      isVisible={showSuccess}
      message="Game Complete!"
      onClose={closeSuccessOverlay}
    />
  </div>
);
};

export default App;
