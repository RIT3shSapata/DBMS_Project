import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-self-center justify-evenly bg-gray-800 my-3 text-lg">
            <NavLink className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/admin">Admin</NavLink>
            <NavLink className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/resident">Resident</NavLink>
            <NavLink className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/security">Security</NavLink>
        </div>
    );
};

export default Navbar;
