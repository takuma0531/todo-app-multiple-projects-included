import React, { useState } from "react";

export interface ModalContextInterface {
  isVisible: boolean;
  setIsVisible: any;
}

interface Props {
  children: any;
}

export const ModalContext = React.createContext<ModalContextInterface | null>(
  null
);

export const ModalProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () =>
  React.useContext(ModalContext) as ModalContextInterface;
