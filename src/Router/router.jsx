import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Home/HomeRoot/Dashboard";
import Members from "../Pages/Home/HomeRoot/Members";
import AddUser from "../Component/AddUser";
import Profile from "../Pages/Home/HomeRoot/Profile";
import PrivateRoot from "../PrivateRoot/PrivateRoot";





export const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoot><Home></Home></PrivateRoot>,   // check user is exist
      children: [
        {
            path: "/",
            element: <Dashboard></Dashboard>,
        },
        {
            path: "/profile",
            element: <Profile></Profile>,
        },
        {
            path: "/member",
            element: <Members></Members>,
        },
        {
          path: "/add_member",
          element: <AddUser></AddUser>,
        },
      ]
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);