import React, { useEffect, useState } from "react";

export default function CircularDots({
  dotsNum,
  dotsInactiveCol,
  dotsActiveCol,
  animationSpeed = 400,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1 > dotsNum ? 0 : prev + 1));
    }, animationSpeed);
    return () => clearInterval(interval);
  }, [dotsNum, animationSpeed]);

  //for traffic light analogy
  const handleGetColour = (idx) => {
    const modx = idx % 3;
    if (modx === 0) return "red";
    if (modx === 1) return "yellow";
    else return "green";
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {Array.from({ length: dotsNum }).map((_, index) => {
        return (
          <div
            key={`${index}_dot`}
            className={`rounded-full w-5 h-5`}
            style={{
              background: handleGetColour(index),
              opacity: activeIndex === index ? 1 : 0.7,
            }}
          ></div>
        );
      })}
    </div>
  );
}
