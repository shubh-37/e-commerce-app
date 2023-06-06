import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"

export default function UserProfile({userProfile}){
  const { removeToken } = useContext(authContext);
  return (
    <div>
      <h1>This is user profile</h1>
      <h3>Name: {`${userProfile?.firstName} ${userProfile?.lastName} `}</h3>
      <p>Email: {userProfile?.email}</p>
      <button onClick={() => removeToken()}>Logout</button>
    </div>
  )
}