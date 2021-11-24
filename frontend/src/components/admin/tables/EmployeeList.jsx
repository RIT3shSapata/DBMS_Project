import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
export default function EmployeeList() {
    function createDataEmployee(employeeID,Fname, LastName,phone,doj,shift,serviceID,salary) {
        return {employeeID,Fname, LastName,phone,doj,shift,serviceID,salary}
      }
      const rows_visitors = [
        createDataEmployee('1234567891','Jog','Amma','89999999999','date','day','123444444','30000')
      ];
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
          {rows_visitors.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.employeeID}
              </TableCell>
              <TableCell align="right">{row.Fname}</TableCell>
              <TableCell align="right">{row.LastName}</TableCell>
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