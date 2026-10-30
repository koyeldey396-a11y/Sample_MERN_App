function EmpHome() {

  let currentuser=JSON.parse(localStorage.getItem("currentuser"))
  //JSON.parse converts JSON data into string format and stores it in currentuser variable

  return (
    <div>
      <h1>Employee Home</h1>
        <p>Welcome {currentuser.name}!</p>
    </div>
    )
}

export default EmpHome