import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import React from "react";
import  ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Common Component */}
      <h1>Header Component</h1>

      {/* Routes */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        {/* Shopping Routes */}
        <Route path="/shop" element={<ShoppingLayout />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined paths */}
        </Routes>
    </div>
  );
}

export default App;
