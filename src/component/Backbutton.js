import { useEffect, useState } from "react";

const useBackButton = (callback) => {
  const [isBack, setIsBack] = useState(false);

  const handleEvent = () => {
    setIsBack(true);
    callback();
    window.history.go(1);
  };

  useEffect(() => {
    window.addEventListener("popstate", handleEvent);
    return () => window.removeEventListener("popstate", handleEvent);
  });

  return isBack;
};

export default useBackButton;