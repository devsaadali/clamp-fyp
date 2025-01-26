import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WrapperComponent = ({ children }) => {
  const { accessToken } = useSelector((state) => state.auth);

  // Check if the user is authenticated (you can customize this based on your logic)
  if (!accessToken) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected content if authenticated
};

export default WrapperComponent;
