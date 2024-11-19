import React from 'react';
import BalloonCell from './BalloonCell';

interface GridProps {
  grid: string[][];
  onCellClick: (rowIndex: number, columnIndex: number) => void;
}

const Grid: React.FC<GridProps> = ({ grid, onCellClick }) => {
  return (
    <table style={{ borderCollapse: 'collapse', margin: 'auto' }}>
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <BalloonCell
                key={columnIndex}
                value={cell}
                onClick={() => onCellClick(rowIndex, columnIndex)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
