import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Cart from "../pages/cart";
import Order from "../pages/order";
import Home from "../pages/home/Home";
import Products from "../pages/products/products";
import RegisterPage from "../pages/auth/Register";
import LoginPage from "../pages/auth/Login";
import { AdminLayout } from "../components/layouts/AdminLayout";
import Dashboard from "../pages/admin/dashboard";
import UserManagement from "../pages/admin/user-management";
import OrderManagement from "../pages/admin/orderManagement";
import OrderDetail from "../pages/admin/orderDetail";
import ProductQl from "../pages/admin/productql";
import AccountSettings from "../pages/admin/accountSetting";
import AdminLogin from "../pages/auth/adminLogin";
import AdminRegister from "../pages/auth/adminRegister";
import CategoryManagement from "../pages/admin/category";
import ProductsDetail from "../productDetail/ProductsDetail";
import EditUser from "../pages/UseClient/EditUser";
import UserInfo from "../pages/UseClient/UserInfo";
import RequireAuth from "../pages/auth/requireAuth";
import ForgotPassword from "../pages/auth/forgotPassword";
import AboutUs from "../pages/about";
import Services from "../pages/service";
import Blog from "../pages/blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <RequireAuth allowedRoles={["user", "admin"]}>
       <MainLayout />
    </RequireAuth>
  ),
   
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "order", element: <Order /> }, 
      { path: "about", element: <AboutUs /> },  
      { path: "service", element: <Services /> },       
      { path: "blog", element: <Blog /> },       


      {
        path: "productsdetail/:id",
        element: <ProductsDetail />,
        errorElement: <div className="text-red-500 p-10">Không tìm thấy sản phẩm.</div>,
      },
      { path: "editUser", element: <EditUser /> },
      { path: "userInfo", element: <UserInfo /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/register",
    element: <AdminRegister />,
  },
  {path: "forgotpassword",
  element: <ForgotPassword /> },

  {
    path: "/admin",
    element: (
    <RequireAuth allowedRoles={["admin", "superadmin"]}>
      <AdminLayout />
    </RequireAuth>
  ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <UserManagement /> },
      { path: "orders", element: <OrderManagement /> },
      { path: "orders/:id", element: <OrderDetail /> },
      { path: "setting", element: <AccountSettings /> },
      { path: "productql", element: <ProductQl /> },
      { path: "category", element: <CategoryManagement /> },
    ],
  },
]);
