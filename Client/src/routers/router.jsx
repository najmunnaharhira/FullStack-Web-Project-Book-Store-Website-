import About from "../pages/about/About";
import AddressForm from "../pages/Shop/AddressForm";
import App from "../App";
import Blog from "../pages/blog/Blog";
import Cart from "../pages/Shop/Cart";
import Checkout from "../pages/Shop/Checkout";
import CustomField from "../pages/Shop/CustomField";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Dashboard/DashboardLayout";
import EditBooks from "../Dashboard/EditBooks";
import ErrorPage from "../pages/shared/ErrorPage";
import FooterMain from "../pages/shared/FooterMain";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ManageBooks from "../Dashboard/ManageBooks";
import MobileDashboard from "../Dashboard/MobileDashboard";
import Orders from "../Dashboard/Orders";
import OurServices from "../pages/services/OurServices";
import PaymentForm from "../pages/Shop/PaymentForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductView from "../pages/Shop/ProductView/ProductView";
import Profile from "../pages/Profile";
import React from "react";
import Review from "../pages/Shop/Review";
import Shop from "../pages/Shop/Shop";
import Signup from "../pages/Signup";
import SingleBook from "../pages/shared/SingleBook";
import UpdateProfile from "../pages/UpdateProfile";
import UploadBook from "../Dashboard/UploadBook";
import UserDashboard from "../Dashboard/userDashboard/UserDashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/product-view',
        element: <ProductView />,
      },
      {
        path: '/payment-form',
        element: <PaymentForm />,
      },
      {
        path: '/review',
        element: <Review />,
      },
      {
        path: '/update-profile',
        element: <UpdateProfile />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/address-form',
        element: <AddressForm />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/custom-field',
        element: <CustomField />,
      },
      {
        path: '/services',
        element: <OurServices />
      },
      {
        path: '/book/:id',
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/mobile-dashboard',
        element: <MobileDashboard />
      },
      {
        path: '/footer-main',
        element: <FooterMain />,
      },
      {
        path: '/blog',
        element: <Blog />
      }
    ]
  },
  {
    path: '/admin/dashboard',
    element: <DashboardLayout />,
    children: [
      { 
        path: '', 
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      { 
        path: 'upload', 
        element: <UploadBook /> 
      },
      { 
        path: 'manage', 
        element: <ManageBooks /> 
      },
      { 
        path: 'edit-books/:id', 
        element: <EditBooks />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      }
    ],
  },
  {
    path: '/dashboard',
    element: <UserDashboard />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/logout',
    element: <Logout />
  }
]);

export default router;
