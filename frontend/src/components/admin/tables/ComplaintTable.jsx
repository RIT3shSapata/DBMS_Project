import React, { useEffect, useState } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import axios from '../../../axios';
export default function ComplaintTable() {
  const [complainttable,setcomplainttable] = useState([]);
  useEffect(() => {
    const getcomplaintsdata=async()=>{
      try{
        const response = await axios.get('/admin/complaint_info');
        console.log(response.data);
        setcomplainttable(response.data);
        }
      catch(e){
        console.log(e)
      }
    }
    getcomplaintsdata() 
  }, [])
    return (
        <div>
            <h1 className="text-2xl flex justify-center">Complaints Made By Residents</h1>
      <TableContainer component={Paper} className='flex justify-center'>
      <Table sx={{ width: 1000,marginTop:2,marginBottom:2, border: '1px solid black'}} aria-label="simple table" className='flex justify-center'>
        <TableHead>
          <TableRow>
            <TableCell>ResidentUID</TableCell>
            <TableCell align="right">ComplaintID</TableCell>
            <TableCell align="right">Complaint</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {complainttable.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.residentuid}
              </TableCell>
              <TableCell align="right">{row.complaintid}</TableCell>
              <TableCell align="right">{row.complain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
