import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  startFunc: any;
}

export const AddButtonView = ({ text, startFunc }: Props) => {
  return (
    <AddButtonViewElement onClick={() => startFunc()}>
      {text}
    </AddButtonViewElement>
  );
};

const AddButtonViewElement = styled.button`
  border: none;
  outline: none;
  background: none;
  color: #ffffffd6;
  font-size: 17px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
