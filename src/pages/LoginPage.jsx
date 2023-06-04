import { useContext } from "react"
import { productContext } from "../contexts/ProductContProvider"
import  {Link} from "react-router-dom";
import "../css/login.css";
import { toast } from "react-toastify";

export default function Login(){
    const { testLogin } = useContext(productContext);
    function notify(val){
        if(val === "t"){
            toast.success("Login successful as test user!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }else{
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
    return (
        <div className="login-parent">
            <div className="login-sub">   
                <h2 style={{color: "var(--primary-color)"}}>Login</h2>
                <label htmlFor="" className="email">
                    Email Address <br/><input type="text" name="" id="" className="email-inp" placeholder="example@gmail.com"/>
                </label>
                <label htmlFor="" className="pw">
                    Password <br/><input type="password" name="" id="" className="pw-inp" placeholder="shubh@123" />
                </label>
                <button className="signin-btn" onClick={() => {notify("u"); }}>Sign In</button>
                <Link to="/signup" className="signup-link">Don't have an account? Sign Up.</Link>
                <button onClick={() => {testLogin(); notify("t");}} className="test-btn">Login as test user</button>
            </div>
            
        </div>
    )
}