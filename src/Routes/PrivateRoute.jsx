import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("Token"); // ✅ check token

  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;
