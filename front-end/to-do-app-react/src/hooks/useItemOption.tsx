import React, { useState } from "react";

export const useItemOption = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return {
    isVisible,
    setIsVisible,
    isEditing,
    setIsEditing,
  };
};
