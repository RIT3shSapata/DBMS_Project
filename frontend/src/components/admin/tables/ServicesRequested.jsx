import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
export default function ServicesRequested() {
    function createDataServiceReq(ResidentUID,serviceTime, FlatID,serviceID,servicename) {
        return {ResidentUID,serviceTime, FlatID,serviceID,servicename}
      }
      const rows_visitors = [
        createDataServiceReq('1234567891','89999999999','123444444','123444444','servicename')
      ];
    return (
        <div>
            <h1 className="text-2xl flex justify-center">Services Requested</h1>
      <TableContainer component={Paper} className='flex justify-center'>
      <Table sx={{ width: 1000,marginTop:2,marginBottom:2, border: '1px solid black'}} aria-label="simple table" className='flex justify-center'>
        <TableHead>
          <TableRow>
            <TableCell>ResidentUID</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">serviceID</TableCell>
            <TableCell align="right">servicename</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows_visitors.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.ResidentUID}
              </TableCell>
              <TableCell align="right">{row.serviceTime}</TableCell>
              <TableCell align="right">{row.FlatID}</TableCell>
              <TableCell align="right">{row.serviceID}</TableCell>
              <TableCell align="right">{row.servicename}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
