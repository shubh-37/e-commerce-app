import { Navigate } from "react-router-dom";

export default function RequiresAuth({ children }) {
  const encodedToken = localStorage.getItem("token");
  console.log(encodedToken);
  return encodedToken ? children : <Navigate to="/login" />;
}
