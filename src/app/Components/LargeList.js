"use client";
import { useEffect, useState } from "react";

export default function LargeList() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  return (
    <div className="relative">
      <div>
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index + "hello"} className="relative">
            <div className="p-5 w-full">
              <p>Hello world {index}</p>
            </div>
          </div>
        ))}
      </div>
      {visible && (
        <div className="bg-red-500 text-white p-4 fixed bottom-30 right-10">
          <button className="cursor-pointer" onClick={scrollToTop}>
            Click me
          </button>
        </div>
      )}
    </div>
  );
}
