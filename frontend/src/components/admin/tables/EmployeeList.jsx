import React, { useEffect, useState } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import axios from '../../../axios';
export default function EmployeeList() {
  const [employeelist,setemployeelist] = useState([]);
  useEffect(() => {
    const getemployeedata=async()=>{
      try{
        const response = await axios.get('/admin/employee_info');
        setemployeelist(response.data);
        }
      catch(e){
        console.log(e)
      }
    }
    getemployeedata() 
  }, [])
    return (
        <div>
            <h1 className="text-2xl flex justify-center">Employee Information</h1>
      <TableContainer component={Paper} className='flex justify-center'>
      <Table sx={{ width: 1000,marginTop:2,marginBottom:2, border: '1px solid black'}} aria-label="simple table" className='flex justify-center'>
        <TableHead>
          <TableRow>
            <TableCell>employeeID</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Date Of Joining</TableCell>
            <TableCell align="right">Shift</TableCell>
            <TableCell align="right">serviceID</TableCell>
            <TableCell align="right">salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeelist.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.employeeid}
              </TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.doj}</TableCell>
              <TableCell align="right">{row.shift}</TableCell>
              <TableCell align="right">{row.serviceID}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
