import { useContext } from "react";
import { authContext } from "../contexts/AuthProvider";
import "../css/userprofile.css";
export default function UserProfile() {
  const { removeToken } = useContext(authContext);
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  return (
    <div className="user-profile">
      <h1>User profile</h1>
      <h3>Name: {`${firstName} ${lastName} `}</h3>
      <p>Email: {email}</p>
      <button onClick={() => removeToken()}>Logout</button>
    </div>
  );
}
