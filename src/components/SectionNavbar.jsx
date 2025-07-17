import React, { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const SectionNavbar = () => {
    const sectionIds = ["audit-form", "audit-details"];
    const active = useScrollSpy(sectionIds, 80);

    const links = [
        { id: "audit-form", label: "URL"},
        { id: "audit-details", label: "Audit Details"},
    ];

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="flex gap-4 py-2 mb-4 bg-white dark:bg-gray-900 sticky top-0 z-10">
            {links.map(link => (
                <button
                    key={link.id}
                    onClick={() => handleClick(link.id)}
                    className={`px-2 py-2 rounded font-medium transition-colors focus:outline-none
                        ${active === link.id
                            ? "text-gray-900 dark:text-white  underline font-bold"
                            : "text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        }`}
                >
                    {link.label}
                </button>
            ))}
        </nav>
    );
};

export default SectionNavbar;