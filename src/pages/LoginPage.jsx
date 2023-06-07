import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import { toast } from "react-toastify";
import { authContext } from "../contexts/AuthProvider";
import UserProfile from "../components/UserProfile";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
  const { loginTestUser, isLogin, userProfile } = useContext(authContext);
  const [showPassword, setShowPassword] = useState(false);
  function notify(val) {
    if (val === "t") {
      toast.success("Login successful as test user!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Login successful!", {
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
  }

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {isLogin ? (
        <UserProfile userProfile={userProfile} />
      ) : (
        <div className="login-parent">
          <form
            onSubmit={() => {
              notify("u");
            }}
          >
            <div className="login-sub">
              <h2 style={{ color: "var(--primary-color)" }}>Login</h2>

              <label htmlFor="" className="email">
                Email Address <br />
                <input
                  type="text"
                  name=""
                  id=""
                  className="email-inp"
                  placeholder="example@gmail.com"
                  required
                />
              </label>
              <label htmlFor="" className="pw">
                Password <br />
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name=""
                    id=""
                    className="pw-inp"
                    placeholder="shubh@123"
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={() => togglePassword()}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
              </label>
              <button className="signin-btn" type="submit">
                Sign In
              </button>
              <Link to="/signup" className="signup-link">
                Don't have an account? Sign Up.
              </Link>
              <button
                className="test-btn"
                type="submit"
                onClick={() => {
                  loginTestUser();
                  notify("t");
                }}
              >
                Login as test user
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
