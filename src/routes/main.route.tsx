import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Cart from "../pages/cart";
import Order from "../pages/order";
import Home from "../pages/home/Home";
import Products from "../pages/products/products";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
       path: "home",
       element:<Home/>
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);
