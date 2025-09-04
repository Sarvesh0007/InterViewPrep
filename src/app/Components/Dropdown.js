import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("Menu");

  const options = ["Profile", "Settings", "Logout"];

  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target))
        setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-blocks text-left" ref={buttonRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 min-w-16 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        {text}
      </button>

      {/* Dropdown items */}
      {open && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option, i) => (
            <button
              key={i}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                console.log(option);
                setOpen(false);
                setText(option);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
