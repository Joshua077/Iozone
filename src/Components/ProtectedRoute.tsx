import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null; // or a loader

  return isSignedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
