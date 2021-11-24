import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Visitor() {
    function createDataVisitors(first_name,last_name, phone, purpose,time_of_entry,time_of_exit) {
        return { first_name, last_name, phone, purpose, time_of_entry, time_of_exit};
      }
    
      const rows_visitors = [
        createDataVisitors('Sahana','Ramesh',9999999999,'simply','time','time')
      ];
      
    return (
        <div className="mb-5">
            <h1 className="text-2xl flex justify-center">Your visitors Information</h1>
      <TableContainer component={Paper} className='flex justify-center'>
      <Table sx={{ width: 500,align: 'center',marginTop:5, border: '1px solid'}} aria-label="simple table" className='flex justify-center'>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Purpose</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Time of Entry</TableCell>
            <TableCell align="right">Time of Exit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows_visitors.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.purpose}</TableCell>
              <TableCell align="right">{row.time_of_entry}</TableCell>
              <TableCell align="right">{row.time_of_exit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
