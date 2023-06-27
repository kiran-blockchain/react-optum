import { useNavigate } from "react-router-dom"

export const Login=()=>{
    const navigate= useNavigate();
    return(
        <div>
            <h1>Login</h1>
            <button className="btn btn-primary" onClick={e=>{
                navigate("/products/1")
            }}>Login</button>
        </div>
    )
}