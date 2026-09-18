let express=require("express");
let router=express.Router();

router.get("/viewemp",(req,res)=>{
    res.send("view employee page called");
})

router.post("/assigntask",(req,res)=>{
    res.send("assign task page called");
})

router.get("/viewtask",(req,res)=>{
    res.send("view task page called");
})

router.delete("/deletemp",(req,res)=>{
    res.send("delete employee page called");
})

module.exports=router;