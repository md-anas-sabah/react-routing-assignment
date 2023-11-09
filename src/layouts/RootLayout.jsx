import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="text-white">
      <Outlet />
    </div>
  );
}

export default RootLayout;
