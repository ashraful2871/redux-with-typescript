import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/user",
        element: <User></User>,
      },
      {
        path: "/task",
        element: <Tasks></Tasks>,
      },
    ],
  },
]);

export default router;
