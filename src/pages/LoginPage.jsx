import { useContext } from "react"
import { productContext } from "../contexts/ProductContProvider"
import  {Link} from "react-router-dom";
import "../css/login.css";

export default function Login(){
    const { testLogin } = useContext(productContext);
    return (
        <div className="login-parent">
            <div className="login-sub">   
                <h2>Login</h2>
                <label htmlFor="" className="email">
                    Email Address <br/><input type="text" name="" id="" className="email-inp" placeholder="example@gmail.com"/>
                </label>
                <label htmlFor="" className="pw">
                    Password <br/><input type="password" name="" id="" className="pw-inp" placeholder="shubh@123" />
                </label>
                <button className="signin-btn">Sign In</button>
                <Link to="/signup" className="signup-link">Don't have an account? Sign Up.</Link>
                <button onClick={() => testLogin()} className="test-btn">Login as test user</button>
            </div>
            
        </div>
    )
}