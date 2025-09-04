"use client";

import React, { useCallback } from "react";

export default function Tab({ tabs, activeTab, multiSelect, onChange }) {
  const handleClick = useCallback(
    (key) => {
      if (multiSelect) {
        let newSelected = activeTab?.includes(key)
          ? activeTab?.filter((x) => x !== key)
          : [...activeTab, key];
        onChange && onChange(newSelected);
      } else {
        let newSelected = activeTab === key ? null : key;
        onChange(newSelected);
      }
    },
    [activeTab, multiSelect]
  );

  return (
    <div className="flex gap-2 items-center">
      {tabs?.map((tab) => {
        const isActive = multiSelect
          ? activeTab?.includes(tab?.key)
          : activeTab === tab?.key;

        return (
          <div
            key={tab?.key}
            className={`p-3 border-1 shadow border-gray-300 border-solid ${
              isActive
                ? "bg-black text-white font-semibold"
                : "bg-gray-300 text-black font-medium"
            } cursor-pointer rounded-md text-sm flex justify-center items-center`}
            onClick={() => handleClick(tab.key)}
          >
            <p>{tab?.name}</p>
          </div>
        );
      })}
    </div>
  );
}
