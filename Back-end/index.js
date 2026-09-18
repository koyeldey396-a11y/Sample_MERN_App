let express=require("express");
let app=express();
let hrroutes=require("./routes/hr_routes");

//localhost:3000/api/hr/viewemployee 
app.use("/api/hr",hrroutes);

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})