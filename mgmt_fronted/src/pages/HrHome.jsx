import { useNavigate } from "react-router-dom"

function HrHome() {

  let navigate=useNavigate()
  let currentuser=JSON.parse(localStorage.getItem("currentuser"))
  //JSON.parse converts JSON data into string format and stores it in currentuser variable
  let handleLogout=()=>{
    localStorage.removeItem("currentuser")
    // it will erase your data of currentuser from local storage and you will be logged out
    navigate("/login")
  }

  return (
    <div>
      <h1>HR Home</h1>
      <p>Welcome {currentuser.name}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HrHome