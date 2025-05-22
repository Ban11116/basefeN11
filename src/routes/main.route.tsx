import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Cart from "../pages/cart";
import Order from "../pages/order";
import Home from "../pages/home/Home";
import Products from "../pages/products/products";
import RegisterPage from "../pages/auth/Register";
import LoginPage from "../pages/auth/Login";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
       index:true,
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
      {
  path: '/register',
  element: <RegisterPage />
},
{
path: '/login',
  element: <LoginPage />
}

    ],
  },
]);
