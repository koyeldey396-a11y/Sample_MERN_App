import { useState } from "react"

function Register() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [role, setRole] = useState("")
    
    let handleRegister = async(e) => {
        e.preventDefault()

        let res = await fetch("http://localhost:3000/api/emp/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name, email, password, role })
        })
        let data = await res.json()

        if (res.OK) {
            console.log("data registered successfully")
            console.log(data)
        } else {
            console.log(" data insertion failed")
            console.log(data)
        }
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"></input><br/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter emailid"></input><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"></input><br/>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">Choose Role</option>
                    <option value="EMPLOYEE">Employee</option>
                    <option value="HR">HR</option>
                </select><br/>
                <button type="submit">Register</button>
            </form>

            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Register