import { createBrowserRouter } from "react-router";


import About from "../Pages/About/About";
import HomeLayout from "../Layout/HomeLayout";
import CompanyDetails from "../Components/CompanyDetails/CompanyDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from './../Pages/Home/Home';
import Loading from "../Pages/Loading/Loading";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
        {
            path:"/",
            Component: Home
        },
     
        {
            path:"/about",
            Component: About,
        }
    ]
  },
  {
    path:"/company-details/:id",
    hydrateFallbackElement:<Loading></Loading>,
    loader: ()=> fetch("../companies.json"),
    Component:CompanyDetails
  },
  {
    path:'*/',
    Component: ErrorPage,
  }
])

