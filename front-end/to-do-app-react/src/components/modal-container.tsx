import React, { useContext } from "react";
import { ModalView } from "./modal-view";
import { useModal } from "../hooks/modal-context";

interface Props {
  children: any;
}

export function ModalContainer({ children }: Props) {
  const { isVisible, setIsVisible } = useModal();

  return (
    <ModalView
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      children={children}
    ></ModalView>
  );
}
