import React from 'react'

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
export default function ViewResidents() {
    
  function createDataVisitors(residentuid,flatuid, rent_owned,visitor_count) {
    return { residentuid,flatuid, rent_owned,visitor_count };
  }
  const rows_visitors = [
    createDataVisitors('12345','12345','rent','0')
  ];
    return (
    <div>
    <h1 className="text-2xl flex justify-center">Residents and their flat information</h1>
      <TableContainer component={Paper} className='flex justify-center'>
      <Table sx={{ width: 500,marginTop:2,marginBottom:2, border: '1px solid black'}} aria-label="simple table" className='flex justify-center'>
        <TableHead>
          <TableRow>
            <TableCell>ResidentUID</TableCell>
            <TableCell align="right">FlatUID</TableCell>
            <TableCell align="right">Rent/Owned</TableCell>
            <TableCell align="right">No of Visitors</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows_visitors.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.residentuid}
              </TableCell>
              <TableCell align="right">{row.flatuid}</TableCell>
              <TableCell align="right">{row.rent_owned}</TableCell>
              <TableCell align="right">{row.visitor_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
