import React, { useState } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const changeTheme = (theme) => {
    document.documentElement.className = theme;
    setOpen(false);
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      {/* Theme Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full border border-white/30 hover:brightness-110 transition"
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(6px)',
          color: 'var(--text-color)', // ✅ text color follows theme
        }}
        title="Change Theme"
      >
        <Palette className="w-5 h-5" />
      </button>

      {/* Theme Options Dropdown */}
      {open && (
        <div
          className="mt-2 rounded-md shadow-lg p-2 space-y-2 w-32 border border-white/20"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
            color: 'var(--text-color)', // ✅ text color follows theme
          }}
        >
          <button
            onClick={() => changeTheme('')}
            className="block w-full text-left hover:opacity-80"
          >
            Default
          </button>
          <button
            onClick={() => changeTheme('theme-light')}
            className="block w-full text-left hover:opacity-80"
          >
            Light
          </button>
          <button
            onClick={() => changeTheme('theme-dark')}
            className="block w-full text-left hover:opacity-80"
          >
            Dark
          </button>
        </div>
      )}
    </div>
  );
}
