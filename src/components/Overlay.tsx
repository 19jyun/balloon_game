import React from 'react';

interface OverlayProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Overlay;
