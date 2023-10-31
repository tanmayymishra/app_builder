import { Navigate } from "react-router-dom";
import { useEffect } from "react";
const Protected = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("is Authenicated",isAuthenticated);
    if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;