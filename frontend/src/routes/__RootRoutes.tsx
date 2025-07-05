import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";

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
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default RootRoutes;
