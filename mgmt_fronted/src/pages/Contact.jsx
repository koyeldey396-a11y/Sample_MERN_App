import { useState } from "react"

function Contact(){

    let [name, setName] = useState("")
    let [age, setAge] = useState(18)
    let [phone, setPhone] = useState("")
    let RegisterData = (event) => {
        event.preventDefault();
        // used to collect all the data from the form and send it to the backend
        console.log(name, age, phone);
    }

 return(
    <div>
        <h1>Contact page called</h1>
        <form onSubmit={RegisterData}>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" ></input> <br/>
            <input type="number" value = {age} onChange={(event) => setAge(Number(event.target.value))} placeholder="age" ></input> <br/>
            <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="phone number" ></input> <br/>
            <button> Submit </button>
        </form>
        <h3> {name} </h3>
        <h3> {age} </h3>
        <h3> {phone} </h3>
    </div>
 )
}
export default Contact