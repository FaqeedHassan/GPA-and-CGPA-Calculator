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
      <button
        onClick={() => setOpen(!open)}
        className="bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30 hover:bg-white/30 transition"
        title="Change Theme"
      >
        <Palette className="w-5 h-5 text-white" />
      </button>

      {open && (
        <div className="mt-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-md shadow-lg p-2 space-y-2 w-32">
          <button
            onClick={() => changeTheme('')}
            className="block w-full text-left hover:text-yellow-300"
          >
            Default
          </button>
          <button
            onClick={() => changeTheme('theme-light')}
            className="block w-full text-left hover:text-blue-300"
          >
            Light
          </button>
          <button
            onClick={() => changeTheme('theme-dark')}
            className="block w-full text-left hover:text-gray-300"
          >
            Dark
          </button>
        </div>
      )}
    </div>
  );
}
