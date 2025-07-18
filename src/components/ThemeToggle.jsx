import { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      className="relative w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 focus:outline-none
        bg-gray-300 dark:bg-gray-700"
    >
      {/* Sun icon */}
      <span
        className={`z-10 transition-colors duration-300 ${
          !dark ? "text-yellow-400" : "text-gray-400"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </span>
      {/* Moon icon */}
      <span
        className={`ml-auto z-10 transition-colors duration-300 ${
          dark ? "text-white" : "text-gray-400"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            fill="currentColor"
          />
        </svg>
      </span>
      {/* Moving background */}
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-300 bg-white shadow ${
          dark ? "translate-x-6" : "translate-x-0"
        }`}
        style={{ zIndex: 1 }}
      />
    </button>
  );
}

export default ThemeToggle;