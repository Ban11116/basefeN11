import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Cart from "../pages/cart";
import Order from "../pages/order";
import Home from "../pages/home/Home";
import Products from "../pages/products/products";
import RegisterPage from "../pages/auth/Register";
import LoginPage from "../pages/auth/Login";
import ProductsDetail from "../productDetail/ProductsDetail";
import EditUser from "../pages/UseClient/EditUser";
import UserInfo from "../pages/UseClient/UserInfo";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
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
      },
       {
        path: '/productsdetail/:id',
        element: <ProductsDetail />,
         errorElement: <div className="text-red-500 p-10">Không tìm thấy sản phẩm.</div>
      },
       {
        path: '/editUser',
        element: <EditUser />
      },
       {
        path: '/userInfo',
        element: <UserInfo />
      },

    ],
  },
]);
