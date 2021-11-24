import SignIn from "../components/loginpage";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import axios from '../axios'

function createDataDependents(first_name,last_name, phone, gender) {
    return { first_name, last_name, phone, gender};
  }
  function createDataVisitors(first_name,last_name, phone, purpose,time_of_entry,time_of_exit) {
    return { first_name, last_name, phone, purpose, time_of_entry, time_of_exit};
  }
  
  
  const rows_dependents = [
    createDataDependents('Frozen yoghurt', 159, 6.0, 24),
    createDataDependents('Ice cream sandwich', 237, 9.0, 37,)
  ];
  const rows_visitors = [
    createDataVisitors('Sahana','Ramesh',9999999999,'simply','time','time')
  ];
  
  
const Resident = () => {
  const [Service, setService] = React.useState({});
  const [services, setServices] = React.useState([]);

  useEffect(() => {
    const getServices = async()=>{
      try{

    const response = await axios.get('resident/viewservices/763676231429');
    setServices(response.data);
      }catch(e){
        console.log(e)
      }
    }
    getServices()
  }, [])

  const availService = async(e)=>{
    e.preventDefault();
    try{
      const serviceObj={
      serviceID:Service.serviceid,
      // residentUID:763676231429
      residentUID:542155761651
      };
      const response=await axios.post('resident/servicereq', serviceObj);
      console.log(response.status);
    }catch(error){
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setService(event.target.value);
  };
    return (
        <div>
            <h1 className="text-2xl flex justify-center">Resident Page</h1>
            <SignIn></SignIn>
            <h1 className="text-2xl flex justify-center">Hello first_name last_name</h1>
            <h1 className="flex justify-center">phone number</h1>
            <h1 className="text-2xl flex justify-center">View your dependents</h1>
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
          {rows_dependents.map((row) => (
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
    <h1 className="text-2xl flex justify-center">Avail A Service</h1>
    <div className="flex justify-center">
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120,align: 'center'}} className="flex justify-center">
        <InputLabel id="demo-simple-select-standard-label" className="flex justify-center">Service</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Service}
          onChange={handleChange}
          label="Service" className="flex justify-center"
        >
        {services.map(service=>{
          return (
            <MenuItem value={service}>
              {service.type}
            </MenuItem>
          )
        })}
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {/* <MenuItem value={10}><span className="text-gray-400">ServiceID:1235</span> &nbsp; Service Name &nbsp; Service Cost</MenuItem> */}
        </Select>
        <br></br>
        <button 
        onClick={availService}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Avail the service
        </button>
      </FormControl>
    </div>
    <div className="flex justify-center">
        <form className="w-full max-w-lg">
        <div className=" -mx-3 mb-2">
                <div className="w-full">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Enter your complaint
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                    />
                </div>
            <br></br>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                File a complaint
            </button>
          </div>
        </form>
    </div>
    </div>
    );
};

export default Resident;
