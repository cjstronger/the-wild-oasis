import { useEffect, useRef } from "react";

export default function useModalClose(handler) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("yes");
          handler();
        }
      }
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler]
  );
  return ref;
}