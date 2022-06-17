import React from "react";
import styled from "styled-components";

const Square = ({
  value,
  onClick,
}: {
  value: string;
  onClick: (i: React.MouseEvent<HTMLButtonElement>) => void;
}): JSX.Element => {
  return <Button onClick={onClick}>{value}</Button>;
};

export default Square;

const Button = styled.button`
  width: 100px;
  height: 100px;
  margin: -1px -1px 0 0;
  background: #fff;
  border: 1px solid #999;
  font-size: 40px;
  font-weight: bold;
  line-height: 34px;

  &:focus {
    outline: none;
  }
`;
