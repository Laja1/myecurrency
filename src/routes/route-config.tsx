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
        // children: [
        //   { path: "login", element: <Login /> },
        //   { path: "signup", element: <SignUp /> },
        //   { path: "onboarding", element: <Onboarding /> },
        //   { path: "resumebuilder", element: <ResumeBuilder /> },
        //   { path: "dashboard", element: <Dashboard /> },
        //   { path: "recommendedjobs", element: <RecommendJobs /> },
        //   { path: "applications", element: <Applications /> },
        //   { path: "findjobs", element: <FindJobs /> },
        //   { path: "profile", element: <Profile /> },
        //   { path: "jobdetail/:id", element: <JobDetail /> },
    
        //       ],
      },
    
];
