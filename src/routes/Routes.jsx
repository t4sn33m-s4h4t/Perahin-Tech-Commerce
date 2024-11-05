import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/404/404";
import ProductDetails from "../pages/Product Details/ProductDetails";
import Cards from "../components/Home/Cards";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: ()=> fetch("/products.json"),
        element: <Home />,
        children:[
          {
            path: "/category/:catId",
            loader: ()=> fetch("/products.json"),
            element: <Cards></Cards>,
          }
        ]
      },
      {
        path: "statistics",
        loader: ()=> fetch("/products.json"),
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id",
        loader: ()=> fetch("/products.json"),
        element: <ProductDetails />,
      },
    ],
  },
]);

  export default Router;