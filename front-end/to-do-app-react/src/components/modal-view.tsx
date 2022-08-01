import React from "react";
import styled from "styled-components";

interface Props {
  isVisible: boolean;
  setIsVisible: any;
  children: any;
}

export function ModalView({ isVisible, setIsVisible, children }: Props) {
  return isVisible ? (
    <ModalViewElement>
      <button onClick={() => setIsVisible()}>Close</button>
      {children}
    </ModalViewElement>
  ) : (
    <div></div>
  );
}

const ModalViewElement = styled.div``;
