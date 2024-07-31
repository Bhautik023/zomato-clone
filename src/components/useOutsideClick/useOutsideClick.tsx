import { eventNames } from "process";
import React, { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutsideHandler = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mouseup", clickOutsideHandler);
    document.addEventListener("touchend", clickOutsideHandler);

    return () => {
      document.removeEventListener("mouseup", clickOutsideHandler);
      document.removeEventListener("touchend", clickOutsideHandler);
    };
  }, [callback]);

  return ref;
};
