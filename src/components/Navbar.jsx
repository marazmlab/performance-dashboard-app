import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white hover:underline">Dashboard</Link>
                </li>
                <li>
                    <Link to="/audit/1" className="text-white hover:underline">Audit Details</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;