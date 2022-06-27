import React from "react";
import styled, { css } from "styled-components";

type LabelRadius = "square" | "round";
type LabelColor = "blue" | "black" | "gray";
type LabelFontColor = "white" | "black";

interface LabelType {
  children: string;
  radius: LabelRadius;
  background: LabelColor;
  fontColor: LabelFontColor;
}

const Label = ({
  children,
  fontColor,
  background = "blue",
  radius = "square",
}: LabelType) => {
  return (
    <StyleLabel radius={radius} fontColor={fontColor} background={background}>
      {children}
    </StyleLabel>
  );
};

export default Label;

const getLabelRadius = (radius: LabelRadius) => {
  let labelRadius;

  switch (radius) {
    case "round":
      labelRadius = "20px";
      break;

    case "square":
      labelRadius = "0px";
      break;

    default:
      return null;
  }

  return css`
    border-radius: ${labelRadius};
  `;
};

const getLabelBackgroundColor = (background: LabelColor) => {
  let backgroundColor;

  switch (background) {
    case "black":
      backgroundColor = "#111111";
      break;

    case "blue":
      backgroundColor = "blue";
      break;

    case "gray":
      backgroundColor = "#eeeeee";
      break;

    default:
      return null;
  }
  return css`
    background: ${backgroundColor};
  `;
};

const getLabelFontColor = (fontColor: LabelFontColor) => {
  let labelFontColor;

  switch (fontColor) {
    case "black":
      labelFontColor = "black";
      break;

    case "white":
      labelFontColor = "white";
      break;

    default:
      return null;
  }
  return css`
    color: ${labelFontColor};
  `;
};

const StyleLabel = styled.div<LabelType>`
  padding: 8px 16px;
  ${({ fontColor }) => getLabelFontColor(fontColor)};
  ${({ background }) => getLabelBackgroundColor(background)}
  ${({ radius }) => getLabelRadius(radius)}
`;
