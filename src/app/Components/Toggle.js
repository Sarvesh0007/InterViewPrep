import React, { useState } from "react";

export default function Toggle({ open, onToggle }) {
  const handleClick = () => {
    onToggle((prev) => !prev);
  };

  return (
    <div>
      <div
        className={`${
          open ? "bg-green-500" : "bg-yellow-500"
        } relative rounded-xl h-10 w-20`}
      >
        <div
          onClick={handleClick}
          style={{
            // transition: "left 0.3s",
            position: "absolute",
            left: open ? "52px" : "2px", // animate left position
            bottom: "2px",
          }}
          className="rounded-full transition-all duration-400 ease-in-out top-2 w-6 h-6 bg-white cursor-pointer"
        />
      </div>
    </div>
  );
}
