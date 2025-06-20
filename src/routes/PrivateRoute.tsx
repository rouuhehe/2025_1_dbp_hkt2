import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? children : <Navigate to="/authentication/login" replace />;
}
