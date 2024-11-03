import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/404/404";


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [     
        {
          path: "/",
          element: <Home />,
        },    
        {
          path: "statistics",
          element: <Statistics />
        },    
        {
          path: "dashboard",
          element: <Dashboard />
        },  
        {
          path: "contact",
          element: <Contact />
        },  
        
    ]
  }
])

  export default Router;