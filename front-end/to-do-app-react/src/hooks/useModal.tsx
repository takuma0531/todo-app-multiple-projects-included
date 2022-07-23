import React, { useState } from "react";

export const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return {
    isVisible,
    setIsVisible,
  };
};
