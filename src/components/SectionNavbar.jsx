import React from "react";

const SectionNavbar = () => {
    <nav>
        <button
            className="flex gap-4 py-2 border-b bg-white dark:bg-gray-900 sticky top-0 z-10"
            onClick={() => document.getElementById('audit-form').scrollIntoView({ behavior: 'smooth'})}
        >
            Audit Form
        </button>
        <button
            className="flex gap-4 py-2 border-b bg-white dark:bg-gray-900 sticky top-0 z-10"
            onClick={() => document.getElementById('audit-form').scrollIntoView({ behavior: 'smooth'})}
        >
            Audit Details
        </button>
    </nav>
};

export default SectionNavbar;