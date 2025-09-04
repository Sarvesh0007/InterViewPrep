"use client";
import React, { useEffect, useState } from "react";

export default function Progressbar({ value }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    let step = Math.ceil(value / 20);

    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setProgress(value);
        clearInterval(interval);
      } else {
        setProgress(start);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "9999px",
        overflow: "hidden",
        width: "200px",
        height: "24px",
        background: "gray",
        position: "relative",
      }}
    >
      {/* Fill Bar */}
      <div
        role="progressbar"
        style={{
          transition: "width 0.4s ease",
          background: "red",
          height: "100%",
          width: `${progress}%`,
        }}
      />

      {/* Label on top */}
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {value}%
      </span>
    </div>
  );
}
