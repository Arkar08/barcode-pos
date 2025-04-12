
import { Navigate } from "react-router-dom";
import Layouts from "../layout/Layouts";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? <Layouts /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;