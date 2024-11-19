import React from 'react';

interface InputProps {
  gridSize: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ gridSize, onChange }) => {
  return (
    <div>
      <input type="number" value={gridSize} onChange={onChange} min="1" />
      <p>Grid Size: {gridSize}</p>
    </div>
  );
};

export default Input;
