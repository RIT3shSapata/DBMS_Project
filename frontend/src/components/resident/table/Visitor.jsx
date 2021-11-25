import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from '../../../axios';
export default function Visitor() {
    const [visitortable, setvisitortable] = useState([]);
    useEffect(() => {
        const visitordata = async () => {
            try {
                const response = await axios.get(
                    '/resident/visitor/7876676215'
                );
                setvisitortable(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        visitordata();
    }, []);
    return (
        <div className="mb-5">
            <h1 className="text-2xl flex justify-center">
                Your visitors Information
            </h1>
            <TableContainer component={Paper} className="flex justify-center">
                <Table
                    sx={{
                        width: 900,
                        align: 'center',
                        marginTop: 5,
                        border: '1px solid',
                    }}
                    aria-label="simple table"
                    className="flex justify-center">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Purpose</TableCell>
                            <TableCell align="right">Time of Entry</TableCell>
                            <TableCell align="right">Time of Exit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visitortable.map((row) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {row.fname}
                                </TableCell>
                                <TableCell align="right">{row.fname}</TableCell>
                                <TableCell align="right">
                                    {row.phonenumber}
                                </TableCell>
                                <TableCell align="right">
                                    {row.purpose}
                                </TableCell>
                                <TableCell align="right">
                                    {row.time_of_entry}
                                </TableCell>
                                <TableCell align="right">
                                    {row.time_of_exit}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
