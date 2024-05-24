import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = (props) => {
  var navigate = useNavigate()
  var [inputs,setInputs] = useState(props.data)

  console.log("gfghjk",props.data)
  console.log("gfghesdrtfgyhujijk",props.method) 

  const inputHandler = (e) =>{
    const{name,value} =  e.target 
    setInputs((prevData) => ({...prevData, [name]:value}))
    console.log(inputs)
  }


  const addHandler = () =>{
     console.log("button clicked")
     if(props.method==="post"){
      axios.post("http://localhost:3005/add",inputs)
      .then((res)=>{
        console.log(res.data)
        alert(res.data)
        navigate('/view')
      })
      .catch((err)=> console.log(err))
    }
    if (props.method==="put"){
      axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
      alert("Data Update")
      navigate('/add');
      setTimeout(()=>{
        navigate('/view')
      },10);
    } 
  }
 




  return (
    <div>
        <Typography  variant='h3'>Add Employee From</Typography><br /><br />
        <TextField name='ename' label="Name" variant="outlined" value={inputs.ename} onChange={inputHandler} /><br /><br />
        <TextField name='eage' label="Age" variant="outlined" value={inputs.eage} onChange={inputHandler}/><br /><br />
        <TextField name='eposition' label="Position" variant="outlined" value={inputs.eposition} onChange={inputHandler}/><br /><br />
        <TextField name='esalary' label="Salary" variant="outlined"value={inputs.esalary} onChange={inputHandler} /><br /><br />
        <Button onClick={addHandler}>Submit</Button>

    </div>
      
    
  )
}

export default Add
