import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/About";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/faq";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/home/Home";
import Param from "./pages/home/Param";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ProtectedRoute />}>
      <Route path="" element={<RootLayout />}>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path=":id" element={<Param />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return (
    <div className="h-screen bg-black">
      <RouterProvider router={router} />
    </div>
  );
}
