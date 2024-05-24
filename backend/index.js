const express = require('express')
const employeeModel = require("./model")
const cores =require('cors')

//initialize
const app = new express()

//middelware|| parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cores())

//api
app.post('/add',async(req,res)=>{
    var result =await new employeeModel(req.body)
result.save();
res.send("data added")

})

app.get('/view',async(req,res)=>{
    const data =await employeeModel.find()
    res.json(data)
    console.log(data) 

})

app.delete('/remove/:id',async(req,res)=>{
   console.log(req.params);
   let id = req.params.id
   await employeeModel.findByIdAndDelete(id)
res.send("Delete")
})

app.put('/edit/:id',async(req,res)=>{
    
    let id = req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
 res.send("Update")
 })
 



//post
app.listen(3005,()=>{
    console.log("port 3005 is running")
})

