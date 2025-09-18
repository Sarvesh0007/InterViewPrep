"use client";
import React, { useEffect, useState } from "react";

export default function Progressbar({ value, stepUp }) {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (stepUp === "true") {
          return prev + 1 >= 100 ? 100 : prev + 1;
        } else {
          return prev < 0 ? 0 : prev - 1;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div
      style={{
        width: "240px",
        height: "30px",
        overflow: "hidden",
        background: "#dddd",
        borderRadius: "40px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1rem",
          color: "#fff",
          background: "green",
          transition: "width 0.5s linear",
        }}
      >
        <p>Hello Progress {progress}%</p>
      </div>
    </div>
  );
}
