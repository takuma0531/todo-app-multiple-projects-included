import React, { useState } from "react";

export const useItemOption = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return {
    isVisible,
    setIsVisible,
  };
};
