import { useEffect, useState } from "react";
const useGetInnerHeight = () => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight);
    });
  }, [window]);

  return innerHeight;
};

export default useGetInnerHeight;
