import { RouterProvider } from "react-router-dom";
import RootRoutes from "./routes/__RootRoutes";
const App = () => {
  return <RouterProvider router={RootRoutes} />;
};

export default App;
