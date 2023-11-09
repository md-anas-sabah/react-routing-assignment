import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="flex justify-center mt-20">
      <div className="h-96 w-2/3 flex flex-col items-center justify-center text-2xl font-bold shadow-md border  shadow-white rounded-xl">
        <h2>Website Help!!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
          atque!
        </p>
        <nav className="flex gap-10">
          <NavLink to="faq">
            <li className="mt-8 w-40 h-10  justify-center items-center rounded-md flex text-center bg-white text-black cursor-pointer p-1">
              Visit FAQ!!
            </li>
          </NavLink>
          <NavLink to="contact">
            <li className="mt-8 w-40 h-10  justify-center items-center rounded-md flex text-center bg-white text-black cursor-pointer">
              Contact Us
            </li>
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default HelpLayout;
