import React from "react";

const SectionNavbar = () => {
    return (
        <nav className="flex gap-4 py-2 bb- border-b mb-8 bg-white dark:bg-gray-900 sticky top-0 z-10">
            <a 
                href="#audit-form"
                className="flex gap-4  bg-white dark:bg-gray-900 sticky top-0 z-10"
            >
                Audit Form
            </a>
            <a
                href="#audit-details"
                className="flex gap-4 bg-white dark:bg-gray-900 sticky top-0 z-10"
            >
                Details
            </a>
        </nav>
    );
};

export default SectionNavbar;