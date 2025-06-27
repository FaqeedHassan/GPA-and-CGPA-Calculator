import React, { useState, useEffect, useRef } from "react";
import { Palette } from "lucide-react";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null); // 👈 ref for outside click detection

  const changeTheme = (theme) => {
    document.documentElement.className = theme;
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="relative inline-block" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="w-8 h-8 md:w-10 md:h-10 p-2 rounded-full border border-white/30 hover:brightness-110 transition flex items-center justify-center -mt-2 md:mt-0"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(6px)",
            color: "var(--text-color)",
          }}
          title="Change Theme"
        >
          <Palette className="w-3 h-3 md:w-5 md:h-5" />
        </button>

        {open && (
          <div
            className="absolute right-0 mt-2 rounded-md shadow-lg p-2 space-y-2 w-25 border border-white/20"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              color: "var(--text-color)",
              zIndex: 999,
            }}
          >
            <button
              onClick={() => changeTheme("")}
              className="block w-full text-left hover:opacity-80"
            >
              Default
            </button>
            <button
              onClick={() => changeTheme("theme-light")}
              className="block w-full text-left hover:opacity-80"
            >
              Light
            </button>
            <button
              onClick={() => changeTheme("theme-dark")}
              className="block w-full text-left hover:opacity-80"
            >
              Dark
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
