import { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const encodedToken = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(encodedToken);
  const [userProfile, setUserProfile] = useState({});

  async function loginTestUser() {
    const user = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    };
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      localStorage.setItem("token", data.encodedToken)
      localStorage.setItem("firstName", data.foundUser.firstName);
      localStorage.setItem("lastName", data.foundUser.lastName);
      localStorage.setItem("email", data.foundUser.email);
      setIsLogin(data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  }

  async function signUpHandler(user) {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      setUserProfile(data.createdUser);
      localStorage.setItem("token", data.encodedToken);
      setIsLogin(data.encodedToken);
    } catch (error) {}
  }
  function removeToken(){
    localStorage.removeItem("token");
    setIsLogin(undefined);
  }
  return (
    <authContext.Provider value={{ signUpHandler, loginTestUser, encodedToken, isLogin, userProfile, removeToken }}>
      {children}
    </authContext.Provider>
  );
}
