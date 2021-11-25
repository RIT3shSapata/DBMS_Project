import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from '../../../axios';
import {useSelector} from 'react-redux'

export default function Dependent() {
  const {user} = useSelector((state)=>state.auth)
      const [dependenttable,setdependenttable] = useState([]);
      const [dependentcount,setdependentcount] = useState(0);
  useEffect(() => {
    const dependentdata=async()=>{
      try{
        //const params = new URLSearchParams([['id', '763676231429']]);
        const response = await axios.get(`/resident/dependent/${user.username}`);
        const response2 = await axios.get(`/resident/dependentcount/${user.username}`);
        setdependenttable(response.data);
        console.log(response2.data);
        setdependentcount(response2.data[0].count);
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
            <h1 className="text-2xl flex justify-center">Number of dependents : {dependentcount}</h1>
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
                {row.fname}
              </TableCell>
              <TableCell align="right">{row.lname}</TableCell>
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
