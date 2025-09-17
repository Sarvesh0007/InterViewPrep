"use client";

import React, { useState } from "react";
import Tab from "../Components/Tab";
import CircularDots from "../Components/CircularDots";
import Toggle from "../Components/Toggle";
import Dropdown from "../Components/Dropdown";
import Accodion from "../Components/Accodion";
import Progressbar from "../Components/Progressbar";
import LargeList from "../Components/LargeList";

export default function MyPage() {
  const [activeTab, setActiveTab] = useState([tabs[1]?.key]);
  // const [activeTab, setActiveTab] = useState(tabs[1]?.key);
  const [open, setOpen] = useState(false);

  const [accOpen, setAccOpen] = useState([0]);

  return (
    <div className="flex justify-centers gap-2 h-screen w-full">
      <div className="flex items-center">
        <Tab
          tabs={tabs}
          multiSelect
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
      <div className="grid self-center">
        <CircularDots
          dotsNum={6}
          animationSpeed={500}
          dotsActiveCol={"red"}
          dotsInactiveCol={"green"}
        />
      </div>
      <div className="grid self-center">
        <Toggle open={open} onToggle={setOpen} />
      </div>
      <div className="grid self-center">
        <Dropdown />
      </div>
      {/* <div className="grid self-center">
        <Accodion options={options} onChange={setAccOpen} open={accOpen} />
      </div> */}
      <div className="grid self-center">
        <Progressbar value={20} />
      </div>
      <div className="grid">
        <LargeList />
      </div>
    </div>
  );
}

const tabs = [
  {
    name: "Tab1",
    key: "tab_1",
  },
  {
    name: "Tab2",
    key: "tab_2",
  },
  {
    name: "Tab3",
    key: "tab_3",
  },
  {
    name: "Tab4",
    key: "tab_4",
  },
  {
    name: "Tab5",
    key: "tab_5",
  },
];

const options = [
  {
    key: "one",
    content: "dchsbdckscscbsdcs",
  },
  {
    key: "two",
    content: "iowedkwijdeqjwqej",
  },
  {
    key: "three",
    content: "dcvsdcbsdcsdcsdbcsdbcdsbsdc",
  },
];
