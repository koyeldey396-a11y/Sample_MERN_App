import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    
    let [error, setError] = useState("")
    let navigate = useNavigate()
    let handleLogin = async(e) => {
        e.preventDefault()
        // Handle login logic here, such as sending a request to the server for authentication
        if (email == "user@gmail.com" && password == "admin") {
            console.log("Login successful!")
            navigate("/adminhome")
        } else {
            //setError("Invalid email or password")
            let req=await fetch("http://localhost:3000/api/emp/login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email, password })
            })
            let data=await req.json()
            console.log(data)
            if(data.user){
                localStorage.setItem("currentuser",JSON.stringify(data.user))
                //JSON.stringify converts string data into JSON format and stores it in local storage
                if(data.user.role=="HR"){
                    navigate("/hrhome")
                }else{
                    navigate("/emphome")
                }
            } else {
                setError(data.msg)
            }
        }
    }
    return (

        <div>
            <form onSubmit={handleLogin}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"></input><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"></input><br/>
                <button type="submit">Login</button>
            </form>

            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Login