import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

type ProtectedRouteProps = {
  children?: React.ReactChild | React.ReactChild[];
};
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const {isUserLogin} = useSelector((state: RootState) => state.login);
  let location = useLocation();
  
  if (!isUserLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
