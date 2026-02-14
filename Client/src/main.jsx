import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import router from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
          <h1>Something went wrong</h1>
          <pre style={{ background: "#f5f5f5", padding: "1rem", overflow: "auto" }}>
            {this.state.error?.message || String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById('root');
if (!rootEl) {
  document.body.innerHTML = '<h1>Root element #root not found</h1>';
} else {
  rootEl.style.minHeight = '100vh';
  rootEl.style.background = '#f8fafc';
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <AuthProvider>
          <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
            <RouterProvider router={router} />
          </Suspense>
        </AuthProvider>
      </ErrorBoundary>
    </React.StrictMode>,
  );
}
