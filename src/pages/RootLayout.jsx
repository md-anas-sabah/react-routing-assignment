import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="text-white">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
