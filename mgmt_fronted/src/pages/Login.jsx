import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    
    let [error, setError] = useState("")
    let navigate = useNavigate()
    let handleLogin = (e) => {
        e.preventDefault()
        // Handle login logic here, such as sending a request to the server for authentication
        if (email == "user@gmail.com" && password == "admin") {
            console.log("Login successful!")
            navigate("/userhome")
        } else {
            setError("Invalid email or password")
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter emailid"></input><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"></input><br/>
                <button type="submit">Login</button>
            </form>

            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Login