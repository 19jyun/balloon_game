import React from 'react';

interface OverlayProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Overlay;
