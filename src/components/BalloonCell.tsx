import React from 'react';

interface BalloonCellProps {
  value: string;
  onClick: () => void;
}

const BalloonCell: React.FC<BalloonCellProps> = ({ value, onClick }) => {
  return (
    <td
      style={{
        width: '40px',
        height: '40px',
        textAlign: 'center',
        verticalAlign: 'middle', // Center content vertically
        fontSize: '24px', // Ensure 🎈 is visible
        border: '1px solid black',
        backgroundColor: value === 'B' ? 'lightblue' : 'white',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {value}
    </td>
  );
};

export default BalloonCell;
