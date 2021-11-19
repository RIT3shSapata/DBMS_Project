import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-self-center justify-evenly bg-gray-400 my-3 text-lg">
            <NavLink to="/admin">Admin</NavLink>
            <NavLink to="/resident">Resident</NavLink>
            <NavLink to="/security">Security</NavLink>
        </div>
    );
};

export default Navbar;
