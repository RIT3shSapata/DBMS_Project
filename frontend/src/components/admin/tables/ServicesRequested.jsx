import React, { useEffect, useState } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import axios from '../../../axios';
export default function ServicesRequested() {
  const [servicetable,setservicetable] = useState([]);
  useEffect(() => {
    const servicedata=async()=>{
      try{
        const response = await axios.get('/admin/servicerequest_info');
        setservicetable(response.data);
        }
      catch(e){
        console.log(e)
      }
    }
    servicedata() 
  }, [])
    return (
        <div>
            <h1 className="text-2xl flex justify-center">Services Requested</h1>
      <TableContainer component={Paper} className='flex justify-center'>
      <Table sx={{ width: 1000,marginTop:2,marginBottom:2, border: '1px solid black'}} aria-label="simple table" className='flex justify-center'>
        <TableHead>
          <TableRow>
            <TableCell>ResidentUID</TableCell>
            <TableCell align="right">service time</TableCell>
            <TableCell align="right">flat</TableCell>
            <TableCell align="right">serviceID</TableCell>
            <TableCell align="right">servicename</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {servicetable.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.aadhar}
              </TableCell>
              <TableCell align="right">{row.servicetime}</TableCell>
              <TableCell align="right">{row.flatid}</TableCell>
              <TableCell align="right">{row.serviceid}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
