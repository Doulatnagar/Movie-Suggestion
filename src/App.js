import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./theme";
import { LoginPage } from "./Component/LoginPage";
import { Home } from "./Component/Home";
import { Register } from "./Component/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Registor",
    element: <Register/>,
  },
]);
function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
