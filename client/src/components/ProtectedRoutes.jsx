import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export const AutheticatedUser = ({ children }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const { isAuthenticated } = useSelector((store) => store.auth);
  useEffect(() => {
    if (isAuthenticated) {
      const timeout = setTimeout(() => {
        setShouldRedirect(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isAuthenticated]);

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }
  return children;
};

export const AdminRoute = ({ children }) => {
  const { user, isAuthenticated } = useSelector((store) => store.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (user?.role !== "instructor") {
    return <Navigate to="/" />;
  }
  return children;
};
