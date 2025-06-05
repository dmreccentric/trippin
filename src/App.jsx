import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import Signup from "../src/pages/SignUp";
import Login from "../src/pages/Login";
import Slides from "../src/pages/Slides";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/slides",
    element: <Slides />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
