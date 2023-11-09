import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Navbar from "./Navbar";

const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return (
    <div>
      <Navbar />
      {isAuth ? <Outlet /> : <Login />}
    </div>
  );
};

export default ProtectedRoute;
