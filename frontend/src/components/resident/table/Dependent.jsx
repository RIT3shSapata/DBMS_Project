import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from '../../../axios';
export default function Dependent() {
      const [dependenttable,setdependenttable] = useState([]);
  useEffect(() => {
    const dependentdata=async()=>{
      try{
        const response = await axios.get('/resident/viewDependentInfo');
        setdependenttable(response.data);
        }
      catch(e){
        console.log(e)
      }
    }
    dependentdata() 
  }, [])
    return (
        <div className="mb-5">
            <h1 className="text-2xl flex justify-center">View your dependents</h1>
      <TableContainer component={Paper} className='flex justify-center md:justify-center'>
      <Table sx={{ width: 500,align: 'center',marginTop:5, border: '1px solid'}} aria-label="simple table" className='flex justify-center'>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dependenttable.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
