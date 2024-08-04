// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import "../styles/styles.css";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
