import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
