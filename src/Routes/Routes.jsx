import { createBrowserRouter } from "react-router";


import About from "../Pages/About/About";
import HomeLayout from "../Layout/HomeLayout";
import CompanyDetails from "../Components/CompanyDetails/CompanyDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from './../Pages/Home/Home';
import Loading from "../Pages/Loading/Loading";
import Login from "../Pages/Login/Login";
import AuthLayout from '../Layout/AutLayout'
import Register from './../Pages/Register/Register';
import PrivateRoute from "../Contexts/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
        {
            path:"/home",
            Component: Home
        },
        {
            path:"/about",
            Component: About,
        },

    ]
  },
  {
    path:'/auth',
    Component: AuthLayout,
    children:[
        {
          path:"/auth/login",
          Component:Login
        },
        {
          path:"/auth/register",
          Component: Register
        }
    ]
  },
  {
    path:"/company-details/:id",
    hydrateFallbackElement:<Loading></Loading>,
    loader: ()=> fetch("../companies.json"),
    element: <PrivateRoute>  <CompanyDetails/>   </PrivateRoute>
  },
  {
    path:'*',
    Component: ErrorPage,
  }
])

