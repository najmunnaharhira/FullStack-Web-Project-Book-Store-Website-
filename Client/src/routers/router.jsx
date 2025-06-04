import About from "../pages/about/About";
import ActivityLog from "../Dashboard/ActivityLog";
import App from "../App";
import Blog from "../pages/blog/Blog";
import BrowsingHistory from "../pages/BrowsingHistory/history";
import BuyCart from "../pages/BuyCart";
import CheckOutPage from "../pages/CheckOutPage";
import Dashboard from "../Dashboard/Dashboard";
import EditBooks from "../Dashboard/EditBooks";
import ErrorPage from "../pages/shared/ErrorPage";
import GiftCards from "../pages/GiftCards/giftcards";
import Login from "../pages/Login";
import LoginNavbar from "../pages/shared/LoginNavbar";
import Logout from "../pages/Logout";
import ManageBooks from "../Dashboard/ManageBooks";
import OurServices from "../pages/services/OurServices";
import PaymentFailed from "../pages/PaymentFaild/paymentFaild";
import PaymentSuccess from "../pages/PaymentSuccess/paymentSuccess";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Recommendation from "../pages/Recommendation/recommendations";
import Reviews from "../pages/reviews/Reviews";
import Shop from "../pages/Shop/Shop";
import Signup from "../pages/Signup";
import SingleBook from "../pages/shared/SingleBook";
import UploadBook from "../Dashboard/UploadBook";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import { Home } from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/services", element: <OurServices /> },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
      { path: "/about", element: <About /> },
      { path: "/loginNavbar", element: <LoginNavbar /> },

      { path: "/blog", element: <Blog /> }
    ]
  },
  { path: "/gift-cards", element: <GiftCards /> },
  { path: "/history", element: <BrowsingHistory /> },
  // {
  //   path: "/cart",
  //   element: <ProtectedRoute><BuyCart /></ProtectedRoute>
  // },
  { path: "/reviews", element: <Reviews /> },
  // {
  //   path: "/checkout",
  //   element: <ProtectedRoute><CheckOutPage /></ProtectedRoute>
  // },

  {
    path: "/cart",
    element: <BuyCart />,
  },
//   ]
// },
{
path: "/reviews",
element: <Reviews />
},
// {
//   path: "/checkout",
//   element: <ProtectedRoute />, // Assuming ProtectedRoute is correctly imported
//   children: [
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },
  { path: "payment/success/:tranId", element: <PaymentSuccess /> },
  { path: "payment/fail/:tranId", element: <PaymentFailed /> },
  { path: "/recommendations", element: <Recommendation /> },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
      { path: "/admin/dashboard/upload", element: <UploadBook /> },
      { path: "/admin/dashboard/activityLog", element: <ActivityLog/> },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/create-user", element: <Signup /> },
  { path: "/logout", element: <Logout /> }
]);

export default router;
