import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="flex justify-center gap-96 h-24 shadow-sm shadow-white">
      <NavLink to="/">
        <li className="mt-8 w-32 h-10  justify-center items-center rounded-md flex text-center bg-white text-black cursor-pointer">
          Home
        </li>
      </NavLink>
      <NavLink to="about">
        <li className="mt-8 w-32 h-10  justify-center items-center rounded-md flex text-center bg-white text-black cursor-pointer">
          About
        </li>
      </NavLink>

      <NavLink to="login">
        <li className="mt-8 w-32 h-10  justify-center items-center rounded-md flex text-center bg-white text-black cursor-pointer">
          Login
        </li>
      </NavLink>
    </ul>
  );
}

export default Navbar;
