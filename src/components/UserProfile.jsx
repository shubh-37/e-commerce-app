import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"
import "../css/userprofile.css";
export default function UserProfile({userProfile}){
  const { removeToken } = useContext(authContext);
  return (
    <div className="user-profile">
      <h1>User profile</h1>
      <h3>Name: {`${userProfile?.firstName} ${userProfile?.lastName} `}</h3>
      <p>Email: {userProfile?.email}</p>
      <button onClick={() => removeToken()}>Logout</button>
    </div>
  )
}