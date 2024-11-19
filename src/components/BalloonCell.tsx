import React from 'react';
import balloonImage from "../assets/images/balloon.jpg";
import popImage from "../assets/images/pop.png";

interface BalloonCellProps {
  value: string;
  onClick: () => void;
}

const BalloonCell: React.FC<BalloonCellProps> = ({ value, onClick }) => {
  return (
    <td className="cell" onClick={onClick}>
      {value === "B" && (
        <img src={balloonImage} alt="Balloon" className="balloon" />
      )}
      {value === "P" && (
        <img src={popImage} alt="Popped Balloon" className="popped" />
      )}
      {value === "" && (
        <span></span>
      )}
    </td>
  );
};

export default BalloonCell;
