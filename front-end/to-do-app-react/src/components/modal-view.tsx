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
      <div className={"inner-modal"}>
        <button className={"close-button"} onClick={() => setIsVisible()}>
          ×
        </button>
        {children}
      </div>
    </ModalViewElement>
  ) : (
    <div></div>
  );
}

const ModalViewElement = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background: #0000004d;
  z-index: 1;

  div.inner-modal {
    position: fixed;
    width: 50%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 7px;

    button.close-button {
      outline: none;
      border: none;
      background: none;
      margin-right: 10px;
      margin-left: auto;
      width: 20px;
      height: 20px;
      font-weight: bold;
      color: #ff5a5f;
      font-size: 25px;

      :hover {
        cursor: pointer;
        opacity: 80%;
      }
    }
  }
`;
