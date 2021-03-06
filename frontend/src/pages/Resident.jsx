import SignIn from "../components/loginpage";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import axios from '../axios'
import Dependent from "../components/resident/table/Dependent";
import Visitor from "../components/resident/table/Visitor";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux'

  
const Resident = () => {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  
  const [Service, setService] = useState({});
  const [services, setServices] = useState([]);
  const [viewVisitors, setViewVisitors] = useState(false);
  const [dependentinfo, setDependentinfo] = useState(false);
  const [serviceoption, setServiceOption] = useState(false);
  const [complaint, setComplaint] = useState(false);
  const [givecomplaint, setgiveComplaint] = useState('');

  const {user} = useSelector((state)=>state.auth)
  const entercomplaint=async(e)=>{
    e.preventDefault();
    try {
      const complaint={
        residentid:user.username,
        complain:givecomplaint
      }
      const response = await axios.post('resident/complaint',complaint);
      setgiveComplaint('')
      console.log(response)
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    const getServices = async()=>{
      try{

    const response = await axios.get(`resident/viewservices/${user.username}`);
    setServices(response.data);
      }catch(e){
        console.log(e)
      }
    }

    const getResidentDetails = async()=>{
      try{
        const response = await axios.get(`resident/${user.username}`);
        console.log(response.data);
        setFname(response.data.fname)
        setLname(response.data.lname)
        setPhone(response.data.phone)
      }catch(e){
        console.log(e)
      }
    }
    if(user){
    getServices()
    getResidentDetails();
    }
  }, [user])

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
            {/* <SignIn></SignIn> */}
            <h1 className="text-2xl flex justify-center">Hello {fname} {lname}</h1>
            <h1 className="flex justify-center mb-8">{phone}</h1>
            <Stack spacing={2} direction="row" className='justify-around m-5'>
                <Button variant="outlined" onClick={() => setDependentinfo(!dependentinfo)}>View Dependents Information</Button>
                <Button variant="outlined" onClick={() => setViewVisitors(!viewVisitors)}>View Visitor Information</Button>
                <Button variant="outlined" onClick={() => setServiceOption(!serviceoption)}>Avail Service Requests</Button>
                <Button variant="outlined" onClick={() => setComplaint(!complaint)}>Enter Complaints </Button>
            </Stack>
            <div>{dependentinfo?<Dependent></Dependent>:<div></div>}</div>
            <div>{viewVisitors?<Visitor></Visitor>:<div></div>}</div>
            <div>{serviceoption?<div className='m-5'><h1 className="text-2xl flex justify-center">Avail A Service</h1>
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
        </Select>
        <br></br>
        <button 
        onClick={availService}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Avail the service
        </button>
      </FormControl>
    </div></div>:<div></div>}</div>
    <div>{complaint?
    <div>
    <h1 className="text-2xl flex justify-center">File a complaint</h1>
    <div className="flex justify-center mt-5">
        <form className="w-full max-w-lg" onSubmit={entercomplaint}>
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
                        value={givecomplaint}
                        onChange = {(e)=>setgiveComplaint(e.target.value)}
                    />
                </div>
            <br></br>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                File a complaint
            </button>
          </div>
        </form>
    </div></div>:<div></div>}</div>
    </div>
    );
};

export default Resident;
