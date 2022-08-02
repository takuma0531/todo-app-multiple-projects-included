import React from "react";
import styled from "styled-components";

interface StyledProps {
  background?: string;
  color?: string;
}

interface Props extends StyledProps {
  text: string;
  startFunc: any;
}

export const AddButtonView = ({
  text,
  startFunc,
  background = "none",
  color = "#ffffffd6",
}: Props) => {
  return (
    <AddButtonViewElement
      onClick={() => startFunc()}
      background={background}
      color={color}
    >
      {text}
    </AddButtonViewElement>
  );
};

const AddButtonViewElement = styled.button<StyledProps>`
  border: none;
  outline: none;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  font-size: 17px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
