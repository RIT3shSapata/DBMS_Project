import { useState } from "react";
import axios from "../../../axios";

const New_resident=()=>{
    const [aadhar,setaadhar]=useState('');
    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const [dob,setdob]=useState('');
    const [phoneno,setphoneno]=useState('');
    const [petinfo,setpetinfo]=useState('no pet');
    const [flatid,setflatid]=useState('');
    const [nobhk,setnobhk]=useState(0);
    const [rent_owned,setrent_owned]=useState('rent');
    const [genders,setgenders]=useState('FF');
    const enterresident=async(e)=>{
        e.preventDefault();
        try{
            const resident={
                    aadhar:aadhar,
                    fname:fname,
                    lname:lname,
                    dob:dob,
                    phone:phoneno,
                    gender:genders,
                    petinfo:petinfo,
            }
            const flat={
                flatid:flatid,
	            nobhk:nobhk
            }
            const residentresidesin={
                "residentid":aadhar,
                "flatid":flatid,
                "rent_owned":rent_owned
            }
            const response = await axios.post('admin/resident',resident);
            const response2=await axios.post('admin/flat',flat);
            const response3=await axios.post('admin/residentresidesin',residentresidesin);
            console.log(response2.status);
            console.log(response.data);
            console.log(response3.status);
            setaadhar('');
            setfname('');
            setlname('');
            setdob('');
            setphoneno('');
            setgenders('F');
            setnobhk('');
            setpetinfo('no pet');
            setflatid('');
            setrent_owned('rent');
        }
        catch(error){
            console.log(error.message);
        }
    }
    return(
        
        <div className="flex justify-center box-border">
        <form class="w-full max-w-lg" onSubmit={enterresident}>
        <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        Aadhar
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        value={aadhar}
                        placeholder="12 DIGITS AADHAR NO"
                        onChange = {(e)=>setaadhar(e.target.value)}
                    />
                </div>
                <div class="w-full md:w-1/3 px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        value={fname}
                        placeholder="Doe"
                        onChange = {(e)=>setfname(e.target.value)}
                    />
                </div>
                <div class="w-full md:w-1/3 px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        value={lname}
                        placeholder="Doe"
                        onChange = {(e)=>setlname(e.target.value)}
                    />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city">
                        Date of Birth
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="date"
                        value={dob}
                        placeholder="Albuquerque"
                        onChange = {(e)=>setdob(e.target.value)}
                    />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Phone Number
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="phone"
                        value={phoneno}
                        placeholder="xxxxxxxxxx"
                        onChange = {(e)=>setphoneno(e.target.value)}
                    />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        FlatID 
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        value={flatid}
                        placeholder="varchar(10)"
                        onChange = {(e)=>setflatid(e.target.value)}
                    />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        No BHK 
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="number"
                        placeholder="2"
                        value={nobhk}
                        onChange = {(e)=>setnobhk(e.target.value)}
                    />
                </div>
                <div class="flex flex-wrap -mx-3 mb-6"></div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-state">
                        Rent/Owned
                    </label>
                    <div class="relative">
                        <select
                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state" value={rent_owned} onChange = {(e)=>setrent_owned(e.target.value)}>
                            <option>Rent</option>
                            <option>Own</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-state">
                        Pet Info
                    </label>
                    <div class="relative">
                        <select
                            value={petinfo} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state" onChange = {(e)=>setpetinfo(e.target.value)}>
                            <option>No pet</option>
                            <option>Cat</option>
                            <option>Dog</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-zip">
                        Gender
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        value={genders}
                        placeholder="" onChange = {(e)=>setgenders(e.target.value)}
                    />
                </div>
            </div>

            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add a new resident
            </button>
        </form>
    </div>
    )
}
export default New_resident;