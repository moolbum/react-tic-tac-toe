import React from "react";

const Square = ({
  value,
  onClick,
}: {
  value: string;
  onClick: (i: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
