import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "1rem 1.5rem", background: "#0d9488", color: "white", fontWeight: "bold", fontSize: "1.25rem" }}>
        Online Book Shop
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
