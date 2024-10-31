import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeConfig } from "./route-config";
const RouteRenderer = () => {
  const routes = createBrowserRouter(routeConfig);
  return <RouterProvider router={routes} />;
};

export default RouteRenderer;
