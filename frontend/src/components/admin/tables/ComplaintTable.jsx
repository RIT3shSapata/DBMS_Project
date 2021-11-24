import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
export default function ComplaintTable() {
    function createdataComplaintTable(ResidentUID,ComplaintID, Complaint,serviceID,servicename) {
        return {ResidentUID,ComplaintID, Complaint,serviceID,servicename}
      }
      const rows_visitors = [
        createdataComplaintTable('1234567891','89999999999','DBMS project is taking too longg!')
      ];
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
          {rows_visitors.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.ResidentUID}
              </TableCell>
              <TableCell align="right">{row.ComplaintID}</TableCell>
              <TableCell align="right">{row.Complaint}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
