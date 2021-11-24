import React, { useEffect, useState } from 'react'

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import axios from '../../../axios';
export default function ViewResidents() {
  
  const [residenttable,setResidentTable] = useState([]);
  var rows_visitors = []
  useEffect(() => {
    const getresidentdata=async()=>{
      try{
        const response = await axios.get('/admin/residentinfo');
        setResidentTable(response.data);
    //     //console.log(residenttable)
    //     for (let index = 0; index < residenttable.length; index++) {
    // const element = residenttable[index];
    // row_visitors.push(createDataVisitors(element.residentuid,element.flatid,element.rent_owned,element.count));
        }
      catch(e){
        console.log(e)
      }
    }
    getresidentdata() 
  }, [])
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
          {residenttable.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.residentuid}
              </TableCell>
              <TableCell align="right">{row.flatid}</TableCell>
              <TableCell align="right">{row.rent_owned}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
