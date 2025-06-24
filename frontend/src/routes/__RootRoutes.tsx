import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";
import LoginPage from "@/pages/auth/Login";

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default RootRoutes;
