import SignIn from "../components/loginpage";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(first_name,last_name, phone, gender) {
    return { first_name, last_name, phone, gender};
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37,)
  ];
  
const Resident = () => {
    return (
        <div>
            <h1 className="text-2xl flex justify-center">Resident Page</h1>
            <SignIn></SignIn>
            <h1 className="text-2xl flex justify-center">Hello first_name last_name</h1>
            <h1 className="flex justify-center">phone number</h1>
            <h1 className="text-2xl flex justify-center">View your dependents</h1>
            <TableContainer component={Paper} className='flex justify-center'>
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
          {rows.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Resident;
