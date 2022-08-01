import React, { useContext } from "react";
import { ModalView } from "./modal-view";
import { ModalContext, ModalContextInterface } from "../hooks/modal-context";

interface Props {
  children: any;
}

export function ModalContainer({ children }: Props) {
  const { isVisible, setIsVisible } = useContext(
    ModalContext
  ) as ModalContextInterface;

  return (
    <ModalView
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      children={children}
    ></ModalView>
  );
}
