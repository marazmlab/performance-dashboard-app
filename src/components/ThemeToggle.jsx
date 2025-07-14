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
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
            aria-label="Toggle dark mode"
        >
            {dark ? "Switch to light" : "Switch to dark"}
        </button>
    );
}

export default ThemeToggle;