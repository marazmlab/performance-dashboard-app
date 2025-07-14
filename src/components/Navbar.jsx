import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
    return (
        <nav className="bg-gray-800  dark:bg-white p-4 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="container mx-auto flex items-center justify-between">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="text-white dark:text-gray-800 hover:underline">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/audit/1" className="text-white dark:text-gray-800 hover:underline">Audit Details</Link>
                        </li>
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;