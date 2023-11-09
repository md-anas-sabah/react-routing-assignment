import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="flex w-screen mt-10">
      <div className="h-96 w-screen  flex flex-col  shadow-md border  shadow-white rounded-xl">
        <h2 className="mt-2 text-center text-2xl font-bold">
          Welcome to <span className="text-red-700">Home Page</span>
        </h2>
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
