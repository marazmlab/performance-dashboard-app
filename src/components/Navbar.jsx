import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import Logo from '../assets/logo.svg?react';

function Navbar() {
  return (
    <nav className="bg-gray-800  dark:bg-white p-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-6 h-6 dark:text-gray-800 text-white transition-colors" />
            <span className="hidden xs380:inline md:inline text-lg font-bold dark:text-gray-800 text-white group-hover:underline">
              Performance Audit Dashboard
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;