"use client";
import React, { useEffect, useRef } from "react";

export default function Accodion({ onChange, open, options }) {
  function handleClick(idx) {
    if (open?.includes(idx)) {
      onChange(open?.filter((x) => x != idx));
    } else {
      onChange([...open, idx]);
    }
  }

  const accRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (accRef.current && !accRef.current.contains(event.target)) {
        onChange([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div ref={accRef}>
      {options?.map((item, index) => (
        <div key={item?.key}>
          <div className="flex items-center justify-between">
            <p>{item?.key}</p>
            <button onClick={() => handleClick(index)}>
              {open?.includes(index) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-400 ${
              open?.includes(index)
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="py-4 bg-amber-800 text-white font-medium border border-gray-400">
              {item?.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
