import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

 const View= () => {
  var [users,SetUsers] = useState([])
 var[update,setUpdate]=useState(false)
 var[singlevalue,setsingleValue]=useState([])

 useEffect(()=>{
  axios.get("http://localhost:3005/view")
  .then((res)=>{
    console.log(res.data)
    SetUsers(res.data)
  })
 },[])

 const deleteValue =(id)=>{
  console.log(id)
  axios.delete("http://localhost:3005/remove/"+id)
  .then((res)=>{
    alert(res.data)
    window.location.reload(true)
  }).catch((err)=>console.log(err))
 }
const updateValue=(val)=>{
  console.log("Update")
  setUpdate(true)
  setsingleValue(val)
}
 
   
      var finalJSX=<TableContainer >
      <Table>
        <TableHead>
            <TableRow>
               <TableCell align="left">Name</TableCell>
               <TableCell align="right">Age</TableCell>
               <TableCell align="left">Position</TableCell>
               <TableCell align="right">Salary</TableCell>
           </TableRow>
        </TableHead>
          <TableBody>
          {users.map((val,i)=>{
            return (
            <TableRow>
            <TableCell align="left">{val.ename}</TableCell>
            <TableCell align="right">{val.eage}</TableCell>
            <TableCell align="left">{val.eposition}</TableCell>
            <TableCell align="right">{val.esalary}</TableCell>
            <TableCell>
             <Button color="primary" variant="contained" onClick={()=>updateValue(val)}>Update</Button>
            </TableCell>
            <TableCell>
             <Button color="primary" variant="contained" onClick={()=>deleteValue(val._id)}>Delete</Button>
            </TableCell>
        </TableRow>)
        })}

          </TableBody>
          </Table>
          </TableContainer>
      
   
 

if(update) finalJSX = <Add data={singlevalue} method ='put'/>
 return finalJSX
      }
export default View
