import { createBrowserRouter } from "react-router";
import Layout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import HomeLayout from "../Layout/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
        {
            path:"/",
            Component:Home,
        },
        {
            path:"/about",
            Component: About,
        }
    ]
  }
])

