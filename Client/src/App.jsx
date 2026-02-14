import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/shared/Navbar.jsx";
import FooterMain from "./pages/shared/FooterMain.jsx";

const App = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "80px" }}>
        <Outlet />
      </main>
      <FooterMain />
    </div>
  );
};

export default App;
