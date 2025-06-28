import {
  createBrowserRouter,
} from "react-router";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Error from "../Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
      {
        index:true,
        Component:Home
      }
    ]
  },
  {
    path:"/*",
    Component:Error
  }
]);