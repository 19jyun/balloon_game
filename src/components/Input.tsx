import React from "react";

interface InputProps {
  gridSize: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ gridSize, onChange }) => {
  return (
    <div>
      <label>Grid Size: </label>
      <input
        type="number"
        value={gridSize}
        onChange={onChange}
        className="input"
        min={1}
      />
    </div>
  );
};

export default Input;
