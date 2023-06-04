import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { productContext } from "../contexts/ProductContProvider";

export default function Signup() {
    const [user, setUser] = useState({});
    const { signUpHandler } = useContext(productContext);
  function handleInput(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function notify(event) {
    event.preventDefault();
    toast.success("Signed up successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className="login-parent">
      <form action="" className="login-sub">
        <h2 style={{ color: "var(--primary-color)" }}>Signup</h2>
        <label htmlFor="" className="email">
          Enter your FirstName:{" "}
          <input
            type="text"
            name="firstName"
            id=""
            className="email-inp"
            placeholder="Shubh"
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label htmlFor="" className="email">
          Enter your LastName:{" "}
          <input
            type="text"
            name="lastName"
            id=""
            className="email-inp"
            placeholder="Arya"
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label htmlFor="" className="email">
          Enter your email ID:{" "}
          <input
            type="email"
            name="email"
            id=""
            className="email-inp"
            placeholder="example@gmail.com"
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label htmlFor="" className="pw">
          Enter your password:{" "}
          <input
            type="password"
            name="password"
            id=""
            className="pw-inp"
            placeholder="shubh@123"
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label htmlFor="" className="pw">
          Re-enter your password:{" "}
          <input type="password" className="pw-inp" placeholder="shubh@123" />
        </label>
        <button
          type="submit"
          className="signin-btn"
          onClick={(e) => {
            notify(e);
            signUpHandler(user);
          }}
        >
          Sign Up
        </button>
        <Link to="/login" className="signup-link">
          {" "}
          Already have an account? Login.
        </Link>
      </form>
    </div>
  );
}
