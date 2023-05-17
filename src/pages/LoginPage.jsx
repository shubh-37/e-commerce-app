import { useContext } from "react"
import { productContext } from "../contexts/ProductContProvider"

export default function Login(){
    const { testLogin } = useContext(productContext);
    return (
        <div>
            <label htmlFor="">
                Email Address: <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
                Password: <input type="password" name="" id="" />
            </label>
            <button>Sign In</button>
            <button onClick={() => testLogin()}>Login as test user</button>
        </div>
    )
}