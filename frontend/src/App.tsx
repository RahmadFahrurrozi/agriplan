import { RouterProvider } from "react-router-dom";
import RootRoutes from "./routes/__RootRoutes";
import { Toaster } from "sonner";
const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <RouterProvider router={RootRoutes} />
    </>
  );
};

export default App;
