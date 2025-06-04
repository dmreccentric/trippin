import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import Signup from "../src/pages/SignUp";
import Login from "../src/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
