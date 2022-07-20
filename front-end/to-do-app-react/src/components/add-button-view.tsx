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

const AddButtonViewElement = styled.button``;
