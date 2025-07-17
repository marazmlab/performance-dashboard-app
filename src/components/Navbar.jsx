import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
    return (
        <nav className="bg-gray-800  dark:bg-white p-4 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-white dark:text-gray-800 hover:underline">Performance Audit Dashboard</Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;