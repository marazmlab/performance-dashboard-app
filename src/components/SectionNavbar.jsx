import React from "react";

const SectionNavbar = () => {
    return (
        <nav className="flex gap-4 py-2 border-b bg-white dark:bg-gray-900 sticky top-0 z-10">
            <a 
                href="#audit-form"
                className="px-4 py-2 rounded font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Audit Form
            </a>
            <a
                href="#audit-details"
                className="px-4 py-2 rounded font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Details
            </a>
        </nav>
    );
};

export default SectionNavbar;