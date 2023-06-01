import { Link } from "react-router-dom"
export default function Signup(){
    return (
        <div className="login-parent">
            
            <form action="" className="login-sub">
                <h2>Signup</h2>
                <label htmlFor="">
                    Enter your FirstName: <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Enter your LastName: <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Enter your email ID: <input type="email" name="" id="" />
                </label>
                <label htmlFor="">
                    Enter your password: <input type="password" name="" id="" />
                </label>
                <label htmlFor="">
                    Re-enter your password: <input type="password" />
                </label>
                <button type="submit">Sign Up</button>
                <Link to="/login"> Already have an account? Login.</Link>
            </form>
            

        </div>
    )
}