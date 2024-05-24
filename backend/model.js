const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://josephvincenp2804:12345@cluster0.3ifveg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch(()=>{})

let mongoSchema=mongoose.Schema

const EmployeeSchema = new mongoSchema({
         ename:String,
         eage:Number,
         eposition:String,
         esalary:Number
})
var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports=employeeModel