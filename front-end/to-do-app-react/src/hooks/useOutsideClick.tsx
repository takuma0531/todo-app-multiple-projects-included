import { useRef, useEffect } from "react";

export const useOutsideClick = (callback: any) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event: any) => {
      callback();
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ref;
};
