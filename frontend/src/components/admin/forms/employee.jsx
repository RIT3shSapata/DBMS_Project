import { useState } from "react";
import axios from "../../../axios";

const Employee=({toggleForm})=>{
    const [fname,setfname]=useState('');
        const [lname,setlname]=useState('');
        const [doj,setdoj]=useState('');
        const [phoneno,setphoneno]=useState('');
        const [shift,setshift]=useState('day');
        const [service,setservice]=useState('day');
        const [salary,setsalary]=useState('');
        const [genders,setgenders]=useState('F')
        const enteremployee=async(e)=>{
            e.preventDefault();
            try{
                const employee={
                        fname:fname,
                        lname:lname,
                        phone:phoneno,
                        doj:doj,
                        gender:genders,
                        shift:shift,
                        serviceid:service,
                        salary:salary,
                }
                const response = await axios.post('admin/employee',employee);
                console.log(response.status);
                setfname('');
                setlname('');
                setdoj('');
                setphoneno('');
                setshift('day');
                setsalary('');
                setservice('');
                toggleForm(false);
            }
            catch(error){
                console.log(error.message);
            }
        }
    return (
        <div className="flex justify-center box-border">
                        <form class="w-full max-w-lg mb-6" onSubmit={enteremployee}>
                            <div class="flex flex-wrap -mx-3 mb-6"></div>
                            <div class="flex flex-wrap -mx-3 mb-2">
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
                                        placeholder="J"
                                        value={fname}
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
                                        placeholder="Doe"
                                        value={lname}
                        onChange = {(e)=>setlname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-city">
                                        Date of Joining
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-city"
                                        type="date"
                                        value={doj}
                        onChange = {(e)=>setdoj(e.target.value)}
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
                                        placeholder="xxxxxxxxxx"
                                        value={phoneno}
                        onChange = {(e)=>setphoneno(e.target.value)}
                                    />
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-zip">
                                        Shift
                                    </label>
                                    <div class="relative">
                                        <select
                                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-state" value={shift}
                        onChange = {(e)=>setshift(e.target.value)}>
                                            <option>Day</option>
                                            <option>Night</option>
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
                                    <div class="relative">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-zip">
                                            gender
                                        </label>
                                        <select
                                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-state" value={genders}
                        onChange = {(e)=>setgenders(e.target.value)}>
                                            <option>M</option>
                                            <option>F</option>
                                            <option>O</option>
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
                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name">
                                        serviceID
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="10 varchar"
                                        value={service}
                        onChange = {(e)=>setservice(e.target.value)}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-last-name">
                                        salary
                                    </label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="number"
                                        placeholder="Doe"
                                        value={salary}
                        onChange = {(e)=>setsalary(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Add an employee
                            </button>
                        </form>
                    </div>
    )
}
export default Employee;