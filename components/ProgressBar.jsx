"use client";

import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 600);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[3px] bg-slate-600 ">
      <div
        className={`h-[100%] bg-blue-500 transition-all duration-200 ease-in-out w-[${progress}%]`}
      ></div>
    </div>
  );
};

export default ProgressBar;
