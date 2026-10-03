from fastapi import FastAPI
app = FastAPI()

#localhost:8000/getstudents
@app.get("/getstudents")
def getstudents():
    return "get students method called successfully "

#localhost:8000/docs
@app.post("/addstudents")
def addstudents():
    return "add students method called successfully "

#localhost:8000/updatestudents
@app.put("/updatestudents")
def updatestudents():
    return "update students method called successfully "

#localhost:8000/deletestudents
@app.delete("/deletestudents")
def deletestudents():
    return "delete students method called successfully "

#localhost:8000/getstudents/1
@app.get("/getstudents/{userid}")
def getstudentsbyid(userid:int):
    return {"user_id": userid, "message": "get students by id method called successfully "}

#localhost:8000/getdeptdetails?dept=cs&mark=50
@app.get("/getdeptdetails")
def getdeptdetails(dept:str, mark:int):
    return {"dept": dept, "mark": mark, "message": "get dept details method called successfully "}