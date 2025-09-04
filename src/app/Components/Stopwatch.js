"use client";
import { useState, useRef } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef(null);

  function startTimer() {
    if (isRunning) return;

    setIsRunning(true);
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  }

  function pause() {
    clearInterval(timeRef.current);
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTime(0);
  }

  const formattedTime = () => {
    const date = new Date(time); // time is in ms
    const mins = String(date.getUTCMinutes()).padStart(2, "0");
    const sec = String(date.getUTCSeconds()).padStart(2, "0");
    const ms = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(
      2,
      "0"
    );
    return `${mins}:${sec}:${ms}`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <h1>⏱ Stopwatch</h1>
        <h2>{formattedTime()}</h2>
      </div>
      <div style={{ display: "flex", gap: "8px", margin: "0 8px" }}>
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pause}>Pause</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
