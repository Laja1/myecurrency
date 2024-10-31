import { Outlet } from "react-router-dom";
import Home from "../pages/home/page";

export const routeConfig = [
  {
    path: "/",
    element: <Outlet />,
    children: [{ index: true, element: <Home /> }],
    },
    {
        path: "/",
        element: <Outlet />, // We'll create this component

      },
    
];
